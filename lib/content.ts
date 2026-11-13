export const site = {
  name: "Aayush Joshi",
  url: "https://aayushjoshi.10xdevs.in",
  email: "joshiaayush1244@gmail.com",
  github: "https://github.com/aayushjoshi-12",
  linkedin: "https://www.linkedin.com/in/aayushjoshi1244",
  tagline: "I build AI agents, and the infrastructure that keeps them reliable.",
  description:
    "Aayush Joshi is an AI systems engineer in Haridwar, India: agents, retrieval, MCP and the infrastructure that keeps them reliable.",
};

export type Shape = "circle" | "square" | "triangle";
export type Tone = "red" | "yellow" | "blue";

export type Flagship = {
  slug: string;
  n: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
  shape: Shape;
  tone: Tone;
  repo?: string;
};

export const flagships: Flagship[] = [
  {
    slug: "agent-stack",
    n: "01",
    title: "agent-stack",
    status: "Private for now",
    summary:
      "An agent runtime built from first principles: a tool loop with limits and deadlines, approvals, sessions, memory, todos, subagents, TUI and Telegram gateways, and observability.",
    tags: ["Python", "LangChain", "SQLite", "429 tests"],
    shape: "circle",
    tone: "red",
  },
  {
    slug: "rag-pipeline",
    n: "02",
    title: "rag-pipeline",
    status: "In progress",
    summary:
      "An enterprise retrieval pipeline under construction. It is not finished, so this page says only what exists.",
    tags: ["FastAPI", "Postgres + pgvector", "Celery"],
    shape: "square",
    tone: "blue",
  },
  {
    slug: "rlhf-pipeline",
    n: "03",
    title: "RLHF pipeline",
    status: "Public",
    summary:
      "Preference-data tooling and the SFT, reward-model and PPO stages of RLHF, built with TRL.",
    tags: ["TRL", "QLoRA", "PPO"],
    shape: "triangle",
    tone: "yellow",
    repo: "https://github.com/aayushjoshi-12/train-test-regime",
  },
  {
    slug: "osint-agent",
    n: "04",
    title: "OSINT agent",
    status: "Public",
    summary:
      "A streaming LangGraph agent that drives open-source intelligence tools through a single MCP server.",
    tags: ["LangGraph", "MCP", "Python"],
    shape: "circle",
    tone: "blue",
    repo: "https://github.com/aayushjoshi-12/osint-backend",
  },
];

export const smaller = [
  { name: "octo", note: "A LangChain agent that emits structured UI actions for a canvas over WebSockets.", href: "https://github.com/aayushjoshi-12/octo" },
  { name: "interviewer", note: "A mock-interview agent with resume parsing and streaming. Archived.", href: "https://github.com/aayushjoshi-12/interviewer" },
  { name: "surch", note: "A conversational web-search summariser on ChromaDB and Mistral-7B.", href: "https://github.com/aayushjoshi-12/surch" },
  { name: "finance-llm", note: "Auto-generated QA data and a QLoRA fine-tune of Mistral-7B, with a candid GPU-limits write-up.", href: "https://github.com/aayushjoshi-12/finance-llm" },
  { name: "faces", note: "YOLO face detection and a ResNet18 emotion classifier, 65.97% on FER-2013.", href: "https://github.com/aayushjoshi-12/faces" },
];

export const experience = [
  {
    role: "Software Consultant",
    org: "ThinkAct AI",
    when: "Jun 2026 – now",
    note: "Client engagement for Affiliated Monitoring.",
    body: "LLM-backed reporting with PII scrubbing, a call-recording QA agent, a tenant-agnostic document-extraction service, a hosted MCP server and deployment tooling.",
  },
  {
    role: "Software Engineer Intern",
    org: "ThinkAct AI",
    when: "Jun 2025 – May 2026",
    note: "ThinkAct is part of the NVIDIA Inception program.",
    body: "Multi-tenant RAG, LangChain and LangGraph agents, MCP servers, FastAPI services, OpenSearch and pgvector retrieval, a Neo4j relationship layer and mortgage-document processing. Deployed on AWS EC2 and S3. Peer code reviews.",
  },
  {
    role: "Software Engineer Intern",
    org: "Dolphant AI",
    when: "Apr – Jun 2025",
    note: "Dolphant later became ThinkAct.",
    body: "QLoRA fine-tuning and an RLHF pipeline with TRL (SFT, a human ranking tool, a reward model, PPO). FastAPI services.",
  },
  {
    role: "ML Intern",
    org: "The Social Purpose Trust",
    when: "Feb – Apr 2025",
    note: "",
    body: "Machine learning for climate and solar work, including SuryaCalc.",
  },
  {
    role: "Technical Documentation Specialist Intern",
    org: "Pragadas Technologies",
    when: "Jul – Aug 2024",
    note: "",
    body: "Technical documentation.",
  },
];

export const skills = {
  strong: [
    "Python", "FastAPI", "LangChain / LangGraph", "MCP", "RAG: OpenSearch, pgvector, Chroma",
    "Document parsing", "Celery, Postgres, Docker", "QLoRA", "LLM tracing and evals",
  ],
  working: ["Neo4j", "MongoDB", "TypeScript / React"],
};

export const hackathons = [
  {
    title: "Productathon AI 2025",
    where: "IIT Roorkee",
    result: "Spheron track winner",
    note: "Team of three: Aayush, Nirmit and Aryan.",
    photos: [
      { src: "/photos/roorkee-group.jpg", w: 1050, h: 1400, alt: "Four participants posing in front of the main building at IIT Roorkee" },
      { src: "/photos/roorkee-sign.jpg", w: 1050, h: 1400, alt: "Productathon AI signboard at E-Summit 2025, IIT Roorkee, 31 Jan to 2 Feb" },
    ],
  },
  {
    title: "Innerve X 2026",
    where: "AIT Pune",
    result: "Best Use of Vultr",
    note: "",
    photos: [
      { src: "/photos/pune-team.jpg", w: 1337, h: 1400, alt: "The team holding prize boxes on stage at Innerve X with an organiser" },
      { src: "/photos/pune-badge.jpg", w: 1400, h: 1050, alt: "Innerve X goodie bag, participant badge and a team card reading 10xdevs" },
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Gurukula Kangri, Haridwar",
  when: "Nov 2022 – May 2026",
  cgpa: "CGPA 8.26",
};
