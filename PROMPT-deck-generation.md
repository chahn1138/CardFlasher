# AWS AI Practitioner Study Deck — Generation Prompt

This file is a **reusable prompt**. Paste it (or point Copilot at it) whenever you
want to generate a new deck, extend the player, or recreate the system from scratch.
It encodes the agreed design so output stays consistent.

---

## Role

You are helping build and maintain a **self-contained, offline flashcard study system**
for the **AWS Certified AI Practitioner** exam. The system separates **content** (deck
data files) from the **engine** (a single HTML player). You generate content and, when
asked, extend the engine — without breaking the contract between them.

## Hard constraints (do not violate)

1. **Decks are data, the player is logic.** Never embed questions in the HTML engine,
   and never put engine logic in a deck file.
2. **Zero install, runs from `file://`.** No build step, no server, no external network
   dependencies (no CDNs). A user double-clicks `study.html` and it works.
3. **Deck files are `.js`, not `.yaml`.** Browsers block reading sibling data files from
   `file://`, so each deck is a `.js` file that calls `registerDeck({...})`. The card
   objects still read like pure data.
4. **Stable card `id`s.** Progress tracking keys off `id`. Never recycle or renumber an
   existing card's `id`; only add new ones.
5. **Content is exam-pattern driven.** Cards target the *decision* the exam tests
   (e.g., "which inference type", "which tool does NOT do X"), not encyclopedic trivia.

---

## Card schema

```js
{
  id: "topic-slug-001",   // REQUIRED, unique, stable. kebab-case + zero-padded number.
  topic: "Short label",   // REQUIRED. Groups cards; appears as a filter + chip.
  difficulty: "easy",     // REQUIRED. "easy" | "medium" | "hard".
  q: "The question.",     // REQUIRED. One focused question.
  hint: "A nudge.",       // OPTIONAL. Points toward the discriminator, never gives the answer outright.
  a: "The answer.",       // REQUIRED. The crisp correct answer shown on reveal.
  why: "Explanation.",    // OPTIONAL. Why it's right + why the tempting distractors are wrong.
  correct: "Short label", // OPTIONAL. Enables Quiz (MCQ) mode. SHORT form of the answer.
  distractors: [ ... ]    // OPTIONAL. Array of SHORT wrong options. Required with `correct`.
}
```

Rules:
- `correct` + `distractors` **together** make a card eligible for Quiz mode. Provide both
  or neither. Recall-only cards (definitions, "what does it NOT do") omit them.
- `correct` must be the short form of `a`. Keep all options roughly parallel in length/style
  so the answer isn't obvious from formatting.
- 3 distractors is the sweet spot (4 total options). Use real exam confusables as
  distractors (e.g., Model Monitor / Clarify / Feature Store / JumpStart).
- `hint` reveals the *discriminator* ("large payload + long processing time are the giveaway"),
  not the answer.
- `why` should name the distractors and say what each one actually does / does NOT do.

## Deck file template

Create `decks/<deck-id>.js`:

```js
/* Deck: <Human Title> (AWS AI Practitioner) */
registerDeck({
  id: "<deck-id>",            // unique across all decks; matches filename
  title: "<Human Title>",     // shown in the deck dropdown
  cards: [
    { id: "...", topic: "...", difficulty: "...", q: "...", a: "...", /* hint, why, correct, distractors */ },
    // ...
  ]
});
```

Then register it in `study.html` by adding one line in the deck-loading block
(near the `<script src="decks/model-deployment.js"></script>` line):

```html
<script src="decks/<deck-id>.js"></script>
```

## Content sourcing workflow

1. Read the relevant `*.txt` study-notes file in this folder.
2. Extract every distinct **decision the exam tests** and turn each into a card.
3. For each "X vs Y" confusion, add: (a) a selection scenario card, and
   (b) a "what does X NOT do" recall card.
4. Mirror real practice-question phrasing where the notes quote it.
5. Aim for 10–20 cards per topic file. Group with a small set of `topic` labels.

## Style

- Questions are scenario-first when the exam is scenario-based ("A company has…").
- Keep answers decisive. Avoid hedging.
- Prefer the wording the exam uses (the notes capture real giveaways and distractor traps).
- One concept per card. Split compound questions.

## When asked to change the ENGINE

- Preserve the card schema and the `registerDeck` contract.
- Keep it a single file with no external dependencies.
- Preserve existing `localStorage` data where reasonable; if the shape must change,
  bump the `LSKEY` version suffix (`awsaip.progress.v1` -> `v2`) rather than corrupting old data.
- Keep keyboard shortcuts working: `Space`/`Enter` reveal-then-next, `H` hint,
  `1` got, `2` missed, `→` next, `S` shuffle.

## Definition of done

- New deck loads in `study.html` via one `<script>` line.
- Flashcard mode works for every card; Quiz mode works for cards with `correct`+`distractors`.
- Topic filter lists the new topics; progress bar and counters update.
- No console errors; opens correctly by double-click (file://).
