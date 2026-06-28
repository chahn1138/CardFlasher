/*
 * Deck: D1.3 — AI/ML Development Lifecycle & MLOps (AWS AI Practitioner)
 * --------------------------------------------------------------------
 * Domain 1: Fundamentals of AI and ML (20%) · Task 1.3
 */
registerDeck({
  id: "d1-3-ml-lifecycle-mlops",
  title: "D1.3 — ML Lifecycle & MLOps",
  cards: [
    // ---- ML pipeline stages ----
    {
      id: "d13-pipe-001",
      topic: "ML pipeline stages",
      difficulty: "medium",
      q: "Put the core ML pipeline stages in order (data → deployment).",
      hint: "Collect, prep, engineer, train, tune, evaluate, deploy, monitor.",
      a: "Data collection → data preparation/cleaning → feature engineering → model training → hyperparameter tuning → evaluation → deployment → monitoring.",
      why: "This is the standard ML lifecycle. Monitoring feeds back to retraining when drift appears."
    },
    {
      id: "d13-pipe-002",
      topic: "ML pipeline stages",
      difficulty: "medium",
      q: "Which pipeline stage transforms raw data into informative inputs (e.g., creating ratios, encoding categories)?",
      hint: "Crafting the model's inputs.",
      a: "Feature engineering.",
      why: "Feature engineering creates/selects the variables the model learns from; it strongly affects accuracy.",
      correct: "Feature engineering",
      distractors: ["Hyperparameter tuning", "Model deployment", "Data collection"]
    },
    {
      id: "d13-pipe-003",
      topic: "ML pipeline stages",
      difficulty: "medium",
      q: "What is 'exploratory data analysis' (EDA) used for?",
      hint: "Understand the data before modeling.",
      a: "Understanding data distributions, relationships, and quality issues before building a model.",
      why: "EDA reveals missing values, outliers, and patterns that guide cleaning and feature engineering."
    },
    {
      id: "d13-data-001",
      topic: "ML pipeline stages",
      difficulty: "easy",
      q: "Why split data into training, validation, and test sets?",
      hint: "Avoid grading yourself on the answers you memorized.",
      a: "To train on one set, tune on another, and get an unbiased estimate of generalization on unseen test data.",
      why: "Evaluating on data the model trained on overstates performance and hides overfitting."
    },
    // ---- Sources of FMs / pre-trained models ----
    {
      id: "d13-src-001",
      topic: "Model sources",
      difficulty: "medium",
      q: "Name common sources for obtaining a model instead of training from scratch.",
      hint: "Hubs, open source, providers.",
      a: "Pre-trained foundation models via Amazon Bedrock, open-source models, and model hubs like SageMaker JumpStart.",
      why: "Reusing pre-trained models saves time/data; you adapt them with prompting, RAG, or fine-tuning."
    },
    {
      id: "d13-src-002",
      topic: "Model sources",
      difficulty: "medium",
      q: "Which SageMaker feature is a hub of pre-built, pre-trained models and solution templates you can deploy quickly?",
      hint: "Jump-start your project.",
      a: "SageMaker JumpStart.",
      why: "JumpStart offers ready-to-deploy models and example solutions. Model Monitor watches production; Clarify does bias/explainability.",
      correct: "SageMaker JumpStart",
      distractors: ["SageMaker Model Monitor", "SageMaker Clarify", "SageMaker Data Wrangler"]
    },
    // ---- Production methods ----
    {
      id: "d13-prod-001",
      topic: "Using a model in production",
      difficulty: "medium",
      q: "What is the tradeoff between using a managed model API vs self-hosting a model?",
      hint: "Convenience vs control.",
      a: "Managed APIs (e.g., Bedrock) reduce ops burden and scale automatically; self-hosting gives more control/customization but more operational responsibility.",
      why: "Choose managed for speed and low ops; self-host when you need deep control over the model/runtime."
    },
    {
      id: "d13-prod-002",
      topic: "Using a model in production",
      difficulty: "medium",
      q: "Select TWO benefits of consuming a model through a managed API like Amazon Bedrock.",
      hint: "Less ops, faster start.",
      a: "No infrastructure to manage, and faster time-to-production with automatic scaling.",
      why: "Managed APIs abstract servers and scaling. They do NOT give you raw access to model weights, and they are not always the cheapest at very high, steady volume.",
      correct: ["No servers/infrastructure to manage", "Faster time-to-production with automatic scaling"],
      distractors: ["Full access to modify the model's internal weights", "Always the lowest cost at very high steady volume"]
    },
    // ---- MLOps ----
    {
      id: "d13-mlops-001",
      topic: "MLOps",
      difficulty: "medium",
      q: "What is MLOps?",
      hint: "DevOps for ML.",
      a: "Practices and tooling to automate and operationalize the ML lifecycle—building, deploying, monitoring, and retraining models reliably.",
      why: "MLOps brings CI/CD, versioning, monitoring, and governance to ML so models stay reliable in production."
    },
    {
      id: "d13-mlops-002",
      topic: "MLOps",
      difficulty: "medium",
      q: "Select the concepts that are core to MLOps.",
      hint: "Automate, version, monitor, retrain.",
      a: "Experimentation, automated retraining/deployment pipelines, model versioning, and continuous monitoring.",
      why: "These keep models reproducible and reliable over time. Hand-deploying a one-off model with no tracking is the opposite of MLOps.",
      correct: ["Automated retraining and deployment pipelines", "Model versioning and lineage", "Continuous monitoring of deployed models"],
      distractors: ["Manually emailing model files with no version tracking"]
    },
    {
      id: "d13-mlops-003",
      topic: "MLOps",
      difficulty: "medium",
      q: "What is model drift, and why does it matter for MLOps?",
      hint: "The world changes after deployment.",
      a: "Drift is degradation in model performance over time as real-world data diverges from the training data; MLOps monitors for it and triggers retraining.",
      why: "Detecting drift (e.g., with SageMaker Model Monitor) keeps predictions accurate as conditions change."
    },
    // ---- Model performance metrics ----
    {
      id: "d13-met-001",
      topic: "Performance metrics",
      difficulty: "medium",
      q: "What does accuracy measure in a classification model?",
      hint: "Overall correctness.",
      a: "The proportion of all predictions that were correct.",
      why: "Accuracy can be misleading on imbalanced data—hence precision, recall, and F1."
    },
    {
      id: "d13-met-002",
      topic: "Performance metrics",
      difficulty: "hard",
      q: "What does precision measure?",
      hint: "Of the positives you predicted, how many were right?",
      a: "Of all items predicted positive, the fraction that were actually positive (TP / (TP + FP)).",
      why: "High precision = few false positives. Use it when false positives are costly (e.g., flagging good emails as spam)."
    },
    {
      id: "d13-met-003",
      topic: "Performance metrics",
      difficulty: "hard",
      q: "What does recall measure?",
      hint: "Of the real positives, how many did you catch?",
      a: "Of all actual positives, the fraction the model correctly identified (TP / (TP + FN)).",
      why: "High recall = few false negatives. Use it when missing a positive is costly (e.g., disease or fraud detection)."
    },
    {
      id: "d13-met-004",
      topic: "Performance metrics",
      difficulty: "hard",
      q: "What is the F1 score?",
      hint: "Balances two metrics.",
      a: "The harmonic mean of precision and recall—a single balanced metric, useful for imbalanced classes.",
      why: "F1 is high only when BOTH precision and recall are high; it balances the two.",
      correct: "The harmonic mean of precision and recall",
      distractors: ["The percentage of all correct predictions", "The area under the ROC curve", "The average prediction error in units"]
    },
    {
      id: "d13-met-005",
      topic: "Performance metrics",
      difficulty: "medium",
      q: "A fraud model must avoid MISSING fraud, even at the cost of more false alarms. Which metric should be prioritized?",
      hint: "Catch every real positive.",
      a: "Recall.",
      why: "Recall minimizes false negatives (missed fraud). Precision minimizes false positives (false alarms).",
      correct: "Recall",
      distractors: ["Precision", "Accuracy", "Mean squared error"]
    },
    // ---- Business metrics ----
    {
      id: "d13-biz-001",
      topic: "Business metrics",
      difficulty: "medium",
      q: "Why track BUSINESS metrics (e.g., ROI, cost per inference, customer satisfaction) alongside model metrics?",
      hint: "A high F1 that loses money still fails.",
      a: "Because model accuracy only matters if it delivers business value—revenue, cost savings, efficiency, or customer outcomes.",
      why: "Business stakeholders judge success by impact, not just technical scores."
    },
    {
      id: "d13-biz-002",
      topic: "Business metrics",
      difficulty: "medium",
      q: "Select examples of BUSINESS (not purely technical) metrics for an AI solution.",
      hint: "Money, satisfaction, efficiency.",
      a: "Return on investment (ROI), cost per inference/transaction, and customer satisfaction.",
      why: "These measure value to the organization. F1 score and RMSE are model-quality (technical) metrics.",
      correct: ["Return on investment (ROI)", "Cost per inference", "Customer satisfaction score"],
      distractors: ["F1 score"]
    }
  ]
});
