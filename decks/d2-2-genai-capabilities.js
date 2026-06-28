/*
 * Deck: D2.2 — GenAI Capabilities & Limitations (AWS AI Practitioner)
 * ------------------------------------------------------------------
 * Domain 2: Fundamentals of Generative AI (24%) · Task 2.2
 */
registerDeck({
  id: "d2-2-genai-capabilities",
  title: "D2.2 — GenAI Capabilities & Limits",
  cards: [
    // ---- Advantages ----
    {
      id: "d22-adv-001",
      topic: "Advantages",
      difficulty: "easy",
      q: "Select key ADVANTAGES of generative AI.",
      hint: "Adaptable, fast, broad, accessible.",
      a: "Adaptability to many tasks, fast content creation, broad general knowledge, and simple natural-language interfaces.",
      why: "GenAI generalizes across tasks and lowers the barrier to building AI features. Guaranteed factual accuracy is NOT a GenAI strength.",
      correct: ["Adaptable to many different tasks", "Generates content quickly at scale", "Accessible via natural-language prompts"],
      distractors: ["Guaranteed 100% factual accuracy"]
    },
    {
      id: "d22-adv-002",
      topic: "Advantages",
      difficulty: "medium",
      q: "Why does generative AI lower the barrier to building AI features compared with training a model from scratch?",
      hint: "Pre-trained, prompt to adapt.",
      a: "Because pre-trained FMs can be adapted with prompting/RAG instead of collecting data and training a model, saving time, data, and expertise.",
      why: "Teams can ship features in days using a managed FM rather than months training a custom model."
    },
    // ---- Limitations ----
    {
      id: "d22-hall-001",
      topic: "Limitations",
      difficulty: "easy",
      q: "What is a 'hallucination' in generative AI?",
      hint: "Confident but wrong.",
      a: "When a model produces plausible-sounding but false or fabricated information.",
      why: "Hallucinations are a core limitation; mitigations include RAG grounding, citations, and human review.",
      correct: "Plausible-sounding but false or fabricated output",
      distractors: ["A model that refuses to answer", "Slow response latency", "Running out of context window"]
    },
    {
      id: "d22-nondet-001",
      topic: "Limitations",
      difficulty: "medium",
      q: "What does it mean that generative models are 'nondeterministic'?",
      hint: "Same prompt, different answers.",
      a: "The same prompt can produce different outputs on different runs (influenced by sampling settings like temperature).",
      why: "Nondeterminism complicates testing and reproducibility; lowering temperature reduces variability."
    },
    {
      id: "d22-interp-001",
      topic: "Limitations",
      difficulty: "medium",
      q: "Why is 'interpretability' a challenge for large generative models?",
      hint: "Hard to explain why it said that.",
      a: "Their internal reasoning is opaque, making it hard to explain why a specific output was produced.",
      why: "Low interpretability complicates trust, debugging, and compliance—addressed partly by explainability tools."
    },
    {
      id: "d22-lim-002",
      topic: "Limitations",
      difficulty: "medium",
      q: "Select common LIMITATIONS/disadvantages of generative AI.",
      hint: "Wrong facts, opaque, inconsistent, can leak/bias.",
      a: "Hallucinations, low interpretability, nondeterministic output, and risks of bias or data exposure.",
      why: "These drive responsible-AI controls (grounding, guardrails, human review). Perfect reproducibility is NOT a property of sampling-based GenAI.",
      correct: ["Hallucinations / factual errors", "Low interpretability", "Nondeterministic responses", "Potential for bias or data leakage"],
      distractors: ["Perfectly reproducible, identical outputs every time"]
    },
    {
      id: "d22-cutoff-001",
      topic: "Limitations",
      difficulty: "medium",
      q: "Why might an FM give outdated answers, and how is this commonly fixed?",
      hint: "Knowledge cutoff; bring fresh data.",
      a: "Its knowledge is frozen at its training cutoff; RAG (retrieval-augmented generation) supplies current/proprietary data at query time.",
      why: "RAG grounds responses in up-to-date sources without retraining the model."
    },
    // ---- Model selection ----
    {
      id: "d22-sel-001",
      topic: "Model selection factors",
      difficulty: "hard",
      q: "Select factors to consider when choosing a foundation model for a use case.",
      hint: "Cost, quality, speed, size, modality, license.",
      a: "Cost, accuracy/quality on the task, latency/throughput, context window size, modality, and licensing/availability.",
      why: "Model choice balances quality vs cost vs speed for the specific workload. The model author's nationality is irrelevant.",
      correct: ["Cost per token", "Accuracy/quality on the target task", "Latency and throughput", "Context window size", "Modality (text, image, multimodal)"],
      distractors: ["The nationality of the model's authors"]
    },
    {
      id: "d22-sel-002",
      topic: "Model selection factors",
      difficulty: "medium",
      q: "A use case needs the lowest cost and fastest responses for simple tasks, accuracy permitting. Generally, do you pick a larger or smaller model?",
      hint: "Right-size the model.",
      a: "A smaller model—it is usually cheaper and faster, and may be accurate enough for simple tasks.",
      why: "Right-sizing avoids paying for a large model when a small one meets the quality bar.",
      correct: "A smaller, cheaper, faster model that still meets the quality bar",
      distractors: ["Always the largest available model", "The model with the biggest context window", "A multimodal model regardless of task"]
    },
    // ---- Business value ----
    {
      id: "d22-val-001",
      topic: "Business value",
      difficulty: "medium",
      q: "Select business-value metrics for a generative AI solution.",
      hint: "Productivity, cost, conversion, satisfaction.",
      a: "Productivity gains, cost reduction, conversion/revenue impact, and customer satisfaction.",
      why: "These tie GenAI to outcomes. BLEU score is a technical text-quality metric, not a direct business metric.",
      correct: ["Employee productivity / time saved", "Operational cost reduction", "Conversion rate or revenue lift", "Customer satisfaction"],
      distractors: ["BLEU score"]
    },
    {
      id: "d22-val-002",
      topic: "Business value",
      difficulty: "easy",
      q: "A support team uses GenAI to draft replies, cutting average handle time in half. Which value metric improved?",
      hint: "Doing more with the same people.",
      a: "Productivity / efficiency (reduced handle time).",
      why: "Time saved per task is a direct productivity (business value) metric."
    }
  ]
});
