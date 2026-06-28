/*
 * Deck: D5.2 — Governance & Compliance (AWS AI Practitioner)
 * ---------------------------------------------------------
 * Domain 5: Security, Compliance, and Governance (14%) · Task 5.2
 */
registerDeck({
  id: "d5-2-governance-compliance",
  title: "D5.2 — Governance & Compliance",
  cards: [
    // ---- Governance & compliance services ----
    {
      id: "d52-config-001",
      topic: "Governance services",
      difficulty: "medium",
      q: "Which AWS service continuously records and evaluates resource configurations against rules for compliance?",
      hint: "Tracks config changes; checks compliance.",
      a: "AWS Config.",
      why: "Config tracks configuration history and evaluates compliance rules. CloudTrail logs API activity; Inspector scans for vulnerabilities.",
      correct: "AWS Config",
      distractors: ["AWS CloudTrail", "Amazon Inspector", "AWS Artifact"]
    },
    {
      id: "d52-cloudtrail-001",
      topic: "Governance services",
      difficulty: "medium",
      q: "Which AWS service records API calls and user activity for auditing?",
      hint: "Who did what, when.",
      a: "AWS CloudTrail.",
      why: "CloudTrail provides an audit trail of API activity—key for accountability and investigations.",
      correct: "AWS CloudTrail",
      distractors: ["AWS Config", "Amazon Macie", "AWS Trusted Advisor"]
    },
    {
      id: "d52-inspector-001",
      topic: "Governance services",
      difficulty: "medium",
      q: "What does Amazon Inspector do?",
      hint: "Automated vulnerability scanning.",
      a: "Automatically scans workloads (e.g., EC2, containers, Lambda) for software vulnerabilities and unintended network exposure.",
      why: "Inspector finds security weaknesses; it doesn't track config compliance (that's Config).",
      correct: "Scans workloads for vulnerabilities",
      distractors: ["Records API activity", "Discovers PII in S3", "Provides compliance reports/agreements"]
    },
    {
      id: "d52-artifact-001",
      topic: "Governance services",
      difficulty: "medium",
      q: "What is AWS Artifact?",
      hint: "On-demand compliance documents.",
      a: "A portal for on-demand access to AWS compliance reports and agreements (e.g., SOC, ISO, PCI).",
      why: "Artifact provides audit/compliance documentation for your own audits.",
      correct: "On-demand AWS compliance reports and agreements",
      distractors: ["A vulnerability scanner", "A vector database", "An API audit log"]
    },
    {
      id: "d52-audit-001",
      topic: "Governance services",
      difficulty: "medium",
      q: "What does AWS Audit Manager help with?",
      hint: "Automates evidence collection for audits.",
      a: "Continuously collecting evidence and mapping it to compliance frameworks to streamline audits.",
      why: "Audit Manager automates audit evidence gathering against standards/frameworks."
    },
    {
      id: "d52-trusted-001",
      topic: "Governance services",
      difficulty: "easy",
      q: "What does AWS Trusted Advisor provide?",
      hint: "Best-practice recommendations.",
      a: "Recommendations across cost, performance, security, reliability, and service limits based on AWS best practices.",
      why: "Trusted Advisor flags best-practice gaps, including some security checks."
    },
    {
      id: "d52-svc-match",
      topic: "Governance services",
      difficulty: "hard",
      q: "Match the need to the service: prove to an auditor that you hold AWS's SOC 2 report.",
      hint: "Download the document.",
      a: "AWS Artifact.",
      why: "Artifact delivers compliance reports/agreements. Config checks resource compliance; CloudTrail logs activity; Audit Manager assembles evidence.",
      correct: "AWS Artifact",
      distractors: ["AWS Config", "AWS CloudTrail", "AWS Audit Manager"]
    },
    // ---- Data governance ----
    {
      id: "d52-datagov-001",
      topic: "Data governance",
      difficulty: "medium",
      q: "Select elements of a data governance strategy for AI.",
      hint: "Quality, lineage, access, retention, privacy.",
      a: "Data quality standards, lineage/traceability, access controls, retention policies, and privacy/compliance handling.",
      why: "Governance ensures data used for AI is trustworthy, controlled, and compliant. 'Deleting all logs immediately' undermines auditability.",
      correct: ["Data quality standards", "Data lineage and traceability", "Access controls", "Retention and privacy policies"],
      distractors: ["Delete all audit logs immediately"]
    },
    {
      id: "d52-datagov-002",
      topic: "Data governance",
      difficulty: "easy",
      q: "Why is data lineage important for AI governance?",
      hint: "Know where data came from.",
      a: "It tracks data's origin and transformations, enabling reproducibility, auditing, and compliance.",
      why: "Lineage answers 'where did this data/answer come from?'—vital for trust and audits."
    },
    // ---- Governance frameworks ----
    {
      id: "d52-scoping-001",
      topic: "Governance frameworks",
      difficulty: "medium",
      q: "What is the Generative AI Security Scoping Matrix?",
      hint: "Framework to classify GenAI usage by ownership/risk.",
      a: "An AWS framework that categorizes GenAI use cases by how much you own/control (from using a public app to building your own model) to guide appropriate security controls.",
      why: "It helps match security and governance measures to each GenAI scope."
    },
    {
      id: "d52-protocol-001",
      topic: "Governance protocols",
      difficulty: "medium",
      q: "Select good governance/compliance practices for an AI program.",
      hint: "Policies, reviews, transparency, training, monitoring.",
      a: "Clear policies, regular reviews/audits, transparency and documentation, staff training, and ongoing monitoring.",
      why: "These institutionalize responsible AI. 'Avoid documenting anything' defeats governance and auditability.",
      correct: ["Clear AI usage policies", "Regular reviews and audits", "Transparency and documentation", "Staff training on responsible AI", "Ongoing monitoring"],
      distractors: ["Avoid documenting anything to save time"]
    },
    {
      id: "d52-reg-001",
      topic: "Compliance",
      difficulty: "easy",
      q: "Why must AI systems consider regulations like GDPR or industry standards?",
      hint: "Legal obligations on data/decisions.",
      a: "Because laws govern how personal data is collected/used and how automated decisions are made; non-compliance brings legal and financial risk.",
      why: "Compliance shapes data handling, consent, explainability, and retention in AI systems."
    },
    {
      id: "d52-monitor-001",
      topic: "Monitoring & review",
      difficulty: "medium",
      q: "Why establish a regular review cadence for deployed AI systems?",
      hint: "Models and risks change over time.",
      a: "To catch drift, emerging bias, new risks, and compliance changes—keeping the system accurate, fair, and lawful over time.",
      why: "Continuous governance (not one-time sign-off) is essential as data and regulations evolve."
    }
  ]
});
