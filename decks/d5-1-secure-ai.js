/*
 * Deck: D5.1 — Securing AI Systems (AWS AI Practitioner)
 * -----------------------------------------------------
 * Domain 5: Security, Compliance, and Governance (14%) · Task 5.1
 */
registerDeck({
  id: "d5-1-secure-ai",
  title: "D5.1 — Securing AI Systems",
  cards: [
    // ---- Core security services ----
    {
      id: "d51-iam-001",
      topic: "Access & identity",
      difficulty: "easy",
      q: "Which AWS service controls WHO can access AI resources and WHAT actions they can perform?",
      hint: "Identity and permissions.",
      a: "AWS Identity and Access Management (IAM).",
      why: "IAM enforces least-privilege access to Bedrock, SageMaker, data, etc.",
      correct: "AWS IAM",
      distractors: ["Amazon Macie", "AWS CloudTrail", "Amazon Inspector"]
    },
    {
      id: "d51-leastpriv-001",
      topic: "Access & identity",
      difficulty: "medium",
      q: "What is the principle of least privilege?",
      hint: "Only the access needed, nothing more.",
      a: "Granting each identity only the minimum permissions needed to do its job.",
      why: "Least privilege limits blast radius if credentials are compromised."
    },
    {
      id: "d51-macie-001",
      topic: "Data protection",
      difficulty: "medium",
      q: "Which AWS service uses ML to discover and protect sensitive data (like PII) in Amazon S3?",
      hint: "Finds PII in your buckets.",
      a: "Amazon Macie.",
      why: "Macie classifies and alerts on sensitive data in S3—useful before using data for AI.",
      correct: "Amazon Macie",
      distractors: ["Amazon Inspector", "AWS Config", "Amazon Rekognition"]
    },
    {
      id: "d51-encrypt-001",
      topic: "Data protection",
      difficulty: "easy",
      q: "Why encrypt data at rest and in transit for AI workloads?",
      hint: "Confidentiality.",
      a: "To protect sensitive training/inference data from unauthorized access if storage or network traffic is intercepted.",
      why: "Encryption (e.g., with AWS KMS / TLS) is a baseline control for confidentiality."
    },
    {
      id: "d51-privatelink-001",
      topic: "Network security",
      difficulty: "medium",
      q: "What does AWS PrivateLink provide for AI services like Bedrock?",
      hint: "Keep traffic off the public internet.",
      a: "Private connectivity between your VPC and AWS services over the AWS network, avoiding the public internet.",
      why: "PrivateLink reduces exposure and keeps data traffic private.",
      correct: "Private VPC connectivity to services without using the public internet",
      distractors: ["Automatic model fine-tuning", "Text-to-speech conversion", "Bias detection"]
    },
    // ---- Shared responsibility ----
    {
      id: "d51-shared-001",
      topic: "Shared responsibility",
      difficulty: "medium",
      q: "Under the AWS shared responsibility model, who secures the cloud vs in the cloud?",
      hint: "AWS = of; customer = in.",
      a: "AWS secures the cloud infrastructure ('security OF the cloud'); the customer secures their data, access, and configuration ('security IN the cloud').",
      why: "For AI, customers must still manage IAM, data protection, and safe use of models."
    },
    {
      id: "d51-shared-002",
      topic: "Shared responsibility",
      difficulty: "medium",
      q: "For a managed service like Amazon Bedrock, which security tasks remain the CUSTOMER's responsibility?",
      hint: "Access, data, prompts, output handling.",
      a: "Managing IAM access, protecting their data, controlling prompts/inputs, and handling/filtering outputs appropriately.",
      why: "AWS runs the model infrastructure; you govern access and how you use it. The customer does not patch Bedrock's underlying servers.",
      correct: ["Configuring IAM permissions", "Protecting their own data", "Controlling prompt inputs and output usage"],
      distractors: ["Patching the physical servers running Bedrock"]
    },
    // ---- GenAI-specific security ----
    {
      id: "d51-genai-001",
      topic: "GenAI security risks",
      difficulty: "hard",
      q: "Select security/privacy risks specific to generative AI applications.",
      hint: "Injection, data leakage, toxic output, poisoning.",
      a: "Prompt injection, sensitive data leakage, harmful/toxic output, and training-data poisoning.",
      why: "These require GenAI-specific controls (guardrails, filtering, input validation). 'Faster inference' is not a security risk.",
      correct: ["Prompt injection", "Sensitive data leakage", "Harmful/toxic output", "Training-data poisoning"],
      distractors: ["Faster inference latency"]
    },
    {
      id: "d51-leak-001",
      topic: "GenAI security risks",
      difficulty: "medium",
      q: "How can you reduce the risk of sensitive data leaking through a GenAI app?",
      hint: "Don't send secrets; filter; redact; guardrails.",
      a: "Avoid putting sensitive data in prompts, redact PII (e.g., Macie/Guardrails), filter outputs, and apply least-privilege access.",
      why: "Layered controls prevent confidential data from entering prompts or appearing in responses."
    },
    {
      id: "d51-guard-001",
      topic: "GenAI security controls",
      difficulty: "medium",
      q: "Which Bedrock feature helps block harmful content and redact PII at inference time?",
      hint: "Safety policy layer.",
      a: "Amazon Bedrock Guardrails.",
      why: "Guardrails filter content and redact sensitive data on inputs/outputs.",
      correct: "Amazon Bedrock Guardrails",
      distractors: ["Amazon Macie", "AWS CloudTrail", "SageMaker JumpStart"]
    },
    {
      id: "d51-agentid-001",
      topic: "GenAI security controls",
      difficulty: "medium",
      q: "What does AgentCore Identity provide for AI agents?",
      hint: "Secure identity/permissions for agents.",
      a: "Secure identity and access management for agents, so they authenticate and access tools/data with appropriate, controlled permissions.",
      why: "Agents act autonomously, so they need scoped identities and access controls."
    },
    // ---- Source citation & lineage ----
    {
      id: "d51-lineage-001",
      topic: "Traceability",
      difficulty: "medium",
      q: "Why are source citations and data lineage important for trustworthy AI?",
      hint: "Trace answers and data origins.",
      a: "They let you verify where an answer or training data came from, supporting trust, auditing, and compliance.",
      why: "Citations (e.g., from RAG) and lineage enable verification and accountability."
    },
    // ---- Hallucination mitigation ----
    {
      id: "d51-hall-001",
      topic: "Output validation",
      difficulty: "medium",
      q: "Select techniques to detect or reduce hallucinations in production.",
      hint: "Grounding, validation, confidence, citations, human review.",
      a: "RAG grounding, output validation against sources, confidence scoring, source citations, and human review.",
      why: "These keep outputs accurate and verifiable. Raising temperature increases randomness and tends to worsen hallucination.",
      correct: ["RAG grounding in trusted sources", "Validating output against sources", "Confidence scoring", "Source citations", "Human-in-the-loop review"],
      distractors: ["Raising temperature to maximum"]
    },
    {
      id: "d51-secdata-001",
      topic: "Secure data engineering",
      difficulty: "medium",
      q: "Select secure data-engineering practices for AI pipelines.",
      hint: "Classify, encrypt, mask, least-privilege, audit.",
      a: "Data classification, encryption, masking/anonymizing PII, least-privilege access, and audit logging.",
      why: "These protect data throughout the pipeline. Making all data public is the opposite of secure.",
      correct: ["Classify data by sensitivity", "Encrypt data at rest and in transit", "Mask or anonymize PII", "Apply least-privilege access", "Log and audit access"],
      distractors: ["Make all datasets publicly accessible"]
    }
  ]
});
