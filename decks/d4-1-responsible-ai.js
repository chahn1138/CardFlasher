/*
 * Deck: D4.1 — Responsible AI Development (AWS AI Practitioner)
 * -----------------------------------------------------------
 * Domain 4: Guidelines for Responsible AI (14%) · Task 4.1
 * (Complements the SageMaker Clarify deck.)
 */
registerDeck({
  id: "d4-1-responsible-ai",
  title: "D4.1 — Responsible AI Development",
  cards: [
    // ---- Dimensions of responsible AI ----
    {
      id: "d41-dim-001",
      topic: "Responsible AI dimensions",
      difficulty: "medium",
      q: "Select core features/dimensions of responsible AI.",
      hint: "Fair, inclusive, robust, safe, truthful, transparent.",
      a: "Fairness, inclusivity, robustness, safety, veracity (truthfulness), and transparency/explainability.",
      why: "These are AWS's responsible-AI dimensions. 'Maximum model size' is not a responsible-AI dimension.",
      correct: ["Fairness", "Inclusivity", "Robustness", "Safety", "Veracity (truthfulness)"],
      distractors: ["Maximum model size"]
    },
    {
      id: "d41-veracity-001",
      topic: "Responsible AI dimensions",
      difficulty: "easy",
      q: "What does 'veracity' (truthfulness) refer to in responsible AI?",
      hint: "Accurate, not hallucinated.",
      a: "The degree to which model outputs are accurate and truthful rather than fabricated.",
      why: "Low veracity = hallucinations; grounding (RAG) and review improve it."
    },
    {
      id: "d41-robust-001",
      topic: "Responsible AI dimensions",
      difficulty: "medium",
      q: "What does 'robustness' mean for an AI system?",
      hint: "Holds up under noisy/adversarial inputs.",
      a: "The system performs reliably across varied, noisy, or adversarial inputs and conditions.",
      why: "Robust systems resist manipulation and degrade gracefully."
    },
    // ---- Bias & variance ----
    {
      id: "d41-bias-001",
      topic: "Bias & variance",
      difficulty: "hard",
      q: "In the bias–variance tradeoff, what does HIGH bias typically cause?",
      hint: "Too simple → underfit.",
      a: "Underfitting—the model is too simple to capture the underlying pattern.",
      why: "High bias = underfitting (poor on train and test). High variance = overfitting.",
      correct: "Underfitting",
      distractors: ["Overfitting", "Data leakage", "Hallucination"]
    },
    {
      id: "d41-bias-002",
      topic: "Bias & variance",
      difficulty: "hard",
      q: "In the bias–variance tradeoff, what does HIGH variance typically cause?",
      hint: "Too sensitive → overfit.",
      a: "Overfitting—the model fits training noise and generalizes poorly.",
      why: "High variance models do great on training data but poorly on new data.",
      correct: "Overfitting",
      distractors: ["Underfitting", "Faster inference", "Lower training cost"]
    },
    {
      id: "d41-bias-003",
      topic: "Bias & variance",
      difficulty: "medium",
      q: "How can biased TRAINING DATA harm an AI system?",
      hint: "It learns and amplifies the skew.",
      a: "The model learns and may amplify the bias, producing unfair or inaccurate outcomes for some groups.",
      why: "Data bias propagates to model bias; representative data and bias testing mitigate it."
    },
    // ---- Datasets ----
    {
      id: "d41-data-001",
      topic: "Dataset characteristics",
      difficulty: "medium",
      q: "Select characteristics of a GOOD dataset for responsible AI.",
      hint: "Representative, balanced, accurate, complete.",
      a: "Representative of the real population, balanced across groups, accurately labeled, and sufficiently complete.",
      why: "These reduce bias and improve fairness. A dataset that over-represents one group is a bias risk.",
      correct: ["Representative of the target population", "Balanced across relevant groups", "Accurately labeled", "Sufficiently complete/large"],
      distractors: ["Heavily skewed toward a single group"]
    },
    // ---- Guardrails ----
    {
      id: "d41-guard-001",
      topic: "Bedrock Guardrails",
      difficulty: "medium",
      q: "What does Amazon Bedrock Guardrails do?",
      hint: "Safety filters and policies on GenAI.",
      a: "Lets you define safety policies that filter harmful content, block denied topics, and redact sensitive info (PII) in inputs/outputs.",
      why: "Guardrails enforce responsible-AI policies consistently across models and apps.",
      correct: "Apply configurable safety/content filters to GenAI inputs and outputs",
      distractors: ["Store embeddings for RAG", "Fine-tune the foundation model", "Transcribe audio to text"]
    },
    {
      id: "d41-guard-002",
      topic: "Bedrock Guardrails",
      difficulty: "medium",
      q: "Select protections Amazon Bedrock Guardrails can provide.",
      hint: "Block topics, filter harmful content, redact PII, reduce hallucination.",
      a: "Denied-topic blocking, harmful-content filtering, PII detection/redaction, and contextual grounding checks to reduce hallucination.",
      why: "Guardrails address multiple responsible-AI risks. Increasing model accuracy by retraining is not a guardrail function.",
      correct: ["Block specific denied topics", "Filter harmful/toxic content", "Detect and redact PII", "Contextual grounding checks to reduce hallucination"],
      distractors: ["Retrain the model to be more accurate"]
    },
    // ---- Tools ----
    {
      id: "d41-tools-001",
      topic: "Responsible AI tooling",
      difficulty: "medium",
      q: "Which tool detects bias in data/models and explains predictions?",
      hint: "Bias + explainability in SageMaker.",
      a: "Amazon SageMaker Clarify.",
      why: "Clarify = bias detection + explainability. Model Monitor watches production drift/quality; A2I adds human review.",
      correct: "Amazon SageMaker Clarify",
      distractors: ["Amazon SageMaker Model Monitor", "Amazon Augmented AI (A2I)", "Amazon Bedrock Guardrails"]
    },
    {
      id: "d41-tools-002",
      topic: "Responsible AI tooling",
      difficulty: "medium",
      q: "Which SageMaker capability continuously watches a deployed model for data/quality drift?",
      hint: "Production monitoring over time.",
      a: "Amazon SageMaker Model Monitor.",
      why: "Model Monitor detects drift in production; Clarify focuses on bias/explainability at evaluation time.",
      correct: "Amazon SageMaker Model Monitor",
      distractors: ["SageMaker Clarify", "SageMaker JumpStart", "Amazon Comprehend"]
    },
    {
      id: "d41-tools-003",
      topic: "Responsible AI tooling",
      difficulty: "easy",
      q: "Which AWS service adds human review of model predictions for oversight?",
      hint: "Human-in-the-loop.",
      a: "Amazon Augmented AI (A2I).",
      why: "A2I routes uncertain/high-risk predictions to humans, supporting safety and accountability.",
      correct: "Amazon Augmented AI (A2I)",
      distractors: ["SageMaker Model Monitor", "Amazon Macie", "Amazon Polly"]
    },
    // ---- Legal & sustainability ----
    {
      id: "d41-legal-001",
      topic: "Legal & sustainability",
      difficulty: "medium",
      q: "Select legal/ethical risks of generative AI.",
      hint: "IP, bias/discrimination, privacy, misinformation.",
      a: "Intellectual-property infringement, biased/discriminatory outcomes, privacy violations, and spreading misinformation.",
      why: "These drive governance and guardrails. Faster GPUs are not a legal risk.",
      correct: ["Intellectual-property infringement", "Biased or discriminatory outcomes", "Privacy violations", "Misinformation / harmful content"],
      distractors: ["Using faster GPUs"]
    },
    {
      id: "d41-sustain-001",
      topic: "Legal & sustainability",
      difficulty: "easy",
      q: "How does model choice relate to sustainability?",
      hint: "Bigger models = more energy.",
      a: "Larger models consume more compute and energy; right-sizing the model reduces environmental impact and cost.",
      why: "Choosing an appropriately sized/efficient model supports sustainability goals."
    }
  ]
});
