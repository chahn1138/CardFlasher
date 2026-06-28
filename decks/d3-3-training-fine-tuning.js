/*
 * Deck: D3.3 — Training & Fine-Tuning Foundation Models (AWS AI Practitioner)
 * --------------------------------------------------------------------------
 * Domain 3: Applications of Foundation Models (28%) · Task 3.3
 */
registerDeck({
  id: "d3-3-training-fine-tuning",
  title: "D3.3 — Training & Fine-Tuning",
  cards: [
    // ---- Pre-training ----
    {
      id: "d33-pre-001",
      topic: "Pre-training",
      difficulty: "medium",
      q: "What is pre-training of a foundation model?",
      hint: "The huge, expensive base phase.",
      a: "Training a model from scratch on a massive, broad dataset to learn general language/knowledge patterns.",
      why: "Pre-training is the most expensive, data-intensive phase; most teams reuse pre-trained FMs rather than do this."
    },
    {
      id: "d33-cpt-001",
      topic: "Pre-training",
      difficulty: "hard",
      q: "What is continued (continual) pre-training?",
      hint: "Keep pre-training on more domain data, unlabeled.",
      a: "Further pre-training an existing FM on additional domain-specific UNLABELED data to broaden its knowledge of that domain.",
      why: "Unlike fine-tuning (labeled task examples), continued pre-training uses large unlabeled corpora to add domain knowledge.",
      correct: "Extending pre-training on additional unlabeled domain data",
      distractors: ["Training on a small set of labeled examples", "Adding documents to a vector store", "Adjusting the temperature parameter"]
    },
    // ---- Fine-tuning ----
    {
      id: "d33-ft-001",
      topic: "Fine-tuning",
      difficulty: "easy",
      q: "What is fine-tuning?",
      hint: "Adapt a pre-trained model with labeled examples.",
      a: "Further training a pre-trained model on a smaller, task-specific labeled dataset to specialize its behavior.",
      why: "Fine-tuning adjusts model weights to improve performance/style on a specific task."
    },
    {
      id: "d33-instr-001",
      topic: "Fine-tuning",
      difficulty: "medium",
      q: "What is instruction tuning (instruction fine-tuning)?",
      hint: "Train on instruction → response pairs.",
      a: "Fine-tuning a model on examples of instructions paired with desired responses so it follows instructions better.",
      why: "Instruction tuning makes base models more helpful and better at following prompts."
    },
    {
      id: "d33-transfer-001",
      topic: "Fine-tuning",
      difficulty: "medium",
      q: "What is transfer learning?",
      hint: "Reuse learned knowledge for a new task.",
      a: "Reusing a model pre-trained on one task/dataset as the starting point for a related task, instead of training from scratch.",
      why: "Transfer learning is why fine-tuning a small dataset works well—the base already 'knows' a lot."
    },
    {
      id: "d33-distill-001",
      topic: "Distillation",
      difficulty: "hard",
      q: "What is model distillation?",
      hint: "Big teacher trains a small student.",
      a: "Training a smaller 'student' model to mimic a larger 'teacher' model, producing a cheaper, faster model with similar quality.",
      why: "Distillation reduces inference cost/latency while retaining much of the larger model's capability.",
      correct: "Training a small model to imitate a larger model",
      distractors: ["Adding documents to a knowledge base", "Increasing the model's context window", "Encrypting the model weights"]
    },
    // ---- Choosing the approach ----
    {
      id: "d33-choose-001",
      topic: "Choosing an approach",
      difficulty: "hard",
      q: "Match the goal to the technique: you need the model to ADOPT a specific writing style and domain vocabulary.",
      hint: "Change behavior, not just facts.",
      a: "Fine-tuning.",
      why: "Fine-tuning changes model behavior/style. RAG adds facts; prompt engineering steers per-request but less durably.",
      correct: "Fine-tuning",
      distractors: ["RAG", "Lowering temperature", "Increasing max tokens"]
    },
    {
      id: "d33-choose-002",
      topic: "Choosing an approach",
      difficulty: "medium",
      q: "Match the goal: you need to add broad new DOMAIN KNOWLEDGE from large unlabeled corpora.",
      hint: "Big unlabeled data → keep pre-training.",
      a: "Continued pre-training.",
      why: "Continued pre-training ingests large unlabeled domain data; fine-tuning uses smaller labeled task sets.",
      correct: "Continued pre-training",
      distractors: ["Few-shot prompting", "Distillation", "Negative prompting"]
    },
    // ---- Data preparation ----
    {
      id: "d33-data-001",
      topic: "Data preparation",
      difficulty: "medium",
      q: "Why is data quality critical when fine-tuning a model?",
      hint: "Garbage in, garbage out.",
      a: "Because the model learns from the examples—biased, noisy, or mislabeled data degrades and can skew the model.",
      why: "High-quality, representative, well-labeled data is essential for good fine-tuning outcomes."
    },
    {
      id: "d33-data-002",
      topic: "Data preparation",
      difficulty: "medium",
      q: "Select good practices for preparing fine-tuning data.",
      hint: "Clean, representative, labeled, balanced, no leakage.",
      a: "Clean and de-duplicate, ensure representative/balanced examples, label accurately, and remove sensitive data.",
      why: "These improve quality and reduce bias/leakage. Including as much duplicated, noisy data as possible hurts the model.",
      correct: ["Clean and de-duplicate the data", "Use representative, balanced examples", "Label data accurately", "Remove or mask sensitive information"],
      distractors: ["Include as much duplicated, noisy data as possible"]
    },
    // ---- RLHF ----
    {
      id: "d33-rlhf-001",
      topic: "RLHF",
      difficulty: "hard",
      q: "What is reinforcement learning from human feedback (RLHF)?",
      hint: "Humans rank outputs to align the model.",
      a: "A technique where human preferences/rankings of model outputs train a reward model that guides the LLM toward more helpful, aligned responses.",
      why: "RLHF aligns model behavior with human preferences and safety expectations."
    },
    {
      id: "d33-rlhf-002",
      topic: "RLHF",
      difficulty: "medium",
      q: "What is the main GOAL of RLHF?",
      hint: "Align outputs with what humans prefer.",
      a: "To align model outputs with human preferences—making responses more helpful, harmless, and on-target.",
      why: "RLHF is an alignment technique, not a way to add raw factual knowledge.",
      correct: "Align model behavior with human preferences",
      distractors: ["Add new factual documents to the model", "Reduce the model's parameter count", "Encrypt the training data"]
    }
  ]
});
