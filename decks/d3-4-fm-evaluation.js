/*
 * Deck: D3.4 — Evaluating Foundation Model Performance (AWS AI Practitioner)
 * -------------------------------------------------------------------------
 * Domain 3: Applications of Foundation Models (28%) · Task 3.4
 */
registerDeck({
  id: "d3-4-fm-evaluation",
  title: "D3.4 — FM Evaluation",
  cards: [
    // ---- Approaches ----
    {
      id: "d34-app-001",
      topic: "Evaluation approaches",
      difficulty: "medium",
      q: "Select valid approaches for evaluating a foundation model's performance.",
      hint: "Humans, benchmarks, automated metrics, LLM-as-judge.",
      a: "Human evaluation, benchmark datasets, automated metrics (ROUGE/BLEU/BERTScore), and using an LLM as a judge.",
      why: "These cover subjective quality and automated scoring. 'Counting the model's parameters' does not measure task performance.",
      correct: ["Human evaluation (human-in-the-loop)", "Benchmark datasets", "Automated metrics (ROUGE, BLEU, BERTScore)", "LLM-as-a-judge"],
      distractors: ["Counting the model's parameters"]
    },
    {
      id: "d34-human-001",
      topic: "Evaluation approaches",
      difficulty: "easy",
      q: "When is human evaluation especially important for FM outputs?",
      hint: "Subjective, nuanced, high-stakes quality.",
      a: "When quality is subjective or high-stakes (tone, helpfulness, safety) and automated metrics can't fully capture it.",
      why: "Humans judge nuance that metrics miss; Amazon A2I supports human-in-the-loop review."
    },
    {
      id: "d34-bench-001",
      topic: "Evaluation approaches",
      difficulty: "medium",
      q: "What is a benchmark dataset used for in FM evaluation?",
      hint: "Standard test to compare models.",
      a: "A standardized dataset/task used to measure and compare model performance consistently.",
      why: "Benchmarks enable apples-to-apples comparison across models."
    },
    // ---- Bedrock Model Evaluation ----
    {
      id: "d34-bedrock-001",
      topic: "Bedrock Model Evaluation",
      difficulty: "medium",
      q: "What does Amazon Bedrock Model Evaluation provide?",
      hint: "Compare models automatically or with humans.",
      a: "A managed way to evaluate and compare FMs using automatic metrics and/or human review for your task.",
      why: "It helps you select the best model for a use case with built-in or human-based scoring.",
      correct: "Managed automatic and human-based evaluation of FMs",
      distractors: ["A vector database for RAG", "A text-to-speech engine", "A container registry"]
    },
    // ---- Metrics ----
    {
      id: "d34-rouge-001",
      topic: "Evaluation metrics",
      difficulty: "hard",
      q: "What is ROUGE primarily used to evaluate?",
      hint: "Overlap with reference text; common for summaries.",
      a: "Text summarization quality—by measuring overlap (recall of n-grams) between generated and reference text.",
      why: "ROUGE is recall-oriented and widely used for summarization.",
      correct: "Summarization quality (overlap with reference text)",
      distractors: ["Image generation quality", "Inference latency", "Token cost"]
    },
    {
      id: "d34-bleu-001",
      topic: "Evaluation metrics",
      difficulty: "hard",
      q: "What is BLEU primarily used to evaluate?",
      hint: "Precision overlap; common for translation.",
      a: "Machine translation quality—by measuring n-gram precision overlap between generated and reference translations.",
      why: "BLEU is precision-oriented and standard for translation tasks.",
      correct: "Translation quality (n-gram precision vs reference)",
      distractors: ["Summarization recall only", "Model fairness", "GPU utilization"]
    },
    {
      id: "d34-bert-001",
      topic: "Evaluation metrics",
      difficulty: "hard",
      q: "How does BERTScore differ from ROUGE/BLEU?",
      hint: "Meaning vs exact word overlap.",
      a: "BERTScore uses embeddings to compare SEMANTIC similarity, capturing meaning even when wording differs; ROUGE/BLEU count exact n-gram overlap.",
      why: "BERTScore rewards paraphrases that preserve meaning, unlike pure n-gram metrics."
    },
    {
      id: "d34-judge-001",
      topic: "Evaluation metrics",
      difficulty: "medium",
      q: "What is 'LLM-as-a-judge' evaluation?",
      hint: "Use a strong model to grade outputs.",
      a: "Using a capable LLM to score or compare model outputs against criteria, approximating human judgment at scale.",
      why: "It scales subjective evaluation more cheaply than full human review, though it should be validated against humans."
    },
    // ---- Business alignment ----
    {
      id: "d34-biz-001",
      topic: "Business alignment",
      difficulty: "medium",
      q: "Why must FM evaluation include BUSINESS metrics, not just text-quality scores?",
      hint: "High BLEU doesn't guarantee value.",
      a: "Because good metric scores don't guarantee business outcomes—success is measured by user satisfaction, task completion, cost, and ROI.",
      why: "Align evaluation with the actual goal (e.g., resolved tickets, conversions), not just NLP metrics."
    },
    {
      id: "d34-biz-002",
      topic: "Business alignment",
      difficulty: "medium",
      q: "Select metrics that align FM evaluation with BUSINESS value.",
      hint: "Satisfaction, task success, cost, adoption.",
      a: "User satisfaction, task completion/resolution rate, cost per interaction, and adoption/engagement.",
      why: "These tie model quality to outcomes. ROUGE is a text-overlap (technical) metric, not a business metric.",
      correct: ["User satisfaction (CSAT)", "Task completion / resolution rate", "Cost per interaction", "Adoption / engagement"],
      distractors: ["ROUGE score"]
    },
    {
      id: "d34-rageval-001",
      topic: "Evaluating RAG & agents",
      difficulty: "medium",
      q: "What should you evaluate specifically in a RAG system (beyond fluency)?",
      hint: "Did it retrieve right + stay grounded?",
      a: "Retrieval relevance and answer groundedness/faithfulness (whether the answer is supported by retrieved sources).",
      why: "RAG quality depends on retrieving the right context and not hallucinating beyond it."
    }
  ]
});
