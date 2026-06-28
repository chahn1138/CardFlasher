/*
 * Deck: D1.2 — Practical Use Cases & AWS Managed AI Services (AWS AI Practitioner)
 * ------------------------------------------------------------------------------
 * Domain 1: Fundamentals of AI and ML (20%) · Task 1.2
 */
registerDeck({
  id: "d1-2-use-cases-services",
  title: "D1.2 — Use Cases & AWS Managed AI",
  cards: [
    // ---- When AI is / isn't appropriate ----
    {
      id: "d12-fit-001",
      topic: "When to use AI/ML",
      difficulty: "medium",
      q: "When is AI/ML a GOOD fit for a problem?",
      hint: "Patterns, lots of data, hard to hand-code rules.",
      a: "When there are complex patterns in large amounts of data that are impractical to capture with explicit hand-written rules.",
      why: "If a simple deterministic rule solves it, traditional code is cheaper and more predictable than ML."
    },
    {
      id: "d12-fit-002",
      topic: "When to use AI/ML",
      difficulty: "medium",
      q: "When is AI/ML a POOR choice?",
      hint: "Simple rules, need 100% determinism, no data.",
      a: "When the problem is solvable with simple deterministic rules, requires exact/guaranteed answers, or lacks sufficient quality data.",
      why: "ML adds cost and uncertainty; use it only where pattern-learning beats explicit logic.",
      correct: "When a few simple, fixed business rules already solve the problem",
      distractors: ["When patterns are too complex to hand-code", "When you have large volumes of historical data", "When predictions can tolerate some uncertainty"]
    },
    // ---- ML task types ----
    {
      id: "d12-task-001",
      topic: "ML task types",
      difficulty: "easy",
      q: "Which ML task predicts a continuous numeric value (e.g., a house price)?",
      hint: "A number on a scale.",
      a: "Regression.",
      why: "Regression predicts continuous numbers; classification predicts categories; clustering groups unlabeled data.",
      correct: "Regression",
      distractors: ["Classification", "Clustering", "Anomaly detection"]
    },
    {
      id: "d12-task-002",
      topic: "ML task types",
      difficulty: "easy",
      q: "Which ML task assigns inputs to discrete categories (e.g., spam vs not spam)?",
      hint: "Buckets/labels.",
      a: "Classification.",
      why: "Classification outputs a category/class. Regression outputs a number; clustering finds groups without labels.",
      correct: "Classification",
      distractors: ["Regression", "Clustering", "Forecasting"]
    },
    {
      id: "d12-task-003",
      topic: "ML task types",
      difficulty: "medium",
      q: "Which ML task groups similar unlabeled records together?",
      hint: "Unsupervised grouping.",
      a: "Clustering.",
      why: "Clustering is unsupervised (e.g., customer segmentation). Classification and regression are supervised.",
      correct: "Clustering",
      distractors: ["Classification", "Regression", "Reinforcement learning"]
    },
    // ---- AWS managed AI services ----
    {
      id: "d12-svc-transcribe",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service converts speech (audio) to text?",
      hint: "Transcripts.",
      a: "Amazon Transcribe.",
      why: "Transcribe = speech-to-text. Polly = text-to-speech. Translate = language translation. Comprehend = NLP/text insights.",
      correct: "Amazon Transcribe",
      distractors: ["Amazon Polly", "Amazon Translate", "Amazon Comprehend"]
    },
    {
      id: "d12-svc-polly",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service converts text into lifelike speech?",
      hint: "Gives your app a voice.",
      a: "Amazon Polly.",
      why: "Polly = text-to-speech (TTS). Transcribe is the reverse (speech-to-text).",
      correct: "Amazon Polly",
      distractors: ["Amazon Transcribe", "Amazon Lex", "Amazon Comprehend"]
    },
    {
      id: "d12-svc-translate",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service performs real-time language translation?",
      hint: "Many languages.",
      a: "Amazon Translate.",
      why: "Translate = neural machine translation between languages.",
      correct: "Amazon Translate",
      distractors: ["Amazon Comprehend", "Amazon Transcribe", "Amazon Textract"]
    },
    {
      id: "d12-svc-comprehend",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service extracts insights from text—entities, key phrases, sentiment, PII?",
      hint: "NLP for documents.",
      a: "Amazon Comprehend.",
      why: "Comprehend = NLP text analytics (sentiment, entities, PII, topic modeling).",
      correct: "Amazon Comprehend",
      distractors: ["Amazon Translate", "Amazon Kendra", "Amazon Polly"]
    },
    {
      id: "d12-svc-lex",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service builds conversational chatbots and voice/IVR bots?",
      hint: "Same tech behind Alexa.",
      a: "Amazon Lex.",
      why: "Lex provides intents/slots for conversational interfaces. It powers chat and voice bots.",
      correct: "Amazon Lex",
      distractors: ["Amazon Polly", "Amazon Comprehend", "Amazon Personalize"]
    },
    {
      id: "d12-svc-rekognition",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service analyzes images and video (objects, faces, moderation)?",
      hint: "Computer vision API.",
      a: "Amazon Rekognition.",
      why: "Rekognition = image/video analysis. Textract is specifically document text/forms extraction.",
      correct: "Amazon Rekognition",
      distractors: ["Amazon Textract", "Amazon Comprehend", "Amazon Kendra"]
    },
    {
      id: "d12-svc-textract",
      topic: "AWS managed AI services",
      difficulty: "easy",
      q: "Which AWS service extracts text, forms, and tables from scanned documents?",
      hint: "OCR plus structure.",
      a: "Amazon Textract.",
      why: "Textract = document OCR + forms/tables. Rekognition is for general images/video, not document structure.",
      correct: "Amazon Textract",
      distractors: ["Amazon Rekognition", "Amazon Comprehend", "Amazon Transcribe"]
    },
    {
      id: "d12-svc-kendra",
      topic: "AWS managed AI services",
      difficulty: "medium",
      q: "Which AWS service provides intelligent enterprise search over your documents using natural language?",
      hint: "Ask a question, get the passage.",
      a: "Amazon Kendra.",
      why: "Kendra = ML-powered enterprise search; often used as a retriever for RAG.",
      correct: "Amazon Kendra",
      distractors: ["Amazon Comprehend", "Amazon Lex", "Amazon Personalize"]
    },
    {
      id: "d12-svc-personalize",
      topic: "AWS managed AI services",
      difficulty: "medium",
      q: "Which AWS service generates real-time personalized recommendations?",
      hint: "Like the tech behind Amazon.com 'recommended for you'.",
      a: "Amazon Personalize.",
      why: "Personalize = recommendation engine as a managed service.",
      correct: "Amazon Personalize",
      distractors: ["Amazon Kendra", "Amazon Forecast", "Amazon Comprehend"]
    },
    {
      id: "d12-svc-a2i",
      topic: "AWS managed AI services",
      difficulty: "medium",
      q: "Which AWS service adds human review to ML predictions (human-in-the-loop)?",
      hint: "Send low-confidence results to people.",
      a: "Amazon Augmented AI (Amazon A2I).",
      why: "A2I routes uncertain predictions to human reviewers for verification.",
      correct: "Amazon Augmented AI (A2I)",
      distractors: ["Amazon Comprehend", "SageMaker Clarify", "Amazon Rekognition"]
    },
    // ---- Real-world application scenarios ----
    {
      id: "d12-app-fraud",
      topic: "Application scenarios",
      difficulty: "medium",
      q: "Detecting fraudulent transactions in real time is best framed as which ML task?",
      hint: "Fraud vs not-fraud (often imbalanced).",
      a: "Classification (often with anomaly detection).",
      why: "Fraud detection labels each transaction into a class; anomaly detection flags rare unusual patterns.",
      correct: "Classification / anomaly detection",
      distractors: ["Regression", "Clustering", "Translation"]
    },
    {
      id: "d12-app-forecast",
      topic: "Application scenarios",
      difficulty: "easy",
      q: "Predicting next quarter's demand from historical sales is which ML task?",
      hint: "Numbers over time.",
      a: "Forecasting (a regression problem on time-series data).",
      why: "Demand forecasting predicts continuous future values from historical time-series.",
      correct: "Forecasting",
      distractors: ["Classification", "Clustering", "Object detection"]
    },
    // ---- Traditional ML vs Foundation Models ----
    {
      id: "d12-fm-001",
      topic: "Traditional ML vs FMs",
      difficulty: "medium",
      q: "What is a key difference between traditional ML models and foundation models (FMs)?",
      hint: "Narrow/task-specific vs broad/general.",
      a: "Traditional ML is trained for one specific task; an FM is pre-trained broadly and adapted to many tasks.",
      why: "FMs generalize across tasks (and can be customized via prompting, RAG, or fine-tuning), while traditional models are purpose-built per task."
    },
    {
      id: "d12-fm-002",
      topic: "Traditional ML vs FMs",
      difficulty: "medium",
      q: "Select TWO advantages of foundation models over building a traditional model from scratch.",
      hint: "Reuse + less labeled data.",
      a: "They are reusable across many tasks, and they reduce the need for large task-specific labeled datasets.",
      why: "FMs are pre-trained on huge corpora, so you can adapt them with prompting/RAG/light fine-tuning instead of training from zero. They are not cheaper to pre-train, and they are not always more accurate on a narrow task than a specialized model.",
      correct: ["Reusable across many different tasks", "Reduce the need for large labeled datasets per task"],
      distractors: ["Always cheaper to pre-train than a small custom model", "Always more accurate than a specialized model on a narrow task"]
    }
  ]
});
