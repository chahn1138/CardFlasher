/*
 * Deck: D3.2 — Prompt Engineering (AWS AI Practitioner)
 * ----------------------------------------------------
 * Domain 3: Applications of Foundation Models (28%) · Task 3.2
 */
registerDeck({
  id: "d3-2-prompt-engineering",
  title: "D3.2 — Prompt Engineering",
  cards: [
    // ---- Prompt components ----
    {
      id: "d32-comp-001",
      topic: "Prompt components",
      difficulty: "medium",
      q: "Select common components of a well-structured prompt.",
      hint: "Instruction, context, input, output format.",
      a: "An instruction, context (background/retrieved info), the input data, and the desired output format.",
      why: "Clear structure improves results. The model's hardware type is not a prompt component.",
      correct: ["Instruction (what to do)", "Context / background information", "Input data", "Desired output format"],
      distractors: ["The GPU type running the model"]
    },
    {
      id: "d32-neg-001",
      topic: "Prompt components",
      difficulty: "medium",
      q: "What is a 'negative prompt'?",
      hint: "Tell the model what NOT to do/include.",
      a: "Instructions specifying what the model should avoid or exclude from its output.",
      why: "Negative prompting steers the model away from unwanted content/styles."
    },
    {
      id: "d32-context-001",
      topic: "Prompt components",
      difficulty: "easy",
      q: "Why include context (e.g., a relevant document) in a prompt?",
      hint: "Ground the answer.",
      a: "To ground the model's response in accurate, relevant information and reduce hallucination.",
      why: "Providing context is the core idea behind in-context learning and RAG."
    },
    // ---- Techniques ----
    {
      id: "d32-zeroshot-001",
      topic: "Techniques",
      difficulty: "easy",
      q: "What is zero-shot prompting?",
      hint: "No examples given.",
      a: "Asking the model to perform a task with only an instruction and no examples.",
      why: "Zero-shot relies on the model's pre-trained knowledge; few-shot adds examples to improve accuracy.",
      correct: "Giving an instruction with no examples",
      distractors: ["Giving one example", "Giving several examples", "Asking the model to show its reasoning steps"]
    },
    {
      id: "d32-fewshot-001",
      topic: "Techniques",
      difficulty: "medium",
      q: "What is few-shot prompting?",
      hint: "Show a handful of examples.",
      a: "Including a few input/output examples in the prompt to demonstrate the desired pattern.",
      why: "Examples (in-context learning) often boost accuracy and format consistency over zero-shot.",
      correct: "Including several examples in the prompt",
      distractors: ["Including no examples", "Fine-tuning the model on examples", "Lowering the temperature to 0"]
    },
    {
      id: "d32-cot-001",
      topic: "Techniques",
      difficulty: "medium",
      q: "What is chain-of-thought (CoT) prompting?",
      hint: "Ask it to reason step by step.",
      a: "Prompting the model to break a problem into intermediate reasoning steps before giving the final answer.",
      why: "CoT improves performance on complex reasoning/math tasks.",
      correct: "Asking the model to reason step by step",
      distractors: ["Asking for the shortest possible answer", "Providing no instructions", "Restricting output to one token"]
    },
    {
      id: "d32-template-001",
      topic: "Techniques",
      difficulty: "easy",
      q: "What is a prompt template?",
      hint: "Reusable prompt with placeholders.",
      a: "A reusable, parameterized prompt structure with placeholders filled in at runtime.",
      why: "Templates standardize prompts across requests and make them maintainable."
    },
    {
      id: "d32-tech-002",
      topic: "Techniques",
      difficulty: "medium",
      q: "Match the technique: providing exactly ONE example in the prompt.",
      hint: "Between zero-shot and few-shot.",
      a: "Single-shot (one-shot) prompting.",
      why: "One example = single-shot; several = few-shot; none = zero-shot.",
      correct: "Single-shot (one-shot) prompting",
      distractors: ["Zero-shot prompting", "Few-shot prompting", "Chain-of-thought prompting"]
    },
    // ---- Best practices ----
    {
      id: "d32-bp-001",
      topic: "Best practices",
      difficulty: "medium",
      q: "Select prompt-engineering best practices.",
      hint: "Be specific, give examples, specify format, iterate.",
      a: "Be clear and specific, provide relevant context/examples, specify the desired output format, and iterate/refine.",
      why: "Specificity and structure improve reliability. Vague prompts with no constraints reduce quality.",
      correct: ["Be clear and specific about the task", "Provide relevant context and examples", "Specify the desired output format", "Iterate and refine the prompt"],
      distractors: ["Keep prompts as vague as possible"]
    },
    {
      id: "d32-bp-002",
      topic: "Best practices",
      difficulty: "easy",
      q: "Why specify an output format (e.g., 'respond as JSON with fields x, y') in a prompt?",
      hint: "Predictable, parseable output.",
      a: "To get consistent, structured output that downstream systems can reliably parse.",
      why: "Format instructions reduce variability and integration errors."
    },
    // ---- Risks ----
    {
      id: "d32-inject-001",
      topic: "Prompt risks",
      difficulty: "medium",
      q: "What is a prompt injection attack?",
      hint: "Malicious input overrides your instructions.",
      a: "When crafted input (often hidden in user data or documents) manipulates the model into ignoring its instructions or doing something unintended.",
      why: "Injection can leak data or bypass safety; mitigations include input/output filtering and guardrails.",
      correct: "Malicious input that overrides or subverts the system's instructions",
      distractors: ["Sending too many tokens at once", "Setting temperature too high", "Running out of provisioned throughput"]
    },
    {
      id: "d32-jailbreak-001",
      topic: "Prompt risks",
      difficulty: "medium",
      q: "What is 'jailbreaking' a model?",
      hint: "Trick it past its safety rules.",
      a: "Crafting prompts that bypass a model's safety guardrails to produce restricted or harmful output.",
      why: "Jailbreaking defeats safety controls; guardrails and monitoring help defend against it."
    },
    {
      id: "d32-poison-001",
      topic: "Prompt risks",
      difficulty: "medium",
      q: "What is prompt 'poisoning'?",
      hint: "Corrupt the inputs/examples the model relies on.",
      a: "Injecting malicious or misleading content into prompts, examples, or retrieved data so the model produces compromised output.",
      why: "Poisoned context (e.g., tainted documents in RAG) can manipulate responses."
    },
    {
      id: "d32-risk-002",
      topic: "Prompt risks",
      difficulty: "hard",
      q: "Select security risks associated with prompts.",
      hint: "Injection, hijacking, jailbreaking, exposure.",
      a: "Prompt injection, prompt hijacking, jailbreaking, and exposure of sensitive data in prompts.",
      why: "These threaten safety and confidentiality. Slow typing speed is not a prompt security risk.",
      correct: ["Prompt injection", "Prompt hijacking", "Jailbreaking", "Exposure of sensitive data in the prompt"],
      distractors: ["Slow user typing speed"]
    },
    // ---- Bedrock Prompt Management ----
    {
      id: "d32-bpm-001",
      topic: "Bedrock Prompt Management",
      difficulty: "medium",
      q: "What does Amazon Bedrock Prompt Management provide?",
      hint: "Create, version, test, share prompts.",
      a: "Tools to create, version, test, and manage prompts (and prompt templates) for reuse across applications.",
      why: "It standardizes and governs prompts instead of scattering them in code."
    }
  ]
});
