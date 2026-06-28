/*
 * Deck: SageMaker Clarify — Bias & Explainability (AWS AI Practitioner)
 * --------------------------------------------------------------------
 * Pure data. See PROMPT-deck-generation.md for the schema.
 * `correct` as a string = single-answer MCQ; as an array = multiple-response.
 */
registerDeck({
  id: "clarify",
  title: "SageMaker Clarify (Bias & Explainability)",
  cards: [
    // ---- Basics ----
    {
      id: "clarify-basics-001",
      topic: "Clarify basics",
      difficulty: "easy",
      q: "What is Amazon SageMaker Clarify, in one sentence?",
      hint: "Two jobs: one about fairness, one about transparency.",
      a: "A SageMaker capability that detects bias (in data and models) and explains model predictions.",
      why: "Clarify covers two responsible-AI pillars: bias/fairness detection and explainability (feature attribution)."
    },
    {
      id: "clarify-basics-002",
      topic: "Clarify basics",
      difficulty: "easy",
      q: "Which SageMaker tool detects bias and explains why a model made a prediction?",
      hint: "Not the one that watches production over time.",
      a: "SageMaker Clarify.",
      why: "Model Monitor = production drift/quality over time; Feature Store = feature data; JumpStart = pre-built model hub. Only Clarify does bias + explainability.",
      correct: "SageMaker Clarify",
      distractors: ["SageMaker Model Monitor", "SageMaker Feature Store", "SageMaker JumpStart"]
    },
    {
      id: "clarify-basics-003",
      topic: "Clarify basics",
      difficulty: "easy",
      q: "What are the two core capabilities of SageMaker Clarify?",
      hint: "Fairness + transparency.",
      a: "Bias detection and explainability (feature attribution).",
      why: "These map to responsible-AI fairness and transparency goals."
    },
    {
      id: "clarify-basics-004",
      topic: "Clarify basics",
      difficulty: "medium",
      q: "Which TWO tasks are core SageMaker Clarify capabilities?",
      hint: "It analyzes; it does not serve or continuously watch.",
      a: "Detect bias and explain model predictions.",
      why: "Continuous production monitoring = Model Monitor; storing features = Feature Store; serving = endpoints. Clarify only analyzes bias and explainability.",
      correct: ["Detect bias", "Explain model predictions"],
      distractors: ["Continuously monitor production drift", "Store and serve features", "Host a model endpoint"]
    },

    // ---- Bias detection ----
    {
      id: "clarify-bias-001",
      topic: "Bias detection",
      difficulty: "medium",
      q: "At which stages can Clarify detect bias?",
      hint: "Before you train, and after you have a model.",
      a: "Both pre-training (in the data) and post-training (in the model's predictions).",
      why: "Pre-training bias looks at the dataset; post-training bias looks at the trained model's behavior.",
      correct: "Both pre-training (data) and post-training (model)",
      distractors: ["Only pre-training (data)", "Only post-training (model)", "Only during live inference"]
    },
    {
      id: "clarify-bias-002",
      topic: "Bias detection",
      difficulty: "medium",
      q: "What's the difference between pre-training and post-training bias in Clarify?",
      hint: "One is about the dataset; the other is about the model's outputs.",
      a: "Pre-training bias measures imbalance/skew in the training data itself; post-training bias measures unfair behavior in the trained model's predictions.",
      why: "You check data bias before training and model bias after training."
    },
    {
      id: "clarify-bias-003",
      topic: "Bias detection",
      difficulty: "medium",
      q: "A team wants to check whether their training data is imbalanced across a sensitive group BEFORE training. Which tool?",
      hint: "Pre-training data bias analysis.",
      a: "SageMaker Clarify (pre-training bias analysis).",
      why: "Clarify computes pre-training bias metrics on the dataset. Ground Truth labels data; Feature Store stores features; Model Monitor watches production.",
      correct: "SageMaker Clarify",
      distractors: ["SageMaker Model Monitor", "SageMaker Feature Store", "SageMaker Ground Truth"]
    },
    {
      id: "clarify-bias-004",
      topic: "Bias detection",
      difficulty: "hard",
      q: "Name an example of a pre-training (data) bias metric Clarify can compute.",
      hint: "Think about how balanced the classes/groups are.",
      a: "Class Imbalance (CI) — or Difference in Proportions of Labels (DPL).",
      why: "These quantify skew in the dataset before any model is trained."
    },
    {
      id: "clarify-bias-005",
      topic: "Bias detection",
      difficulty: "hard",
      q: "Name an example of a post-training (model) bias metric Clarify can compute.",
      hint: "It compares outcomes between groups from the trained model.",
      a: "Disparate Impact (DI) — or differences in accuracy/recall between groups.",
      why: "Post-training metrics evaluate the trained model's predictions for unfair outcomes."
    },
    {
      id: "clarify-bias-006",
      topic: "Bias detection",
      difficulty: "medium",
      q: "Which TWO of these can Clarify measure?",
      hint: "Both are about fairness, not infrastructure.",
      a: "Class imbalance in the data and disparate impact in the model's predictions.",
      why: "Latency, endpoint cost, and storage usage are operational metrics — not Clarify's job.",
      correct: ["Class imbalance in the data", "Disparate impact in predictions"],
      distractors: ["Model inference latency", "Endpoint hosting cost", "Storage usage"]
    },

    // ---- Explainability ----
    {
      id: "clarify-explain-001",
      topic: "Explainability",
      difficulty: "medium",
      q: "Clarify's explainability (feature attribution) is primarily based on which method?",
      hint: "A game-theory approach to crediting each feature.",
      a: "SHAP (SHapley Additive exPlanations) values.",
      why: "SHAP assigns each feature a contribution to a given prediction. ROC curves are for evaluation; k-means is clustering; gradient boosting is a model type.",
      correct: "SHAP (Shapley values)",
      distractors: ["ROC curves", "K-means clustering", "Gradient boosting"]
    },
    {
      id: "clarify-explain-002",
      topic: "Explainability",
      difficulty: "easy",
      q: "What does a feature attribution / feature importance score tell you?",
      hint: "Per-feature credit for the outcome.",
      a: "How much each input feature contributed to the model's prediction.",
      why: "This is the heart of explainability — turning a 'black box' output into per-feature reasons."
    },
    {
      id: "clarify-explain-003",
      topic: "Explainability",
      difficulty: "medium",
      q: "A regulator asks a company to explain why a loan model rejected a specific applicant. Which tool helps?",
      hint: "You need per-prediction reasons, not drift alerts.",
      a: "SageMaker Clarify (explainability / feature attribution).",
      why: "Clarify explains individual predictions. Model Monitor only watches drift; JumpStart and Feature Store are unrelated to explanations.",
      correct: "SageMaker Clarify",
      distractors: ["SageMaker Model Monitor", "SageMaker JumpStart", "SageMaker Feature Store"]
    },
    {
      id: "clarify-explain-004",
      topic: "Explainability",
      difficulty: "medium",
      q: "Clarify explainability can be applied to which kinds of data/models?",
      hint: "Not just spreadsheets.",
      a: "Tabular data, natural language processing (NLP), and computer vision models.",
      why: "Clarify supports feature attribution across tabular, NLP, and CV use cases."
    },
    {
      id: "clarify-explain-005",
      topic: "Explainability",
      difficulty: "medium",
      q: "Clarify reports a global feature-importance ranking and per-prediction attributions. What does the GLOBAL view tell you?",
      hint: "Across the whole dataset, not a single row.",
      a: "Which features matter most to the model overall (aggregate importance).",
      why: "Global = overall feature importance across many predictions; local = why one specific prediction came out the way it did.",
      correct: "Which features matter most to the model overall",
      distractors: ["Why one specific prediction was made", "Whether the endpoint is healthy", "How fast inference runs"]
    },

    // ---- Clarify vs other tools ----
    {
      id: "clarify-vs-001",
      topic: "Clarify vs other tools",
      difficulty: "hard",
      q: "Which of these does SageMaker Clarify NOT do?",
      hint: "It has no concept of time or thresholds.",
      a: "Continuously monitor production traffic for drift over time.",
      why: "Continuous, threshold-based drift monitoring with alerts is Model Monitor. Clarify detects bias, explains predictions, and generates bias reports.",
      correct: "Continuously monitor production drift over time",
      distractors: ["Detect bias in training data", "Explain individual predictions", "Generate a bias report"]
    },
    {
      id: "clarify-vs-002",
      topic: "Clarify vs other tools",
      difficulty: "hard",
      q: "Fastest way to separate Clarify from Model Monitor on a question?",
      hint: "Point-in-time analysis vs. ongoing watch.",
      a: "Clarify = bias + explainability as a point-in-time analysis. Model Monitor = continuous production drift/quality with alerts over time.",
      why: "If the question says 'over time', 'degraded', 'notify/alert', or 'threshold', it's Model Monitor. If it says 'why', 'bias', or 'fairness', it's Clarify."
    },
    {
      id: "clarify-vs-003",
      topic: "Clarify vs other tools",
      difficulty: "medium",
      q: "A model's accuracy degraded over 4 months and the team wants automatic alerts. Which tool?",
      hint: "Time + alerts = not Clarify.",
      a: "SageMaker Model Monitor.",
      why: "Clarify has no concept of time or thresholds. 'Degraded over time' + 'alerts' is always Model Monitor.",
      correct: "SageMaker Model Monitor",
      distractors: ["SageMaker Clarify", "SageMaker Feature Store", "SageMaker JumpStart"]
    },
    {
      id: "clarify-vs-004",
      topic: "Clarify vs other tools",
      difficulty: "medium",
      q: "Which TWO tasks belong to Clarify rather than Model Monitor?",
      hint: "Analysis tasks, not ongoing alerts.",
      a: "Pre-training data bias analysis and SHAP feature attribution.",
      why: "Threshold-based drift alerts and continuous endpoint monitoring are Model Monitor; feature storage is Feature Store.",
      correct: ["Pre-training data bias analysis", "SHAP feature attribution"],
      distractors: ["Threshold-based drift alerts", "Continuous endpoint monitoring", "Storing feature data"]
    },

    // ---- Production integration ----
    {
      id: "clarify-prod-001",
      topic: "Production integration",
      difficulty: "hard",
      q: "How can bias and feature-attribution be tracked continuously in production?",
      hint: "Clarify supplies the analysis; another tool schedules and alerts.",
      a: "By integrating Clarify with SageMaker Model Monitor to watch for bias drift and feature attribution drift.",
      why: "Clarify provides the bias/explainability computation; Model Monitor runs it on a schedule and raises alerts — together they cover ongoing fairness monitoring."
    },
    {
      id: "clarify-prod-002",
      topic: "Production integration",
      difficulty: "medium",
      q: "Clarify integrates with which service to monitor bias drift in production over time?",
      hint: "The continuous-monitoring service.",
      a: "SageMaker Model Monitor.",
      why: "Model Monitor schedules Clarify's bias/attribution checks and alerts via CloudWatch/SNS.",
      correct: "SageMaker Model Monitor",
      distractors: ["AWS CloudTrail", "SageMaker Feature Store", "SageMaker JumpStart"]
    },

    // ---- Responsible AI / governance ----
    {
      id: "clarify-gov-001",
      topic: "Responsible AI",
      difficulty: "easy",
      q: "Which responsible-AI goals does Clarify directly support?",
      hint: "Fairness and being able to explain decisions.",
      a: "Fairness/bias mitigation and transparency/explainability.",
      why: "Clarify is the SageMaker tool most associated with responsible-AI fairness and transparency."
    },
    {
      id: "clarify-gov-002",
      topic: "Responsible AI",
      difficulty: "medium",
      q: "What is a primary business reason to adopt Clarify?",
      hint: "Think audits and regulators, not speed or cost.",
      a: "To meet fairness, transparency, and regulatory/compliance requirements.",
      why: "Clarify addresses governance needs. Latency, storage cost, and autoscaling are operational concerns handled elsewhere.",
      correct: "Meet fairness, transparency, and regulatory requirements",
      distractors: ["Reduce inference latency", "Lower storage cost", "Auto-scale endpoints"]
    },
    {
      id: "clarify-gov-003",
      topic: "Responsible AI",
      difficulty: "easy",
      q: "Where can you view Clarify's bias and explainability reports?",
      hint: "The SageMaker IDE.",
      a: "In Amazon SageMaker Studio.",
      why: "Clarify surfaces bias metrics and feature attributions as reports/visualizations in SageMaker Studio."
    },
    {
      id: "clarify-output-001",
      topic: "Responsible AI",
      difficulty: "medium",
      q: "Select TWO outputs that SageMaker Clarify produces.",
      hint: "One about fairness, one about feature contributions.",
      a: "A bias metrics report and feature importance / attribution explanations.",
      why: "Clarify outputs bias reports and SHAP-based feature attributions. Auto-scaling policies, endpoint URLs, and data lakes are not Clarify outputs.",
      correct: ["A bias metrics report", "Feature attribution explanations"],
      distractors: ["An auto-scaling policy", "A model endpoint URL", "A data lake"]
    }
  ]
});
