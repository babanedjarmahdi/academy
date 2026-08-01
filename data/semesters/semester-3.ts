import type { Capstone, Lesson, Module, Semester } from "@/types";
import { MessageSquareText, Brain, Database, MonitorSmartphone } from "lucide-react";

const prompting: Lesson[] = [
  {
    id: "s3-m1-l1",
    title: "How LLMs Actually Work",
    description:
      "Build an accurate mental model of transformers, tokens, context windows, and why models behave the way they do. This model makes every prompt you write better.",
    objectives: [
      "Explain tokens, tokenization, and context windows",
      "Describe the transformer architecture at a conceptual level",
      "Explain temperature, top-p, and other sampling parameters",
      "Understand why LLMs hallucinate and what mitigations exist",
      "Compare foundation models vs fine-tuned vs instruct-tuned",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Basic Python or JS experience"],
    technologies: ["openai", "prompting"],
    whyLearn:
      "Prompting and agent design are informed guesses without understanding the model underneath. A solid mental model saves weeks of trial and error.",
    useCases: [
      "Choosing the right model and parameters for a task",
      "Debugging weird model outputs",
      "Estimating token costs for automation",
      "Designing context-efficient prompts",
    ],
    commonMistakes: [
      "Treating the model as a database of facts",
      "Ignoring token limits and silently truncating",
      "Using max temperature everywhere",
      "Assuming newer models solve every problem",
    ],
    officialDocs: [
      { label: "OpenAI - Models overview", url: "https://platform.openai.com/docs/models" },
      { label: "Hugging Face - Transformer models course", url: "https://huggingface.co/learn/nlp-course" },
    ],
    youtubeVideo: {
      label: "But what is a GPT? (3Blue1Brown)",
      url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
    },
    readings: [
      { label: "The Illustrated Transformer (Jay Alammar)", url: "https://jalammar.github.io/illustrated-transformer/" },
      { label: "Attention Is All You Need (paper)", url: "https://arxiv.org/abs/1706.03762" },
    ],
    resources: [
      { label: "Tokenizer playground (OpenAI)", url: "https://platform.openai.com/tokenizer" },
      { label: "HF tokenizer tool", url: "https://huggingface.co/tokenizer" },
    ],
    exercises: [
      "Tokenize 5 sentences and observe token differences across languages",
      "Test temperature 0 vs 1.5 on the same prompt and compare",
      "Prompt the same task with a 4k vs 128k context model and note differences",
      "Explain to a friend (or the rubber duck) how a transformer generates tokens",
    ],
    miniProject: {
      title: "Model Comparison Lab",
      description:
        "Write a script that sends the same prompt to several models/parameters and produces a side-by-side comparison table with latency and token costs.",
      checklist: [
        "Define a prompt battery (simple, reasoning, ambiguous)",
        "Call at least 2 models with varied temperature",
        "Record latency, tokens, cost estimates",
        "Build a comparison table and summary",
        "Document your conclusions",
      ],
    },
    checklist: [
      "Watch the 3Blue1Brown video",
      "Understand tokens and context windows",
      "Complete all 4 exercises",
      "Build the model comparison lab",
      "Write notes on sampling parameters",
    ],
  },
  {
    id: "s3-m1-l2",
    title: "Prompting Fundamentals & Patterns",
    description:
      "Master the core skills: clear instructions, role prompts, delimiters, output formatting, and the difference between good and great prompts.",
    objectives: [
      "Write clear, unambiguous instructions",
      "Use role and persona prompting effectively",
      "Apply delimiters, structured formats, and few-shot examples",
      "Iterate prompts using systematic evaluation",
      "Avoid common prompt anti-patterns",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["How LLMs Actually Work"],
    technologies: ["prompting"],
    whyLearn:
      "Prompting is the most fundamental AI skill. Every agent, RAG system and automation flow you build rests on your ability to instruct a model reliably.",
    useCases: [
      "Writing system prompts for chatbots",
      "Extracting structured data from documents",
      "Generating code, summaries, and translations",
      "Building the instruction layer of agents",
    ],
    commonMistakes: [
      "Vague instructions that leave room for interpretation",
      "Too much context, drowning the key instruction",
      "No output format guidance",
      "Judging prompts by one example instead of a test set",
    ],
    officialDocs: [
      { label: "OpenAI - Prompt engineering guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { label: "Anthropic - Prompt engineering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering" },
    ],
    youtubeVideo: {
      label: "ChatGPT Prompt Engineering for Developers (deeplearning.AI)",
      url: "https://www.youtube.com/watch?v=D5l69dXpALQ",
    },
    readings: [
      { label: "Prompt Engineering Guide (DAIR.AI)", url: "https://www.promptingguide.ai/" },
      { label: "Google - Prompting best practices", url: "https://ai.google.dev/gemini-api/docs/prompting-best-practices" },
    ],
    resources: [
      { label: "Anthropic prompt library", url: "https://docs.anthropic.com/en/prompt-library/library" },
    ],
    exercises: [
      "Rewrite 3 vague prompts into precise ones and compare outputs",
      "Write a system prompt for a customer-support bot persona",
      "Extract structured JSON from a messy text with delimiters",
      "Use few-shot examples to fix a consistent output bug",
    ],
    miniProject: {
      title: "Prompt Playbook",
      description:
        "Create a reusable prompt playbook: 10 battle-tested prompt templates for common automation tasks (summarize, extract, classify, rewrite, code review) with test cases.",
      checklist: [
        "Write 10 templates with clear structure",
        "Add test inputs and expected outputs",
        "Evaluate each template against 5 test cases",
        "Document iteration history in notes",
        "Store the playbook in your journal repo",
      ],
    },
    checklist: [
      "Master prompt fundamentals",
      "Complete all 4 exercises",
      "Build the prompt playbook",
      "Write notes on your best patterns",
    ],
  },
  {
    id: "s3-m1-l3",
    title: "Advanced Techniques: Few-shot, CoT & Structured Output",
    description:
      "Level up with the techniques that separate amateurs from professionals: few-shot, chain-of-thought, self-consistency, and guaranteed structured output.",
    objectives: [
      "Apply few-shot and multi-shot prompting with selection logic",
      "Use chain-of-thought prompting for reasoning tasks",
      "Understand self-consistency and ensemble reasoning",
      "Force structured output with JSON mode / function calling",
      "Use system prompts and guardrails",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Prompting Fundamentals & Patterns"],
    technologies: ["prompting", "openai"],
    whyLearn:
      "Reliability is the whole game in automation. These techniques turn 'sometimes works' prompts into dependable pipelines.",
    useCases: [
      "Extracting structured data for databases",
      "Multi-step reasoning in support automation",
      "Correcting model JSON for API ingestion",
      "Evaluation and grading pipelines",
    ],
    commonMistakes: [
      "Putting examples that mislead the model",
      "Skipping reasoning steps for complex tasks",
      "Assuming JSON mode means valid semantics",
      "Ignoring how few-shot examples affect token cost",
    ],
    officialDocs: [
      { label: "OpenAI - Structured outputs", url: "https://platform.openai.com/docs/guides/structured-outputs" },
      { label: "OpenAI - Function calling", url: "https://platform.openai.com/docs/guides/function-calling" },
    ],
    youtubeVideo: {
      label: "Advanced Prompt Engineering Techniques",
      url: "https://www.youtube.com/results?search_query=advanced+prompt+engineering+few+shot+chain+of+thought",
    },
    readings: [
      { label: "Chain-of-Thought prompting paper", url: "https://arxiv.org/abs/2201.11903" },
      { label: "Self-Consistency paper", url: "https://arxiv.org/abs/2203.11171" },
    ],
    resources: [
      { label: "Prompt Engineering Guide - advanced", url: "https://www.promptingguide.ai/techniques" },
    ],
    exercises: [
      "Compare zero-shot vs few-shot extraction on 10 documents",
      "Build a multi-step reasoning prompt with visible chain-of-thought",
      "Use JSON mode and validate the output with Pydantic",
      "Measure the reliability improvement of self-consistency (k=3)",
    ],
    miniProject: {
      title: "Reliable Extraction Service",
      description:
        "Build a script/service that extracts structured invoice data from varied text formats with >95% reliability using few-shot, CoT and validation with retry.",
      checklist: [
        "Build a test set of 20 invoices in varied formats",
        "Design few-shot examples and CoT reasoning",
        "Validate output with Pydantic and auto-retry on failure",
        "Track accuracy across iterations",
        "Document the final prompt and accuracy",
      ],
    },
    checklist: [
      "Master advanced techniques",
      "Complete all 4 exercises",
      "Build the reliable extraction service",
      "Write notes on reliability patterns",
    ],
  },
  {
    id: "s3-m1-l4",
    title: "Prompt Evaluation & Iteration",
    description:
      "Treat prompts like code: versioned, tested, and evaluated. Build prompt test suites, scoring, and regression detection.",
    objectives: [
      "Design a prompt evaluation dataset",
      "Define scoring rubrics (accuracy, format, tone)",
      "Build an automated evaluation harness",
      "Run prompt regression tests before deploys",
      "Version prompts and track iteration history",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["Advanced Techniques: Few-shot, CoT & Structured Output"],
    technologies: ["prompting"],
    whyLearn:
      "Models change, prompts rot. The only way to ship reliable AI automation is to measure prompt quality continuously.",
    useCases: [
      "CI for prompt changes",
      "Catching regressions after model upgrades",
      "Comparing candidates for prompt A/B",
      "Monitoring live prompt quality",
    ],
    commonMistakes: [
      "Judging prompts by vibes",
      "Evaluating on 3 examples",
      "Not pinning model versions",
      "No golden test set for regressions",
    ],
    officialDocs: [
      { label: "OpenAI - Evals framework", url: "https://cookbook.openai.com/examples/evaluation/" },
      { label: "Braintrust evals docs", url: "https://www.braintrust.dev/docs" },
    ],
    youtubeVideo: {
      label: "How to Evaluate LLM Prompts & RAG",
      url: "https://www.youtube.com/results?search_query=llm+evals+prompt+evaluation+tutorial",
    },
    readings: [
      { label: "The Prompt Report (survey)", url: "https://arxiv.org/abs/2406.06608" },
      { label: "Ragas - RAG evaluation docs", url: "https://docs.ragas.io/" },
    ],
    resources: [
      { label: "OpenAI Evals GitHub", url: "https://github.com/openai/evals" },
    ],
    exercises: [
      "Build a 20-case evaluation dataset with a scoring rubric",
      "Write a script that scores a prompt automatically",
      "Compare two prompt versions and report the delta",
      "Add evaluation to a git hook or CI",
    ],
    miniProject: {
      title: "Prompt Regression Suite",
      description:
        "Create a prompt evaluation suite: dataset, scorer, runner CLI, and a report. Wire it into the project so every prompt change is verified.",
      checklist: [
        "Curate a labeled evaluation dataset",
        "Implement a deterministic scoring function",
        "Build a runner with pass/fail thresholds",
        "Generate a human-readable report",
        "Wire into CI or a git hook",
      ],
    },
    checklist: [
      "Adopt eval-driven prompting",
      "Complete all 4 exercises",
      "Build the prompt regression suite",
      "Write notes on your evaluation workflow",
    ],
  },
];

const modelApis: Lesson[] = [
  {
    id: "s3-m2-l1",
    title: "OpenAI API: Chat & Responses",
    description:
      "Get production-ready with OpenAI: authentication, chat completions, parameters, cost control, and the differences across the model lineup.",
    objectives: [
      "Set up the OpenAI SDK and manage API keys safely",
      "Call chat completions with messages and system prompts",
      "Tune temperature, max_tokens, and stop sequences",
      "Understand cost and token accounting",
      "Handle errors, rate limits, and retries",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Prompting Fundamentals & Patterns", "Python or TS"],
    technologies: ["openai"],
    whyLearn:
      "OpenAI models power a large share of AI products and automation. Knowing the API cold is table stakes.",
    useCases: [
      "Building chatbots and assistants",
      "Automating content and data workflows",
      "Powering agent backends",
      "Classification and extraction pipelines",
    ],
    commonMistakes: [
      "Hard-coding API keys in source",
      "No retry/backoff on 429s",
      "Ignoring token usage and cost",
      "Sending the whole conversation history every time",
    ],
    officialDocs: [
      { label: "OpenAI API reference", url: "https://platform.openai.com/docs/api-reference" },
      { label: "OpenAI - Chat Completions guide", url: "https://platform.openai.com/docs/guides/text-generation" },
    ],
    youtubeVideo: {
      label: "How to Build AI Applications with OpenAI (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=NYSWn1ipb1U",
    },
    readings: [
      { label: "OpenAI Cookbook", url: "https://cookbook.openai.com/" },
      { label: "OpenAI - Rate limits", url: "https://platform.openai.com/docs/guides/rate-limits" },
    ],
    resources: [
      { label: "OpenAI Platform (playground)", url: "https://platform.openai.com/playground" },
    ],
    exercises: [
      "Build a chat loop with history management in Python",
      "Add retry with exponential backoff and observe rate limits",
      "Track token usage and compute cost per request",
      "Summarize a long document within a 4k context budget",
    ],
    miniProject: {
      title: "Chat API Wrapper",
      description:
        "Build a typed wrapper around the OpenAI client with history management, usage tracking, retries, and a simple REPL interface.",
      checklist: [
        "Manage keys via environment variables",
        "Implement message history with windowing",
        "Add retries and usage accounting",
        "Expose a clean REPL demo",
        "Write tests with mocked responses",
      ],
    },
    checklist: [
      "Master the OpenAI API",
      "Complete all 4 exercises",
      "Build the chat API wrapper",
      "Write notes on cost optimization",
    ],
  },
  {
    id: "s3-m2-l2",
    title: "Claude API & Anthropic Patterns",
    description:
      "Work with Claude effectively: the Messages API, system prompts, XML structure, tool use, and Anthropic's distinctive patterns.",
    objectives: [
      "Call the Anthropic Messages API with the Python/TS SDK",
      "Write effective system prompts using Anthropic conventions",
      "Use XML tags and structured context",
      "Compare Claude's approach with OpenAI's",
      "Handle vision inputs and long contexts",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Prompting Fundamentals & Patterns"],
    technologies: ["claude"],
    whyLearn:
      "Claude excels at long-context reasoning and instruction following. Many serious agent and analysis pipelines are built on it.",
    useCases: [
      "Long-document analysis",
      "Code generation and review assistants",
      "Agent backends with tool use",
      "High-stakes content workflows",
    ],
    commonMistakes: [
      "Copying OpenAI-style prompts verbatim",
      "Not exploiting the long context window",
      "Ignoring Anthropic's structured prompting advice",
      "Mixing up model pricing and context units",
    ],
    officialDocs: [
      { label: "Anthropic API reference", url: "https://docs.anthropic.com/en/api" },
      { label: "Anthropic - Messages API guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/messages" },
    ],
    youtubeVideo: {
      label: "Claude API Tutorial",
      url: "https://www.youtube.com/results?search_query=anthropic+claude+api+tutorial",
    },
    readings: [
      { label: "Anthropic prompt engineering docs", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering" },
      { label: "Anthropic best practices for agents", url: "https://docs.anthropic.com/en/docs/build-with-claude/agents" },
    ],
    resources: [
      { label: "Anthropic Console", url: "https://console.anthropic.com/" },
    ],
    exercises: [
      "Build a multi-turn conversation with Claude in Python",
      "Implement a long-document Q&A using the 200k context window",
      "Write a system prompt using Anthropic's XML conventions",
      "Compare Claude and OpenAI responses on the same task battery",
    ],
    miniProject: {
      title: "Document Analyst",
      description:
        "Build a tool that ingests long documents (reports, contracts) and produces structured analysis: summary, risks, action items — with citations to source text.",
      checklist: [
        "Handle documents up to 100k+ tokens",
        "Extract structured JSON analysis",
        "Include source citations",
        "Add cost and latency tracking",
        "Write tests with sample documents",
      ],
    },
    checklist: [
      "Master the Claude API",
      "Complete all 4 exercises",
      "Build the document analyst",
      "Write notes comparing providers",
    ],
  },
  {
    id: "s3-m2-l3",
    title: "Gemini API & Google's AI Ecosystem",
    description:
      "Use Gemini models and Google AI Studio: multimodal input, grounding with Google Search, and long context features.",
    objectives: [
      "Set up the Google Generative AI SDK",
      "Send text, image, and video inputs",
      "Use generation config and safety settings",
      "Enable grounding and understand its limits",
      "Work with Gemini in AI Studio and Vertex AI",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Prompting Fundamentals & Patterns"],
    technologies: ["gemini"],
    whyLearn:
      "Gemini is a strong competitor with unique multimodal strengths — building multi-provider systems requires knowing it well.",
    useCases: [
      "Image and video understanding pipelines",
      "Multimodal automation (screenshots, documents)",
      "Cost-optimized bulk inference",
      "Building vendor-agnostic AI layers",
    ],
    commonMistakes: [
      "Assuming identical APIs across providers",
      "Forgetting safety settings for different use cases",
      "Not handling response schemas correctly",
      "Ignoring multimodal input formats",
    ],
    officialDocs: [
      { label: "Gemini API docs", url: "https://ai.google.dev/gemini-api/docs" },
      { label: "Google AI Studio", url: "https://aistudio.google.com/" },
    ],
    youtubeVideo: {
      label: "Gemini API Tutorial",
      url: "https://www.youtube.com/results?search_query=gemini+api+python+tutorial",
    },
    readings: [
      { label: "Gemini - grounding guide", url: "https://ai.google.dev/gemini-api/docs/grounding" },
      { label: "Vertex AI - Gemini", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini" },
    ],
    resources: [
      { label: "Gemini API quickstarts", url: "https://ai.google.dev/gemini-api/docs/quickstart" },
    ],
    exercises: [
      "Send an image and ask Gemini to describe and extract text",
      "Build a multimodal conversation with inline data",
      "Enable grounding and compare answers with and without it",
      "Configure safety settings and observe behavior",
    ],
    miniProject: {
      title: "Screenshot Understanding Agent",
      description:
        "Build a tool that screenshots a webpage/app and produces structured insights (layout issues, extracted data, accessibility notes) using Gemini's multimodal API.",
      checklist: [
        "Capture screenshots programmatically",
        "Send images with a structured task prompt",
        "Extract structured JSON findings",
        "Compare responses with another provider",
        "Document cost per run",
      ],
    },
    checklist: [
      "Master the Gemini API",
      "Complete all 4 exercises",
      "Build the screenshot understanding agent",
      "Write notes on multimodal patterns",
    ],
  },
  {
    id: "s3-m2-l4",
    title: "Streaming, Function Calling & Structured Outputs",
    description:
      "The engineering layer of model APIs: stream tokens, let models call your tools, and guarantee structured output for downstream systems.",
    objectives: [
      "Stream responses token-by-token",
      "Implement function calling / tool use",
      "Use structured output modes (JSON schema)",
      "Chain model calls with tool loops",
      "Build robust providers-agnostic client code",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["OpenAI API: Chat & Responses"],
    technologies: ["openai", "claude", "gemini", "python"],
    whyLearn:
      "Streaming is the UX of AI chat; function calling is how models drive your systems; structured output is how pipelines stay reliable. This is the AI engineer's core skill set.",
    useCases: [
      "Chat UX with live token streaming",
      "Models that query databases and APIs",
      "Typed data flows into FastAPI backends",
      "Agent tool loops",
    ],
    commonMistakes: [
      "Buffering streams instead of showing them",
      "Not validating function arguments",
      "Ignoring the difference between JSON mode and schema-enforced",
      "Building tight coupling to one provider",
    ],
    officialDocs: [
      { label: "OpenAI - Tool calling", url: "https://platform.openai.com/docs/guides/function-calling" },
      { label: "Anthropic - Tool use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
    ],
    youtubeVideo: {
      label: "AI Function Calling Explained",
      url: "https://www.youtube.com/results?search_query=openai+function+calling+tutorial",
    },
    readings: [
      { label: "OpenAI - Streaming guide", url: "https://platform.openai.com/docs/guides/streaming-responses" },
      { label: "Google - function calling", url: "https://ai.google.dev/gemini-api/docs/function-calling" },
    ],
    resources: [
      { label: "Vercel AI SDK docs", url: "https://ai-sdk.dev/" },
    ],
    exercises: [
      "Stream a completion and measure tokens per second",
      "Define a weather tool and build a function-calling loop",
      "Return strict JSON via schema and validate with Pydantic",
      "Build a provider-agnostic client interface (OpenAI + Anthropic)",
    ],
    miniProject: {
      title: "Assistant with Tools",
      description:
        "Build a scripted assistant that can look up orders (mock DB tool), check weather, and answer with streaming output and structured citations.",
      checklist: [
        "Implement tool definitions and dispatcher",
        "Build the model-to-tool loop with max iterations",
        "Stream output in the terminal",
        "Enforce JSON schema for final answers",
        "Test with both OpenAI and Claude backends",
      ],
    },
    checklist: [
      "Master streaming and tool use",
      "Complete all 4 exercises",
      "Build the assistant with tools",
      "Write notes on tool-loop patterns",
    ],
  },
];

const embeddings: Lesson[] = [
  {
    id: "s3-m3-l1",
    title: "Embeddings & Vector Spaces",
    description:
      "Understand how text becomes numbers: embedding models, similarity, dimensionality, and why semantic search works.",
    objectives: [
      "Explain what embeddings are and how they encode meaning",
      "Generate embeddings with common APIs",
      "Measure similarity with cosine distance",
      "Understand dimensions, normalization, and cost",
      "Evaluate embedding quality for a domain",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["How LLMs Actually Work"],
    technologies: ["embeddings"],
    whyLearn:
      "Embeddings are the foundation of search, clustering, deduplication, and RAG. Every AI knowledge system is built on them.",
    useCases: [
      "Semantic search over documents",
      "Clustering customer feedback",
      "Deduplicating near-identical content",
      "Recommending related items",
    ],
    commonMistakes: [
      "Using cosine vs euclidean without thinking",
      "Embedding giant texts into one vector",
      "Mixing embedding model versions",
      "Not normalizing vectors",
    ],
    officialDocs: [
      { label: "OpenAI - Embeddings guide", url: "https://platform.openai.com/docs/guides/embeddings" },
      { label: "Gemini - Embeddings", url: "https://ai.google.dev/gemini-api/docs/models#text-embedding" },
    ],
    youtubeVideo: {
      label: "Word2Vec - Skipgram and CBOW (StatQuest)",
      url: "https://www.youtube.com/watch?v=viZrOnJclY0",
    },
    readings: [
      { label: "The Illustrated Word2vec (Jay Alammar)", url: "https://jalammar.github.io/illustrated-word2vec/" },
      { label: "Pinecone - similarity metrics", url: "https://www.pinecone.io/learn/vector-similarity/" },
    ],
    resources: [
      { label: "MTEB leaderboard", url: "https://huggingface.co/spaces/mteb/leaderboard" },
    ],
    exercises: [
      "Embed 20 sentences and compute a similarity matrix",
      "Find the most similar and least similar pairs",
      "Compare cosine vs dot product vs euclidean results",
      "Cluster embeddings with k-means and inspect the clusters",
    ],
    miniProject: {
      title: "Semantic Search Notebook",
      description:
        "Build a mini semantic search over a domain corpus (e.g., academy lessons): embed, index in memory, search by query, and show similarity scores.",
      checklist: [
        "Build a small corpus and embed it",
        "Implement cosine similarity search",
        "Handle out-of-vocabulary queries gracefully",
        "Visualize or print top-k results with scores",
        "Evaluate with 5 known-answer queries",
      ],
    },
    checklist: [
      "Understand vector spaces",
      "Complete all 4 exercises",
      "Build the semantic search notebook",
      "Write notes on similarity metrics",
    ],
  },
  {
    id: "s3-m3-l2",
    title: "Vector Databases: pgvector & Qdrant",
    description:
      "Store and query millions of vectors at scale: pgvector inside PostgreSQL, and Qdrant as a dedicated vector database.",
    objectives: [
      "Set up pgvector and add a vector column",
      "Create HNSW/IVFFlat indexes",
      "Run ANN search queries with filters",
      "Set up Qdrant and manage collections",
      "Choose between pgvector and a dedicated vector DB",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Embeddings & Vector Spaces", "PostgreSQL Fundamentals"],
    technologies: ["pgvector", "qdrant", "embeddings"],
    whyLearn:
      "RAG at production scale is a database engineering problem. Vector indexes and filters decide whether your search is instant or dead.",
    useCases: [
      "Document retrieval for RAG",
      "Metadata-filtered product search",
      "Similar item recommendation",
      "Dedup pipelines at scale",
    ],
    commonMistakes: [
      "Scanning vectors without an index",
      "Ignoring filters when choosing index strategy",
      "Storing raw text only, losing metadata",
      "Using a vector DB when 10k vectors in memory would do",
    ],
    officialDocs: [
      { label: "pgvector GitHub", url: "https://github.com/pgvector/pgvector" },
      { label: "Qdrant documentation", url: "https://qdrant.tech/documentation/" },
    ],
    youtubeVideo: {
      label: "What is a Vector Database? (Pinecone)",
      url: "https://www.youtube.com/watch?v=ispRel9tn_w",
    },
    readings: [
      { label: "HNSW explained (Pinecone)", url: "https://www.pinecone.io/learn/series/faiss/hnsw/" },
      { label: "Qdrant - vector search basics", url: "https://qdrant.tech/documentation/concepts/search/" },
    ],
    resources: [
      { label: "pgvector demo on GitHub", url: "https://github.com/pgvector/pgvector-python" },
    ],
    exercises: [
      "Store 10k vectors in pgvector and run filtered search",
      "Compare HNSW vs IVFFlat on recall and latency",
      "Create a Qdrant collection with payload filters",
      "Benchmark pgvector vs Qdrant on a sample dataset",
    ],
    miniProject: {
      title: "Vector Search Service",
      description:
        "Build a small search service (FastAPI) that stores documents + embeddings in pgvector and Qdrant, searches with metadata filters, and exposes an API.",
      checklist: [
        "Index documents into both stores",
        "Add metadata filters (category, date)",
        "Expose search API with top-k and threshold",
        "Measure latency and recall on a test set",
        "Document store selection rationale",
      ],
    },
    checklist: [
      "Master pgvector",
      "Master Qdrant",
      "Complete all 4 exercises",
      "Build the vector search service",
      "Write notes on index strategies",
    ],
  },
  {
    id: "s3-m3-l3",
    title: "Building a RAG Pipeline",
    description:
      "Put it together: ingest documents, chunk, embed, index, retrieve, and generate grounded answers with citations.",
    objectives: [
      "Design document ingestion with proper chunking",
      "Embed and index into a vector store",
      "Implement retrieval with hybrid scoring",
      "Generate grounded answers with citations",
      "Evaluate RAG quality end-to-end",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Vector Databases: pgvector & Qdrant"],
    technologies: ["rag", "embeddings", "pgvector", "qdrant"],
    whyLearn:
      "RAG is the workhorse of production AI: grounding answers in your own data, reducing hallucinations, and making knowledge searchable.",
    useCases: [
      "Enterprise document Q&A",
      "Customer support copilots",
      "Codebase assistants",
      "Knowledge-base automation",
    ],
    commonMistakes: [
      "Chunking blindly without considering semantics",
      "Retrieving without reranking",
      "Ignoring the prompt + context tension",
      "Not evaluating retrieval quality",
    ],
    officialDocs: [
      { label: "RAG overview (AWS)", url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" },
      { label: "LangChain - RAG tutorials", url: "https://python.langchain.com/docs/tutorials/rag/" },
    ],
    youtubeVideo: {
      label: "What is Retrieval-Augmented Generation (RAG)? (IBM)",
      url: "https://www.youtube.com/watch?v=T-D1OfcDW1M",
    },
    readings: [
      { label: "RAG from scratch (part 1)", url: "https://towardsdatascience.com/retrieval-augmented-generation-rag-from-theory-to-langchain-implementation-4e9bd5f6a6f2" },
      { label: "Pinecone - RAG learning series", url: "https://www.pinecone.io/learn/series/rag/" },
    ],
    resources: [
      { label: "RAGAS evaluation docs", url: "https://docs.ragas.io/" },
    ],
    exercises: [
      "Chunk a document 3 different ways and compare retrieval quality",
      "Build a minimal RAG pipeline without frameworks first",
      "Add citation tracking to every generated answer",
      "Measure answer quality with RAGAS-style metrics",
    ],
    miniProject: {
      title: "Document Q&A System",
      description:
        "Build a complete RAG system over your own notes/curriculum docs: ingest, index in pgvector, retrieve, answer with citations, and evaluate.",
      checklist: [
        "Ingest a real corpus (e.g., academy READMEs)",
        "Implement chunking strategy with overlap",
        "Index into pgvector",
        "Generate answers with source citations",
        "Evaluate on 10 known-answer questions",
      ],
    },
    checklist: [
      "Understand the full RAG flow",
      "Complete all 4 exercises",
      "Build the document Q&A system",
      "Write notes on chunking and retrieval",
    ],
  },
  {
    id: "s3-m3-l4",
    title: "Advanced RAG: Chunking, Reranking & Evaluation",
    description:
      "Take RAG to production quality: semantic chunking, query rewriting, hybrid search, rerankers, and systematic evaluation.",
    objectives: [
      "Apply semantic and recursive chunking strategies",
      "Rewrite and decompose queries for better retrieval",
      "Implement hybrid search (keyword + vector)",
      "Rerank results with cross-encoders or rerank APIs",
      "Run retrieval and generation evaluation suites",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["Building a RAG Pipeline"],
    technologies: ["rag", "embeddings", "qdrant", "pgvector"],
    whyLearn:
      "The difference between a demo RAG and a product RAG is exactly this: chunking quality, hybrid retrieval, reranking, and measurement.",
    useCases: [
      "Enterprise search with complex queries",
      "Code search across repos",
      "Support copilots that must be accurate",
      "High-volume document corpora",
    ],
    commonMistakes: [
      "Fixing retrieval with prompt tricks instead of data work",
      "No reranking stage",
      "Not handling multi-part questions",
      "Evaluating only on anecdotes",
    ],
    officialDocs: [
      { label: "Cohere - rerank docs", url: "https://docs.cohere.com/docs/rerank-overview" },
      { label: "Qdrant - hybrid search", url: "https://qdrant.tech/documentation/concepts/hybrid-queries/" },
    ],
    youtubeVideo: {
      label: "Advanced RAG Techniques Explained",
      url: "https://www.youtube.com/results?search_query=advanced+rag+techniques+tutorial",
    },
    readings: [
      { label: "Advanced RAG notebook (Anthropic)", url: "https://www.anthropic.com/engineering/building-knowledge-assistants" },
      { label: "RAGAS metrics", url: "https://docs.ragas.io/en/stable/concepts/metrics/index.html" },
    ],
    resources: [
      { label: "RAGAS open source", url: "https://github.com/explodinggradients/ragas" },
    ],
    exercises: [
      "Compare recursive vs semantic chunking on a real corpus",
      "Implement hybrid search and compare with vector-only",
      "Add a reranker and measure top-5 improvement",
      "Run a full evaluation suite and produce a report",
    ],
    miniProject: {
      title: "Production RAG Engine",
      description:
        "Upgrade the document Q&A system into a production-quality engine: hybrid search, reranking, query rewriting, and an evaluation harness with a report.",
      checklist: [
        "Implement hybrid keyword + vector search",
        "Add reranking with configurable provider",
        "Rewrite ambiguous queries before retrieval",
        "Build the evaluation harness",
        "Write a quality report with before/after metrics",
      ],
    },
    checklist: [
      "Master advanced retrieval",
      "Complete all 4 exercises",
      "Build the production RAG engine",
      "Write notes on evaluation methodology",
    ],
  },
];

const fullstack: Lesson[] = [
  {
    id: "s3-m4-l1",
    title: "React Fundamentals",
    description:
      "Build the frontend of your AI products: components, props, state, hooks, and the mental model of declarative UI.",
    objectives: [
      "Create components and compose UIs",
      "Manage state with useState and derived state",
      "Handle effects and data fetching with useEffect",
      "Pass data with props and context",
      "Follow modern React patterns (thinking in React)",
    ],
    durationMinutes: 180,
    difficulty: "beginner",
    prerequisites: ["JavaScript Fundamentals"],
    technologies: ["react"],
    whyLearn:
      "Every AI product needs an interface. React is the standard for building those interfaces — including this academy's own stack.",
    useCases: [
      "Chat interfaces and dashboards",
      "Admin panels for automation tools",
      "Data visualization for AI outputs",
      "Rapid product frontends",
    ],
    commonMistakes: [
      "Mutating state directly",
      "Putting everything in one component",
      "Missing keys in lists",
      "Effects with wrong dependency arrays",
    ],
    officialDocs: [
      { label: "React docs", url: "https://react.dev/" },
      { label: "React - learn (tutorial)", url: "https://react.dev/learn" },
    ],
    youtubeVideo: {
      label: "React Course - Beginner's Tutorial (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    },
    readings: [
      { label: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" },
      { label: "React hooks reference", url: "https://react.dev/reference/react" },
    ],
    resources: [
      { label: "React DevTools", url: "https://react.dev/learn/react-developer-tools" },
    ],
    exercises: [
      "Build a counter, a form, and a list component",
      "Lift state up to share between siblings",
      "Fetch data with useEffect and render loading/error states",
      "Extract a reusable component with props",
    ],
    miniProject: {
      title: "Task Board UI",
      description:
        "Build a kanban-style task board with columns, add/move/delete tasks, search, and a local persistence layer.",
      checklist: [
        "Component tree with board/column/card",
        "State management with useState",
        "Keyboard-accessible interactions",
        "Search and filter",
        "Persist to localStorage",
      ],
    },
    checklist: [
      "Master React fundamentals",
      "Complete all 4 exercises",
      "Build the task board UI",
      "Write notes on hooks",
    ],
  },
  {
    id: "s3-m4-l2",
    title: "Next.js App Router & Server Components",
    description:
      "Build production Next.js apps: routing, layouts, server vs client components, data fetching, and deployment.",
    objectives: [
      "Understand the App Router and file conventions",
      "Differentiate server and client components",
      "Use layouts, loading, error, and not-found states",
      "Fetch data with RSC and client hooks",
      "Configure metadata, fonts, and images",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["React Fundamentals"],
    technologies: ["nextjs", "react"],
    whyLearn:
      "Next.js is the dominant framework for AI product frontends — Vercel's AI SDK and most AI chatbots are built on it.",
    useCases: [
      "AI chat applications",
      "Marketing sites with SSR/SEO",
      "Full-stack apps with API routes",
      "Dashboards for automation platforms",
    ],
    commonMistakes: [
      "Making everything a client component",
      "Not understanding the server/client boundary",
      "Using client fetch when RSC would be cleaner",
      "Ignoring metadata and SEO",
    ],
    officialDocs: [
      { label: "Next.js docs", url: "https://nextjs.org/docs" },
      { label: "Next.js - App Router overview", url: "https://nextjs.org/docs/app" },
    ],
    youtubeVideo: {
      label: "Next.js Crash Course (Traversy Media)",
      url: "https://www.youtube.com/watch?v=mTz0GXj8NN0",
    },
    readings: [
      { label: "Server and Client Components", url: "https://nextjs.org/learn/react-foundations/server-and-client-components" },
      { label: "Next.js - Data Fetching patterns", url: "https://nextjs.org/docs/app/building-your-application/data-fetching" },
    ],
    resources: [
      { label: "Vercel deployment docs", url: "https://vercel.com/docs" },
    ],
    exercises: [
      "Create a multi-page app with dynamic routes",
      "Split a page into server and client components correctly",
      "Add loading, error, and not-found UI",
      "Set up metadata and an OG image",
    ],
    miniProject: {
      title: "Portfolio & Docs Site",
      description:
        "Build a personal portfolio/docs site in Next.js with dynamic routes, MDX-like content, dark mode, and deployment readiness.",
      checklist: [
        "App Router with layouts and dynamic routes",
        "Server components by default",
        "Loading/error states",
        "Polished metadata and typography",
        "Deploy to Vercel",
      ],
    },
    checklist: [
      "Master the App Router",
      "Complete all 4 exercises",
      "Build the portfolio & docs site",
      "Write notes on server vs client",
    ],
  },
  {
    id: "s3-m4-l3",
    title: "Tailwind CSS & shadcn/ui",
    description:
      "Design premium interfaces fast: utility-first CSS with Tailwind and the shadcn/ui component system.",
    objectives: [
      "Style with Tailwind utilities and config",
      "Apply the design system approach (tokens)",
      "Install and compose shadcn/ui components",
      "Make components responsive and accessible",
      "Create a consistent, premium look",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["React Fundamentals"],
    technologies: ["tailwind", "shadcn", "react"],
    whyLearn:
      "Speed and consistency of UI delivery is a product advantage. This is the exact stack used to build high-quality AI dashboards and tools.",
    useCases: [
      "Building the academy-style learning UI",
      "Admin panels and dashboards",
      "AI chat interfaces",
      "Startup landing pages",
    ],
    commonMistakes: [
      "Inline styles everywhere",
      "Not using design tokens",
      "Overriding shadcn internals",
      "Ignoring responsive and dark mode",
    ],
    officialDocs: [
      { label: "Tailwind CSS docs", url: "https://tailwindcss.com/docs" },
      { label: "shadcn/ui docs", url: "https://ui.shadcn.com/docs" },
    ],
    youtubeVideo: {
      label: "Tailwind CSS Crash Course (Traversy Media)",
      url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
    },
    readings: [
      { label: "shadcn/ui - dark mode", url: "https://ui.shadcn.com/docs/dark-mode" },
      { label: "Tailwind - customizing theme", url: "https://tailwindcss.com/docs/theme" },
    ],
    resources: [
      { label: "Tailwind Play", url: "https://play.tailwindcss.com/" },
    ],
    exercises: [
      "Recreate a card layout with pure Tailwind",
      "Extend the theme with custom colors and typography",
      "Install 5 shadcn components and compose a page",
      "Make a dashboard responsive and dark-mode ready",
    ],
    miniProject: {
      title: "Component Showcase",
      description:
        "Build a polished showcase page using Tailwind + shadcn/ui: data table, forms, dialogs, toasts, and charts with consistent design tokens.",
      checklist: [
        "Configure design tokens",
        "Use shadcn/ui components throughout",
        "Responsive layouts with breakpoints",
        "Dark mode by default",
        "Accessible interactions (keyboard, focus)",
      ],
    },
    checklist: [
      "Master Tailwind",
      "Master shadcn/ui",
      "Complete all 4 exercises",
      "Build the component showcase",
      "Write notes on design systems",
    ],
  },
  {
    id: "s3-m4-l4",
    title: "Full-Stack AI Chat Application",
    description:
      "Integrate everything: a Next.js frontend streaming a FastAPI backend that calls LLMs, with structured output and graceful UX.",
    objectives: [
      "Architect a full-stack AI app (frontend + API + model layer)",
      "Stream tokens from backend to frontend",
      "Handle loading, errors, and cancellation",
      "Secure the API and manage keys server-side",
      "Deploy the integrated stack",
    ],
    durationMinutes: 240,
    difficulty: "advanced",
    prerequisites: ["Next.js App Router & Server Components", "FastAPI Fundamentals", "Streaming, Function Calling & Structured Outputs"],
    technologies: ["nextjs", "react", "fastapi", "openai", "tailwind"],
    whyLearn:
      "This is the end-to-end shape of every AI product you'll build. Knowing how the pieces fit is the definition of a full-stack AI engineer.",
    useCases: [
      "AI copilots and assistants",
      "RAG chat UIs",
      "Agent playgrounds",
      "Internal AI tools",
    ],
    commonMistakes: [
      "Exposing API keys from the frontend",
      "Blocking the UI while waiting for the full response",
      "No error/empty/cancellation states",
      "Monolithic tight coupling",
    ],
    officialDocs: [
      { label: "Vercel AI SDK", url: "https://ai-sdk.dev/" },
      { label: "Next.js - API routes", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" },
    ],
    youtubeVideo: {
      label: "Build an AI Chatbot with Next.js",
      url: "https://www.youtube.com/results?search_query=nextjs+ai+chatbot+openai+tutorial",
    },
    readings: [
      { label: "Streaming LLM responses to the browser", url: "https://vercel.com/blog/first-class-node-js-support-for-ai-apps-in-vercel" },
    ],
    resources: [
      { label: "Vercel AI Chatbot template", url: "https://github.com/vercel/ai-chatbot" },
    ],
    exercises: [
      "Build a streaming chat UI with loading states",
      "Create a proxy API route that hides the model key",
      "Add stop-generation and error recovery",
      "Persist conversation history",
    ],
    miniProject: {
      title: "Study Buddy Chat App",
      description:
        "Build a full-stack chat app that answers questions about the academy curriculum: Next.js UI, FastAPI backend, streaming, and structured citations.",
      checklist: [
        "Next.js UI with message list and input",
        "Streaming responses via SSE",
        "FastAPI backend calling the model",
        "System prompt grounded in curriculum data",
        "Deploy both ends",
      ],
    },
    checklist: [
      "Master full-stack AI architecture",
      "Complete all 4 exercises",
      "Build the study buddy chat app",
      "Write notes on streaming architectures",
    ],
  },
];

export const capstone3: Capstone = {
  id: "capstone-3",
  title: "Knowledge Copilot",
  description:
    "Build a full-stack RAG chat application: Next.js frontend, FastAPI backend, vector search over a real knowledge base, streaming answers with citations, and an evaluation suite proving quality.",
  objectives: [
    "Design and build a complete full-stack AI product",
    "Implement production-grade RAG with hybrid search and reranking",
    "Stream responses with clean UX and error handling",
    "Secure model keys and manage costs",
    "Evaluate answer quality and document the results",
  ],
  requiredSkills: ["Prompt Engineering", "OpenAI/Claude/Gemini APIs", "Embeddings & RAG", "React & Next.js", "FastAPI"],
  difficulty: "expert",
  estimatedHours: 40,
  xp: 1000,
  technologies: ["rag", "embeddings", "nextjs", "react", "fastapi", "openai", "pgvector"],
  checklist: [
    "Ingest a real corpus with production chunking",
    "Hybrid retrieval + reranking in the backend",
    "Streaming chat UI with citations",
    "Auth and key management done safely",
    "Evaluation suite with before/after report",
    "Deployed and demo-ready",
    "README documents architecture and decisions",
    "Final review: self-assessment against the rubric",
  ],
};

const modules3: Module[] = [
  {
    id: "s3-m1",
    title: "Prompt Engineering",
    description: "The craft of instructing models reliably — from first principles to production evaluation.",
    technologies: ["prompting"],
    lessons: prompting,
  },
  {
    id: "s3-m2",
    title: "AI Model APIs",
    description: "Work with OpenAI, Claude, and Gemini like a professional: streaming, tools, structured output.",
    technologies: ["openai", "claude", "gemini"],
    lessons: modelApis,
  },
  {
    id: "s3-m3",
    title: "Embeddings & RAG",
    description: "Ground AI in your data with embeddings, vector databases, and retrieval pipelines.",
    technologies: ["embeddings", "rag", "pgvector", "qdrant"],
    lessons: embeddings,
  },
  {
    id: "s3-m4",
    title: "Full-Stack AI Applications",
    description: "React, Next.js, Tailwind and shadcn/ui — the interface layer of every AI product.",
    technologies: ["react", "nextjs", "tailwind", "shadcn"],
    lessons: fullstack,
  },
];

export const semester3: Semester = {
  id: "semester-3",
  number: 3,
  title: "AI Engineering",
  description:
    "Master the model layer: prompting, the big model APIs, embeddings, RAG, and full-stack AI applications.",
  tagline: "Turn models into products",
  icon: Brain,
  color: "#A855F7",
  duration: "14 weeks",
  xp: 250,
  modules: modules3,
  capstone: capstone3,
};
