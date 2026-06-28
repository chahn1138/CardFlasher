/*
 * Deck: D2.1 — Generative AI Core Concepts (AWS AI Practitioner)
 * -------------------------------------------------------------
 * Domain 2: Fundamentals of Generative AI (24%) · Task 2.1
 */
registerDeck({
  id: "d2-1-genai-concepts",
  title: "D2.1 — GenAI Core Concepts",
  cards: [
    // ---- Tokens, embeddings, vectors ----
    {
      id: "d21-token-001",
      topic: "Tokens & embeddings",
      difficulty: "easy",
      q: "What is a 'token' in the context of LLMs?",
      hint: "Smaller than a sentence, often smaller than a word.",
      a: "A chunk of text (a word or sub-word piece) that the model processes as a unit.",
      why: "LLMs read and generate text token by token; pricing and context limits are measured in tokens."
    },
    {
      id: "d21-embed-001",
      topic: "Tokens & embeddings",
      difficulty: "medium",
      q: "What is an embedding?",
      hint: "Meaning as numbers.",
      a: "A numeric vector representation of text (or images) that captures semantic meaning, so similar items are close together in vector space.",
      why: "Embeddings power semantic search, RAG retrieval, clustering, and recommendations."
    },
    {
      id: "d21-vector-001",
      topic: "Tokens & embeddings",
      difficulty: "medium",
      q: "Why are vectors/embeddings useful for search and RAG?",
      hint: "Similarity by distance.",
      a: "Because semantically similar content has nearby vectors, so you can retrieve relevant text by vector similarity rather than exact keywords.",
      why: "This enables semantic ('meaning-based') retrieval, the backbone of RAG."
    },
    {
      id: "d21-chunk-001",
      topic: "Tokens & embeddings",
      difficulty: "medium",
      q: "What is 'chunking' in a RAG pipeline?",
      hint: "Break big documents into pieces.",
      a: "Splitting documents into smaller passages before embedding them, so retrieval returns focused, relevant pieces.",
      why: "Good chunking improves retrieval relevance and keeps passages within model context limits."
    },
    // ---- Architecture ----
    {
      id: "d21-trans-001",
      topic: "Model architecture",
      difficulty: "medium",
      q: "Which neural network architecture underlies most modern LLMs?",
      hint: "It uses 'attention'.",
      a: "The transformer architecture.",
      why: "Transformers use self-attention to model relationships across a sequence, enabling today's LLMs.",
      correct: "Transformer",
      distractors: ["Convolutional neural network (CNN)", "Recurrent neural network (RNN)", "Decision tree"]
    },
    {
      id: "d21-attn-001",
      topic: "Model architecture",
      difficulty: "hard",
      q: "What does the 'attention' mechanism let a transformer do?",
      hint: "Weigh relevant words.",
      a: "Weigh the relevance of different tokens to each other when producing each output, capturing long-range context.",
      why: "Self-attention is why transformers handle context far better than older RNNs."
    },
    {
      id: "d21-diffusion-001",
      topic: "Model architecture",
      difficulty: "medium",
      q: "Which type of model generates images by iteratively removing noise from random data?",
      hint: "Used for image generation.",
      a: "Diffusion models.",
      why: "Diffusion models (e.g., for image generation) start from noise and denoise toward an image. Transformers dominate text.",
      correct: "Diffusion models",
      distractors: ["Decision trees", "Linear regression", "Recurrent neural networks"]
    },
    {
      id: "d21-multimodal-001",
      topic: "Model architecture",
      difficulty: "easy",
      q: "What is a 'multi-modal' model?",
      hint: "More than one kind of input/output.",
      a: "A model that can process and/or generate more than one type of data—e.g., text, images, and audio together.",
      why: "Multi-modal FMs (like Amazon Nova) accept/produce mixed media, not just text."
    },
    // ---- Foundation models ----
    {
      id: "d21-fm-001",
      topic: "Foundation models",
      difficulty: "easy",
      q: "What is a foundation model (FM)?",
      hint: "Big, general, pre-trained, adaptable.",
      a: "A large model pre-trained on broad data that can be adapted (via prompting, RAG, or fine-tuning) to many downstream tasks.",
      why: "FMs are general-purpose bases; LLMs are FMs specialized for language."
    },
    {
      id: "d21-fmlife-001",
      topic: "Foundation models",
      difficulty: "hard",
      q: "Put the foundation model lifecycle in order.",
      hint: "Data → pre-train → adapt → evaluate → deploy → monitor.",
      a: "Data selection → pre-training → fine-tuning/adaptation → evaluation → deployment → monitoring/feedback.",
      why: "Pre-training builds the base; adaptation tailors it; evaluation and monitoring keep it useful and safe."
    },
    // ---- Prompting basics ----
    {
      id: "d21-prompt-001",
      topic: "Prompting basics",
      difficulty: "easy",
      q: "What is prompt engineering?",
      hint: "Crafting the input to steer the output.",
      a: "Designing and refining the text input (prompt) to guide a model toward the desired output.",
      why: "Prompting is the fastest, cheapest way to adapt an FM—no training required."
    },
    {
      id: "d21-context-001",
      topic: "Prompting basics",
      difficulty: "medium",
      q: "What is 'context engineering' (providing context in the prompt)?",
      hint: "Give the model the facts it needs.",
      a: "Supplying relevant information (instructions, examples, retrieved documents) in the prompt so the model can respond accurately.",
      why: "Context engineering—including RAG—grounds responses in trusted data without retraining."
    },
    {
      id: "d21-window-001",
      topic: "Prompting basics",
      difficulty: "medium",
      q: "What is the 'context window' of an LLM?",
      hint: "How much it can read at once.",
      a: "The maximum amount of text (in tokens) the model can consider in a single request—prompt plus response.",
      why: "Exceeding the context window truncates information; larger windows allow more context but cost more."
    },
    // ---- Pricing ----
    {
      id: "d21-price-001",
      topic: "Pricing model",
      difficulty: "medium",
      q: "How is usage of most managed LLMs (e.g., on Amazon Bedrock) typically priced?",
      hint: "Pay for what you read and write.",
      a: "Per token—based on the number of input tokens plus output tokens processed.",
      why: "Token-based pricing means longer prompts/outputs cost more; this drives prompt and context-size decisions.",
      correct: "Per input + output token processed",
      distractors: ["A flat monthly fee regardless of usage", "Per GPU owned by the customer", "Per model downloaded"]
    },
    // ---- Agentic AI ----
    {
      id: "d21-agent-001",
      topic: "Agentic AI",
      difficulty: "medium",
      q: "What is an AI agent?",
      hint: "It reasons and uses tools to act.",
      a: "A system that uses an FM to reason, plan, and call tools/APIs over multiple steps to accomplish a goal.",
      why: "Agents extend FMs from single answers to autonomous, multi-step task completion."
    },
    {
      id: "d21-mcp-001",
      topic: "Agentic AI",
      difficulty: "medium",
      q: "What is the Model Context Protocol (MCP)?",
      hint: "A standard way to connect models to tools/data.",
      a: "An open standard that lets AI models/agents connect to external tools and data sources in a consistent way.",
      why: "MCP standardizes how agents discover and use tools, simplifying integration."
    },
    {
      id: "d21-multiagent-001",
      topic: "Agentic AI",
      difficulty: "medium",
      q: "What is a multi-agent system?",
      hint: "Several specialized agents collaborating.",
      a: "Multiple AI agents that coordinate—often with specialized roles—to solve a larger task together.",
      why: "Dividing work across cooperating agents can handle complex workflows better than one agent."
    },
    {
      id: "d21-agentcomp-001",
      topic: "Agentic AI",
      difficulty: "hard",
      q: "Select the typical components of an AI agent.",
      hint: "Brain, memory, tools, planning.",
      a: "A reasoning model (LLM), memory, access to tools/APIs, and a planning/orchestration loop.",
      why: "These let an agent decide actions, remember context, and execute steps. A fixed if/else script with no model is not an agent.",
      correct: ["A reasoning model (LLM)", "Memory of prior steps/context", "Access to tools / external APIs", "A planning or orchestration loop"],
      distractors: ["A purely hard-coded if/else script with no model"]
    },
    // ---- GenAI use cases ----
    {
      id: "d21-uc-001",
      topic: "GenAI use cases",
      difficulty: "easy",
      q: "Select common generative AI use cases.",
      hint: "Create, summarize, answer, translate, code.",
      a: "Text summarization, content/code generation, chatbots/Q&A, translation, and image generation.",
      why: "These are core GenAI tasks. Computing an exact bank-balance total is a deterministic task better done with traditional code.",
      correct: ["Summarizing long documents", "Generating marketing copy or code", "Conversational Q&A chatbots", "Image generation"],
      distractors: ["Computing an exact account balance from a ledger"]
    }
  ]
});
