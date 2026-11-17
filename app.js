(() => {
  "use strict";

  const QUESTIONS_PER_SESSION = 5;
  const OPTION_LETTERS = ["A", "B", "C", "D"];

  const LABEL_CLASSES = {
    Quran: "label-quran",
    Hadith: "label-hadith",
    Tafsir: "label-tafsir",
    Reflection: "label-reflection"
  };

  const surahs = Array.isArray(window.HUURS_QUIZ_DATA) ? window.HUURS_QUIZ_DATA : [];

  const state = {
    activeSurah: null,
    sessionQuestions: [],
    currentIndex: 0,
    score: 0,
    incorrectAnswers: [],
    answeredCurrent: false
  };

  // DOM elements
  const screenHome = document.getElementById("screen-home");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResults = document.getElementById("screen-results");

  const surahSearch = document.getElementById("surah-search");
  const surahGrid = document.getElementById("surah-grid");
  const surahEmpty = document.getElementById("surah-empty");

  const btnBackHome = document.getElementById("btn-back-home");
  const quizSurahTitle = document.getElementById("quiz-surah-title");
  const quizProgressText = document.getElementById("quiz-progress-text");
  const quizProgressBar = document.getElementById("quiz-progress-bar");

  const questionLabel = document.getElementById("question-label");
  const questionSourceRef = document.getElementById("question-source-ref");
  const questionText = document.getElementById("question-text");
  const optionsList = document.getElementById("options-list");
  const feedbackBox = document.getElementById("feedback-box");
  const feedbackStatus = document.getElementById("feedback-status");
  const feedbackExplanation = document.getElementById("feedback-explanation");
  const btnNext = document.getElementById("btn-next");

  const resultsSurahKicker = document.getElementById("results-surah-kicker");
  const scoreValue = document.getElementById("score-value");
  const scorePercent = document.getElementById("score-percent");
  const resultsMessage = document.getElementById("results-message");
  const btnRetake = document.getElementById("btn-retake");
  const btnChooseAnother = document.getElementById("btn-choose-another");
  const reviewSection = document.getElementById("review-section");
  const reviewList = document.getElementById("review-list");
  const perfectSection = document.getElementById("perfect-section");

  function shuffleArray(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showScreen(target) {
    screenHome.hidden = target !== screenHome;
    screenQuiz.hidden = target !== screenQuiz;
    screenResults.hidden = target !== screenResults;
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function setLabelBadge(el, label) {
    const safeLabel = LABEL_CLASSES[label] ? label : "Tafsir";
    el.textContent = safeLabel;
    el.className = `label-pill ${LABEL_CLASSES[safeLabel]}`;
  }

  function renderSurahGrid(filterText = "") {
    const query = filterText.trim().toLowerCase();
    const filtered = surahs.filter((surah) => {
      if (!query) return true;
      return (
        String(surah.number).includes(query) ||
        surah.name.toLowerCase().includes(query) ||
        (surah.theme && surah.theme.toLowerCase().includes(query))
      );
    });

    surahGrid.replaceChildren();
    surahEmpty.hidden = filtered.length > 0;

    filtered.forEach((surah) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "surah-card";
      card.setAttribute("role", "listitem");

      const top = document.createElement("div");
      top.className = "surah-card-top";

      const num = document.createElement("span");
      num.className = "surah-num";
      num.textContent = `Surah ${surah.number}`;

      const arabic = document.createElement("span");
      arabic.className = "surah-arabic";
      arabic.lang = "ar";
      arabic.dir = "rtl";
      arabic.textContent = surah.arabicName || "";

      top.append(num, arabic);

      const name = document.createElement("h3");
      name.className = "surah-name";
      name.textContent = surah.name;

      const theme = document.createElement("p");
      theme.className = "surah-theme";
      theme.textContent = surah.theme || "";

      const meta = document.createElement("div");
      meta.className = "surah-meta";

      const count = document.createElement("span");
      const drawCount = Math.min(QUESTIONS_PER_SESSION, surah.questions.length);
      count.textContent = `${drawCount} random questions`;

      const cta = document.createElement("span");
      cta.className = "surah-cta";
      cta.textContent = "Start →";

      meta.append(count, cta);
      card.append(top, name, theme, meta);

      card.addEventListener("click", () => startSurahQuiz(surah.number));
      surahGrid.appendChild(card);
    });
  }

  function prepareSessionQuestion(rawQuestion) {
    const taggedOptions = rawQuestion.options.map((text, index) => ({
      text,
      isCorrect: index === rawQuestion.correctIndex
    }));
    const shuffledOptions = shuffleArray(taggedOptions);
    const correctIndex = shuffledOptions.findIndex((opt) => opt.isCorrect);

    return {
      ...rawQuestion,
      shuffledOptions: shuffledOptions.map((opt) => opt.text),
      shuffledCorrectIndex: correctIndex
    };
  }

  function startSurahQuiz(surahNumber) {
    const surah = surahs.find((s) => s.number === Number(surahNumber));
    if (!surah || !Array.isArray(surah.questions) || surah.questions.length === 0) {
      return;
    }

    const drawn = shuffleArray(surah.questions)
      .slice(0, QUESTIONS_PER_SESSION)
      .map(prepareSessionQuestion);

    state.activeSurah = surah;
    state.sessionQuestions = drawn;
    state.currentIndex = 0;
    state.score = 0;
    state.incorrectAnswers = [];
    state.answeredCurrent = false;

    updateUrlSurah(surah.number);
    showScreen(screenQuiz);
    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    const total = state.sessionQuestions.length;
    const current = state.sessionQuestions[state.currentIndex];
    state.answeredCurrent = false;

    quizSurahTitle.textContent = `Surah ${state.activeSurah.number}: ${state.activeSurah.name}`;
    quizProgressText.textContent = `Question ${state.currentIndex + 1} of ${total}`;
    quizProgressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

    setLabelBadge(questionLabel, current.label);
    questionSourceRef.textContent = current.sourceRef || "";
    questionText.textContent = current.prompt;

    feedbackBox.hidden = true;
    feedbackBox.className = "feedback-box";
    btnNext.hidden = true;
    btnNext.textContent =
      state.currentIndex === total - 1 ? "View Results →" : "Next Question →";

    optionsList.replaceChildren();
    current.shuffledOptions.forEach((optionText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = OPTION_LETTERS[idx] || String(idx + 1);

      const textSpan = document.createElement("span");
      textSpan.textContent = optionText;

      btn.append(letter, textSpan);
      btn.addEventListener("click", () => handleAnswer(idx));
      optionsList.appendChild(btn);
    });
  }

  function handleAnswer(selectedIndex) {
    if (state.answeredCurrent) return;
    state.answeredCurrent = true;

    const current = state.sessionQuestions[state.currentIndex];
    const isCorrect = selectedIndex === current.shuffledCorrectIndex;
    const buttons = optionsList.querySelectorAll(".option-btn");

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === current.shuffledCorrectIndex) {
        btn.classList.add("is-correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("is-incorrect");
      } else {
        btn.classList.add("is-dimmed");
      }
    });

    if (isCorrect) {
      state.score += 1;
      feedbackBox.className = "feedback-box is-correct";
      feedbackStatus.textContent = "Correct — Well understood.";
    } else {
      state.incorrectAnswers.push({
        label: current.label,
        sourceRef: current.sourceRef,
        prompt: current.prompt,
        chosenAnswer: current.shuffledOptions[selectedIndex],
        correctAnswer: current.shuffledOptions[current.shuffledCorrectIndex],
        explanation: current.explanation
      });
      feedbackBox.className = "feedback-box is-incorrect";
      feedbackStatus.textContent = "Worth revisiting.";
    }

    feedbackExplanation.textContent = current.explanation;
    feedbackBox.hidden = false;
    btnNext.hidden = false;
  }

  function renderResults() {
    const total = state.sessionQuestions.length;
    const percent = Math.round((state.score / total) * 100);

    resultsSurahKicker.textContent = `Surah ${state.activeSurah.number} • ${state.activeSurah.name}`;
    scoreValue.textContent = `${state.score} / ${total}`;
    scorePercent.textContent = `${percent}%`;

    if (state.score === total) {
      resultsMessage.textContent =
        "Clear comprehension across all five questions. Take a moment to reflect on how these meanings connect to your daily life.";
    } else if (state.score >= Math.ceil(total * 0.6)) {
      resultsMessage.textContent =
        "A solid grasp of the Surah's core themes. Review the missed points below and return to the Atlas plates for deeper clarity.";
    } else {
      resultsMessage.textContent =
        "Every review strengthens understanding. Revisit the missed points below in your Atlas and try another round whenever you are ready.";
    }

    reviewList.replaceChildren();
    if (state.incorrectAnswers.length > 0) {
      reviewSection.hidden = false;
      perfectSection.hidden = true;

      state.incorrectAnswers.forEach((item) => {
        const card = document.createElement("article");
        card.className = "review-item";

        const header = document.createElement("div");
        header.className = "review-item-header";

        const badge = document.createElement("span");
        setLabelBadge(badge, item.label);

        const ref = document.createElement("span");
        ref.className = "source-ref";
        ref.textContent = item.sourceRef || "";

        header.append(badge, ref);

        const q = document.createElement("h4");
        q.className = "review-question";
        q.textContent = item.prompt;

        const answers = document.createElement("div");
        answers.className = "review-answers";

        const yours = document.createElement("div");
        yours.className = "review-yours";
        yours.innerHTML = "<strong>Your answer:</strong> ";
        yours.appendChild(document.createTextNode(item.chosenAnswer));

        const correct = document.createElement("div");
        correct.className = "review-correct";
        correct.innerHTML = "<strong>Correct answer:</strong> ";
        correct.appendChild(document.createTextNode(item.correctAnswer));

        answers.append(yours, correct);

        const explanation = document.createElement("p");
        explanation.className = "review-explanation";
        explanation.textContent = item.explanation;

        card.append(header, q, answers, explanation);
        reviewList.appendChild(card);
      });
    } else {
      reviewSection.hidden = true;
      perfectSection.hidden = false;
    }

    showScreen(screenResults);
  }

  function goHome() {
    state.activeSurah = null;
    updateUrlSurah(null);
    showScreen(screenHome);
  }

  function updateUrlSurah(surahNumber) {
    if (!window.history || !window.history.replaceState) return;
    const url = new URL(window.location.href);
    if (surahNumber) {
      url.searchParams.set("surah", String(surahNumber));
    } else {
      url.searchParams.delete("surah");
    }
    window.history.replaceState(null, "", url.toString());
  }

  function getInitialSurahFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const paramSurah = params.get("surah");
    if (paramSurah) return Number(paramSurah);

    const hashMatch = window.location.hash.match(/^#surah-(\d+)$/i);
    if (hashMatch) return Number(hashMatch[1]);

    return null;
  }

  // Event listeners
  surahSearch.addEventListener("input", (event) => {
    renderSurahGrid(event.target.value);
  });

  btnBackHome.addEventListener("click", goHome);

  btnNext.addEventListener("click", () => {
    if (state.currentIndex + 1 < state.sessionQuestions.length) {
      state.currentIndex += 1;
      renderCurrentQuestion();
    } else {
      renderResults();
    }
  });

  btnRetake.addEventListener("click", () => {
    if (state.activeSurah) {
      startSurahQuiz(state.activeSurah.number);
    }
  });

  btnChooseAnother.addEventListener("click", goHome);

  // Initialize
  renderSurahGrid();
  const initialSurah = getInitialSurahFromUrl();
  if (initialSurah && surahs.some((s) => s.number === initialSurah)) {
    startSurahQuiz(initialSurah);
  } else {
    showScreen(screenHome);
  }
})();
