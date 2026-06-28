# Design Document — AWS AI Practitioner Study Deck

**Status:** Implemented (vertical slice)
**Last updated:** 2026-06-28
**Owner:** study/AWS/Courses/AI-Practitioner

---

## 1. Purpose & goals

A lightweight, self-owned flashcard system to drill AWS AI Practitioner exam content
using a **question → ponder → (hint) → reveal → self-grade** loop, plus an optional
multiple-choice quiz mode.

Goals:
- **Frictionless:** double-click to study. No install, no server, no accounts, no network.
- **AI-generatable content:** new decks are small data files an assistant can mass-produce
  from existing study notes.
- **Durable & ownable:** plain files in the repo; diff-able, editable, portable.
- **Exam-shaped:** content models the *decisions* the exam tests, not trivia.

Non-goals (for now):
- Cloud sync / multi-device progress.
- Authoring UI (cards are edited as text).
- Rich media (images/audio) in cards.

---

## 2. Architecture overview

Two layers with a thin contract between them.

```
┌─────────────────────────────────────────────┐
│ study.html  (ENGINE)                         │
│  - UI, study loop, modes, filters            │
│  - progress + persistence (localStorage)     │
│  - defines registerDeck() and window.__DECKS__│
└───────────────▲─────────────────────────────┘
                │ registerDeck({ id, title, cards:[…] })
┌───────────────┴─────────────────────────────┐
│ decks/*.js  (CONTENT)                        │
│  - pure data: arrays of card objects         │
│  - one file per topic; loaded via <script>   │
└──────────────────────────────────────────────┘
```

**Why two layers:** keeps content cheap to generate and easy to diff/reorder, while the
engine stays stable. Generating 40 new cards never touches app logic.

### 2.1 Why `.js` deck files instead of `.yaml`/JSON

The decisive constraint is **opening from `file://`**. Browsers refuse `fetch()` of sibling
local files (null-origin CORS), so a pure-data file can't be loaded by a double-clicked HTML
page without a server. A `.js` file sidesteps this: it's loaded with a normal `<script>` tag
and self-registers via `registerDeck(...)`. The card objects still read like declarative data,
so we keep ~all the benefits of YAML with none of the loading pain.

Trade-off accepted: deck files are technically executable. Mitigation: they contain only an
object literal passed to `registerDeck`; no logic belongs there.

---

## 3. Files

| File | Role |
|------|------|
| `study.html` | The entire engine: markup, styles, and player script in one file. |
| `decks/model-deployment.js` | First deck (14 cards) sourced from `Model-Deployment-and-Inference.txt`. |
| `PROMPT-deck-generation.md` | Reusable prompt encoding the schema + workflow for generating decks. |
| `DESIGN.md` | This document. |
| `*.txt` | Raw study notes — the source material decks are mined from. |

---

## 4. Data model (card schema)

```js
{
  id: "infer-async-001",   // REQUIRED unique stable key (progress tracking keys off this)
  topic: "Inference type selection", // REQUIRED grouping label (filter + chip)
  difficulty: "medium",    // REQUIRED "easy" | "medium" | "hard"
  q: "…",                  // REQUIRED question text
  hint: "…",               // OPTIONAL nudge toward the discriminator
  a: "…",                  // REQUIRED full correct answer (shown on reveal)
  why: "…",                // OPTIONAL rationale + distractor breakdown
  correct: "Asynchronous inference",         // OPTIONAL short answer -> enables Quiz mode
  distractors: ["Real-time inference", …]    // OPTIONAL short wrong options (with `correct`)
}
```

Eligibility:
- **Flashcard mode:** every card.
- **Quiz mode (MCQ):** only cards with both `correct` and a non-empty `distractors` array.
  Others are silently shown as flashcards even in Quiz mode.

Field invariants:
- `id` is unique across the whole deck and never reused/renumbered.
- `correct` is the short form of `a`; options are kept parallel in length/style.
- `hint` never states the answer outright.

---

## 5. Engine behavior

### 5.1 Study loop
1. Render the current card: topic chip, difficulty chip, counter, question.
2. User may click **Hint** (if the card has one) — reveals once, then disables.
3. **Flashcard:** click **Reveal** → answer + rationale shown → self-grade **Got it / Missed**.
4. **Quiz:** click an option → correct option highlights green, wrong choice red, all options
   lock, answer panel reveals, and the card auto-grades from the choice.
5. **Next ›** advances. At the end of the order, the deck reshuffles and loops.

### 5.2 Modes
- **Flashcard** — recall-first; user grades themselves.
- **Quiz** — multiple choice; auto-graded. Options are shuffled each render.

### 5.3 Filters & ordering
- **Deck** dropdown — switches between registered decks.
- **Topic** dropdown — filters the active deck to one `topic` (or All).
- **Shuffle** — randomizes order (Fisher–Yates). Order also reshuffles on loop.

### 5.4 Progress & persistence
- Stored in `localStorage` under key **`awsaip.progress.v1`**.
- Shape: `{ [deckId]: { seen, got, miss, cards: { [cardId]: { got, miss } } } }`.
- `seen` increments the first time a card is revealed/answered.
- Footer shows Seen / Got / Missed and a progress bar = `seen / totalCardsInDeck`.
- **reset progress** clears all decks (with confirm).
- Schema changes must bump the key suffix (`v1` → `v2`) rather than mutate old data.

### 5.5 Keyboard shortcuts
| Key | Action |
|-----|--------|
| `Space` / `Enter` | Reveal; if already revealed, go Next |
| `H` | Show hint |
| `1` | Grade **Got it** |
| `2` | Grade **Missed** |
| `→` | Next |
| `S` | Shuffle |

### 5.6 Accessibility / UX notes
- Dark theme, AWS-orange accent, high-contrast answer panel.
- Difficulty chip is color-coded (easy/medium/hard).
- Keyboard-first flow; selects are excluded from shortcut capture.

---

## 6. Extensibility

**Add a deck**
1. Create `decks/<deck-id>.js` calling `registerDeck({ id, title, cards: [...] })`.
2. Add `<script src="decks/<deck-id>.js"></script>` in `study.html`'s deck-loading block.
3. Reload — the deck appears in the dropdown automatically.

**Add a mode / feature**
- Engine is a single IIFE in `study.html`. Keep the `registerDeck` contract and the
  no-dependency / file:// constraints intact.

---

## 7. Known limitations

- Progress is per-browser (localStorage); not synced across machines.
- Quiz mode requires hand-authored `correct`/`distractors`.
- No image/audio support.
- Looping reshuffles rather than ending with a summary screen.

---

## 8. Future ideas (parked)

- **Spaced repetition:** resurface missed cards sooner (e.g., Leitner boxes or SM-2 lite),
  driven by the per-card `got/miss` counts already persisted.
- **Session summary:** end-of-round score card and weak-topic callouts.
- **"Mark for review"** flag and a review-only filter.
- **Cross-deck "exam simulation"** mixing topics with a timer.
- **Import/export** progress as JSON for backup or device transfer.
- Optional **notebook variant** of the player for tinkering, reading the same deck files.

---

## 9. Test checklist (manual)

- [ ] Opens by double-click (file://) with no console errors.
- [ ] Deck dropdown lists all registered decks; switching works.
- [ ] Topic filter lists topics and filters correctly.
- [ ] Flashcard: Hint → Reveal → grade → Next advances and persists.
- [ ] Quiz: option click locks choices, highlights correct/wrong, auto-grades.
- [ ] Footer counters + progress bar update; survive reload.
- [ ] Reset clears progress after confirm.
- [ ] All keyboard shortcuts behave as documented.
