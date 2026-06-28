/*
 * Deck: D2.3 — AWS Infrastructure for Generative AI (AWS AI Practitioner)
 * ----------------------------------------------------------------------
 * Domain 2: Fundamentals of Generative AI (24%) · Task 2.3
 */
registerDeck({
  id: "d2-3-aws-genai-infra",
  title: "D2.3 — AWS GenAI Infrastructure",
  cards: [
    // ---- Bedrock ----
    {
      id: "d23-bedrock-001",
      topic: "Amazon Bedrock",
      difficulty: "easy",
      q: "What is Amazon Bedrock?",
      hint: "Serverless API to many FMs.",
      a: "A fully managed service offering access to foundation models from multiple providers through a single serverless API.",
      why: "Bedrock lets you call, customize (RAG/fine-tune), and build agents on FMs without managing infrastructure.",
      correct: "A managed service for accessing and building with foundation models via one API",
      distractors: ["A relational database service", "A container orchestration service", "A data warehouse"]
    },
    {
      id: "d23-bedrock-002",
      topic: "Amazon Bedrock",
      difficulty: "medium",
      q: "Select capabilities Amazon Bedrock provides.",
      hint: "Models, RAG, agents, guardrails, eval.",
      a: "Access to multiple FMs, Knowledge Bases (RAG), Agents, Guardrails, and model evaluation—all serverless.",
      why: "Bedrock is a one-stop managed GenAI platform. Training a model fully from scratch on your own GPUs is not its purpose.",
      correct: ["Access to FMs from multiple providers", "Knowledge Bases for RAG", "Agents for multi-step tasks", "Guardrails for safety"],
      distractors: ["Pre-training a brand-new FM from scratch on your own GPU cluster"]
    },
    {
      id: "d23-bedrock-003",
      topic: "Amazon Bedrock",
      difficulty: "medium",
      q: "What is Amazon Bedrock provisioned throughput used for?",
      hint: "Reserve capacity for steady, high volume.",
      a: "Reserving dedicated model capacity for predictable, high-volume workloads (often at lower cost than on-demand at scale).",
      why: "On-demand suits variable traffic; provisioned throughput suits steady, heavy usage and custom models."
    },
    // ---- SageMaker AI ----
    {
      id: "d23-sm-001",
      topic: "SageMaker AI",
      difficulty: "medium",
      q: "What is Amazon SageMaker AI, and how does it differ from Bedrock?",
      hint: "Full ML platform vs FM API.",
      a: "A full platform to build, train, tune, deploy, and manage ML models (including custom training); Bedrock is a managed API focused on consuming/customizing FMs.",
      why: "Use SageMaker for end-to-end control and custom models; use Bedrock for fast FM access with minimal ops."
    },
    {
      id: "d23-jumpstart-001",
      topic: "SageMaker AI",
      difficulty: "easy",
      q: "What is SageMaker JumpStart?",
      hint: "A hub of ready models and solutions.",
      a: "A hub of pre-trained models, foundation models, and solution templates you can deploy and fine-tune quickly.",
      why: "JumpStart accelerates getting started with pre-built models in SageMaker."
    },
    {
      id: "d23-quick-001",
      topic: "SageMaker AI",
      difficulty: "medium",
      q: "What is Amazon SageMaker Canvas used for?",
      hint: "No-code ML for analysts.",
      a: "Building ML models and generating predictions with a no-code, visual interface—no programming required.",
      why: "Canvas targets business analysts who want predictions without writing code."
    },
    // ---- Newer GenAI services ----
    {
      id: "d23-q-001",
      topic: "Amazon Q",
      difficulty: "medium",
      q: "What is Amazon Q?",
      hint: "Generative AI assistant for work and builders.",
      a: "A generative AI–powered assistant—Amazon Q Business for enterprise knowledge and Amazon Q Developer for coding/AWS tasks.",
      why: "Amazon Q applies GenAI to business Q&A and developer productivity within AWS."
    },
    {
      id: "d23-nova-001",
      topic: "Amazon Nova",
      difficulty: "medium",
      q: "What is Amazon Nova?",
      hint: "Amazon's own family of FMs on Bedrock.",
      a: "Amazon's family of foundation models (including multimodal options) available through Amazon Bedrock.",
      why: "Nova models are Amazon-built FMs you can access via Bedrock."
    },
    {
      id: "d23-agentcore-001",
      topic: "Agent infrastructure",
      difficulty: "medium",
      q: "What is Amazon Bedrock AgentCore?",
      hint: "Run/operate agents securely at scale.",
      a: "Infrastructure for deploying and operating AI agents securely at scale (identity, memory, tools, runtime).",
      why: "AgentCore provides the production runtime/identity/memory plumbing for agents."
    },
    {
      id: "d23-strands-001",
      topic: "Agent infrastructure",
      difficulty: "medium",
      q: "What are Strands Agents?",
      hint: "An open-source SDK for building agents.",
      a: "An open-source SDK/framework for building AI agents that can plan and use tools.",
      why: "Strands Agents helps developers build agents that integrate with AWS agent infrastructure."
    },
    {
      id: "d23-kiro-001",
      topic: "Developer tooling",
      difficulty: "easy",
      q: "What is Kiro?",
      hint: "An AI-assisted development environment.",
      a: "An agentic, AI-powered IDE/development tool that helps build software with AI assistance.",
      why: "Kiro is part of AWS's developer-facing GenAI tooling."
    },
    // ---- Advantages & cost tradeoffs ----
    {
      id: "d23-adv-001",
      topic: "Advantages of AWS GenAI",
      difficulty: "medium",
      q: "Select advantages of building generative AI on AWS managed services.",
      hint: "Speed, scale, security, integration, less ops.",
      a: "Faster time to market, automatic scaling, built-in security/compliance, and integration with the AWS ecosystem.",
      why: "Managed services remove infrastructure burden. They do not eliminate the need to consider cost or responsible-AI controls.",
      correct: ["Faster time to market", "Automatic scaling without managing servers", "Built-in security and compliance options", "Integration with other AWS services"],
      distractors: ["Removes any need to think about cost or governance"]
    },
    {
      id: "d23-cost-001",
      topic: "Cost tradeoffs",
      difficulty: "hard",
      q: "Select factors that drive the COST of a generative AI workload on AWS.",
      hint: "Tokens, model size, throughput mode, customization.",
      a: "Number of input/output tokens, model size/choice, on-demand vs provisioned throughput, and customization (fine-tuning/storage).",
      why: "These determine spend. The color scheme of your app's UI has no effect on GenAI cost.",
      correct: ["Number of tokens processed", "Choice/size of the model", "On-demand vs provisioned throughput", "Fine-tuning and custom model hosting"],
      distractors: ["The color scheme of the application UI"]
    },
    {
      id: "d23-cost-002",
      topic: "Cost tradeoffs",
      difficulty: "medium",
      q: "For unpredictable, bursty GenAI traffic, which Bedrock pricing mode is generally most cost-effective?",
      hint: "Pay only for what you use.",
      a: "On-demand (pay-per-token) pricing.",
      why: "On-demand avoids paying for idle reserved capacity; provisioned throughput fits steady, high volume.",
      correct: "On-demand (pay per token)",
      distractors: ["Provisioned throughput reserved 24/7", "Buying dedicated GPU instances", "A fixed annual license"]
    }
  ]
});
