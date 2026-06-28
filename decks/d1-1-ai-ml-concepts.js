/*
 * Deck: D1.1 — AI & ML Concepts and Terminology (AWS AI Practitioner)
 * ------------------------------------------------------------------
 * Domain 1: Fundamentals of AI and ML (20%) · Task 1.1
 * Pure data. `correct` as a string = single MCQ; as an array = multiple-response.
 */
registerDeck({
  id: "d1-1-ai-ml-concepts",
  title: "D1.1 — AI & ML Concepts",
  cards: [
    // ---- Core hierarchy ----
    {
      id: "d11-hier-001",
      topic: "AI/ML/DL hierarchy",
      difficulty: "easy",
      q: "How do AI, machine learning, and deep learning relate to each other?",
      hint: "Think of nested circles.",
      a: "AI is the broadest field; ML is a subset of AI; deep learning is a subset of ML.",
      why: "AI = any technique that mimics human intelligence. ML = systems that learn patterns from data. Deep learning = ML using multi-layer neural networks."
    },
    {
      id: "d11-hier-002",
      topic: "AI/ML/DL hierarchy",
      difficulty: "easy",
      q: "Which subfield of ML uses multi-layered neural networks to learn from large amounts of data?",
      hint: "It is 'deep' because of the many layers.",
      a: "Deep learning.",
      why: "Deep learning stacks many neural-network layers, excelling at images, audio, and text. Other options are not defined by layered neural nets.",
      correct: "Deep learning",
      distractors: ["Reinforcement learning", "Supervised learning", "Feature engineering"]
    },
    {
      id: "d11-def-001",
      topic: "Key definitions",
      difficulty: "easy",
      q: "What is the difference between a 'model' and an 'algorithm'?",
      hint: "One is the recipe, one is the baked result.",
      a: "An algorithm is the procedure used to learn; a model is the trained output (learned parameters) produced by running the algorithm on data.",
      why: "You train using an algorithm; the result you deploy and run inference on is the model."
    },
    {
      id: "d11-def-002",
      topic: "Key definitions",
      difficulty: "easy",
      q: "What is 'training' vs 'inferencing' in machine learning?",
      hint: "Learn from data vs use what was learned.",
      a: "Training is learning patterns/parameters from data; inferencing is using the trained model to make predictions on new data.",
      why: "Training happens once (or periodically); inference is the ongoing prediction phase in production."
    },
    {
      id: "d11-def-003",
      topic: "Key definitions",
      difficulty: "medium",
      q: "What is a neural network?",
      hint: "Loosely inspired by the brain.",
      a: "A model made of interconnected layers of nodes ('neurons') with weighted connections that transform inputs into outputs.",
      why: "Neural networks are the foundation of deep learning and most modern generative AI."
    },
    // ---- Subfields / capabilities ----
    {
      id: "d11-cv-001",
      topic: "AI capabilities",
      difficulty: "easy",
      q: "Which AI field enables computers to interpret and understand images and video?",
      hint: "Cameras and pixels.",
      a: "Computer vision (CV).",
      why: "CV powers image classification, object detection, and OCR. NLP is for text/language; speech is for audio.",
      correct: "Computer vision",
      distractors: ["Natural language processing", "Speech recognition", "Reinforcement learning"]
    },
    {
      id: "d11-nlp-001",
      topic: "AI capabilities",
      difficulty: "easy",
      q: "Which AI field enables computers to understand and generate human language?",
      hint: "Text and words.",
      a: "Natural language processing (NLP).",
      why: "NLP covers translation, sentiment, summarization, and chatbots. CV is images; forecasting is time-series.",
      correct: "Natural language processing",
      distractors: ["Computer vision", "Time-series forecasting", "Anomaly detection"]
    },
    {
      id: "d11-llm-001",
      topic: "AI capabilities",
      difficulty: "medium",
      q: "What is a large language model (LLM)?",
      hint: "Trained on massive text, predicts the next token.",
      a: "A foundation model trained on vast text data that generates and understands language by predicting tokens.",
      why: "LLMs are a type of generative AI built on the transformer architecture."
    },
    {
      id: "d11-genai-001",
      topic: "AI capabilities",
      difficulty: "easy",
      q: "What is generative AI?",
      hint: "It creates new content.",
      a: "AI that creates new content (text, images, audio, code) based on patterns learned from training data.",
      why: "Generative AI contrasts with traditional/discriminative ML, which mainly classifies or predicts values."
    },
    {
      id: "d11-agentic-001",
      topic: "AI capabilities",
      difficulty: "medium",
      q: "What is 'agentic AI'?",
      hint: "AI that takes actions, not just answers.",
      a: "AI systems that can plan and autonomously take multi-step actions—using tools, memory, and reasoning—to accomplish a goal.",
      why: "Agentic AI goes beyond a single response by orchestrating tools/APIs to complete tasks."
    },
    // ---- Inferencing types ----
    {
      id: "d11-inf-001",
      topic: "Inferencing types",
      difficulty: "medium",
      q: "Match the inferencing type: predictions made immediately as requests arrive, with low latency.",
      hint: "Live endpoint.",
      a: "Real-time inference.",
      why: "Real-time = low-latency, always-on endpoint. Batch = large offline datasets. Async = large payloads/long jobs. Serverless = intermittent traffic.",
      correct: "Real-time inference",
      distractors: ["Batch inference", "Asynchronous inference", "Serverless inference"]
    },
    {
      id: "d11-inf-002",
      topic: "Inferencing types",
      difficulty: "medium",
      q: "Which inferencing approach processes a large dataset all at once with no live endpoint and no immediate latency need?",
      hint: "Run overnight on a file.",
      a: "Batch inference.",
      why: "Batch is best for periodic, high-volume scoring where results can wait.",
      correct: "Batch inference",
      distractors: ["Real-time inference", "Serverless inference", "Asynchronous inference"]
    },
    {
      id: "d11-inf-003",
      topic: "Inferencing types",
      difficulty: "hard",
      q: "Select ALL characteristics that describe serverless inference.",
      hint: "Two apply: scaling and idle behavior.",
      a: "Automatically scales with demand, and can scale to zero when idle (you pay per use).",
      why: "Serverless suits intermittent/unpredictable traffic. It does NOT guarantee the lowest steady-state latency, and it is not designed for multi-GB offline batch jobs.",
      correct: ["Automatically scales with demand", "Can scale to zero when idle"],
      distractors: ["Guarantees the absolute lowest latency under constant heavy load", "Designed for multi-GB offline batch scoring"]
    },
    // ---- Data types ----
    {
      id: "d11-data-001",
      topic: "Data types",
      difficulty: "easy",
      q: "What is the difference between labeled and unlabeled data?",
      hint: "Does each example have the answer attached?",
      a: "Labeled data includes the target/answer for each example; unlabeled data has inputs only.",
      why: "Supervised learning needs labeled data; unsupervised learning works on unlabeled data."
    },
    {
      id: "d11-data-002",
      topic: "Data types",
      difficulty: "easy",
      q: "What is the difference between structured and unstructured data?",
      hint: "Rows/columns vs free-form.",
      a: "Structured data fits a defined schema (tables, rows, columns); unstructured data has no fixed schema (text, images, audio, video).",
      why: "Tabular and time-series are structured; documents, photos, and audio are unstructured."
    },
    {
      id: "d11-data-003",
      topic: "Data types",
      difficulty: "medium",
      q: "Select ALL examples of unstructured data.",
      hint: "Three of these have no fixed schema.",
      a: "Images, free-text documents, and audio recordings.",
      why: "Tabular/time-series data is structured (defined columns); images, text, and audio are unstructured.",
      correct: ["Images", "Free-text documents", "Audio recordings"],
      distractors: ["A relational table of customers"]
    },
    {
      id: "d11-data-004",
      topic: "Data types",
      difficulty: "easy",
      q: "What kind of data is a sequence of values recorded over time (e.g., daily sales)?",
      hint: "The order matters.",
      a: "Time-series data.",
      why: "Time-series is used for forecasting; order/timestamps are essential features.",
      correct: "Time-series data",
      distractors: ["Image data", "Categorical labels", "Vector embeddings"]
    },
    // ---- Learning types ----
    {
      id: "d11-learn-001",
      topic: "Learning types",
      difficulty: "easy",
      q: "Which learning type trains on labeled data to predict outcomes?",
      hint: "Each training example has the right answer.",
      a: "Supervised learning.",
      why: "Supervised learning maps inputs to known labels (classification/regression). Unsupervised finds structure in unlabeled data; reinforcement learns from rewards.",
      correct: "Supervised learning",
      distractors: ["Unsupervised learning", "Reinforcement learning", "Transfer learning"]
    },
    {
      id: "d11-learn-002",
      topic: "Learning types",
      difficulty: "easy",
      q: "Which learning type finds patterns or groupings in unlabeled data?",
      hint: "No answers provided—discover structure.",
      a: "Unsupervised learning.",
      why: "Clustering and dimensionality reduction are unsupervised. No labels are required.",
      correct: "Unsupervised learning",
      distractors: ["Supervised learning", "Reinforcement learning", "Semi-supervised learning"]
    },
    {
      id: "d11-learn-003",
      topic: "Learning types",
      difficulty: "medium",
      q: "Which learning type learns by trial and error using rewards and penalties from an environment?",
      hint: "Think of training an agent to play a game.",
      a: "Reinforcement learning.",
      why: "RL optimizes actions to maximize cumulative reward; it underlies RLHF for tuning LLMs.",
      correct: "Reinforcement learning",
      distractors: ["Supervised learning", "Unsupervised learning", "Deep learning"]
    },
    // ---- Quality concepts ----
    {
      id: "d11-fit-001",
      topic: "Bias, fairness & fit",
      difficulty: "medium",
      q: "What is overfitting?",
      hint: "Memorizes training data, fails on new data.",
      a: "When a model learns the training data too well (including noise) and performs poorly on new, unseen data.",
      why: "Overfitting = low training error but high test error. Underfitting = model too simple to capture the pattern."
    },
    {
      id: "d11-fit-002",
      topic: "Bias, fairness & fit",
      difficulty: "medium",
      q: "A model performs poorly on BOTH training and test data. What is this called?",
      hint: "Too simple to learn the pattern.",
      a: "Underfitting.",
      why: "Underfitting means the model is too simple / under-trained. Overfitting is the opposite (great on train, poor on test).",
      correct: "Underfitting",
      distractors: ["Overfitting", "Data leakage", "Hallucination"]
    },
    {
      id: "d11-bias-001",
      topic: "Bias, fairness & fit",
      difficulty: "medium",
      q: "In an AI/ML context, what is 'bias'?",
      hint: "Systematic, unfair skew.",
      a: "A systematic error or skew—often from unrepresentative data—that leads to unfair or inaccurate outcomes for certain groups.",
      why: "Bias undermines fairness; it can come from data, labeling, or model design."
    },
    {
      id: "d11-fairness-001",
      topic: "Bias, fairness & fit",
      difficulty: "easy",
      q: "What does 'fairness' mean for an AI system?",
      hint: "Treating groups equitably.",
      a: "The system produces equitable outcomes and does not systematically disadvantage particular groups.",
      why: "Fairness is a core responsible-AI goal; SageMaker Clarify helps measure bias against it."
    }
  ]
});
