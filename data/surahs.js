/**
 * Surah Comprehension Check — Question Bank
 *
 * Scaling guide:
 * - Add more Surah objects to `window.HUURS_QUIZ_DATA`.
 * - Each Surah can hold 5 or more questions; the app shuffles the pool
 *   and selects 5 questions per session.
 * - Allowed `label` values: "Quran" | "Hadith" | "Tafsir" | "Reflection"
 */
window.HUURS_QUIZ_DATA = [
  {
    number: 1,
    name: "Al-Fatihah",
    arabicName: "الفاتحة",
    volume: "Volume 01",
    theme: "The Opening — Covenant, Praise & Straight Path",
    questions: [
      {
        id: "1-q1",
        label: "Hadith",
        sourceRef: "Sahih al-Bukhari 4474",
        prompt: "Which title did the Prophet (peace be upon him) give to Surah Al-Fatihah in Sahih al-Bukhari 4474?",
        options: [
          "Umm al-Qur'an (Mother of the Qur'an) and Sab' al-Mathani",
          "The Heart of the Qur'an",
          "One-Third of the Qur'an",
          "The Verse of the Throne"
        ],
        correctIndex: 0,
        explanation: "In Sahih al-Bukhari 4474, the Prophet (peace be upon him) designated Al-Fatihah as Umm al-Qur'an (Mother of the Qur'an), Sab' al-Mathani (the Seven Oft-Repeated), and Ash-Shifa' (the Sovereign Cure)."
      },
      {
        id: "1-q2",
        label: "Hadith",
        sourceRef: "Sahih Muslim 395",
        prompt: "In the Hadith Qudsi (Sahih Muslim 395), how does Allah describe the recitation of Al-Fatihah in prayer?",
        options: [
          "It is partitioned between Allah and His servant into two reciprocal halves",
          "It is recited silently only by the imam",
          "It replaces all other daily supplications",
          "It is divided into three equal thirds of legal rulings"
        ],
        correctIndex: 0,
        explanation: "Sahih Muslim 395 records the Divine Hadith Qudsi: 'I have partitioned the prayer between Myself and My servant into two reciprocal halves, and My servant shall have what he petitions.'"
      },
      {
        id: "1-q3",
        label: "Quran",
        sourceRef: "An-Nahl (16:98)",
        prompt: "What does the Qur'an instruct a believer to do before reciting the Qur'an (Isti'adhah)?",
        options: [
          "Seek refuge in Allah from Satan, the outcast and expelled",
          "Recite from memory without looking at the script",
          "Wait until sunset before opening the mushaf",
          "Repeat the opening verse seven times"
        ],
        correctIndex: 0,
        explanation: "Surah An-Nahl (16:98) states: 'When you recite the Qur'an, seek refuge in Allah from Satan, the outcast and expelled'—protecting contemplation from distraction."
      },
      {
        id: "1-q4",
        label: "Tafsir",
        sourceRef: "Classical Root: H-M-D & R-B-B",
        prompt: "In classical tafsir, how does 'Al-Hamd' differ from 'Shukr'?",
        options: [
          "Hamd unites intrinsic adoration with unconditional gratitude independent of circumstance, while Shukr responds to specific favors",
          "Shukr is only spoken in prayer, while Hamd is silent",
          "Hamd is reserved for blessings of wealth, while Shukr is for health",
          "There is no linguistic difference between the two roots"
        ],
        correctIndex: 0,
        explanation: "Classical lexicology distinguishes Hamd (unconditional praise and adoration of Allah's perfection in all states) from Shukr (reactive gratitude for specific favors)."
      },
      {
        id: "1-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ar-Rahman Ar-Rahim",
        prompt: "What is the key spiritual takeaway of placing 'Ar-Rahman Ar-Rahim' immediately after 'Rabbil-'Alamin'?",
        options: [
          "It balances cosmic majesty and awe with sheltering, maternal tenderness so the soul does not fall into despair",
          "It shows that mercy applies only to the final day and not daily life",
          "It limits divine care to physical sustenance alone",
          "It means accountability is no longer part of faith"
        ],
        correctIndex: 0,
        explanation: "After evoking cosmic Lordship (Rabbil-'Alamin), Allah immediately emphasizes Ar-Rahman Ar-Rahim—anchoring the seeker in hope and mercy rather than paralyzing fear."
      }
    ]
  },
  {
    number: 78,
    name: "An-Naba'",
    arabicName: "النبأ",
    volume: "Volume 05",
    theme: "The Great Tiding of Resurrection & Cosmic Proofs",
    questions: [
      {
        id: "78-q1",
        label: "Quran",
        sourceRef: "An-Naba' (78:1–3)",
        prompt: "What is 'An-Naba' al-'Adhim' (the Great News) over which the disbelievers of Makkah were disputing at the start of Surah An-Naba'?",
        options: [
          "The Resurrection and the Day of Judgment",
          "The outcome of a seasonal trade caravan",
          "The construction of a new sanctuary in Ta'if",
          "The genealogy of the tribes of Arabia"
        ],
        correctIndex: 0,
        explanation: "Surah An-Naba' (78:1–3) opens by confronting the skeptics' dispute over 'the great news'—the certainty of Resurrection and final accountability."
      },
      {
        id: "78-q2",
        label: "Quran",
        sourceRef: "An-Naba' (78:6–7)",
        prompt: "In Surah An-Naba', how does Allah describe the earth and the mountains as signs of His creative power?",
        options: [
          "The earth as a resting place (mihad) and the mountains as stabilizing pegs (awtad)",
          "The earth as an unmoving disc and the mountains as clouds",
          "The earth as a temporary bridge and the mountains as mirrors",
          "The earth as an ocean floor and the mountains as floating islands"
        ],
        correctIndex: 0,
        explanation: "Verses 78:6–7 ask: 'Have We not made the earth a resting place and the mountains as pegs?'—highlighting how deep mountain roots stabilize the earth's crust."
      },
      {
        id: "78-q3",
        label: "Quran",
        sourceRef: "An-Naba' (78:14–16)",
        prompt: "What does Allah bring forth by sending pouring rain from the rainclouds in verses 14–16?",
        options: [
          "Grain, vegetation, and lush gardens of entwined growth",
          "Precious metals and gemstones from desert cliffs",
          "Frozen glaciers that remain barren all year",
          "Saltwater springs unfit for cultivation"
        ],
        correctIndex: 0,
        explanation: "Allah sends down pouring water from rainclouds to bring forth grain, vegetation, and gardens of dense growth—demonstrating His power to revive dead earth just as He revives the dead."
      },
      {
        id: "78-q4",
        label: "Tafsir",
        sourceRef: "Ibn 'Umar & Abu Hurayrah (RA) — Ayah 78:40",
        prompt: "According to Ibn 'Umar and Abu Hurayrah (RA), why will the disbeliever cry 'Ya laytani kuntu turaba' (Oh, I wish I were dust!) on the Day of Judgment?",
        options: [
          "Because after Allah settles justice among animals and commands them to become dust, the disbeliever envies their escape from Hellfire",
          "Because dust is used to build homes in Paradise",
          "Because the earth will not be resurrected at all",
          "Because angels are created from soil rather than light"
        ],
        correctIndex: 0,
        explanation: "In classical tafsir, once justice is settled even between horned and hornless animals, Allah commands them: 'Kuni turaba (Become dust!)'—leading the disbeliever to wish for the same fate."
      },
      {
        id: "78-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 78:7 & 78:16",
        prompt: "What spiritual parallel does the Atlas draw between rain reviving dead earth and revelation?",
        options: [
          "Just as pouring rain transforms barren soil into lush orchards, divine guidance revives a sleeping heart",
          "Rain only benefits farmers, whereas revelation is only for scholars",
          "Hardship should be avoided like desert storms",
          "Spiritual growth happens automatically without seeking guidance"
        ],
        correctIndex: 0,
        explanation: "The physical revival of dead earth by rain mirrors the spiritual revival of a heedless heart when it opens to the Qur'an."
      }
    ]
  },
  {
    number: 79,
    name: "An-Nazi'at",
    arabicName: "النازعات",
    volume: "Volume 05",
    theme: "The Extraction of Souls, Overthrow of Tyranny & The Great Calamity",
    questions: [
      {
        id: "79-q1",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas (RA) — Ayah 79:1–2",
        prompt: "According to Ibn 'Abbas (RA), what is the contrast between 'An-Nazi'ati gharqa' and 'An-Nashitati nashta' at the start of Surah An-Nazi'at?",
        options: [
          "Angels violently tearing out the souls of wicked deniers versus angels gently drawing out the souls of believers",
          "Desert winds versus ocean waves",
          "Daytime prayers versus nighttime vigils",
          "Migrating birds versus grazing livestock"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) explained that An-Nazi'at are the angels who extract the disbeliever's soul with severe agony, while An-Nashitat gently release the believer's soul."
      },
      {
        id: "79-q2",
        label: "Quran",
        sourceRef: "An-Nazi'at (79:24)",
        prompt: "What arrogant claim did Pharaoh proclaim to his people before Allah seized him with exemplary punishment?",
        options: [
          "'I am your supreme lord' (Ana Rabbukumul-A'la)",
          "'I am merely a humble servant of the unseen'",
          "'Moses is my equal partner in rule'",
          "'My kingdom will end tomorrow'"
        ],
        correctIndex: 0,
        explanation: "Surah An-Nazi'at (79:24) records Pharaoh's supreme arrogance—'I am your most exalted lord'—immediately followed by his sudden destruction as a warning."
      },
      {
        id: "79-q3",
        label: "Quran",
        sourceRef: "An-Nazi'at (79:27–33)",
        prompt: "When skeptics doubted resurrection, what cosmic comparison did Allah ask in verse 79:27?",
        options: [
          "'Are you a more difficult creation or is the heaven? He constructed it'",
          "'Can any mountain speak without wind?'",
          "'Is silver heavier than gold in the earth?'",
          "'Why do rivers flow toward the sea?'"
        ],
        correctIndex: 0,
        explanation: "Verse 79:27–33 reminds humanity that creating the vast, proportioned heaven with its water, pasture, and firmly set mountains is far greater than recreating human beings."
      },
      {
        id: "79-q4",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Al-Qurtubi — Ayah 79:40–41",
        prompt: "Which two conditions does Surah An-Nazi'at (79:40–41) name as the pathway to Paradise?",
        options: [
          "Fearing the standing before one's Lord and restraining the soul from base desires (al-hawa)",
          "Accumulating vast wealth and building monuments",
          "Traveling across seven seas and fasting continuously",
          "Memorizing genealogies and debating poets"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and Al-Qurtubi highlight verses 79:40–41: whoever feared standing before his Lord and restrained his soul from unlawful desire—indeed, Paradise will be his refuge."
      },
      {
        id: "79-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 79:46",
        prompt: "How will the entire lifespan of this world feel on the Day the Hour arrives, according to the closing verse of Surah An-Nazi'at?",
        options: [
          "As if people had remained in the world only an evening or a morning thereof",
          "As if they had lived for millions of uninterrupted centuries",
          "As if time had never existed at all",
          "As if worldly status continued unchanged"
        ],
        correctIndex: 0,
        explanation: "Verse 79:46 reveals that on the Day they see the Hour, all worldly time will feel like a single evening or morning—urging us not to trade eternity for a fleeting hour."
      }
    ]
  },
  {
    number: 80,
    name: "'Abasa",
    arabicName: "عبس",
    volume: "Volume 05",
    theme: "Divine Correction of Priorities & The Sincere Seeker",
    questions: [
      {
        id: "80-q1",
        label: "Quran",
        sourceRef: "'Abasa (80:1–4)",
        prompt: "Why did Surah 'Abasa begin with a gentle divine correction of the Prophet (peace be upon him)?",
        options: [
          "He frowned and turned away from a blind seeker while hoping to guide wealthy Quraysh leaders",
          "He delayed the afternoon prayer past sunset",
          "He refused to travel to Madinah with his companions",
          "He forgot to recite Basmalah before a treaty"
        ],
        correctIndex: 0,
        explanation: "Surah 'Abasa (80:1–4) teaches that the sincere, humble seeker (Abdullah ibn Umm Maktum, RA) who comes desiring purification is infinitely more worthy of attention than arrogant elites."
      },
      {
        id: "80-q2",
        label: "Tafsir",
        sourceRef: "Al-Qurtubi & Ibn Kathir — Abdullah ibn Umm Maktum",
        prompt: "How did the Prophet (peace be upon him) honor Abdullah ibn Umm Maktum (RA) whenever he saw him after Surah 'Abasa was revealed?",
        options: [
          "He spread his cloak for him to sit on and greeted him: 'Welcome to the one on whose account my Lord reprimanded me'",
          "He asked him to wait outside until all meetings ended",
          "He sent him away to another town to avoid interruption",
          "He forbade him from asking questions in public"
        ],
        correctIndex: 0,
        explanation: "Al-Qurtubi and Ibn Kathir record the Prophet's profound humility: he honored Ibn Umm Maktum warmly, spread his cloak for him, and welcomed him with those exact words."
      },
      {
        id: "80-q3",
        label: "Quran",
        sourceRef: "'Abasa (80:24–32)",
        prompt: "When verse 80:24 commands, 'Then let mankind look at his food,' what sequence of divine generosity does it trace?",
        options: [
          "Pouring rain, splitting the earth with sprouts, and growing grain, grapes, olives, palms, and lush gardens",
          "Carving stone palaces and mining iron from mountains",
          "Sailing ships across uncharted oceans",
          "Trading silver coins in seasonal markets"
        ],
        correctIndex: 0,
        explanation: "Verses 80:24–32 trace the entire agricultural miracle—rain, soil splitting, grain, fruit, and pasture—as a direct, daily provision from Allah for humans and livestock."
      },
      {
        id: "80-q4",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas (RA) — Ayah 80:33–37",
        prompt: "Why will a person flee from his own brother, mother, father, spouse, and children on the Day of the Deafening Blast (As-Sakhkhah)?",
        options: [
          "Out of sheer terror that family members will claim rights or ask for good deeds, and because every soul is utterly preoccupied with its own fate",
          "Because family ties are forbidden to be remembered in the Hereafter",
          "Because people will no longer recognize one another's faces",
          "Because angels separate relatives into different continents"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) explained that the overwhelming horror of As-Sakhkhah and fear of having one's good deeds claimed leaves every person consumed by their own reckoning."
      },
      {
        id: "80-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 80:1–10",
        prompt: "What moral priority does Surah 'Abasa establish for callers to truth and community leaders today?",
        options: [
          "Measure people by their sincerity and eagerness to be purified, never by wealth, status, or public influence",
          "Focus exclusively on influential figures and ignore ordinary learners",
          "Avoid teaching beginners until they master rhetoric",
          "Reserve spiritual counsel only for formal conferences"
        ],
        correctIndex: 0,
        explanation: "Surah 'Abasa sets an eternal standard: the trembling, sincere seeker outweighs all worldly prestige."
      }
    ]
  },
  {
    number: 81,
    name: "At-Takwir",
    arabicName: "التكوير",
    volume: "Volume 05",
    theme: "Cosmic Dismantling, Vindication of the Innocent & Truth of Revelation",
    questions: [
      {
        id: "81-q1",
        label: "Hadith",
        sourceRef: "Prophetic Narration — Surah At-Takwir",
        prompt: "What did the Prophet (peace be upon him) say about the person who wishes to see the Day of Resurrection as if looking at it with their own eyes?",
        options: [
          "Let them recite 'Idha ash-shamsu kuwwirat' (Surah At-Takwir)",
          "Let them climb the highest mountain in Makkah",
          "Let them fast for forty consecutive days",
          "Let them study ancient astronomy charts"
        ],
        correctIndex: 0,
        explanation: "The Prophet (peace be upon him) said that whoever wishes to look at the Day of Resurrection as if seeing it directly should recite Surah At-Takwir (and Al-Infitar and Al-Inshiqaq)."
      },
      {
        id: "81-q2",
        label: "Quran",
        sourceRef: "At-Takwir (81:1–6)",
        prompt: "Which cosmic events open Surah At-Takwir's portrait of the Last Day?",
        options: [
          "The sun wrapped up in darkness, the stars dispersing, the mountains set in motion, and the seas set ablaze",
          "The moon turning into gold and rivers freezing over",
          "Cities expanding into endless forests",
          "The sky remaining unchanged while only deserts flood"
        ],
        correctIndex: 0,
        explanation: "Surah At-Takwir (81:1–6) opens with rapid, vivid clauses: the sun folded in darkness, stars falling, mountains moved, pregnant camels neglected, wild beasts gathered, and seas ignited."
      },
      {
        id: "81-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Al-Qurtubi — Ayah 81:8–9",
        prompt: "Why does Allah directly question the murdered infant girl ('For what sin was she killed?') rather than addressing her killer first in verses 81:8–9?",
        options: [
          "As the ultimate judicial humiliation of the oppressor—ignoring the criminal while conferring honor and standing upon the innocent victim",
          "Because the father was unaware of what happened",
          "Because the infant girl committed a minor mistake",
          "Because witnesses were not present in the desert"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and Al-Qurtubi note this chilling legal subtlety: the Divine Judge turns directly to the innocent victim to vindicate her, leaving the oppressor terrified and condemned."
      },
      {
        id: "81-q4",
        label: "Quran",
        sourceRef: "At-Takwir (81:19–25)",
        prompt: "How does Surah At-Takwir defend the authenticity of the Qur'an against claims that it is from a madman or a devil?",
        options: [
          "It affirms that the Qur'an is the word of a noble, trustworthy messenger (Jibril), and your companion (Muhammad) is not possessed",
          "It states that the Prophet wrote it from ancient scrolls",
          "It claims that poets in Makkah co-authored its chapters",
          "It advises hiding the message from the public"
        ],
        correctIndex: 0,
        explanation: "Verses 81:19–25 affirm the purity of revelation: conveyed by the noble, mighty, trustworthy angel Jibril to the Prophet (peace be upon him), who saw him on the clear horizon."
      },
      {
        id: "81-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 81:26",
        prompt: "What piercing question in verse 81:26 ('Fa-ayna tadh-habun' — 'So where are you going?') invites the reader to pause?",
        options: [
          "If this Qur'an is a clear reminder for all worlds, what other path could possibly lead to truth and safety?",
          "Which trade route is most profitable during winter?",
          "How many miles separate Makkah from Jerusalem?",
          "When will the next solar eclipse occur?"
        ],
        correctIndex: 0,
        explanation: "'So where are you going?' calls every wandering heart to stop chasing illusions and return to the clear guidance of Allah."
      }
    ]
  },
  {
    number: 82,
    name: "Al-Infitar",
    arabicName: "الانفطار",
    volume: "Volume 05",
    theme: "The Cleaving Sky, Divine Appeal & Noble Recording Angels",
    questions: [
      {
        id: "82-q1",
        label: "Quran",
        sourceRef: "Al-Infitar (82:6–7)",
        prompt: "What penetrating moral question does Allah ask humanity in verse 82:6 after describing the sky breaking apart?",
        options: [
          "'O mankind, what has deceived you concerning your Lord, the Generous, who created you, proportioned you, and balanced you?'",
          "'Why have you not built higher towers upon the earth?'",
          "'Who taught you to sail across the seas?'",
          "'How many stars can you count at midnight?'"
        ],
        correctIndex: 0,
        explanation: "Verse 82:6–7 confronts human ingratitude with tender majesty: what deceived you into neglecting the Generous Lord who fashioned and balanced your very body?"
      },
      {
        id: "82-q2",
        label: "Tafsir",
        sourceRef: "Al-Fudayl ibn 'Iyad & Ibn Kathir — Ayah 82:6",
        prompt: "When Al-Fudayl ibn 'Iyad wept upon reading 'What has deceived you concerning your Lord, the Generous (Al-Karim)?', what answer did he whisper?",
        options: [
          "'What deceived me? Your generous forbearance, O Lord!'",
          "'The beauty of gold and silver in the marketplace'",
          "'The strength of my own youth'",
          "'The advice of ancient kings'"
        ],
        correctIndex: 0,
        explanation: "Al-Fudayl wept and confessed that people often mistake Allah's Al-Karim (generous forbearance and covering of sins) for permission to continue disobeying Him."
      },
      {
        id: "82-q3",
        label: "Quran",
        sourceRef: "Al-Infitar (82:10–12)",
        prompt: "Who are 'Kiraman Katibin' mentioned in verses 82:10–12?",
        options: [
          "Noble, honorable recording angels appointed over every person, who know and record whatever they do",
          "Ancient scribes who copied royal decrees in Babylon",
          "Earthly judges who preside over commercial courts",
          "Poets who memorized pre-Islamic odes"
        ],
        correctIndex: 0,
        explanation: "Verses 82:10–12 remind us that noble guardians and honorable scribes accompany us constantly, recording every deed."
      },
      {
        id: "82-q4",
        label: "Quran",
        sourceRef: "Al-Infitar (82:19)",
        prompt: "How does Surah Al-Infitar conclude its description of the Day of Recompense?",
        options: [
          "A Day when no soul will possess anything for another soul, and the command that Day is entirely with Allah",
          "A Day when wealth can ransom any criminal from punishment",
          "A Day when earthly rulers negotiate treaties for their followers",
          "A Day when deeds are forgotten and erased"
        ],
        correctIndex: 0,
        explanation: "Verse 82:19 declares absolute divine sovereignty: on that Day, no soul has power to avail another, and all command belongs solely to Allah."
      },
      {
        id: "82-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Kiramun Katibin",
        prompt: "How should remembering the presence of the 'Kiraman Katibin' (noble recording angels) shape our private moments?",
        options: [
          "It cultivates gentle mindfulness (muraqabah), knowing our hidden sincerity and private choices are seen and recorded",
          "It should make us perform good deeds only when crowds are watching",
          "It means we no longer need to make tawbah for private slips",
          "It encourages constant anxiety without hope in Allah's mercy"
        ],
        correctIndex: 0,
        explanation: "Knowing we are accompanied by noble angelic witnesses turns solitude into a space of dignity, sincerity, and mindfulness of Allah."
      }
    ]
  },
  {
    number: 83,
    name: "Al-Mutaffifin",
    arabicName: "المطففين",
    volume: "Volume 05",
    theme: "Marketplace Justice, Sijjin & 'Illiyyun, and Vindication",
    questions: [
      {
        id: "83-q1",
        label: "Quran",
        sourceRef: "Al-Mutaffifin (83:1–3)",
        prompt: "Who are 'Al-Mutaffifin' against whom the Surah opens with 'Wayl' (woe/destruction)?",
        options: [
          "Those who demand full measure when buying from others, but cheat and give short measure when selling",
          "Those who travel across borders to trade spices",
          "Those who give away half their harvest in charity",
          "Those who keep written ledgers of their debts"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Mutaffifin (83:1–3) condemns double standards in weights and measures—linking everyday marketplace dishonesty to forgetting the Resurrection (83:4–5)."
      },
      {
        id: "83-q2",
        label: "Quran",
        sourceRef: "Al-Mutaffifin (83:7 & 83:18)",
        prompt: "What are 'Sijjin' and ''Illiyyun' in Surah Al-Mutaffifin?",
        options: [
          "The inscribed register of the wicked in the lowest depths (Sijjin) and the elevated register of the righteous witnessed by the nearest angels ('Illiyyun)",
          "Two ancient cities in southern Arabia",
          "Two types of silver coins used in Makkah",
          "Two seasonal winds that blow across the Red Sea"
        ],
        correctIndex: 0,
        explanation: "The Surah contrasts Sijjin—the constricted, low register of the wicked—with 'Illiyyun, the exalted, honored register of the righteous."
      },
      {
        id: "83-q3",
        label: "Tafsir",
        sourceRef: "Imam Ash-Shafi'i — Ayah 83:15",
        prompt: "What profound theological conclusion did Imam Ash-Shafi'i derive from verse 83:15 ('Nay! Surely from their Lord, that Day, they will be veiled')?",
        options: [
          "Since the wicked are punished by being veiled from Allah, the righteous will be honored with gazing upon their Lord in love and joy",
          "That no human being will ever be resurrected",
          "That angels cannot see the heavens",
          "That Paradise has no rivers or gardens"
        ],
        correctIndex: 0,
        explanation: "Imam Ash-Shafi'i reasoned that veiling the wicked from seeing Allah in wrath proves that the believers will be blessed with the Beatific Vision of their Lord."
      },
      {
        id: "83-q4",
        label: "Quran",
        sourceRef: "Al-Mutaffifin (83:25–26 & 29–34)",
        prompt: "What reversal of roles occurs at the end of Surah Al-Mutaffifin between the criminals and the believers?",
        options: [
          "In this world the criminals laughed at the believers; in the Hereafter the believers on raised couches will look on and laugh",
          "The believers will forget Paradise and return to Makkah",
          "The criminals will be appointed judges over the righteous",
          "Both groups will remain silent forever"
        ],
        correctIndex: 0,
        explanation: "Verses 83:29–34 show the ultimate reversal: those who mocked believers in worldly life will see the believers seated on adorned couches in joy."
      },
      {
        id: "83-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 83:1–6",
        prompt: "How does Surah Al-Mutaffifin broaden our understanding of honesty beyond physical scales?",
        options: [
          "Giving full measure applies to time at work, promises, grading, digital fairness, and fulfilling others' rights as eagerly as we claim our own",
          "Honesty only matters when weighing grain in a market",
          "Small discrepancies are acceptable if no one notices",
          "Economic ethics are unrelated to belief in the Hereafter"
        ],
        correctIndex: 0,
        explanation: "Whenever we demand 100% from others (employees, teachers, sellers) while giving 80% in return, we fall into the spirit of tatfif."
      }
    ]
  },
  {
    number: 84,
    name: "Al-Inshiqaq",
    arabicName: "الانشقاق",
    volume: "Volume 05",
    theme: "Cosmic Surrender, Human Labor (Kadh) & Stages of Life",
    questions: [
      {
        id: "84-q1",
        label: "Quran",
        sourceRef: "Al-Inshiqaq (84:6)",
        prompt: "What universal truth about human existence does Allah state in verse 84:6 ('Innaka kadihun ila Rabbika kadhan famulaqih')?",
        options: [
          "Every human being is laboring toward their Lord with painstaking exertion and will inevitably meet Him",
          "Human life is meant to be effortless leisure without purpose",
          "Only prophets experience struggle in this world",
          "Death ends all connection between the soul and its Creator"
        ],
        correctIndex: 0,
        explanation: "Verse 84:6 reminds us that whether we strive for righteousness or worldly illusions, we are all marching through toil toward an inevitable meeting with Allah."
      },
      {
        id: "84-q2",
        label: "Hadith",
        sourceRef: "Aisha (RA) & The Prophet ﷺ — Ayah 84:8",
        prompt: "When Aisha (RA) asked how 'an easy reckoning' (Hisaban yasira) fits with the warning that whoever's account is interrogated is destroyed, how did the Prophet (peace be upon him) explain it?",
        options: [
          "The easy reckoning is merely the Presentation (Al-'Ard), where deeds are displayed without harsh cross-examination",
          "It means no records are kept for believers at all",
          "It applies only to those who never made a single mistake",
          "It means angels skip reading the left-hand register"
        ],
        correctIndex: 0,
        explanation: "The Prophet (peace be upon him) clarified that Hisaban yasira is Al-'Ard—a merciful presentation of deeds, whereas detailed interrogation leads to ruin."
      },
      {
        id: "84-q3",
        label: "Quran",
        sourceRef: "Al-Inshiqaq (84:7–12)",
        prompt: "How are the two groups of people contrasted when receiving their book of deeds in Surah Al-Inshiqaq?",
        options: [
          "One receives it in his right hand and returns to his people in joy; the other receives it behind his back and cries out for destruction",
          "One receives a scroll of gold and the other receives a scroll of silver",
          "Both receive their records in silence and walk away",
          "One reads his record aloud while the other burns his"
        ],
        correctIndex: 0,
        explanation: "Verses 84:7–12 contrast the joyful believer receiving his record in his right hand with the heedless denier receiving his behind his back."
      },
      {
        id: "84-q4",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas & Mujahid — Ayah 84:19",
        prompt: "What does the oath 'Latarkabunna tabaqan 'an tabaq' (You will surely embark upon stage after stage) signify in classical tafsir?",
        options: [
          "The continuous transitions of human existence—from womb to birth, youth to old age, death to resurrection and judgment",
          "Building multi-story stone houses in the desert",
          "Climbing mountain peaks during winter migrations",
          "Learning seven different languages in one lifetime"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) and Mujahid explain that humanity rides from state to state—never remaining static—moving inexorably through life's stages toward the Hereafter."
      },
      {
        id: "84-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 84:6",
        prompt: "Since every human life involves 'Kadh' (strenuous toil), what is the wisest way to direct our daily exertion?",
        options: [
          "Channel our sweat and energy into what pleases Allah, so our labor ends in joy at meeting Him rather than regret",
          "Avoid all difficult work and wait passively for fate",
          "Spend our strength solely on impressing peers",
          "Assume that worldly exhaustion guarantees spiritual reward without faith"
        ],
        correctIndex: 0,
        explanation: "Everyone works hard in this world; the believer aligns that inevitable toil with faith and righteousness so the meeting with Allah is one of relief and joy."
      }
    ]
  },
  {
    number: 85,
    name: "Al-Buruj",
    arabicName: "البروج",
    volume: "Volume 05",
    theme: "Faith Under Persecution, Al-Wadud & The Preserved Tablet",
    questions: [
      {
        id: "85-q1",
        label: "Quran",
        sourceRef: "Al-Buruj (85:4–8)",
        prompt: "Who were 'Ashab al-Ukhdud' (the Companions of the Trench) mentioned in Surah Al-Buruj?",
        options: [
          "Tyrants who dug blazing trenches of fire and sat watching as believers were burned alive solely for believing in Allah",
          "Farmers who dug irrigation canals in Yemen",
          "Builders who fortified the walls of Makkah",
          "Travelers who sheltered in a mountain cave"
        ],
        correctIndex: 0,
        explanation: "Verses 85:4–8 recount how tyrants burned steadfast believers in a fuel-filled trench, resenting them for nothing except their faith in Allah, the Almighty, the Praiseworthy."
      },
      {
        id: "85-q2",
        label: "Tafsir",
        sourceRef: "Atlas Plate 02 — Ayah 85:11",
        prompt: "In worldly terms the believers in the trench were killed, yet verse 85:11 calls their fate 'Dhalikal-fawzul-kabir' (the Great Triumph). Why?",
        options: [
          "Because true victory is dying upon uncompromised Tawhid and entering eternal Paradise, not mere physical survival",
          "Because they escaped the fire without any harm",
          "Because they captured the tyrant's treasury",
          "Because history forgot their sacrifice"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Buruj redefines victory: earthly defeat while holding firm to faith is the Supreme Triumph, whereas worldly power built on tyranny ends in ruin."
      },
      {
        id: "85-q3",
        label: "Tafsir",
        sourceRef: "Ibn al-Qayyim — Al-Ghafur Al-Wadud (85:14)",
        prompt: "How does Imam Ibn al-Qayyim explain the pairing of Allah's names 'Al-Ghafur Al-Wadud' in verse 85:14?",
        options: [
          "Allah is not only Al-Ghafur (who forgives and erases sin), but also Al-Wadud (who loves the repentant servant with warm affection)",
          "They mean Allah ignores repentance after a major sin",
          "They apply only to angels and not human beings",
          "They indicate that forgiveness removes love"
        ],
        correctIndex: 0,
        explanation: "Ibn al-Qayyim highlights the beauty of Al-Ghafur Al-Wadud: when a servant repents—even after grave wrong—Allah both pardons them and embraces them with loving care."
      },
      {
        id: "85-q4",
        label: "Quran",
        sourceRef: "Al-Buruj (85:21–22)",
        prompt: "Where does Surah Al-Buruj conclude that this honored Qur'an is preserved?",
        options: [
          "In a Preserved Tablet (Lawh Mahfuz), protected from all alteration and distortion",
          "In a wooden chest buried beneath the sea",
          "In the oral poetry of a single desert tribe",
          "In royal archives that were later lost"
        ],
        correctIndex: 0,
        explanation: "Verses 85:21–22 affirm: 'Rather, this is an honored Qur'an, in a Preserved Tablet (Lawh Mahfuz)'—guaranteeing its eternal integrity."
      },
      {
        id: "85-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 85:12–14",
        prompt: "What comfort does pairing 'Indeed, the vengeance of your Lord is severe' with 'He is the Forgiving, the Loving' offer a believer?",
        options: [
          "It assures the oppressed that no tyrant escapes justice, while keeping the door of loving repentance open to anyone who turns back",
          "It suggests that tyrants are never held accountable",
          "It means believers should seek personal revenge in anger",
          "It discourages making du'a for guidance"
        ],
        correctIndex: 0,
        explanation: "Divine justice is stern against unrepentant cruelty, yet divine mercy remains warmly open to every soul that repents."
      }
    ]
  },
  {
    number: 86,
    name: "At-Tariq",
    arabicName: "الطارق",
    volume: "Volume 05",
    theme: "The Piercing Star, Embryonic Origins & Tested Secrets",
    questions: [
      {
        id: "86-q1",
        label: "Quran",
        sourceRef: "At-Tariq (86:1–4)",
        prompt: "After swearing by the sky and 'At-Tariq' (the Piercing Star), what truth does Allah declare in verse 86:4?",
        options: [
          "There is no soul except that it has over it a guardian protector (angel)",
          "Stars control human destiny without divine command",
          "Only rulers are watched by angels",
          "The night sky has no order or purpose"
        ],
        correctIndex: 0,
        explanation: "Verses 86:1–4 swear by the sky and the piercing star to affirm that every single human soul has a divinely appointed guardian watching over it."
      },
      {
        id: "86-q2",
        label: "Quran",
        sourceRef: "At-Tariq (86:5–8)",
        prompt: "Why does Surah At-Tariq command man to observe from what he was created (an ejected fluid)?",
        options: [
          "To humble human arrogance and prove that the Creator who originated life from a drop of fluid is fully able to resurrect him",
          "To argue that human beings are superior to angels by birth",
          "To discourage studying biology and medicine",
          "To claim that life came about by random chance"
        ],
        correctIndex: 0,
        explanation: "Verses 86:5–8 point to our humble biological origin as irrefutable proof that Allah's power to bring us back to life is effortless."
      },
      {
        id: "86-q3",
        label: "Tafsir",
        sourceRef: "Ibn 'Umar & Ibn Kathir — Ayah 86:9",
        prompt: "What happens on 'Yawma tubla as-sara'ir' (the Day when secrets are put to the test) in verse 86:9?",
        options: [
          "The deeply concealed intentions, hidden grudges, and private realities of every heart are exposed and examined",
          "Only spoken words in public courts are reviewed",
          "All hidden sins are permanently ignored without repentance",
          "People are judged solely by their family lineage"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Umar and Ibn Kathir explain that As-Sara'ir are the hidden secrets of the chest—intentions behind worship and private character—which become fully manifest on that Day."
      },
      {
        id: "86-q4",
        label: "Quran",
        sourceRef: "At-Tariq (86:11–14)",
        prompt: "By the sky that returns rain and the earth that cracks open with growth, how does Allah describe the Qur'an in verses 86:13–14?",
        options: [
          "It is a decisive statement (Qawlun fasl) and not amusement or jest",
          "It is a collection of seasonal proverbs for entertainment",
          "It is an optional poem for festive gatherings",
          "It is a riddle with no clear meaning"
        ],
        correctIndex: 0,
        explanation: "Verses 86:13–14 declare that the Qur'an is a decisive, truth-separating word—never idle amusement."
      },
      {
        id: "86-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 86:9",
        prompt: "How should the reality of 'Tubla as-sara'ir' (the testing of inner secrets) guide our daily spiritual life?",
        options: [
          "It calls us to purify our hidden intentions and private habits, not just polish our outward image before people",
          "It means outward good deeds have no value",
          "It encourages hiding faults from Allah in prayer",
          "It suggests people should judge others' secret motives"
        ],
        correctIndex: 0,
        explanation: "Since inner secrets will be tested on the Last Day, true spiritual work begins with purifying the heart's intentions and private conduct."
      }
    ]
  },
  {
    number: 87,
    name: "Al-A'la",
    arabicName: "الأعلى",
    volume: "Volume 05",
    theme: "Exalting the Most High, Revelation & Success Through Purification",
    questions: [
      {
        id: "87-q1",
        label: "Hadith",
        sourceRef: "'Uqbah ibn 'Amir (RA) — Ayah 87:1",
        prompt: "When 'Sabbihisma Rabbikal-A'la' (87:1) was revealed, where did the Prophet (peace be upon him) instruct the believers to place it in prayer?",
        options: [
          "In their prostration (Sujud): 'Subhana Rabbiyal-A'la'",
          "Only during the silent pause after Tashahhud",
          "Exclusively before entering the masjid",
          "Only once a year during Eid"
        ],
        correctIndex: 0,
        explanation: "As narrated by 'Uqbah ibn 'Amir (RA), the Prophet (peace be upon him) instructed: 'Place it in your Sujud'—giving us the tasbih of prostration."
      },
      {
        id: "87-q2",
        label: "Quran",
        sourceRef: "Al-A'la (87:6)",
        prompt: "What comforting promise did Allah give the Prophet (peace be upon him) regarding memorizing the Qur'an in verse 87:6?",
        options: [
          "'We will make you recite, and you will not forget (except what Allah wills)'",
          "'You must write every verse yourself before dawn'",
          "'Only three chapters will remain in memory'",
          "'You will forget each verse after reciting it once'"
        ],
        correctIndex: 0,
        explanation: "Verse 87:6 ('Sanuqri'uka fala tansa') reassured the Prophet (peace be upon him) that Allah Himself would preserve revelation in his heart."
      },
      {
        id: "87-q3",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas & 'Umar ibn 'Abdul-'Aziz — Ayah 87:14–15",
        prompt: "In classical tafsir, what two dimensions are encompassed by 'Qad aflaha man tazakka' (He has succeeded who purifies himself)?",
        options: [
          "Purifying the soul from shirk and sin, and purifying wealth (including Zakat al-Fitr before Eid prayer), paired with remembering Allah and praying",
          "Washing one's garments only on Fridays",
          "Retreating from society to live in total silence",
          "Accumulating silver without spending it"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas and 'Umar ibn 'Abdul-'Aziz explained that Tazakka unites inner purification of the heart with charitable purification (such as Zakat al-Fitr), followed by dhikr and salah."
      },
      {
        id: "87-q4",
        label: "Quran",
        sourceRef: "Al-A'la (87:16–19)",
        prompt: "What contrast does verse 87:16–17 highlight, noting it was also in the earlier scriptures of Ibrahim and Musa?",
        options: [
          "'But you prefer the worldly life, while the Hereafter is better and more enduring'",
          "'Worldly life is eternal, while the Hereafter is temporary'",
          "'Previous prophets never spoke about the Hereafter'",
          "'Only the people of Makkah are tested with wealth'"
        ],
        correctIndex: 0,
        explanation: "Verses 87:16–19 remind us of the timeless prophetic truth: preferring the fleeting world over the enduring Hereafter is the root of human heedlessness."
      },
      {
        id: "87-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 87:9–10",
        prompt: "Who truly benefits from reminders according to verses 87:10–11?",
        options: [
          "The one who has reverential awe (khashyah) of Allah, whereas the wretched one turns away",
          "Only those who already know every legal ruling by heart",
          "Those who seek reminders purely for argument",
          "Nobody benefits unless forced by authority"
        ],
        correctIndex: 0,
        explanation: "A reminder transforms the heart that carries reverence for Allah; without humility, even the clearest warning is brushed aside."
      }
    ]
  },
  {
    number: 88,
    name: "Al-Ghashiyah",
    arabicName: "الغاشية",
    volume: "Volume 05",
    theme: "The Overwhelming Day, Natural Signs & Limits of Da'wah",
    questions: [
      {
        id: "88-q1",
        label: "Quran",
        sourceRef: "Al-Ghashiyah (88:1–11)",
        prompt: "What two contrasting portraits of human faces does Surah Al-Ghashiyah paint on the Overwhelming Day?",
        options: [
          "Humbled, exhausted, scorched faces of the condemned versus joyful, satisfied faces in an elevated Garden",
          "Faces of kings versus faces of merchants",
          "Sleeping faces versus waking faces",
          "Silent faces versus singing faces"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Ghashiyah contrasts those who laboured in vain and face humiliation with the joyful believers satisfied with their effort in Jannah."
      },
      {
        id: "88-q2",
        label: "Quran",
        sourceRef: "Al-Ghashiyah (88:17–20)",
        prompt: "Which four empirical signs of creation does Allah invite skeptics to observe in verses 88:17–20?",
        options: [
          "The camels (how they are created), the sky (how it is raised), the mountains (how they are erected), and the earth (how it is spread out)",
          "The oceans, the forests, the comets, and the wind",
          "Gold mines, coral reefs, waterfalls, and caves",
          "Horses, falcons, palm trees, and rivers"
        ],
        correctIndex: 0,
        explanation: "Verses 88:17–20 direct the desert traveler's gaze to four everyday wonders right before their eyes: camels, sky, mountains, and earth."
      },
      {
        id: "88-q3",
        label: "Tafsir",
        sourceRef: "Atlas Plate 02 — Ayah 88:17 (Al-Ibil)",
        prompt: "Why does Allah mention the camel (Al-Ibil) first among these four natural signs?",
        options: [
          "Because the camel is uniquely engineered for extreme desert survival—storing energy, enduring heat, and crossing dunes with cushioned hooves—right before the Arab observer's eyes",
          "Because camels were the rarest animals in Arabia",
          "Because camels cannot survive without daily river baths",
          "Because camels were only used for royal parades"
        ],
        correctIndex: 0,
        explanation: "Classical commentators note that the camel's extraordinary anatomy and serviceability in harsh deserts was a living miracle of design familiar to every listener."
      },
      {
        id: "88-q4",
        label: "Quran",
        sourceRef: "Al-Ghashiyah (88:21–22)",
        prompt: "How does Allah define the Prophet's role toward those who turn away in verses 88:21–22?",
        options: [
          "'So remind; you are only a reminder. You are not over them a controller (musaytir)'",
          "'Force every tribe to accept faith by decree'",
          "'Stop speaking to anyone who disagrees'",
          "'Argue with them until they concede'"
        ],
        correctIndex: 0,
        explanation: "Verses 88:21–26 establish a foundational principle of da'wah: our duty is sincere, clear reminding—hearts and final judgment belong to Allah alone."
      },
      {
        id: "88-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 88:21–26",
        prompt: "What peace does 'You are not over them a controller' bring to anyone sharing faith or advising family?",
        options: [
          "It frees us from the burden of forcing outcomes—our responsibility is sincere, gentle delivery, while guidance rests with Allah",
          "It means we should never advise anyone at all",
          "It implies truth does not need to be shared clearly",
          "It encourages harshness when people hesitate"
        ],
        correctIndex: 0,
        explanation: "Remembering that we are reminders—not controllers of hearts—protects us from burnout, bitterness, and coercion."
      }
    ]
  },
  {
    number: 89,
    name: "Al-Fajr",
    arabicName: "الفجر",
    volume: "Volume 05",
    theme: "Sacred Oaths, Fallen Superpowers & The Tranquil Soul",
    questions: [
      {
        id: "89-q1",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas & Ibn Kathir — Ayah 89:2 (Layalin 'Ashr)",
        prompt: "According to Ibn 'Abbas (RA), Ibn Kathir, and the majority of scholars, what do 'the Ten Nights' (Wa layalin 'ashr) in verse 89:2 refer to?",
        options: [
          "The first ten days/nights of Dhul-Hijjah",
          "The first ten nights of Muharram",
          "The middle ten nights of Sha'ban",
          "The last ten nights of Safar"
        ],
        correctIndex: 0,
        explanation: "Scholarly consensus identifies 'Layalin 'Ashr' with the blessed first ten days of Dhul-Hijjah, culminating in the Day of 'Arafah and Eid al-Adha."
      },
      {
        id: "89-q2",
        label: "Quran",
        sourceRef: "Al-Fajr (89:6–14)",
        prompt: "Which three mighty civilizations are cited in Surah Al-Fajr as examples of arrogance crushed by Allah's watchfulness?",
        options: [
          "'Ad (Iram of lofty pillars), Thamud (who carved rock in the valley), and Pharaoh (of the stakes)",
          "Rome, Persia, and China",
          "Saba', Madyan, and Nineveh",
          "Athens, Carthage, and Tyre"
        ],
        correctIndex: 0,
        explanation: "Verses 89:6–14 recount 'Ad, Thamud, and Pharaoh—each unmatched in architectural or military might, yet swept away when they spread corruption."
      },
      {
        id: "89-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir — Ayah 89:15–16",
        prompt: "What common human delusion about wealth and poverty does Allah refute in verses 89:15–17?",
        options: [
          "Assuming wealth means Allah has honored you and restricted provision means He has humiliated you—when both are actually tests (ibtila')",
          "Assuming wealth is forbidden for believers",
          "Assuming poverty is a permanent punishment",
          "Assuming provision depends solely on luck"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir explains that neither abundance nor scarcity is a measure of Allah's love or displeasure; honor lies in obedience and compassion (honoring the orphan and feeding the poor)."
      },
      {
        id: "89-q4",
        label: "Quran",
        sourceRef: "Al-Fajr (89:27–30)",
        prompt: "What tender invitation closes Surah Al-Fajr for 'An-Nafs al-Mutma'innah' (the reassured, tranquil soul)?",
        options: [
          "'Return to your Lord, well-pleased and pleasing [to Him], and enter among My [righteous] servants, and enter My Paradise'",
          "'Wait outside the gates until the stars fade'",
          "'Return to the earth to rebuild your cities'",
          "'Keep your wealth as proof of your rank'"
        ],
        correctIndex: 0,
        explanation: "Verses 89:27–30 offer one of the Qur'an's sweetest endings—the tranquil soul welcomed back to its Lord, pleased and pleasing, entering Paradise."
      },
      {
        id: "89-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 89:15–20",
        prompt: "Instead of measuring divine favor by bank balances, what moral test does Surah Al-Fajr highlight immediately after verses 15–16?",
        options: [
          "How we treat the orphan, whether we encourage feeding the poor, and whether we resist greedy attachment to wealth",
          "How many monuments we can build in our lifetime",
          "Whether we avoid all commercial trade",
          "How loudly we boast about our generosity"
        ],
        correctIndex: 0,
        explanation: "Verses 89:17–20 expose the real measure: true honor is shown in mercy toward the vulnerable and detachment from greed."
      }
    ]
  },
  {
    number: 90,
    name: "Al-Balad",
    arabicName: "البلد",
    volume: "Volume 05",
    theme: "Human Struggle (Kabad) & Scaling the Steep Pass of Mercy",
    questions: [
      {
        id: "90-q1",
        label: "Quran",
        sourceRef: "Al-Balad (90:1–4)",
        prompt: "After swearing by the sacred city of Makkah and by parent and child, what fundamental law of earthly life does Allah declare in verse 90:4?",
        options: [
          "'We have certainly created man into hardship and struggle (kabad)'",
          "'We have created man solely for effortless comfort'",
          "'Only travelers experience fatigue in this world'",
          "'Wealth removes every human trial'"
        ],
        correctIndex: 0,
        explanation: "Verse 90:4 ('Laqad khalaqnal-insana fi kabad') teaches that toil, testing, and moral struggle are built into earthly existence."
      },
      {
        id: "90-q2",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas & Al-Hasan al-Basri — Ayah 90:4",
        prompt: "How do Ibn 'Abbas (RA) and Al-Hasan al-Basri explain the word 'Kabad' in Surah Al-Balad?",
        options: [
          "Continuous struggle, strain, and toil from birth through earning a livelihood, illness, old age, and death—for true ease exists only in Paradise",
          "A brief afternoon nap after work",
          "A specific festival celebrated in Makkah",
          "A type of desert stone used for building"
        ],
        correctIndex: 0,
        explanation: "Classical scholars explain that kabad captures the relentless moral and physical exertion of life, reminding believers not to expect uninterrupted ease before Jannah."
      },
      {
        id: "90-q3",
        label: "Quran",
        sourceRef: "Al-Balad (90:11–16)",
        prompt: "What does Surah Al-Balad define as breaking through 'Al-'Aqabah' (the steep uphill pass)?",
        options: [
          "Freeing a captive/slave, or feeding on a day of severe hunger an orphan of near relation or a destitute person in misery",
          "Climbing Mount Uhud without water",
          "Hoarding gold for future generations",
          "Winning an argument in the city square"
        ],
        correctIndex: 0,
        explanation: "Verses 90:11–16 define the steep moral climb as liberating the oppressed and feeding the vulnerable during times of scarcity."
      },
      {
        id: "90-q4",
        label: "Quran",
        sourceRef: "Al-Balad (90:17–18)",
        prompt: "Alongside faith, what two qualities do the 'Companions of the Right' (Ashab al-Maymanah) mutually advise one another toward in verse 90:17?",
        options: [
          "Patience (sabr) and compassion/mercy (marhamah)",
          "Silence and solitude",
          "Rivalry and pride",
          "Secrecy and suspicion"
        ],
        correctIndex: 0,
        explanation: "Verse 90:17 pairs faith with mutual counsel to patience and compassion—making mercy a communal standard."
      },
      {
        id: "90-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 90:11–17",
        prompt: "Why does Surah Al-Balad describe social justice and charity as a 'steep uphill pass' (Al-'Aqabah)?",
        options: [
          "Because generosity and defending the vulnerable require conquering the ego's natural greed and comfort",
          "Because charity is only valid if performed on a mountain",
          "Because helping others is meant to be impossible",
          "Because only wealthy rulers can climb it"
        ],
        correctIndex: 0,
        explanation: "Scaling Al-'Aqabah means pushing past selfishness to lift someone else's burden—the hardest yet most rewarding climb of the soul."
      }
    ]
  },
  {
    number: 91,
    name: "Ash-Shams",
    arabicName: "الشمس",
    volume: "Volume 05",
    theme: "Eleven Cosmic Oaths & Purification of the Soul (Tazkiyah)",
    questions: [
      {
        id: "91-q1",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Al-Qurtubi — Ayah 91:1–7",
        prompt: "What structural distinction makes the opening of Surah Ash-Shams unique in the entire Qur'an?",
        options: [
          "It contains eleven consecutive divine oaths (sun, moon, day, night, sky, earth, soul, etc.) leading to one central verdict on the human soul",
          "It is the longest Surah in Juz 'Amma",
          "It contains no oaths at all",
          "It was revealed entirely after the Hijrah"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and Al-Qurtubi highlight that nowhere else in the Qur'an do eleven consecutive cosmic oaths converge on a single declaration about purifying the soul."
      },
      {
        id: "91-q2",
        label: "Quran",
        sourceRef: "Ash-Shams (91:7–10)",
        prompt: "What monumental verdict does Allah deliver in verses 91:9–10 after swearing by the soul and its moral discernment?",
        options: [
          "'He has certainly succeeded who purifies it (zakkaha), and he has failed who corrupts/buries it (dassaha)'",
          "'Success belongs only to those who conquer empires'",
          "'The soul has no capacity to distinguish right from wrong'",
          "'Good and evil are identical in outcome'"
        ],
        correctIndex: 0,
        explanation: "Verses 91:7–10 affirm that Allah inspired the soul with awareness of both wickedness and righteousness, and eternal success rests on purifying it."
      },
      {
        id: "91-q3",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas (RA) — Ayah 91:9–10",
        prompt: "How does Ibn 'Abbas (RA) explain the contrast between 'Zakkaha' and 'Dassaha'?",
        options: [
          "Zakkaha means elevating and purifying the soul through obedience and virtue, while Dassaha comes from burying—like burying one's conscience beneath sin",
          "Zakkaha means hiding wealth, while Dassaha means spending it",
          "Both words mean the exact same action",
          "They refer exclusively to agricultural irrigation"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) notes that dassaha evokes burying something in the dirt—the tragedy of a person who smothers their own innate conscience under sin."
      },
      {
        id: "91-q4",
        label: "Quran",
        sourceRef: "Ash-Shams (91:11–15)",
        prompt: "Which ancient people serve as the cautionary example of soul-corruption at the end of Surah Ash-Shams?",
        options: [
          "Thamud, who transgressed, rejected their messenger Salih, and hamstrung the sacred She-Camel",
          "The people of Saba', who built the Marib dam",
          "The companions of the Cave",
          "The residents of Yathrib before Islam"
        ],
        correctIndex: 0,
        explanation: "Verses 91:11–15 recount how Thamud's arrogance led them to hamstring Allah's She-Camel, resulting in their total destruction."
      },
      {
        id: "91-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 91:9–10",
        prompt: "Why is the real battle of human success located 'within your own breast' in Surah Ash-Shams?",
        options: [
          "Because external circumstances cannot ruin a purified soul, whereas unchecked inner corruption destroys a person from within",
          "Because external actions have no connection to the heart",
          "Because nobody can ever change their habits",
          "Because society is solely responsible for personal choices"
        ],
        correctIndex: 0,
        explanation: "True success is inner cultivation (tazkiyah)—tending the garden of the heart daily through repentance, dhikr, and obedience."
      }
    ]
  },
  {
    number: 92,
    name: "Al-Layl",
    arabicName: "الليل",
    volume: "Volume 05",
    theme: "Diverse Human Strivings, Ease vs. Hardship & Pure Sincerity",
    questions: [
      {
        id: "92-q1",
        label: "Quran",
        sourceRef: "Al-Layl (92:4)",
        prompt: "After swearing by the enveloping night, the shining day, and the creation of male and female, what does Allah declare in verse 92:4?",
        options: [
          "'Indeed, your efforts are diverse (Inna sa'yakum lashatta)'",
          "'All human beings pursue the exact same goal'",
          "'Human effort has no effect on destiny'",
          "'Only daytime work is counted'"
        ],
        correctIndex: 0,
        explanation: "Verse 92:4 observes that humanity strives in sharply contrasting directions—some toward Paradise, others toward ruin."
      },
      {
        id: "92-q2",
        label: "Quran",
        sourceRef: "Al-Layl (92:5–10)",
        prompt: "What three traits lead Allah to 'ease a person toward ease' (Fasanuyassiruhu lil-yusra) in verses 92:5–7?",
        options: [
          "Giving generously, fearing Allah (taqwa), and affirming the best reward (Al-Husna)",
          "Withholding charity, boasting of self-sufficiency, and denying the best",
          "Traveling alone, avoiding family, and remaining silent",
          "Collecting titles, debating rivals, and hoarding gold"
        ],
        correctIndex: 0,
        explanation: "Verses 92:5–10 contrast the generous, God-conscious believer whose path to goodness is eased with the stingy, arrogant denier whose path to hardship is eased."
      },
      {
        id: "92-q3",
        label: "Tafsir",
        sourceRef: "Classical Mufassirun — Ayah 92:17–21 (Al-Atqa)",
        prompt: "Who do classical commentators unanimously identify as the prime embodiment of 'Al-Atqa' (the most pious) in verses 92:17–21?",
        options: [
          "Abu Bakr as-Siddiq (RA), who spent his wealth freeing tortured slaves solely seeking the Countenance of his Lord",
          "Qarun, who displayed his treasures before his people",
          "Abraha, who marched toward Makkah",
          "A poet from the tribe of Thamud"
        ],
        correctIndex: 0,
        explanation: "Classical mufassirun agree that Abu Bakr (RA) exemplifies these verses—giving purely to purify himself and seeking Allah's Face without expecting any worldly return."
      },
      {
        id: "92-q4",
        label: "Quran",
        sourceRef: "Al-Layl (92:20–21)",
        prompt: "What motive defines the truly righteous giver in verse 92:20, and what is Allah's promise to him in verse 92:21?",
        options: [
          "Seeking only the Countenance of his Lord, the Most High—and he will surely be well pleased (walasawfa yarda)",
          "Seeking public praise and repayment from the recipients",
          "Seeking political office in Makkah",
          "Seeking to cancel old business debts"
        ],
        correctIndex: 0,
        explanation: "Verses 92:19–21 highlight pure sincerity: giving not to repay a favor, but solely for Allah's Face—ending with the promise of complete satisfaction."
      },
      {
        id: "92-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 92:5–7",
        prompt: "How does Surah Al-Layl's 'equation of ease' encourage us when we feel stuck in spiritual struggle?",
        options: [
          "When we take sincere steps of generosity, taqwa, and faith, Allah Himself opens and smooths the path toward lasting peace",
          "Ease only comes when we stop giving charity",
          "Spiritual ease requires zero personal effort",
          "Only wealthy donors can experience Allah's help"
        ],
        correctIndex: 0,
        explanation: "Generosity and God-consciousness unlock divine facilitation—making righteousness feel lighter and sweeter over time."
      }
    ]
  },
  {
    number: 93,
    name: "Ad-Duha",
    arabicName: "الضحى",
    volume: "Volume 05",
    theme: "Divine Reassurance in Darkness & Care for the Vulnerable",
    questions: [
      {
        id: "93-q1",
        label: "Quran",
        sourceRef: "Ad-Duha (93:1–3)",
        prompt: "When a pause in revelation led mockers to claim the Prophet (peace be upon him) had been forsaken, what did Allah swear in verses 93:1–3?",
        options: [
          "'By the morning brightness, and by the night when it grows still: your Lord has not taken leave of you, nor has He detested you'",
          "'By the desert wind: you must leave Makkah tonight'",
          "'By the mountains: revelation has ended forever'",
          "'By the sea: no more verses will come'"
        ],
        correctIndex: 0,
        explanation: "Surah Ad-Duha (93:1–3) is an intimate, healing reassurance: silence is not abandonment."
      },
      {
        id: "93-q2",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Classical Mufassirun — Ayah 93:1–2",
        prompt: "Why does Allah pair the radiant morning sun (Ad-Duha) with the still, quiet night (Al-Layli idha saja) at the start of this Surah?",
        options: [
          "Just as night gives the earth gentle rest before dawn, a quiet pause in revelation allows the soul to rest rather than signaling divine anger",
          "Because prayer is forbidden during daylight",
          "Because the night is always a sign of punishment",
          "Because the sun and night never alternate"
        ],
        correctIndex: 0,
        explanation: "Classical commentators note the psychological wisdom of pairing Ad-Duha with Al-Layl: both light and quiet stillness are part of Allah's caring design."
      },
      {
        id: "93-q3",
        label: "Quran",
        sourceRef: "Ad-Duha (93:6–8)",
        prompt: "Which three past blessings does Allah remind the Prophet (peace be upon him) of as proof of His unbroken care?",
        options: [
          "Finding him an orphan and giving him refuge, finding him unaware/lost and guiding him, and finding him poor and enriching him",
          "Giving him a stone palace, a fleet of ships, and an army",
          "Making him a king of Persia, Rome, and Yemen",
          "Granting him exemption from all trials"
        ],
        correctIndex: 0,
        explanation: "Verses 93:6–8 anchor future hope in past mercy: the One who sheltered, guided, and enriched you before will never abandon you now."
      },
      {
        id: "93-q4",
        label: "Quran",
        sourceRef: "Ad-Duha (93:9–11)",
        prompt: "How does Surah Ad-Duha translate gratitude for past divine care into ethical action in verses 93:9–11?",
        options: [
          "Do not oppress the orphan, do not repel the petitioner/asker, and proclaim the favor of your Lord",
          "Keep all blessings secret and avoid the poor",
          "Build high walls around your home",
          "Refuse to speak to travelers"
        ],
        correctIndex: 0,
        explanation: "Verses 93:9–11 link our own vulnerability (once orphaned, seeking, poor) to gentle, dignified compassion toward orphans and those in need."
      },
      {
        id: "93-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 93:3–8",
        prompt: "When a believer goes through a season of spiritual dryness or unanswered-feeling silence, what remedy does Surah Ad-Duha offer?",
        options: [
          "Remember Allah's past rescues in your life and trust that the Hereafter—and what lies ahead—is better than what has passed",
          "Assume Allah is angry and stop praying",
          "Compare your life to worldly celebrities",
          "Wait passively without gratitude"
        ],
        correctIndex: 0,
        explanation: "Looking back at how Allah carried us through earlier storms restores certainty that He is still carrying us through the present night."
      }
    ]
  },
  {
    number: 94,
    name: "Ash-Sharh",
    arabicName: "الشرح",
    volume: "Volume 05",
    theme: "Expansion of the Chest & The Infallible Formula of Relief",
    questions: [
      {
        id: "94-q1",
        label: "Quran",
        sourceRef: "Ash-Sharh (94:1–4)",
        prompt: "What three personal favors does Allah recount to console the Prophet (peace be upon him) in verses 94:1–4?",
        options: [
          "Expanding his breast (inshirah as-sadr), removing his heavy burden, and raising high his renown/mention",
          "Granting him silver mines, tall fortresses, and long life",
          "Removing all opposition in Makkah immediately",
          "Giving him wings to travel the heavens daily"
        ],
        correctIndex: 0,
        explanation: "Verses 94:1–4 remind the Prophet (peace be upon him) that Allah opened his heart to light, lifted crushing weight from his back, and elevated his name."
      },
      {
        id: "94-q2",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas (RA) — Ayah 94:5–6",
        prompt: "What famous Arabic grammatical insight did Ibn 'Abbas (RA) draw from the repetition 'Inna ma'al-'usri yusra' (94:5–6)?",
        options: [
          "Al-'Usr (hardship) is definite (with Al-) so both verses refer to the same single hardship, while Yusra (ease) is indefinite—meaning two eases accompany one hardship",
          "Both hardship and ease are indefinite and equal in number",
          "Ease only arrives fifty years after hardship ends",
          "The two verses contradict each other"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) famously declared: 'One hardship will never defeat two eases!'—pointing to the definite singular al-'usr versus the indefinite, doubled yusran."
      },
      {
        id: "94-q3",
        label: "Tafsir",
        sourceRef: "Qatadah & Mujahid — Ayah 94:4",
        prompt: "How did Qatadah and Mujahid illustrate Allah's promise 'And We raised high for you your renown' (Wa rafa'na laka dhikrak)?",
        options: [
          "Whenever Allah is mentioned in the Shahadah, Adhan, or Khutbah across the world, His Messenger Muhammad (peace be upon him) is mentioned alongside Him",
          "Only historians in Madinah remembered his name",
          "His name was carved on desert cliffs",
          "It applied only during his lifetime"
        ],
        correctIndex: 0,
        explanation: "Five times a day across every continent, the Adhan and Shahadah proclaim Allah's Oneness alongside the prophethood of Muhammad (peace be upon him)."
      },
      {
        id: "94-q4",
        label: "Quran",
        sourceRef: "Ash-Sharh (94:7–8)",
        prompt: "What does Allah instruct the believer to do in verses 94:7–8 once daily duties are completed?",
        options: [
          "'So when you have finished [your duties], then stand up [for worship/striving], and to your Lord direct your longing'",
          "'Retire completely from worship once your work is done'",
          "'Seek praise from neighbors for your efforts'",
          "'Spend the rest of the night counting your gains'"
        ],
        correctIndex: 0,
        explanation: "Verses 94:7–8 teach continuous spiritual momentum: when one duty ends, turn to worship and direct all longing solely toward Allah."
      },
      {
        id: "94-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 94:5–6",
        prompt: "Why is it significant that the Qur'an says 'WITH hardship is ease' (ma'al-'usr) rather than merely 'after hardship'?",
        options: [
          "Divine relief, strength, and hidden mercy accompany the believer right inside the trial, not only after it finishes",
          "Hardship is just an illusion that doesn't exist",
          "Believers should never feel sorrow during trials",
          "Ease means avoiding all responsibility"
        ],
        correctIndex: 0,
        explanation: "'Ma'a' (with) means Allah's sustaining ease is already woven into the middle of the storm."
      }
    ]
  },
  {
    number: 95,
    name: "At-Tin",
    arabicName: "التين",
    volume: "Volume 05",
    theme: "Sacred Prophetic Geographies, Ahsan Taqwim & Divine Justice",
    questions: [
      {
        id: "95-q1",
        label: "Tafsir",
        sourceRef: "Ibn 'Abbas & Ibn Kathir — Ayah 95:1–3",
        prompt: "What three centers of monotheistic revelation are represented by the oaths 'By the fig and the olive, Mount Sinai, and this secure city'?",
        options: [
          "The Levant/Jerusalem (Isa), Mount Sinai (Musa), and Makkah (Muhammad, peace be upon them all)",
          "Egypt, Persia, and India",
          "Yemen, Oman, and Bahrain",
          "Athens, Rome, and Alexandria"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas and Ibn Kathir explain that the fig/olive land, Tur Sinin, and Al-Balad al-Amin evoke the three great abodes of prophetic revelation."
      },
      {
        id: "95-q2",
        label: "Quran",
        sourceRef: "At-Tin (95:4–6)",
        prompt: "In what state did Allah create humanity (95:4), and what preserves a person from falling to 'the lowest of the low' (95:5–6)?",
        options: [
          "Created in the best of molds (ahsani taqwim); preserved only by faith and righteous deeds, which bring an uninterrupted reward",
          "Created in weakness; preserved by wealth and status",
          "Created without intellect; preserved by physical strength",
          "Created equal to stones; preserved by lineage"
        ],
        correctIndex: 0,
        explanation: "Verses 95:4–6 declare human nobility in creation (ahsan taqwim), warning that rejecting faith degrades us unless we hold fast to Iman and righteous action."
      },
      {
        id: "95-q3",
        label: "Tafsir",
        sourceRef: "Mujahid & Classical Scholars — Ayah 95:4",
        prompt: "What does 'Ahsani Taqwim' encompass according to Mujahid and classical exegetes?",
        options: [
          "Upright stature, balanced beauty, intellect, conscience, and the spiritual capacity to know and worship Allah",
          "Only physical height and speed",
          "The ability to fly across oceans",
          "Immunity from aging or illness"
        ],
        correctIndex: 0,
        explanation: "Humanity's 'best of molds' unites physical proportion with moral reason and spiritual receptivity to divine guidance."
      },
      {
        id: "95-q4",
        label: "Quran",
        sourceRef: "At-Tin (95:7–8)",
        prompt: "What rhetorical question closes Surah At-Tin in verse 95:8?",
        options: [
          "'Is not Allah the most just of judges (Ahkam al-Hakimin)?'",
          "'Who will rule the markets of Makkah?'",
          "'How many olives grow on a single tree?'",
          "'Why do seasons change every year?'"
        ],
        correctIndex: 0,
        explanation: "Verse 95:8 affirms absolute divine justice: because Allah is the Most Just of Judges, accountability on the Day of Judgment is both necessary and perfect."
      },
      {
        id: "95-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 95:4–6",
        prompt: "What does Surah At-Tin teach us about human dignity and self-worth?",
        options: [
          "Our dignity is a sacred gift from Allah that rises through faith and good character, and falls only when we surrender to base desires",
          "Human worth is determined by social media popularity",
          "Once someone makes a mistake, they can never rise again",
          "Intellect alone guarantees moral excellence without faith"
        ],
        correctIndex: 0,
        explanation: "Recognizing that Allah fashioned us in ahsani taqwim inspires both gratitude and moral responsibility."
      }
    ]
  },
  {
    number: 96,
    name: "Al-'Alaq",
    arabicName: "العلق",
    volume: "Volume 05",
    theme: "First Revelation (Iqra'), Knowledge in Allah's Name & Sujud",
    questions: [
      {
        id: "96-q1",
        label: "Quran",
        sourceRef: "Al-'Alaq (96:1–5)",
        prompt: "What were the very first verses revealed to the Prophet Muhammad (peace be upon him) in Cave Hira?",
        options: [
          "'Read in the name of your Lord who created—created man from a clinging substance ('alaq). Read, and your Lord is the Most Generous, who taught by the pen'",
          "'Stand up at night and pray until dawn'",
          "'Travel to Madinah before winter arrives'",
          "'By time, indeed mankind is in loss'"
        ],
        correctIndex: 0,
        explanation: "Verses 96:1–5 mark the historic opening of revelation—anchoring literacy, learning, and the pen in the name of the Creator."
      },
      {
        id: "96-q2",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & As-Sa'di — Ayah 96:1",
        prompt: "Why is it crucial that the command 'Iqra'!' (Read!) is immediately followed by 'Bismi Rabbika' (In the name of your Lord)?",
        options: [
          "Because knowledge detached from reverence for Allah can breed arrogance, whereas knowledge pursued in His name refines conscience and serves humanity",
          "Because only religious scholars are allowed to read",
          "Because secular literacy is forbidden",
          "Because reading should only happen in caves"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and As-Sa'di emphasize that 'Bismi Rabbika' tethers intellect to humility and moral purpose."
      },
      {
        id: "96-q3",
        label: "Quran",
        sourceRef: "Al-'Alaq (96:6–8)",
        prompt: "According to verse 96:6–7, what causes a human being to transgress bounds?",
        options: [
          "Seeing himself as self-sufficient (istighna') and forgetting that to Allah is the return",
          "Asking too many questions about science",
          "Living in poverty without wealth",
          "Traveling across the desert"
        ],
        correctIndex: 0,
        explanation: "Verses 96:6–8 diagnose human tyranny: the illusion of self-sufficiency makes the ego forget its Creator and its inevitable return to Him."
      },
      {
        id: "96-q4",
        label: "Quran",
        sourceRef: "Al-'Alaq (96:19)",
        prompt: "How does Surah Al-'Alaq command the believer to respond to the arrogant oppressor who tries to forbid prayer?",
        options: [
          "'No! Do not obey him. But prostrate and draw near [to Allah] (wasjud waqtarib)'",
          "'Stop praying in public permanently'",
          "'Negotiate a compromise with the oppressor'",
          "'Respond with insults in the streets'"
        ],
        correctIndex: 0,
        explanation: "Verse 96:19 concludes with a timeless prescription for spiritual resilience: refuse to obey tyranny, bow your forehead in Sujud, and draw near to Allah."
      },
      {
        id: "96-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 96:19",
        prompt: "What paradox of closeness to Allah does 'Prostrate and draw near' reveal?",
        options: [
          "The lower the believer bows in humble prostration on the ground, the higher the soul rises in nearness to Allah",
          "Closeness to Allah is achieved by standing taller than others",
          "Prostration is only symbolic and not physical",
          "Drawing near to Allah requires leaving all daily duties"
        ],
        correctIndex: 0,
        explanation: "In Sujud, the seat of human pride (the forehead) touches the earth—and precisely there, the servant is closest to the Most High."
      }
    ]
  },
  {
    number: 97,
    name: "Al-Qadr",
    arabicName: "القدر",
    volume: "Volume 05",
    theme: "The Night of Decree, Descent of Angels & Crystalline Peace",
    questions: [
      {
        id: "97-q1",
        label: "Quran",
        sourceRef: "Al-Qadr (97:1–3)",
        prompt: "What two monumental truths about 'Laylat al-Qadr' (the Night of Decree) are stated in verses 97:1–3?",
        options: [
          "The Qur'an was sent down during it, and that single night is better than a thousand months",
          "It occurs only once every century and lasts for three days",
          "Fasting is forbidden during that night",
          "Only prophets are permitted to stay awake in it"
        ],
        correctIndex: 0,
        explanation: "Verses 97:1–3 reveal that the Qur'an descended on Laylat al-Qadr and that worship on this one night outweighs a thousand months (over 83 years)."
      },
      {
        id: "97-q2",
        label: "Quran",
        sourceRef: "Al-Qadr (97:4–5)",
        prompt: "Who descends during Laylat al-Qadr by permission of their Lord, and what atmosphere endures until dawn?",
        options: [
          "The angels and the Spirit (Jibril) descend for every matter, and it is pure Peace (Salam) until the emergence of dawn",
          "Storm clouds and thunderbolts descend without pause",
          "Only earthly travelers walk the streets",
          "The stars vanish before midnight"
        ],
        correctIndex: 0,
        explanation: "Verses 97:4–5 describe heaven opening as angels and Jibril (Ar-Ruh) descend, enveloping the earth in spiritual peace until Fajr."
      },
      {
        id: "97-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Az-Zajjaj — Meaning of Al-Qadr",
        prompt: "Which dimensions of meaning do classical scholars like Ibn Kathir and Az-Zajjaj note in the word 'Qadr'?",
        options: [
          "Honor/High Stature (Sharaf) and Decree/Destiny (Taqdir), as annual decrees are assigned and worshipers gain immense nobility",
          "Only physical weight and measurement",
          "Only financial debt",
          "A type of desert rainfall"
        ],
        correctIndex: 0,
        explanation: "Classical mufassirun highlight both meanings: it is a night of supreme honor and a night when divine decrees for the coming year are entrusted to the angels."
      },
      {
        id: "97-q4",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Ayah 97:3",
        prompt: "How does Imam As-Sa'di explain 'better than a thousand months' in practical terms?",
        options: [
          "Sincere deeds—prayer, charity, Qur'an recitation, and repentance—on this single night outweigh equivalent deeds over 83 years and 4 months without it",
          "It means a person ages 83 years in one night",
          "It means prayers on other nights are not accepted",
          "It applies only to daytime work"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di explains that Allah multiplies the spiritual weight of worship on Laylat al-Qadr beyond an entire lifetime of ordinary months."
      },
      {
        id: "97-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 97:5",
        prompt: "How can a seeker prepare their heart to receive the 'Peace until dawn' (Salam) of Laylat al-Qadr?",
        options: [
          "By clearing away grudges, slowing down distractions, and spending the night in sincere prayer, Qur'an, and heartfelt du'a",
          "By waiting for a physical sign before starting any worship",
          "By arguing over the exact calendar date instead of worshipping",
          "By sleeping through the last ten nights"
        ],
        correctIndex: 0,
        explanation: "The peace of Laylat al-Qadr is tasted by hearts that empty themselves of noise and turn sincerely to Allah throughout the last ten nights."
      }
    ]
  },
  {
    number: 98,
    name: "Al-Bayyinah",
    arabicName: "البينة",
    volume: "Volume 05",
    theme: "Clear Evidence, Pure Sincerity (Ikhlas) & Best of Creation",
    questions: [
      {
        id: "98-q1",
        label: "Quran",
        sourceRef: "Al-Bayyinah (98:1–3)",
        prompt: "What is 'Al-Bayyinah' (the Clear Evidence) sent by Allah to resolve the confusion of both the People of the Scripture and the polytheists?",
        options: [
          "A Messenger from Allah (Muhammad, peace be upon him) reciting purified scriptures containing upright, just laws",
          "A golden tablet discovered in a cave",
          "A lunar eclipse lasting seven nights",
          "A treaty signed by desert merchants"
        ],
        correctIndex: 0,
        explanation: "Verses 98:1–3 define the Clear Proof as the Messenger of Allah reciting purified pages (suhufan mutahharah) free of corruption and falsehood."
      },
      {
        id: "98-q2",
        label: "Quran",
        sourceRef: "Al-Bayyinah (98:5)",
        prompt: "Into what three core commands does verse 98:5 distill the eternal essence of true religion?",
        options: [
          "Worshipping Allah with pure sincerity (ikhlas) inclining to truth, establishing the prayer, and giving Zakah",
          "Accumulating wealth, building monuments, and fasting once a year",
          "Debating theology, isolating from family, and traveling",
          "Memorizing poetry, trading spices, and wearing white"
        ],
        correctIndex: 0,
        explanation: "Verse 98:5 summarizes the straight religion (Din al-Qayyimah): sincere monotheistic worship, consistent prayer, and purifying charity."
      },
      {
        id: "98-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir — Ayah 98:2–3",
        prompt: "How does Imam Ibn Kathir explain 'Suhufan Mutahharah' (purified scriptures) and 'Kutubun Qayyimah'?",
        options: [
          "Scriptures elevated above falsehood, doubt, and distortion, containing upright, balanced laws that preserve human dignity and justice",
          "Scrolls washed with rainwater before reading",
          "Books locked away from ordinary believers",
          "Temporary notes meant for a single tribe"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir notes that both the revelation's purity (mutahharah) and its upright, just guidance (qayyimah) leave no excuse for division."
      },
      {
        id: "98-q4",
        label: "Quran",
        sourceRef: "Al-Bayyinah (98:7–8)",
        prompt: "How does Allah describe those who believe and do righteous deeds in verses 98:7–8?",
        options: [
          "They are 'the best of creation' (Khayr al-Bariyyah), rewarded with Gardens of perpetual residence—Allah pleased with them and they with Him",
          "They are merely spared punishment without any reward",
          "They are honored only in earthly history books",
          "They are tested forever without peace"
        ],
        correctIndex: 0,
        explanation: "Verses 98:7–8 contrast the worst of creation with 'Khayr al-Bariyyah'—believers of righteous action who attain mutual pleasure with Allah."
      },
      {
        id: "98-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 98:5",
        prompt: "Why does Surah Al-Bayyinah place 'sincerity to Allah in religion' (mukhlishina lahud-din) before prayer and Zakah?",
        options: [
          "Because sincerity is the soul of every act of worship—without it, outward rituals lose their spiritual weight",
          "Because sincerity replaces the need to pray",
          "Because Zakah is only for scholars",
          "Because outward actions do not matter at all"
        ],
        correctIndex: 0,
        explanation: "Ikhlas is the root; prayer and charity are its living branches. Both inward purity and outward obedience belong together."
      }
    ]
  },
  {
    number: 99,
    name: "Az-Zalzalah",
    arabicName: "الزلزلة",
    volume: "Volume 05",
    theme: "The Terminal Earthquake, Earth's Testimony & Atom-Weight Justice",
    questions: [
      {
        id: "99-q1",
        label: "Quran",
        sourceRef: "Az-Zalzalah (99:1–5)",
        prompt: "What astonishing role will the earth itself play on the Day of its final earthquake according to verses 99:4–5?",
        options: [
          "It will report its news (tuhaddithu akhbaraha)—testifying to everything done upon its surface by Allah's command",
          "It will remain completely silent while angels speak",
          "It will turn into water and vanish before any reckoning",
          "It will testify only about kings and generals"
        ],
        correctIndex: 0,
        explanation: "Verses 99:4–5 reveal that the very ground beneath our feet will become a vocal witness, reporting every deed committed upon it."
      },
      {
        id: "99-q2",
        label: "Hadith",
        sourceRef: "Ibn Kathir — Prophetic Explanation of Ayah 99:4",
        prompt: "When the Prophet (peace be upon him) asked, 'Do you know what its news is?' regarding verse 99:4, how did he explain it?",
        options: [
          "'Its news is that it will bear witness against every servant, male or female, about what they did on its surface: You did such-and-such on such-and-such a day'",
          "'Its news is the depth of its oceans'",
          "'Its news is the number of mountains'",
          "'Its news is hidden even from the Day of Judgment'"
        ],
        correctIndex: 0,
        explanation: "As quoted by Ibn Kathir, the Prophet (peace be upon him) explained that the earth will testify with exact dates and details of human deeds."
      },
      {
        id: "99-q3",
        label: "Quran",
        sourceRef: "Az-Zalzalah (99:7–8)",
        prompt: "What standard of precision in divine accounting is declared in the closing two verses of Surah Az-Zalzalah?",
        options: [
          "Whoever does an atom's weight (mithqala dharrah) of good will see it, and whoever does an atom's weight of evil will see it",
          "Only major deeds are weighed; small acts are ignored",
          "Good deeds are counted only in public",
          "Small sins never appear in the record"
        ],
        correctIndex: 0,
        explanation: "Verses 99:7–8 establish absolute, microscopic justice: not even an atom's weight of kindness or harm is overlooked."
      },
      {
        id: "99-q4",
        label: "Tafsir",
        sourceRef: "Sa'id ibn Jubayr — Al-Jami'ah (99:7–8)",
        prompt: "Why did scholars call verses 99:7–8 'Al-Jami'ah' (the Comprehensive), as noted by Sa'id ibn Jubayr?",
        options: [
          "Because they taught believers never to belittle any small act of good or tolerate any minor sin",
          "Because they summarize all rules of inheritance",
          "Because they list every prophet by name",
          "Because they were recited only at Friday gatherings"
        ],
        correctIndex: 0,
        explanation: "Sa'id ibn Jubayr noted that these two verses gather all ethical accountability into one unforgettable rule: every small deed counts."
      },
      {
        id: "99-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 99:4–8",
        prompt: "How does knowing the earth itself will testify about what we did upon it change how we walk through daily spaces?",
        options: [
          "It inspires us to fill every room, street, and prayer mat with acts of kindness, dhikr, and integrity—never belittling a small good deed",
          "It makes us afraid to ever leave our homes",
          "It means only actions done inside a masjid matter",
          "It suggests small kindnesses are too tiny to bother with"
        ],
        correctIndex: 0,
        explanation: "Every place we step can become a witness for us tomorrow—a smile, a quiet charity, a sincere prayer."
      }
    ]
  },
  {
    number: 100,
    name: "Al-'Adiyat",
    arabicName: "العاديات",
    volume: "Volume 05",
    theme: "Loyalty of War Horses vs. Human Ingratitude & Heart Secrets",
    questions: [
      {
        id: "100-q1",
        label: "Quran",
        sourceRef: "Al-'Adiyat (100:1–6)",
        prompt: "Why does Surah Al-'Adiyat open by swearing by panting war horses charging at dawn before rebuking mankind?",
        options: [
          "To contrast the selfless loyalty of animals charging into danger for a human master with human ingratitude (kanud) toward the Creator who showers endless blessings",
          "To teach cavalry tactics for desert warfare",
          "To praise horses above human intellect",
          "To forbid owning animals in cities"
        ],
        correctIndex: 0,
        explanation: "Verses 100:1–6 jolt the conscience: a horse risks its life for a handful of grain, while man forgets the Lord who sustains his every breath."
      },
      {
        id: "100-q2",
        label: "Quran",
        sourceRef: "Al-'Adiyat (100:6–8)",
        prompt: "Which two spiritual flaws of unguided human nature does Surah Al-'Adiyat diagnose in verses 100:6–8?",
        options: [
          "Being ungrateful to one's Lord (kanud) and intense, compulsive love of wealth",
          "Excessive generosity and humility",
          "Too much silence and reflection",
          "Over-eagerness to give charity"
        ],
        correctIndex: 0,
        explanation: "Verses 100:6–8 state plainly: 'Indeed mankind, to his Lord, is ungrateful... and indeed he is, in love of wealth, intense.'"
      },
      {
        id: "100-q3",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Ayah 100:10 (Hussila ma fis-sudur)",
        prompt: "How does Imam As-Sa'di explain 'And that within the breasts is made apparent (hussila ma fis-sudur)' in verse 100:10?",
        options: [
          "Everything concealed in the heart—sincerity, faith, hypocrisy, envy, or greed—is extracted, separated, and laid open as visible reality",
          "Only physical treasures buried in chests are counted",
          "People's hearts are replaced with stone",
          "Hidden intentions remain secret forever"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di explains that hussila means to extract and expose what was inside the chest—stripping away all outward pretenses."
      },
      {
        id: "100-q4",
        label: "Quran",
        sourceRef: "Al-'Adiyat (100:11)",
        prompt: "How does verse 100:11 conclude the Surah after warning that graves will be scattered and hearts exposed?",
        options: [
          "'Indeed, their Lord with them, that Day, is [fully] Acquainted (Khabir)'",
          "'No one will know what happened in the past'",
          "'Wealth will ransom every heart'",
          "'Only spoken promises will be judged'"
        ],
        correctIndex: 0,
        explanation: "Verse 100:11 reminds us that Allah is Khabir—intimately aware of every hidden motive and secret state."
      },
      {
        id: "100-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 100:6–10",
        prompt: "What daily self-check does Surah Al-'Adiyat invite regarding gratitude and wealth?",
        options: [
          "Notice how quickly we complain over small inconveniences while forgetting vast blessings, and purify our hearts from letting love of wealth rule our loyalty to Allah",
          "Give away every possession so you cannot feed your family",
          "Stop working altogether",
          "Assume gratitude only means saying 'thank you' once a year"
        ],
        correctIndex: 0,
        explanation: "Counting Allah's daily favors and holding wealth in our hands rather than our hearts cures the disease of kanud."
      }
    ]
  },
  {
    number: 101,
    name: "Al-Qari'ah",
    arabicName: "القارعة",
    volume: "Volume 05",
    theme: "The Striking Calamity, Weightless Mountains & The Divine Scales",
    questions: [
      {
        id: "101-q1",
        label: "Quran",
        sourceRef: "Al-Qari'ah (101:1–5)",
        prompt: "To what two vivid images does Surah Al-Qari'ah compare people and mountains on the Day of 'The Striking Calamity'?",
        options: [
          "People like scattered moths (farash mabthuth) and mountains like carded, fluffed-up wool ('ihn manfush)",
          "People like marching soldiers and mountains like iron walls",
          "People like sleeping birds and mountains like calm lakes",
          "People like tall trees and mountains like sand dunes"
        ],
        correctIndex: 0,
        explanation: "Verses 101:4–5 depict total cosmic and human disorientation: mighty mountains reduced to weightless wool and panicked crowds like scattered moths."
      },
      {
        id: "101-q2",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Al-Qurtubi — Ayah 101:4",
        prompt: "Why did the Qur'an compare resurrected humanity to 'scattered moths' rather than locusts in verse 101:4?",
        options: [
          "Because unlike locusts that move in coordinated swarms, moths fly erratically in blinding confusion—capturing humanity's utter bewilderment",
          "Because moths live longer than locusts",
          "Because locusts cannot fly at night",
          "Because moths symbolize royal dignity"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and Al-Qurtubi point out that moths dart helplessly in every direction—a chilling portrait of panic without worldly anchors."
      },
      {
        id: "101-q3",
        label: "Quran",
        sourceRef: "Al-Qadr / Al-Qari'ah (101:6–9)",
        prompt: "What single metric determines eternal destiny in verses 101:6–9?",
        options: [
          "Whether one's scales (mawazin) of good deeds are heavy—leading to a pleasant life—or light, leading to Hawiyah (the abyss)",
          "The size of one's earthly inheritance",
          "The number of followers one had in life",
          "Physical strength and speed"
        ],
        correctIndex: 0,
        explanation: "Verses 101:6–9 reduce all earthly distinctions to one decisive question: what weighs heavy on the Divine Scales?"
      },
      {
        id: "101-q4",
        label: "Quran",
        sourceRef: "Al-Qari'ah (101:10–11)",
        prompt: "How does Surah Al-Qari'ah answer its final question, 'And what can make you know what [Hawiyah] is?'",
        options: [
          "'It is a Fire, intensely hot (Narun hamiyah)'",
          "'It is a cold, dark ocean'",
          "'It is a temporary waiting room'",
          "'It is a silent desert'"
        ],
        correctIndex: 0,
        explanation: "Verses 101:10–11 end with stark clarity—warning the soul to turn back to Allah while the door of mercy is still open."
      },
      {
        id: "101-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 101:6–9",
        prompt: "What carries true 'gravity' on the Divine Scales when mountains themselves become weightless like fluffed wool?",
        options: [
          "Sincere faith, humble worship, and righteous deeds done for Allah's sake",
          "Titles, applause, and material possessions",
          "Empty promises without action",
          "Worldly fame"
        ],
        correctIndex: 0,
        explanation: "When everything material dissolves, only sincere obedience and character remain heavy on the Scale."
      }
    ]
  },
  {
    number: 102,
    name: "At-Takathur",
    arabicName: "التكاثر",
    volume: "Volume 05",
    theme: "Rivalry in Accumulation, Stages of Certainty & Accountability for Blessings",
    questions: [
      {
        id: "102-q1",
        label: "Quran",
        sourceRef: "At-Takathur (102:1–2)",
        prompt: "What universal human distraction does Surah At-Takathur expose in its opening two verses?",
        options: [
          "'Competition in [worldly] increase (at-takathur) diverts you, until you visit the graveyards'",
          "'Traveling for knowledge distracts you from trade'",
          "'Sleeping too long prevents you from building cities'",
          "'Charity reduces your standing in society'"
        ],
        correctIndex: 0,
        explanation: "Verses 102:1–2 diagnose the endless race for 'more'—more wealth, status, and numbers—that keeps people distracted until death."
      },
      {
        id: "102-q2",
        label: "Quran",
        sourceRef: "At-Takathur (102:5–7)",
        prompt: "Which two epistemological levels of certainty are named in verses 102:5 and 102:7?",
        options: [
          "Knowledge of certainty ('Ilm al-Yaqin) and Eye of certainty ('Ayn al-Yaqin)",
          "Rumors of certainty and dreams of certainty",
          "Doubt of certainty and silence of certainty",
          "Guesswork and debate"
        ],
        correctIndex: 0,
        explanation: "The Surah warns that if people truly knew with 'Ilm al-Yaqin now, they wouldn't wait until they see Hellfire with 'Ayn al-Yaqin."
      },
      {
        id: "102-q3",
        label: "Quran",
        sourceRef: "At-Takathur (102:8)",
        prompt: "With what sobering reminder does Surah At-Takathur conclude in verse 102:8?",
        options: [
          "'Then you will surely be asked that Day about pleasure/blessings (an-na'im)'",
          "'On that Day no questions will be asked about earthly life'",
          "'Only kings will be questioned about their palaces'",
          "'Blessings are yours to use without gratitude'"
        ],
        correctIndex: 0,
        explanation: "Verse 102:8 reminds us that every comfort—food, health, security, time—is a trust we will be asked about."
      },
      {
        id: "102-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — At-Takathur",
        prompt: "What does the phrase 'until you visit the graveyards' (hatta zurtumul-maqabir) signify?",
        options: [
          "People stay distracted by competing for more until death suddenly arrives—and even graves are only a temporary 'visit' before Resurrection",
          "People should visit cemeteries only to count ancestors",
          "Death is the final end with no resurrection",
          "Living near a cemetery cures greed automatically"
        ],
        correctIndex: 0,
        explanation: "Calling the grave a 'visit' (zurtum) subtly reminds us that the grave itself is not our final stop—Resurrection follows."
      },
      {
        id: "102-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 102:1 & 102:8",
        prompt: "How does Surah At-Takathur speak directly to modern digital life and everyday blessings?",
        options: [
          "It warns against chasing endless metrics (likes, followers, lifestyle comparison) and reminds us to thank Allah even for a glass of cold water",
          "It forbids using any modern technology",
          "It means we should never enjoy good food or water",
          "It encourages competing harder for luxury"
        ],
        correctIndex: 0,
        explanation: "Trading the rat-race of takathur for mindful gratitude turns even a simple sip of cold water into an act of worship."
      }
    ]
  },
  {
    number: 103,
    name: "Al-Asr",
    arabicName: "العصر",
    volume: "Volume 05",
    theme: "Time, Human Loss & The Four Pillars of Salvation",
    questions: [
      {
        id: "103-q1",
        label: "Quran",
        sourceRef: "Al-Asr (103:1–2)",
        prompt: "What universal diagnosis does Surah Al-Asr deliver right after swearing by Time (Al-Asr)?",
        options: [
          "Indeed, mankind is in loss",
          "Indeed, mankind is already guaranteed success",
          "Only scholars are subject to accountability",
          "Time will stand still for those who travel"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Asr (103:1–2) opens with: 'By time, Indeed, mankind is in loss'—warning that without guidance, human lifespan slips into ruin."
      },
      {
        id: "103-q2",
        label: "Quran",
        sourceRef: "Al-Asr (103:3)",
        prompt: "Which four conditions does Ayah 103:3 name as the exception to human loss?",
        options: [
          "Faith (Iman), righteous deeds, advising one another to truth, and advising one another to patience",
          "Wealth, lineage, long life, and public praise",
          "Solitude, silence, travel, and fasting alone",
          "Debate, memorization, trade, and leadership"
        ],
        correctIndex: 0,
        explanation: "Ayah 103:3 exempts 'those who have believed and done righteous deeds and advised one another to truth and advised one another to patience.'"
      },
      {
        id: "103-q3",
        label: "Tafsir",
        sourceRef: "Imam Ash-Shafi'i",
        prompt: "What did Imam Ash-Shafi'i famously remark about Surah Al-Asr?",
        options: [
          "'If people were to reflect upon this Surah alone, it would suffice them'",
          "'This Surah should only be studied after memorizing the longer chapters'",
          "'Its verses apply exclusively to merchants'",
          "'It contains only historical parables'"
        ],
        correctIndex: 0,
        explanation: "Imam Ash-Shafi'i remarked that if people were to reflect deeply upon Surah Al-Asr alone, it would suffice them because it summarizes both personal faith/action and communal responsibility."
      },
      {
        id: "103-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Al-Asr",
        prompt: "Why does the Surah use the mutual form 'Tawasi' (advising one another) for truth and patience?",
        options: [
          "Salvation is not purely solitary—believers strengthen one another through shared counsel to truth and perseverance",
          "It means advice should only be given to strangers",
          "It restricts patience to times of financial gain",
          "It replaces individual prayer with group discussion"
        ],
        correctIndex: 0,
        explanation: "Tawasi bil-Haqq and Tawasi bis-Sabr highlight mutual stewardship: steadfastness on truth requires a supportive community reminding one another with wisdom and patience."
      },
      {
        id: "103-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 103:1",
        prompt: "How does viewing time as 'diminishing capital' reshape daily priorities?",
        options: [
          "Every setting sun spends a non-renewable portion of life, calling us to invest each day in faith, good deeds, and sincere counsel",
          "It encourages rushing through worship to save minutes",
          "It suggests that planning for the future is pointless",
          "It means past mistakes can never be repaired"
        ],
        correctIndex: 0,
        explanation: "Time is non-renewable capital; each passing day is only truly preserved when invested in the four pillars named in Ayah 103:3."
      }
    ]
  },
  {
    number: 104,
    name: "Al-Humazah",
    arabicName: "الهمزة",
    volume: "Volume 05",
    theme: "Condemnation of Slander, Wealth-Obsession & Al-Hutamah",
    questions: [
      {
        id: "104-q1",
        label: "Quran",
        sourceRef: "Al-Humazah (104:1–3)",
        prompt: "Which twin spiritual diseases does Surah Al-Humazah condemn in its opening verses?",
        options: [
          "Mocking/slandering people (humazah, lumazah) and hoarding wealth while deluding oneself that wealth grants immortality",
          "Traveling for trade and building bridges",
          "Asking questions in study circles",
          "Working in agriculture and weaving"
        ],
        correctIndex: 0,
        explanation: "Verses 104:1–3 warn against character assassination and the delusion that amassed wealth can shield a person from death and accountability."
      },
      {
        id: "104-q2",
        label: "Quran",
        sourceRef: "Al-Humazah (104:4–7)",
        prompt: "What is 'Al-Hutamah' (the Crusher) and where does its fire mount according to verse 104:7?",
        options: [
          "The kindled fire of Allah that mounts directly to the hearts (al-af'idah)—the seats of arrogance",
          "A cold mountain valley outside Makkah",
          "A seasonal desert storm",
          "An earthly prison built by kings"
        ],
        correctIndex: 0,
        explanation: "Verses 104:4–7 describe Al-Hutamah as Allah's ignited fire reaching directly into the hearts where pride and malice were harbored."
      },
      {
        id: "104-q3",
        label: "Quran",
        sourceRef: "Al-Humazah (104:8–9)",
        prompt: "How does verse 104:8–9 describe the enclosure of Al-Hutamah over the condemned?",
        options: [
          "It is closed/vaulted over them in towering, extended columns",
          "Its gates remain wide open for easy escape",
          "It lasts only for a single afternoon",
          "It cools down when wealth is offered"
        ],
        correctIndex: 0,
        explanation: "Verses 104:8–9 emphasize complete confinement ('alayhim mu'sadah fi 'amadim-mumaddadah), shattering the illusion of worldly security."
      },
      {
        id: "104-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Humazah & Lumazah",
        prompt: "What distinction do commentators draw between 'Humazah' and 'Lumazah'?",
        options: [
          "Backbiting/assassinating reputations behind someone's back and sneering/mocking to their face with gestures or words",
          "Two types of charitable endowments",
          "Two stars in the winter sky",
          "Two ancient dialects of Arabic"
        ],
        correctIndex: 0,
        explanation: "Both terms capture toxic mockery—whether verbal slander behind backs or scornful gestures and taunts to people's faces."
      },
      {
        id: "104-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 104:1",
        prompt: "How can a believer guard against becoming a 'Humazah' or 'Lumazah' in modern life?",
        options: [
          "By refusing to leave snarky comments, forward gossip, or mock others' flaws—and instead seeking honor in humility and charity",
          "By never speaking to anyone at all",
          "By criticizing people only anonymously online",
          "By hoarding wealth quietly without sharing"
        ],
        correctIndex: 0,
        explanation: "Guarding the tongue and fingertips from mocking others protects the heart from arrogance and cruelty."
      }
    ]
  },
  {
    number: 105,
    name: "Al-Fil",
    arabicName: "الفيل",
    volume: "Volume 05",
    theme: "Divine Protection of the Ka'bah & Defeat of Imperial Arrogance",
    questions: [
      {
        id: "105-q1",
        label: "Quran",
        sourceRef: "Al-Fil (105:1–5)",
        prompt: "How did Allah destroy the mighty army of the Elephant (Ashab al-Fil) that marched to demolish the Ka'bah?",
        options: [
          "He sent flocks of birds (Tayran Ababil) pelting them with stones of baked clay (sijjil), leaving them like eaten, digested straw",
          "He sent a fleet of warships across the Red Sea",
          "He raised an army of desert knights from Madinah",
          "He negotiated a truce with Abraha"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Fil (105:1–5) recounts how Allah humbled an empire's war elephants using small birds carrying stones of baked clay."
      },
      {
        id: "105-q2",
        label: "Tafsir",
        sourceRef: "Ibn Kathir — Abraha's Lead Elephant (Mahmud)",
        prompt: "What remarkable behavior of Abraha's lead elephant, Mahmud, does Imam Ibn Kathir recount?",
        options: [
          "Whenever steered toward Makkah, the elephant knelt down and refused to advance, yet when turned toward Yemen or Syria it ran swiftly",
          "It swam across the Red Sea to Abyssinia",
          "It led the army straight through the Ka'bah's walls",
          "It disappeared into the desert before reaching Yemen"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir records that the lead elephant showed more reverence for Allah's Sacred House than the arrogant invader commanding it."
      },
      {
        id: "105-q3",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — 'Abdul-Muttalib's Declaration",
        prompt: "When human defense against Abraha's army seemed impossible, what did 'Abdul-Muttalib declare regarding the Ka'bah?",
        options: [
          "'The House has a Lord who will protect it'",
          "'We must surrender the sanctuary to save our camels'",
          "'Let us rebuild the Ka'bah in another city'",
          "'Only walls of iron can save Makkah'"
        ],
        correctIndex: 0,
        explanation: "'Abdul-Muttalib entrusted the Sacred House to its True Sovereign—and Allah answered with unmistakable divine protection."
      },
      {
        id: "105-q4",
        label: "Quran",
        sourceRef: "Al-Fil (105:2 & 105:5)",
        prompt: "What did Allah turn the invaders' treacherous plan into, and what did they resemble at the end?",
        options: [
          "Complete ruin/misguidance (tadlil), and they became like chewed, eaten straw ('asfim ma'kul)",
          "A lasting victory commemorated in Yemen",
          "A peaceful trade alliance with Quraysh",
          "Towering pillars of marble"
        ],
        correctIndex: 0,
        explanation: "Verses 105:2 and 105:5 emphasize how completely imperial arrogance was reduced to scattered, trampled chaff."
      },
      {
        id: "105-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Surah Al-Fil",
        prompt: "What enduring lesson of reliance on Allah (tawakkul) does Surah Al-Fil offer believers facing overwhelming odds?",
        options: [
          "Allah can turn even the smallest, most unexpected creation into an instrument of deliverance—so never measure His power by human military might",
          "Believers should never take practical precautions",
          "Strength belongs solely to the largest army",
          "Birds only appear during wartime"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Fil anchors trust in Allah's guardianship: no earthly power can prevail against what Allah chooses to protect."
      }
    ]
  },
  {
    number: 106,
    name: "Quraysh",
    arabicName: "قريش",
    volume: "Volume 05",
    theme: "Sustenance, Security & Gratitude to the Lord of the House",
    questions: [
      {
        id: "106-q1",
        label: "Quran",
        sourceRef: "Quraysh (106:1–2)",
        prompt: "Which two seasonal journeys formed the economic lifeline of Makkah mentioned in Surah Quraysh?",
        options: [
          "The winter caravan (to Yemen) and the summer caravan (to the Levant/Syria)",
          "The spring voyage to India and the autumn voyage to Spain",
          "The harvest festival in Ta'if and the mining expedition in Najd",
          "Weekly riverboats along the Euphrates"
        ],
        correctIndex: 0,
        explanation: "Verses 106:1–2 recall Allah's favor upon Quraysh: safe, accustomed passage for their winter and summer trade caravans."
      },
      {
        id: "106-q2",
        label: "Quran",
        sourceRef: "Quraysh (106:3–4)",
        prompt: "In response to being fed from hunger and made safe from fear, what does verse 106:3 command Quraysh to do?",
        options: [
          "'Let them worship the Lord of this House (the Ka'bah)'",
          "'Let them build more idols around the sanctuary'",
          "'Let them double their caravan taxes'",
          "'Let them close Makkah to all pilgrims'"
        ],
        correctIndex: 0,
        explanation: "Verses 106:3–4 tie material security directly to spiritual obligation: the only fitting gratitude for provision and safety is exclusive worship of Allah."
      },
      {
        id: "106-q3",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Ayah 106:4 (Food & Security)",
        prompt: "According to Imam As-Sa'di, what two foundational pillars of human well-being does verse 106:4 name?",
        options: [
          "Sustenance/food security (saving from hunger) and safety/political security (delivering from fear)",
          "Fame and architectural luxury",
          "Military conquest and silver hoards",
          "Solitude and silence"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di observes that without food, starvation destroys life; without safety, constant fear paralyzes it—Allah granted both to Makkah."
      },
      {
        id: "106-q4",
        label: "Tafsir",
        sourceRef: "Ibn Kathir — Pairing with Surah Al-Fil",
        prompt: "How is Surah Quraysh thematically paired with Surah Al-Fil right before it?",
        options: [
          "Al-Fil recounts Allah's protection from an external destroyer, while Quraysh recounts His positive blessings of prosperity and safe passage upon the city",
          "They describe two completely unrelated civilizations",
          "Quraysh was revealed first and Al-Fil explains its trade routes",
          "Both Surahs prohibit commercial travel"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and classical scholars note that together the two Surahs remind Makkah of both protective and nurturing mercy—calling them to pure Tawhid."
      },
      {
        id: "106-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 106:4",
        prompt: "Whenever we sit down to a peaceful meal in safety, what response does Surah Quraysh call forth from us?",
        options: [
          "Deep gratitude to the Provider—recognizing that food on the table and safety in our home are direct gifts demanding sincere worship",
          "Taking comfort for granted as self-earned",
          "Worrying only about tomorrow's luxury",
          "Ignoring the hungry around us"
        ],
        correctIndex: 0,
        explanation: "Freedom from hunger and fear are immense blessings; true gratitude turns daily security into humble devotion to Allah."
      }
    ]
  },
  {
    number: 107,
    name: "Al-Ma'un",
    arabicName: "الماعون",
    volume: "Volume 05",
    theme: "Faith & Compassion, Sincere Prayer & Neighborly Kindness",
    questions: [
      {
        id: "107-q1",
        label: "Quran",
        sourceRef: "Al-Ma'un (107:1–3)",
        prompt: "How does Surah Al-Ma'un describe 'the one who denies the Recompense (Ad-Din)' in verses 107:2–3?",
        options: [
          "He harshly repulses the orphan and does not encourage the feeding of the poor",
          "He debates philosophy in the marketplace",
          "He travels without a compass",
          "He forgets the names of ancient kings"
        ],
        correctIndex: 0,
        explanation: "Verses 107:1–3 expose the moral root of denying Judgment: social cruelty toward orphans and indifference toward the hungry."
      },
      {
        id: "107-q2",
        label: "Quran",
        sourceRef: "Al-Ma'un (107:4–6)",
        prompt: "Why does verse 107:4 pronounce 'Woe to those who pray'—and who is specifically meant in verses 107:5–6?",
        options: [
          "Those who are heedless/neglectful of their prayer and who only make a public show (riya') of their deeds",
          "Those who pray silently at night",
          "Those who pray in congregation at the masjid",
          "Those who make short du'a after prayer"
        ],
        correctIndex: 0,
        explanation: "Verses 107:4–6 never condemn prayer itself; they condemn treating prayer carelessly and turning worship into hollow performance for applause."
      },
      {
        id: "107-q3",
        label: "Quran",
        sourceRef: "Al-Ma'un (107:7)",
        prompt: "What does 'Al-Ma'un' in the final verse ('and withhold small kindnesses') refer to?",
        options: [
          "Everyday neighborly kindnesses and simple helpful items—like lending a pot, sharing water, or offering basic assistance",
          "Large royal treasuries",
          "Secret military treaties",
          "Expensive silk garments"
        ],
        correctIndex: 0,
        explanation: "Verse 107:7 shows that stinginess even in tiny, everyday neighborly favors reveals a hardened heart."
      },
      {
        id: "107-q4",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Ayah 107:1–7",
        prompt: "According to Imam As-Sa'di, what two pillars of religion does the hypocrite fail to fulfill in Surah Al-Ma'un?",
        options: [
          "The rights of the Creator (sincere prayer free of riya') and the rights of creation (mercy to orphans, feeding the poor, and neighborly kindness)",
          "Trade law and architectural design",
          "Poetry and lineage preservation",
          "Fasting and desert navigation"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di summarizes the Surah beautifully: true faith unites sincere devotion to Allah with active compassion toward people."
      },
      {
        id: "107-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 107:2–7",
        prompt: "What is the practical test of a living prayer according to Surah Al-Ma'un?",
        options: [
          "It softens our hearts toward orphans, the poor, and neighbors—making us more generous and sincere rather than performative",
          "It makes us feel superior to those who pray less",
          "It separates worship completely from how we treat people",
          "It focuses only on outward posture while ignoring character"
        ],
        correctIndex: 0,
        explanation: "Authentic salah flows outward into mercy; if our worship doesn't soften our hands and hearts, it calls for sincere renewal."
      }
    ]
  },
  {
    number: 108,
    name: "Al-Kawthar",
    arabicName: "الكوثر",
    volume: "Volume 05",
    theme: "Boundless Abundance, Prayer & Sacrifice, and Prophetic Vindication",
    questions: [
      {
        id: "108-q1",
        label: "Quran",
        sourceRef: "Al-Kawthar (108:1)",
        prompt: "What is 'Al-Kawthar' that Allah granted to the Prophet Muhammad (peace be upon him) in the opening verse?",
        options: [
          "Abundant goodness—including the celestial River/Pool in Paradise, prophetic honor, and an enduring spiritual legacy",
          "A single oasis outside Madinah",
          "A silver crown from Persia",
          "Exemption from all earthly grief"
        ],
        correctIndex: 0,
        explanation: "Verse 108:1 ('Inna a'taynakal-Kawthar') consoles the Prophet (peace be upon him) with boundless spiritual abundance in both worlds and the River of Kawthar in Jannah."
      },
      {
        id: "108-q2",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Context of Revelation",
        prompt: "What cruel taunt prompted the revelation of Surah Al-Kawthar?",
        options: [
          "When the Prophet's infant sons passed away, mockers like Al-'As ibn Wa'il called him 'Abtar' (cut off with no legacy)—so Allah declared his enemy is the one cut off",
          "When Quraysh praised the Prophet's poetry",
          "When a trade caravan returned late",
          "When the Prophet built the masjid in Quba"
        ],
        correctIndex: 0,
        explanation: "Mockers gloated that his lineage would be forgotten; instead, his name is honored billions of times daily while his enemies vanished into obscurity."
      },
      {
        id: "108-q3",
        label: "Quran",
        sourceRef: "Al-Kawthar (108:2)",
        prompt: "How does verse 108:2 instruct the Prophet (peace be upon him) to respond to the gift of Al-Kawthar?",
        options: [
          "'So pray to your Lord and sacrifice [to Him alone] (Fasalli li-Rabbika wanhar)'",
          "'Boast before your rivals in Makkah'",
          "'Withdraw from the city permanently'",
          "'Offer sacrifices to tribal idols for peace'"
        ],
        correctIndex: 0,
        explanation: "Verse 108:2 pairs two supreme acts of exclusive worship: prayer (salah) and sacrifice (nahr) directed solely to Allah."
      },
      {
        id: "108-q4",
        label: "Quran",
        sourceRef: "Al-Kawthar (108:3)",
        prompt: "What verdict closes the shortest Surah of the Qur'an in verse 108:3?",
        options: [
          "'Indeed, your enemy is the one cut off (al-abtar)'",
          "'Indeed, your enemy will rule forever'",
          "'Indeed, all nations will forget the Qur'an'",
          "'Indeed, sorrow lasts forever'"
        ],
        correctIndex: 0,
        explanation: "Verse 108:3 reverses the insult completely: those who oppose Allah's Messenger are the ones truly severed from lasting good."
      },
      {
        id: "108-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Surah Al-Kawthar",
        prompt: "How does Surah Al-Kawthar comfort a believer experiencing painful loss or mockery?",
        options: [
          "It reminds us that Allah heals broken hearts with eternal promises and calls us to respond with prayer, sacrifice, and sending Salawat upon His Messenger",
          "It tells us that earthly approval is all that matters",
          "It discourages grieving over loved ones",
          "It advises answering insults with cruelty"
        ],
        correctIndex: 0,
        explanation: "True abundance is measured by Allah's gift and nearness, not by the taunts of people."
      }
    ]
  },
  {
    number: 109,
    name: "Al-Kafirun",
    arabicName: "الكافرون",
    volume: "Volume 05",
    theme: "Theological Integrity & Clear Boundaries Against Syncretism",
    questions: [
      {
        id: "109-q1",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Occasion of Revelation",
        prompt: "What compromise proposal from the pagan leaders of Makkah did Surah Al-Kafirun decisively reject?",
        options: [
          "'Worship our gods for a year, and we will worship your God for a year'",
          "'Leave Makkah for three days during winter'",
          "'Share the profits of the summer caravan'",
          "'Translate the Qur'an into Greek'"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Kafirun drew an unbridgeable line against theological syncretism: Tawhid can never be blended or alternated with idolatry."
      },
      {
        id: "109-q2",
        label: "Quran",
        sourceRef: "Al-Kafirun (109:1–6)",
        prompt: "How does Surah Al-Kafirun conclude in verse 109:6?",
        options: [
          "'For you is your religion, and for me is my religion (Lakum dinukum wa liya din)'",
          "'Let us merge our rituals next season'",
          "'Worship whatever brings the most wealth'",
          "'Keep your beliefs hidden from everyone'"
        ],
        correctIndex: 0,
        explanation: "Verse 109:6 establishes dignified clarity: complete disavowal of shirk without coercion or compromise."
      },
      {
        id: "109-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Al-Baghawi — Ayah 109:2–5",
        prompt: "Why does Surah Al-Kafirun repeat the negation of worship using both verbal ('I do not worship') and nominal ('Nor am I a worshipper') forms?",
        options: [
          "To negate both the present act and any future or habitual state—permanently closing the door on theological dilution",
          "Because the verses were copied twice by mistake",
          "To refer to two different cities",
          "To express hesitation about the future"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir and Al-Baghawi note that combining present action with permanent disposition seals the disavowal of idolatry across all time."
      },
      {
        id: "109-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 02 — Purification of Creed",
        prompt: "Which core pillar of the Qur'an does Surah Al-Kafirun represent alongside Surah Al-Ikhlas?",
        options: [
          "The complete purification of Creed ('Aqidah) from every trace of polytheism (shirk)",
          "Rules of commercial contracts",
          "Detailed chronicles of ancient kings",
          "Regulations of inheritance"
        ],
        correctIndex: 0,
        explanation: "While Al-Ikhlas affirms pure Tawhid positively, Al-Kafirun declares complete innocence (bara'ah) from all false worship."
      },
      {
        id: "109-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 109:6",
        prompt: "What does 'For you is your religion, and for me is my religion' model for living in a diverse world?",
        options: [
          "Standing with dignified conviction in pure Tawhid without compromising core faith to please social pressure",
          "Hiding one's faith out of embarrassment",
          "Treating all beliefs as identical in truth",
          "Speaking harshly to neighbors"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Kafirun teaches calm, principled clarity: courteous coexistence never requires diluting one's devotion to Allah alone."
      }
    ]
  },
  {
    number: 110,
    name: "An-Nasr",
    arabicName: "النصر",
    volume: "Volume 05",
    theme: "Humility in Victory, Tasbih & The Farewell Signal",
    questions: [
      {
        id: "110-q1",
        label: "Quran",
        sourceRef: "An-Nasr (110:1–3)",
        prompt: "When Allah's victory, the conquest, and multitudes entering Islam arrive, what three acts does verse 110:3 command?",
        options: [
          "Exalt with the praise of your Lord (tasbih & tahmid) and seek His forgiveness (istighfar)",
          "Hold victory parades and build monuments to yourself",
          "Retire from prayer and distribute trophies",
          "Boast of military superiority over neighboring tribes"
        ],
        correctIndex: 0,
        explanation: "Surah An-Nasr (110:1–3) teaches the Islamic etiquette of triumph: respond to success with humility, praise, and seeking forgiveness."
      },
      {
        id: "110-q2",
        label: "Hadith",
        sourceRef: "Ibn 'Abbas & 'Umar (RA) — Tafsir An-Nasr",
        prompt: "When 'Umar (RA) asked the elders and young Ibn 'Abbas (RA) about the deeper meaning of Surah An-Nasr, what did Ibn 'Abbas recognize?",
        options: [
          "That it was the subtle announcement of the Prophet's (peace be upon him) approaching passing—the completion of his mission",
          "That it referred only to a battle in Yemen",
          "That it meant the Ka'bah would be relocated",
          "That it predicted a century of famine"
        ],
        correctIndex: 0,
        explanation: "Ibn 'Abbas (RA) perceived that when the mission was crowned with victory and crowds entering faith, it signaled the Prophet's imminent return to Allah—and 'Umar (RA) agreed."
      },
      {
        id: "110-q3",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Istighfar After Worship & Victory",
        prompt: "Why does Allah command seeking forgiveness (Istighfar) at the moment of triumph in verse 110:3, according to Imam As-Sa'di?",
        options: [
          "To guard against pride and self-satisfaction, acknowledging that our gratitude can never match Allah's infinite majesty",
          "Because winning a peaceful conquest is a sin",
          "Because people entering Islam is undesirable",
          "To erase the memory of Makkah"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di notes that just as we say Astaghfirullah after prayer and Hajj, Istighfar after great achievement keeps the heart humble and free of ego."
      },
      {
        id: "110-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — An-Nasr",
        prompt: "What historical distinction belongs to Surah An-Nasr in the revelation of the Qur'an?",
        options: [
          "It is the final complete Surah revealed in the Qur'anic canon",
          "It was the very first Surah revealed in Cave Hira",
          "It is the longest Madani Surah",
          "It was revealed before the Battle of Badr"
        ],
        correctIndex: 0,
        explanation: "Surah An-Nasr is the last complete Surah revealed, marking the triumphant completion of the 23-year prophetic mission."
      },
      {
        id: "110-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 110:3",
        prompt: "How should we apply Surah An-Nasr whenever we achieve a major milestone or breakthrough in life?",
        options: [
          "Credit Allah immediately with Alhamdulillah and SubhanAllah, and seek forgiveness for any shortcomings—never letting success inflate the ego",
          "Attribute success solely to our own brilliance",
          "Look down on those still struggling",
          "Stop striving in worship once goals are met"
        ],
        correctIndex: 0,
        explanation: "True spiritual maturity shines in victory: bowing lower in gratitude and istighfar when doors open."
      }
    ]
  },
  {
    number: 111,
    name: "Al-Masad",
    arabicName: "المسد",
    volume: "Volume 05",
    theme: "Impotence of Wealth & Status Against Truth, and Fulfilled Prophecy",
    questions: [
      {
        id: "111-q1",
        label: "Quran",
        sourceRef: "Al-Masad (111:1–2)",
        prompt: "What does Surah Al-Masad declare about Abu Lahab's wealth and worldly gains when he set himself against Allah's Messenger?",
        options: [
          "'His wealth will not avail him or that which he gained'",
          "'His wealth will ransom him on the Day of Judgment'",
          "'His family lineage will protect him from accountability'",
          "'His tribe will rescue him from the Fire'"
        ],
        correctIndex: 0,
        explanation: "Verses 111:1–2 establish that neither aristocratic bloodline nor accumulated fortune can shield anyone who wages war on divine truth."
      },
      {
        id: "111-q2",
        label: "Quran",
        sourceRef: "Al-Masad (111:3–5)",
        prompt: "How is Abu Lahab's wife (Umm Jamil) described in verses 111:4–5 for her active hostility and malice?",
        options: [
          "As 'the carrier of firewood' (hammalatal-hatab), with a rope of twisted palm-fiber (masad) around her neck",
          "As a silent bystander who regretted her husband's words",
          "As a generous host to travelers",
          "As a scholar of ancient scriptures"
        ],
        correctIndex: 0,
        explanation: "Verses 111:4–5 portray how the very malice she carried—whether literal thorns strewn in the Prophet's path or the fire of slander—becomes her own humiliation."
      },
      {
        id: "111-q3",
        label: "Tafsir",
        sourceRef: "Ibn Kathir & Ar-Razi — Miraculous Prophecy",
        prompt: "Why do classical scholars like Ibn Kathir and Fakhr ad-Din ar-Razi cite Surah Al-Masad as an extraordinary proof of the Qur'an's divine origin?",
        options: [
          "Revealed in early Makkah, it declared Abu Lahab would die in disbelief; he lived over ten more years and could have disproved it simply by uttering the Shahadah—yet he never did",
          "Because Abu Lahab accepted Islam a year later",
          "Because it was revealed after Abu Lahab's death",
          "Because it contains mathematical codes about stars"
        ],
        correctIndex: 0,
        explanation: "For over a decade after revelation, Abu Lahab had every opportunity to pretend to convert and falsify the verse—yet Allah's foreknowledge held true."
      },
      {
        id: "111-q4",
        label: "Tafsir",
        sourceRef: "As-Sa'di — Ayah 111:1–2",
        prompt: "What vital lesson does Imam As-Sa'di draw from the fact that Abu Lahab was the Prophet's own paternal uncle?",
        options: [
          "Blood relation and noble tribal status carry zero weight without faith and obedience to Allah",
          "Relatives of prophets are automatically saved regardless of deeds",
          "Family ties are unimportant in Islam",
          "Wealthy uncles always support truth"
        ],
        correctIndex: 0,
        explanation: "As-Sa'di highlights that salvation in Islam is earned through faith and righteousness, never through genealogy or prestige."
      },
      {
        id: "111-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Surah Al-Masad",
        prompt: "What warning does Surah Al-Masad carry for our own tongues and actions?",
        options: [
          "Guard against spreading 'firewood' of slander, hostility, or opposition to truth—for malice always burns its carrier first",
          "Rely on family name rather than personal deeds",
          "Assume wealth can buy peace of heart",
          "Ignore how our words hurt others"
        ],
        correctIndex: 0,
        explanation: "Whether through literal harm or gossip, carrying fuel against others only prepares ruin for oneself."
      }
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    volume: "Volume 05",
    theme: "Pure Monotheism & Divine Transcendence",
    questions: [
      {
        id: "112-q1",
        label: "Hadith",
        sourceRef: "Prophetic Narration (Thuluth al-Qur'an)",
        prompt: "To what proportion of the entire Qur'an did the Prophet (peace be upon him) equate reciting Surah Al-Ikhlas?",
        options: [
          "One-third of the Qur'an",
          "One-tenth of the Qur'an",
          "Half of the Qur'an",
          "One-seventh of the Qur'an"
        ],
        correctIndex: 0,
        explanation: "The Prophet (peace be upon him) declared that Surah Al-Ikhlas is equivalent to one-third of the Qur'an (Thuluth al-Qur'an), as it encapsulates pure Tawheed."
      },
      {
        id: "112-q2",
        label: "Tafsir",
        sourceRef: "Ayah 112:2 — As-Samad",
        prompt: "What does the Divine Name 'As-Samad' (the Eternal Refuge) signify in Ayah 112:2?",
        options: [
          "The Self-Sufficient Master upon whom all creation depends, while He depends upon nothing",
          "A ruler who relies on advisors to sustain creation",
          "A distant creator who no longer hears supplications",
          "A seasonal blessing limited to specific places"
        ],
        correctIndex: 0,
        explanation: "As-Samad denotes absolute self-sufficiency and completeness: every creature turns to Allah in need, while Allah is free of all need."
      },
      {
        id: "112-q3",
        label: "Quran",
        sourceRef: "Al-Ikhlas (112:3–4)",
        prompt: "Which two negations in verses 3 and 4 safeguard the purity of Tawheed?",
        options: [
          "He neither begets nor is born, and none is comparable unto Him",
          "He neither speaks nor reveals scripture",
          "He neither creates angels nor sends messengers",
          "He neither forgives sins nor accepts repentance"
        ],
        correctIndex: 0,
        explanation: "Verses 112:3–4 affirm: 'He neither begets nor is born, nor is there to Him any equivalent'—removing every trace of anthropomorphism or comparison."
      },
      {
        id: "112-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Core Theme",
        prompt: "Which category of Islamic theology is the central focus of Surah Al-Ikhlas?",
        options: [
          "The pure uniqueness, self-sufficiency, and transcendence of Allah (Tawheed al-Asma' was-Sifat)",
          "Rules of commercial contracts and inheritance",
          "Detailed chronicles of ancient nations",
          "Etiquettes of military treaties"
        ],
        correctIndex: 0,
        explanation: "Surah Al-Ikhlas is a 4-verse Makki surah centered on pure monotheism—the uniqueness, self-sufficiency, and transcendence of Allah."
      },
      {
        id: "112-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 112:4",
        prompt: "What inner peace does 'Nor is there to Him any equivalent' bring to a believer's heart?",
        options: [
          "Knowing Allah is utterly beyond all created limits frees the heart from false dependencies and anchors it in the One",
          "It discourages making personal du'a in one's own words",
          "It means creation has no signs pointing to its Creator",
          "It implies we cannot know any of Allah's beautiful names"
        ],
        correctIndex: 0,
        explanation: "Recognizing that nothing resembles Allah frees the soul from relying on fragile worldly idols and returns it to its true sanctuary in the One."
      }
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    volume: "Volume 05",
    theme: "Refuge in the Lord of Daybreak from External Harms & Envy",
    questions: [
      {
        id: "113-q1",
        label: "Hadith",
        sourceRef: "Prophetic Narration — Al-Mu'awwidhatayn",
        prompt: "What did the Prophet (peace be upon him) say about Surah Al-Falaq and Surah An-Nas (Al-Mu'awwidhatayn)?",
        options: [
          "'There have not been revealed the like of these two Surahs' (for seeking divine refuge)",
          "'They are only to be recited once a year'",
          "'They replace all other Surahs in prayer'",
          "'They were revealed only for travelers'"
        ],
        correctIndex: 0,
        explanation: "The Prophet (peace be upon him) taught that Al-Falaq and An-Nas are unmatched sanctuaries of protection—recited morning, evening, and before sleep."
      },
      {
        id: "113-q2",
        label: "Quran",
        sourceRef: "Al-Falaq (113:1–5)",
        prompt: "From which four categories of external harm does Surah Al-Falaq teach us to seek refuge with 'Rabb al-Falaq'?",
        options: [
          "The evil of what He created, the evil of settling darkness (ghasiq), the evil of blowers in knots (sorcery), and the evil of an envier when he envies",
          "Rain, wind, sunlight, and ocean tides",
          "Poverty, hunger, old age, and travel",
          "Forgetfulness, sleep, silence, and solitude"
        ],
        correctIndex: 0,
        explanation: "Verses 113:1–5 seek shelter with the Lord of Daybreak from general created harm, night's perils, occult malice, and destructive envy."
      },
      {
        id: "113-q3",
        label: "Tafsir",
        sourceRef: "Atlas Plate 01 — Rabb al-Falaq",
        prompt: "Why is seeking refuge specifically in 'the Lord of the Splitting Daybreak' (Rabb al-Falaq) so fitting?",
        options: [
          "Just as Allah effortlessly splits the blackest night with the light of dawn, He can shatter any darkness, fear, or harm threatening the believer",
          "Because danger only exists at noon",
          "Because dawn is the only time du'a is heard",
          "Because night has no creator"
        ],
        correctIndex: 0,
        explanation: "The imagery of Al-Falaq—cleaving darkness with dawn—assures the heart that no peril is too dark for Allah's light to break open."
      },
      {
        id: "113-q4",
        label: "Quran",
        sourceRef: "Al-Falaq (113:5)",
        prompt: "Why does verse 113:5 specify 'from the evil of an envier WHEN he envies' (idha hasad)?",
        options: [
          "Because envy becomes actively harmful when the envier acts upon it or lets malicious jealousy loose—requiring Allah's shield",
          "Because envy is praiseworthy at other times",
          "Because only strangers can feel envy",
          "Because envy cannot be resisted"
        ],
        correctIndex: 0,
        explanation: "Seeking Allah's protection from active malice and the evil eye reminds us to rely on Allah rather than superstition."
      },
      {
        id: "113-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Ayah 113:5",
        prompt: "Before seeking refuge from others' envy, what inner check does the Atlas recommend when we see someone blessed with something good?",
        options: [
          "Audit our own heart and immediately say 'Allahumma barik lahu' (O Allah, bless them in it) to uproot any spark of jealousy",
          "Compare our possessions resentfully",
          "Avoid congratulating neighbors",
          "Hide all our own blessings in fear"
        ],
        correctIndex: 0,
        explanation: "Praying for Allah to bless others kills envy inside our own hearts while walking in the protection of Rabb al-Falaq."
      }
    ]
  },
  {
    number: 114,
    name: "An-Nas",
    arabicName: "الناس",
    volume: "Volume 05",
    theme: "Refuge Against Internal Whispers (Waswas) & Closing Seal of the Qur'an",
    questions: [
      {
        id: "114-q1",
        label: "Quran",
        sourceRef: "An-Nas (114:1–3)",
        prompt: "Which three divine titles of authority and intimacy does Surah An-Nas invoke at the start?",
        options: [
          "Lord of mankind (Rabb an-Nas), Sovereign of mankind (Malik an-Nas), and God of mankind (Ilah an-Nas)",
          "Creator of stars, Builder of seas, and Ruler of winds",
          "First, Last, and Hidden",
          "Provider, Judge, and Avenger"
        ],
        correctIndex: 0,
        explanation: "Verses 114:1–3 call upon Allah as our Nurturer (Rabb), King (Malik), and Sole Object of Worship (Ilah)—mirroring Al-Fatihah's opening."
      },
      {
        id: "114-q2",
        label: "Tafsir",
        sourceRef: "Ibn Kathir — Comparing Al-Falaq & An-Nas",
        prompt: "According to Imam Ibn Kathir, why does Al-Falaq invoke ONE divine attribute against four evils, whereas An-Nas invokes THREE divine attributes against ONE evil?",
        options: [
          "Because internal spiritual corruption and whispering (waswasah) that poisons faith is far more dangerous to salvation than external physical harms",
          "Because external harms do not exist",
          "Because An-Nas is shorter than Al-Falaq",
          "Because three attributes are needed only at night"
        ],
        correctIndex: 0,
        explanation: "Ibn Kathir explains that guarding the heart against inner doubt and satanic whispers requires the deepest fortress of refuge."
      },
      {
        id: "114-q3",
        label: "Quran",
        sourceRef: "An-Nas (114:4–6)",
        prompt: "Who are the two sources of 'the retreating whisperer' (al-waswas al-khannas) named in verse 114:6?",
        options: [
          "From among the jinn and mankind (minal-jinnati wan-nas)",
          "From angels and birds",
          "From mountains and seas",
          "From dreams and shadows only"
        ],
        correctIndex: 0,
        explanation: "Verse 114:6 warns that whispers come not only from unseen devils (jinn), but also from human voices—bad companions or cynical media—that normalize doubt and sin."
      },
      {
        id: "114-q4",
        label: "Tafsir",
        sourceRef: "Atlas Plate 02 — Architectural Symmetry (Al-Fatihah to An-Nas)",
        prompt: "What remarkable architectural symmetry connects Surah Al-Fatihah (Surah 1) and Surah An-Nas (Surah 114)?",
        options: [
          "Al-Fatihah opens with Rabb, Malik, and exclusive worship asking for the Straight Path; An-Nas closes with Rabb, Malik, and Ilah seeking protection to stay on that Path",
          "Both Surahs have exactly 10 verses",
          "Both Surahs are Madani revelations",
          "Both Surahs mention the story of Musa"
        ],
        correctIndex: 0,
        explanation: "The Qur'an forms a complete sanctuary: beginning with praise of the Lord, King, and Deity for guidance, and ending with refuge in Him from all whispers."
      },
      {
        id: "114-q5",
        label: "Reflection",
        sourceRef: "Atlas Reflection — Al-Waswas Al-Khannas",
        prompt: "Why is the whisperer called 'Al-Khannas' (the one who retreats/shrinks back)?",
        options: [
          "Because its insidious whispers wither and retreat the moment the heart remembers Allah (dhikr)",
          "Because it never whispers more than once",
          "Because it only appears in empty deserts",
          "Because it cannot be resisted by faith"
        ],
        correctIndex: 0,
        explanation: "Whenever a believer awakens to remembrance of Allah and seeks refuge in Him, the whisperer shrinks back—returning the heart to peace."
      }
    ]
  }
];
