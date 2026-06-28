/*
 * Deck: D3.1 — FM Application Design & RAG (AWS AI Practitioner)
 * ------------------------------------------------------------
 * Domain 3: Applications of Foundation Models (28%) · Task 3.1
 */
registerDeck({
  id: "d3-1-fm-design-rag",
  title: "D3.1 — FM Design & RAG",
  cards: [
    // ---- FM selection ----
    {
      id: "d31-sel-001",
      topic: "FM selection criteria",
      difficulty: "hard",
      q: "Select criteria for selecting a pre-trained foundation model for an application.",
      hint: "Cost, latency, modality, size, context, language.",
      a: "Cost, inference latency, modality, model size, context window, language support, and customization options.",
      why: "Selection balances quality, speed, cost, and fit for the task. The model's release marketing budget is irrelevant.",
      correct: ["Cost", "Inference latency", "Modality (text/image/multimodal)", "Maximum context window", "Language/domain support"],
      distractors: ["The marketing budget of the model's launch"]
    },
    // ---- Inference parameters ----
    {
      id: "d31-temp-001",
      topic: "Inference parameters",
      difficulty: "medium",
      q: "What does the 'temperature' inference parameter control?",
      hint: "Randomness/creativity of output.",
      a: "The randomness of outputs—lower temperature is more focused/deterministic; higher is more diverse/creative.",
      why: "Use low temperature for factual/consistent tasks, higher for creative variety.",
      correct: "How random vs deterministic the output is",
      distractors: ["The maximum number of output tokens", "The number of documents retrieved", "The model's training data size"]
    },
    {
      id: "d31-topp-001",
      topic: "Inference parameters",
      difficulty: "hard",
      q: "What do Top-P (nucleus) and Top-K sampling control?",
      hint: "Which next tokens are allowed.",
      a: "They restrict token selection to the most probable candidates—Top-K to the K most likely tokens, Top-P to the smallest set whose cumulative probability exceeds P.",
      why: "Like temperature, they tune diversity vs focus by limiting the candidate token pool."
    },
    {
      id: "d31-maxtok-001",
      topic: "Inference parameters",
      difficulty: "easy",
      q: "What does the 'max tokens' (response length) parameter do?",
      hint: "Caps the output size.",
      a: "Limits how many tokens the model can generate in its response.",
      why: "It bounds output length and cost; too low truncates answers."
    },
    {
      id: "d31-temp-002",
      topic: "Inference parameters",
      difficulty: "medium",
      q: "You need consistent, factual answers from an FM with minimal variation. How should you set temperature?",
      hint: "Toward zero.",
      a: "Set temperature low (near 0).",
      why: "Low temperature reduces randomness, giving more deterministic, focused output.",
      correct: "Low (near 0)",
      distractors: ["High (near 1)", "It has no effect on factuality", "Set max tokens to 0 instead"]
    },
    // ---- RAG ----
    {
      id: "d31-rag-001",
      topic: "RAG",
      difficulty: "easy",
      q: "What is retrieval-augmented generation (RAG)?",
      hint: "Fetch relevant docs, then generate.",
      a: "A technique that retrieves relevant external documents and adds them to the prompt so the model grounds its answer in that data.",
      why: "RAG reduces hallucinations and injects current/proprietary knowledge without retraining."
    },
    {
      id: "d31-rag-002",
      topic: "RAG",
      difficulty: "medium",
      q: "Which Amazon Bedrock feature provides managed RAG over your own data?",
      hint: "Connect a data source, get retrieval + grounding.",
      a: "Bedrock Knowledge Bases.",
      why: "Knowledge Bases handle ingestion, embedding, vector storage, and retrieval for RAG. Guardrails do safety; Agents do tool use.",
      correct: "Amazon Bedrock Knowledge Bases",
      distractors: ["Amazon Bedrock Guardrails", "Amazon Bedrock Agents", "SageMaker Model Monitor"]
    },
    {
      id: "d31-rag-003",
      topic: "RAG",
      difficulty: "medium",
      q: "Select benefits of using RAG instead of fine-tuning for keeping answers current.",
      hint: "Fresh data, no retraining, cite sources.",
      a: "Uses up-to-date/proprietary data without retraining, is cheaper to update, and can cite sources to reduce hallucination.",
      why: "RAG updates by changing the document store. Fine-tuning changes weights and must be redone when data changes—slower and costlier for freshness.",
      correct: ["Incorporates current/proprietary data without retraining", "Cheaper and faster to update than retraining", "Can cite retrieved sources"],
      distractors: ["Permanently bakes new facts into the model weights"]
    },
    // ---- Vector databases ----
    {
      id: "d31-vec-001",
      topic: "Vector databases",
      difficulty: "medium",
      q: "What role does a vector database play in a RAG system?",
      hint: "Store embeddings, search by similarity.",
      a: "It stores document embeddings and enables fast similarity search to retrieve the most relevant passages for a query.",
      why: "Vector search powers the 'retrieval' step of RAG."
    },
    {
      id: "d31-vec-002",
      topic: "Vector databases",
      difficulty: "hard",
      q: "Select AWS services that can store vectors/embeddings for RAG.",
      hint: "OpenSearch, Aurora/RDS PostgreSQL (pgvector), Neptune.",
      a: "Amazon OpenSearch Service, Amazon Aurora / RDS for PostgreSQL (pgvector), and Amazon Neptune Analytics.",
      why: "These support vector indexes for similarity search. Amazon Polly (text-to-speech) is not a vector store.",
      correct: ["Amazon OpenSearch Service", "Amazon Aurora PostgreSQL (pgvector)", "Amazon RDS for PostgreSQL (pgvector)", "Amazon Neptune Analytics"],
      distractors: ["Amazon Polly"]
    },
    // ---- Customization approaches & tradeoffs ----
    {
      id: "d31-cust-001",
      topic: "Customization tradeoffs",
      difficulty: "hard",
      q: "Order these FM customization approaches from LOWEST to HIGHEST cost/effort.",
      hint: "Prompt < RAG < fine-tune < pre-train.",
      a: "Prompt engineering → RAG → fine-tuning → continued pre-training (and full pre-training is highest).",
      why: "Start with the cheapest approach that meets requirements; escalate only as needed."
    },
    {
      id: "d31-cust-002",
      topic: "Customization tradeoffs",
      difficulty: "medium",
      q: "A team needs the model to consistently use proprietary terminology and tone, beyond what prompting can achieve. Which approach fits best?",
      hint: "Teach the model with examples.",
      a: "Fine-tuning the model on domain-specific examples.",
      why: "Fine-tuning adjusts the model to internalize style/terminology; RAG adds facts but not behavior/tone.",
      correct: "Fine-tuning on domain-specific examples",
      distractors: ["Increasing temperature", "Using a larger context window only", "Switching to batch inference"]
    },
    {
      id: "d31-cust-003",
      topic: "Customization tradeoffs",
      difficulty: "medium",
      q: "When should you prefer RAG over fine-tuning?",
      hint: "Facts that change; need citations; less cost.",
      a: "When you need current/changing or proprietary FACTS, want source citations, and want to avoid the cost of retraining.",
      why: "RAG injects knowledge dynamically; fine-tuning is better for changing behavior/style, not frequently-changing facts."
    },
    // ---- Agents in applications ----
    {
      id: "d31-agent-001",
      topic: "Agents in applications",
      difficulty: "medium",
      q: "What problem do AI agents solve in FM applications?",
      hint: "Multi-step tasks with tools/actions.",
      a: "They let the model plan and take multiple actions—calling APIs/tools, querying data, and chaining steps—to complete a task.",
      why: "Agents move beyond single Q&A to autonomous workflows (e.g., look up an order, then issue a refund)."
    },
    {
      id: "d31-agent-002",
      topic: "Agents in applications",
      difficulty: "medium",
      q: "Which Amazon Bedrock feature lets an FM call tools/APIs to complete multi-step tasks?",
      hint: "Not Knowledge Bases.",
      a: "Amazon Bedrock Agents.",
      why: "Bedrock Agents orchestrate tool calls and reasoning; Knowledge Bases handle retrieval/RAG.",
      correct: "Amazon Bedrock Agents",
      distractors: ["Amazon Bedrock Knowledge Bases", "Amazon Bedrock Guardrails", "Amazon Transcribe"]
    }
  ]
});
