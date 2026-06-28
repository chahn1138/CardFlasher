/*
 * Deck: D4.2 — Transparent & Explainable Models (AWS AI Practitioner)
 * ------------------------------------------------------------------
 * Domain 4: Guidelines for Responsible AI (14%) · Task 4.2
 */
registerDeck({
  id: "d4-2-transparency-explainability",
  title: "D4.2 — Transparency & Explainability",
  cards: [
    // ---- Transparent vs explainable ----
    {
      id: "d42-def-001",
      topic: "Transparency vs explainability",
      difficulty: "medium",
      q: "What is the difference between a 'transparent' model and an 'explainable' model?",
      hint: "Open about how it works vs able to justify a prediction.",
      a: "Transparency is openness about how the model works/was built and its limitations; explainability is the ability to describe WHY a specific prediction was made.",
      why: "Both build trust: transparency at the system level, explainability at the prediction level."
    },
    {
      id: "d42-interp-001",
      topic: "Transparency vs explainability",
      difficulty: "medium",
      q: "Why are simpler models (e.g., decision trees, linear models) often called more interpretable?",
      hint: "You can trace the logic.",
      a: "Their decision logic is easy to inspect and trace, unlike opaque deep neural networks.",
      why: "There's often a tradeoff: more complex/accurate models can be harder to interpret."
    },
    {
      id: "d42-tradeoff-001",
      topic: "Transparency vs explainability",
      difficulty: "hard",
      q: "Describe the common tradeoff between model performance and interpretability.",
      hint: "Accuracy vs explainability.",
      a: "Highly complex models (e.g., deep nets) often achieve higher accuracy but are harder to interpret; simpler models are more interpretable but may be less accurate.",
      why: "Choosing depends on the need for explainability (e.g., regulated decisions) vs raw performance."
    },
    {
      id: "d42-safety-001",
      topic: "Transparency vs explainability",
      difficulty: "hard",
      q: "What is a tradeoff between transparency/explainability and other goals like safety or IP?",
      hint: "Revealing details can help attackers or expose secrets.",
      a: "Full transparency can expose proprietary details or create security risks (e.g., easier attacks), so organizations balance openness against safety and IP protection.",
      why: "Responsible AI weighs how much to disclose against confidentiality and safety."
    },
    // ---- Tools ----
    {
      id: "d42-cards-001",
      topic: "Transparency tools",
      difficulty: "medium",
      q: "What are SageMaker Model Cards used for?",
      hint: "Documented model 'nutrition label'.",
      a: "Documenting a model's purpose, training data, performance, limitations, and intended use to support transparency and governance.",
      why: "Model Cards centralize model documentation for accountability and audits.",
      correct: "Documenting model details, intended use, and limitations",
      distractors: ["Storing embeddings for RAG", "Filtering toxic content at inference", "Transcribing audio"]
    },
    {
      id: "d42-clarify-001",
      topic: "Transparency tools",
      difficulty: "medium",
      q: "How does SageMaker Clarify support explainability?",
      hint: "Which features drove the prediction.",
      a: "It provides feature-attribution explanations (e.g., SHAP values) showing which inputs most influenced a prediction.",
      why: "Feature attributions help humans understand and trust model decisions."
    },
    {
      id: "d42-tools-002",
      topic: "Transparency tools",
      difficulty: "medium",
      q: "Select AWS capabilities that support model transparency/explainability.",
      hint: "Model Cards, Clarify, Bedrock Model Evaluation.",
      a: "SageMaker Model Cards, SageMaker Clarify (explainability), and Amazon Bedrock Model Evaluation.",
      why: "These document and explain model behavior. Amazon Polly (text-to-speech) is unrelated to explainability.",
      correct: ["SageMaker Model Cards", "SageMaker Clarify", "Amazon Bedrock Model Evaluation"],
      distractors: ["Amazon Polly"]
    },
    // ---- Human-centered design ----
    {
      id: "d42-hcd-001",
      topic: "Human-centered design",
      difficulty: "medium",
      q: "What is human-centered design for explainable AI?",
      hint: "Build for the people who use/are affected.",
      a: "Designing AI systems and explanations around the needs, understanding, and oversight of the people who use or are affected by them.",
      why: "It includes clear explanations, appropriate human oversight, and feedback mechanisms."
    },
    {
      id: "d42-hcd-002",
      topic: "Human-centered design",
      difficulty: "easy",
      q: "Why provide explanations and human oversight for high-stakes AI decisions (e.g., loans, healthcare)?",
      hint: "Trust, fairness, accountability, regulation.",
      a: "To enable trust, catch errors/bias, ensure accountability, and meet legal/regulatory requirements.",
      why: "Explainability and oversight are central to responsible, compliant AI in sensitive domains."
    }
  ]
});
