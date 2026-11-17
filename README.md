# The Visual Qur'an Atlas — Surah Comprehension Check (`web_quiz`)

A lightweight, static HTML/CSS/JavaScript companion quiz for readers of *The Visual Qur'an Atlas*.

## Features
- **Zero dependencies:** Plain HTML, CSS, and JavaScript — no React, build tools, or backend.
- **GitHub Pages ready:** Uses relative paths and works both on GitHub Pages and when opened directly via `index.html`.
- **5 randomized questions per Surah:** Shuffles the question pool and draws 5 questions per session, with shuffled answer choices.
- **4-label system:** Every question is tagged `Quran`, `Hadith`, `Tafsir`, or `Reflection`.
- **Immediate feedback & review:** Shows explanations right after each choice and summarizes missed questions at the end.
- **Deep-link support:** Open `?surah=1` or `#surah-103` directly from eBook links or QR codes.
- **Privacy-first:** No login, purchase verification, cookies, or personal-data collection.

## Structure
- `index.html` — Page layout and screens (Surah selector, quiz view, results/review).
- `styles.css` — Dark navy and gold styling matching the eBook.
- `data/surahs.js` — Surah metadata and question bank (`window.HUURS_QUIZ_DATA`).
- `app.js` — Quiz state, Fisher-Yates shuffling, immediate feedback, and review rendering.

## Scaling to More Surahs
Add new Surah entries or additional questions per Surah to `data/surahs.js`. When a Surah has more than 5 questions, each session randomly selects 5 from its pool.
