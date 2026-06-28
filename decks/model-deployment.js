/*
 * Deck: Model Deployment & Inference (AWS AI Practitioner)
 * --------------------------------------------------------
 * This is just DATA. Each card is a plain object. Edit freely, reorder freely.
 * Fields:
 *   id          unique string (stable across edits so progress tracking works)
 *   topic       short grouping label
 *   difficulty  "easy" | "medium" | "hard"
 *   q           the question (required)
 *   hint        optional nudge revealed by the Hint button
 *   a           the full answer shown on reveal (required)
 *   why         optional deeper explanation / distractor breakdown
 *   correct     optional SHORT correct option -> enables Quiz (multiple-choice) mode
 *   distractors optional array of SHORT wrong options for Quiz mode
 *
 * To add a new deck: copy this file, change the id/title, swap the cards,
 * then add one <script src="decks/your-file.js"></script> line in study.html.
 */
registerDeck({
  id: "model-deployment",
  title: "Model Deployment & Inference",
  cards: [
    {
      id: "infer-async-001",
      topic: "Inference type selection",
      difficulty: "medium",
      q: "A company has input data up to 1 GB, processing times up to 1 hour, and needs near real-time latency. Which SageMaker inference option meets these requirements?",
      hint: "The large payload + long processing time are the giveaway. Don't be fooled by the words 'near real-time'.",
      a: "Asynchronous inference.",
      why: "Async handles large payloads and long processing with a short wait. Real-time = low latency/small payloads; Batch transform = huge offline datasets with no live endpoint; Serverless = sporadic traffic.",
      correct: "Asynchronous inference",
      distractors: ["Real-time inference", "Serverless inference", "Batch transform"]
    },
    {
      id: "infer-batch-001",
      topic: "Inference type selection",
      difficulty: "easy",
      q: "A company must perform inference on datasets multiple GBs in size and does NOT need predictions immediately. Which option meets these requirements?",
      hint: "No live endpoint is needed, and results can wait.",
      a: "Batch transform.",
      why: "Batch transform is for huge datasets where you don't need a persistent endpoint and results can be delivered later.",
      correct: "Batch transform",
      distractors: ["Real-time inference", "Asynchronous inference", "Serverless inference"]
    },
    {
      id: "infer-realtime-def",
      topic: "Inference type selection",
      difficulty: "easy",
      q: "Which SageMaker inference mode fits low latency, small payloads, and an immediate response (e.g., fraud detection, live recommendations)?",
      hint: "Think 'instant answer, every time'.",
      a: "Real-time inference.",
      why: "Real-time keeps a persistent endpoint warm for immediate, low-latency responses on small payloads.",
      correct: "Real-time inference",
      distractors: ["Batch transform", "Asynchronous inference", "Serverless inference"]
    },
    {
      id: "infer-serverless-def",
      topic: "Inference type selection",
      difficulty: "medium",
      q: "Which inference mode fits sporadic / unpredictable traffic, where you don't want to manage infrastructure and you're cost-sensitive?",
      hint: "You pay only when it runs, and scaling is automatic.",
      a: "Serverless inference.",
      why: "Serverless auto-scales (including to zero) for intermittent traffic, removing infra management and idle cost.",
      correct: "Serverless inference",
      distractors: ["Real-time inference", "Batch transform", "Asynchronous inference"]
    },
    {
      id: "deploy-secure-api",
      topic: "Secure access",
      difficulty: "easy",
      q: "A company has deployed an ML model and wants to give external customers secure access through the customers' own applications. What's the right approach?",
      hint: "Don't hand out credentials or ship the model itself.",
      a: "Create a secure API endpoint for customers to call.",
      why: "A managed, authenticated API endpoint is the correct pattern. Wrong: sharing credentials directly, embedding the model in customer apps, or writing custom auth scripts.",
      correct: "Create a secure API endpoint",
      distractors: ["Share account credentials with customers", "Embed the model inside customer apps", "Write a custom authentication script"]
    },
    {
      id: "deploy-edge",
      topic: "Edge deployment",
      difficulty: "medium",
      q: "A company wants inference on edge devices with the lowest possible latency. What should they do?",
      hint: "Latency is lowest when nothing leaves the device.",
      a: "Deploy optimized small language models (SLMs) directly on the edge devices.",
      why: "Running an optimized small model on-device avoids a network round trip. Wrong: routing to a centralized API, or trying to run a large model on constrained edge hardware.",
      correct: "Deploy optimized SLMs on the edge devices",
      distractors: ["Route requests to a centralized API", "Deploy a large model on each device", "Use batch transform nightly"]
    },
    {
      id: "drift-monitor-001",
      topic: "Post-deployment monitoring",
      difficulty: "medium",
      q: "A model's inference quality degraded after 4 months in production. The company wants notifications when this happens and wants to prevent recurrence. What should they do?",
      hint: "Two parts: fix it now, and watch for it automatically going forward.",
      a: "Retrain the model AND use SageMaker Model Monitor.",
      why: "Model Monitor automatically tracks model/data drift, data quality, and bias drift, and can notify via CloudWatch/SNS. The distractor SageMaker Clarify detects bias and explains predictions but does NOT monitor live drift over time.",
      correct: "Retrain + SageMaker Model Monitor",
      distractors: ["Retrain + SageMaker Clarify", "Use SageMaker Feature Store", "Redeploy with JumpStart"]
    },
    {
      id: "monitor-vs-clarify-separator",
      topic: "Model Monitor vs Clarify",
      difficulty: "hard",
      q: "What's the fastest way to separate Model Monitor from Clarify on a question?",
      hint: "One of them has no concept of time or thresholds.",
      a: "Something going wrong in production over time -> Model Monitor. Understanding WHY a model behaved a certain way, or finding bias in data/predictions -> Clarify.",
      why: "If the question says '4 months later', 'degraded over time', or 'notify when quality drops', it's Model Monitor, full stop. Clarify has no concept of time or thresholds."
    },
    {
      id: "jumpstart-vs-endpoint",
      topic: "JumpStart vs Endpoints",
      difficulty: "medium",
      q: "What's the difference between SageMaker JumpStart and an Endpoint?",
      hint: "One is how you find/launch a model; the other is what you actually call.",
      a: "JumpStart is the catalog and launch mechanism for finding and deploying pre-built models. An Endpoint is the infrastructure where the model lives and serves predictions.",
      why: "JumpStart gets you there fast (the shortcut to deploying); the Endpoint is what makes the model callable/invokable."
    },
    {
      id: "notdo-model-monitor",
      topic: "Distractor: what it does NOT do",
      difficulty: "hard",
      q: "Name things SageMaker Model Monitor does NOT do.",
      hint: "It watches production drift — that's all.",
      a: "Model Monitor does NOT: explain why a prediction was made, detect bias in training data before training, store/manage features, or provide pre-built models to deploy.",
      why: "Its job is production drift / data quality / bias drift detection with notifications. Explanation = Clarify; features = Feature Store; pre-built models = JumpStart."
    },
    {
      id: "notdo-clarify",
      topic: "Distractor: what it does NOT do",
      difficulty: "hard",
      q: "Name things SageMaker Clarify does NOT do.",
      hint: "It has no sense of time or thresholds.",
      a: "Clarify does NOT: monitor live production traffic continuously over time, alert when drift crosses a threshold, store features/datasets, or deploy/serve models.",
      why: "Clarify = bias detection + explainability. Continuous production monitoring/alerts = Model Monitor."
    },
    {
      id: "notdo-feature-store",
      topic: "Distractor: what it does NOT do",
      difficulty: "medium",
      q: "Name things SageMaker Feature Store does NOT do.",
      hint: "It's purely a data layer.",
      a: "Feature Store does NOT: train models, monitor or evaluate models, detect bias, or provide pre-built models.",
      why: "It's purely a data/feature management layer for storing and sharing feature sets."
    },
    {
      id: "notdo-jumpstart",
      topic: "Distractor: what it does NOT do",
      difficulty: "medium",
      q: "Name things SageMaker JumpStart does NOT do.",
      hint: "It's a starting point, not an ops or training platform.",
      a: "JumpStart does NOT: monitor what happens after deployment, detect bias or explain predictions, store feature sets, or run from-scratch training with your own custom algorithm.",
      why: "JumpStart is a pre-built model hub / fast start — a starting point, not a custom training platform."
    },
    {
      id: "distractor-foursome",
      topic: "Distractor: the core foursome",
      difficulty: "medium",
      q: "The exam loves putting four SageMaker tools in the same answer set. Name them and the one job each owns.",
      hint: "Drift, explainability, features, pre-built models.",
      a: "Model Monitor = production drift/monitoring; Clarify = bias detection + explainability; Feature Store = storing/sharing feature sets; JumpStart = pre-built model hub.",
      why: "Knowing what each one does NOT do is as valuable as knowing what it does. Most tested confusion: Model Monitor vs Clarify."
    }
  ]
});
