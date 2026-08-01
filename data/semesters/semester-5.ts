import type { Capstone, Lesson, Module, Semester } from "@/types";
import { Bot, Network, Workflow, Plug } from "lucide-react";

const agents: Lesson[] = [
  {
    id: "s5-m1-l1",
    title: "What Are AI Agents?",
    description:
      "Define agents precisely: models + tools + memory + loop. Learn what makes something an agent and when it's just a wrapper.",
    objectives: [
      "Define the agent architecture (model, tools, memory, loop)",
      "Distinguish agents from chatbots and pipelines",
      "Understand the agent loop (observe, think, act)",
      "Identify when agents are worth the complexity",
      "Know the failure modes unique to agents",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Streaming, Function Calling & Structured Outputs"],
    technologies: ["agents", "openai", "claude"],
    whyLearn:
      "Agents are the current frontier of applied AI. This course exists because companies are hiring engineers who can build them safely.",
    useCases: [
      "Research assistants that browse and synthesize",
      "Support agents that use internal tools",
      "Automation agents that take actions in systems",
      "Coding and data agents",
    ],
    commonMistakes: [
      "Adding agents where a fixed pipeline is better",
      "Giving agents too much power too early",
      "No guardrails or budgets",
      "Ignoring observability of agent decisions",
    ],
    officialDocs: [
      { label: "Anthropic - Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents" },
      { label: "OpenAI - Agent patterns", url: "https://platform.openai.com/docs/guides/agent-patterns" },
    ],
    youtubeVideo: {
      label: "What are AI Agents? (IBM Technology)",
      url: "https://www.youtube.com/watch?v=F8NKVhkZZWI",
    },
    readings: [
      { label: "The practical guide to building AI agents", url: "https://huggingface.co/learn/agents-course" },
      { label: "OpenAI - A practical guide to building agents", url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf" },
    ],
    resources: [
      { label: "LangGraph academy", url: "https://academy.langchain.com/" },
    ],
    exercises: [
      "Draw the architecture of a simple agent on paper",
      "List 5 tasks that suit agents and 5 that don't",
      "Identify the agent loop in an existing tool (e.g., a coding assistant)",
      "Design guardrails for a web-browsing agent",
    ],
    miniProject: {
      title: "Agent Design Doc",
      description:
        "Write a complete design document for an agent of your choice: goal, tools, memory, loop, guardrails, failure modes, and evaluation plan.",
      checklist: [
        "Define scope and success criteria",
        "Choose tools and their permissions",
        "Design memory and context strategy",
        "Enumerate guardrails and budgets",
        "Define the evaluation plan",
      ],
    },
    checklist: [
      "Understand the agent architecture",
      "Complete all 4 exercises",
      "Write the agent design doc",
      "Write notes on when to use agents",
    ],
  },
  {
    id: "s5-m1-l2",
    title: "Reasoning, Planning & Tool Use",
    description:
      "Make agents think and act: planning strategies, tool selection, error recovery, and the reasoning patterns behind reliable agents.",
    objectives: [
      "Implement planning with structured reasoning",
      "Design tools with clear contracts",
      "Handle tool errors and recover gracefully",
      "Apply ReAct-style reasoning loops",
      "Use reflection and self-correction patterns",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["What Are AI Agents?"],
    technologies: ["agents", "prompting"],
    whyLearn:
      "The loop between thinking and using tools is what makes agents useful. Engineering that loop reliably is the core agent skill.",
    useCases: [
      "Agents that query databases then reason about results",
      "Research agents that browse and verify",
      "Troubleshooting agents that run diagnostic commands",
      "Planning agents that sequence actions",
    ],
    commonMistakes: [
      "Tools with ambiguous contracts",
      "No recovery when a tool fails",
      "Letting agents spin without a plan",
      "Trusting model claims without verification",
    ],
    officialDocs: [
      { label: "OpenAI - ReAct pattern", url: "https://cookbook.openai.com/examples/react_pattern_basic" },
      { label: "Anthropic - tool use patterns", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
    ],
    youtubeVideo: {
      label: "AI Agents: Planning & Tools Explained",
      url: "https://www.youtube.com/results?search_query=ai+agents+planning+tool+use+react+pattern",
    },
    readings: [
      { label: "ReAct paper", url: "https://arxiv.org/abs/2210.03629" },
      { label: "Anthropic - effective tool design", url: "https://www.anthropic.com/engineering/building-effective-agents" },
    ],
    resources: [
      { label: "Agent courses by HF", url: "https://huggingface.co/learn/agents-course" },
    ],
    exercises: [
      "Implement a ReAct loop with two tools by hand",
      "Design tool schemas with strict input contracts",
      "Add a verification step that checks tool output",
      "Implement retry with a fallback tool on failure",
    ],
    miniProject: {
      title: "Task Planner Agent",
      description:
        "Build a scripted agent that takes a high-level task, plans a sequence of steps, executes them with tools (mock), and self-corrects on errors.",
      checklist: [
        "Plan step generation with structured output",
        "Two or more tools with contracts",
        "Error recovery and retry logic",
        "Reflection pass before final answer",
        "Max step budget and logging",
      ],
    },
    checklist: [
      "Master reasoning and planning",
      "Complete all 4 exercises",
      "Build the task planner agent",
      "Write notes on tool design",
    ],
  },
  {
    id: "s5-m1-l3",
    title: "Agent Memory & Context Management",
    description:
      "Give agents memory: conversation, episodic, semantic, and working memory. Manage context windows and recall like a pro.",
    objectives: [
      "Implement working memory (context management)",
      "Use short-term (conversation) and long-term (vector) memory",
      "Build summarization strategies for long conversations",
      "Store and retrieve episodic memory",
      "Design memory scoping per user/session",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Embeddings & Vector Spaces"],
    technologies: ["agents", "embeddings", "rag"],
    whyLearn:
      "Memory is what turns a session into a relationship. Agent products that remember get adopted; those that don't get abandoned.",
    useCases: [
      "Personal assistants that remember preferences",
      "Support agents with past-ticket recall",
      "Coding agents with project context",
      "Long-running research sessions",
    ],
    commonMistakes: [
      "Dumping full history into context",
      "No deduplication in memory",
      "Mixing memories across users",
      "Ignoring context window limits",
    ],
    officialDocs: [
      { label: "OpenAI - memory guide", url: "https://platform.openai.com/docs/guides/memory" },
      { label: "LangChain - memory concepts", url: "https://python.langchain.com/docs/concepts/memory/" },
    ],
    youtubeVideo: {
      label: "Agent Memory & Context Windows Explained",
      url: "https://www.youtube.com/results?search_query=ai+agent+memory+context+management",
    },
    readings: [
      { label: "MemGPT paper (hierarchical memory)", url: "https://arxiv.org/abs/2310.08560" },
      { label: "Context engineering survey", url: "https://arxiv.org/abs/2401.02565" },
    ],
    resources: [
      { label: "LangGraph - memory & persistence", url: "https://langchain-ai.github.io/langgraph/concepts/memory/" },
    ],
    exercises: [
      "Build a summarizer that compacts a 10-turn conversation",
      "Store session facts in a vector store and recall them",
      "Design a memory schema with user scoping",
      "Compare full-history vs summary-only vs hybrid recall",
    ],
    miniProject: {
      title: "Memory-Enabled Assistant",
      description:
        "Build an assistant with working + long-term memory: remembers facts across sessions, summarizes long chats, and personalizes answers.",
      checklist: [
        "Working memory with context budget",
        "Long-term memory in a vector store",
        "Summarization for long conversations",
        "Per-user memory scoping",
        "Recall quality evaluation",
      ],
    },
    checklist: [
      "Master agent memory",
      "Complete all 4 exercises",
      "Build the memory-enabled assistant",
      "Write notes on memory architecture",
    ],
  },
  {
    id: "s5-m1-l4",
    title: "Multi-Agent Systems & Orchestration",
    description:
      "Coordinate multiple specialized agents: role separation, handoffs, communication, and the orchestration patterns that scale.",
    objectives: [
      "Design agent roles and responsibilities",
      "Implement handoffs between agents",
      "Understand orchestrator-worker and supervisor patterns",
      "Handle shared state and conflicts",
      "Evaluate multi-agent vs single-agent trade-offs",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["Reasoning, Planning & Tool Use"],
    technologies: ["agents", "langgraph"],
    whyLearn:
      "Complex work needs division of labor. Multi-agent systems are how real products handle research, coding, and operations at scale.",
    useCases: [
      "Research teams: planner, searcher, writer, critic",
      "Coding: planner, coder, reviewer, tester",
      "Support: triage, specialist, escalation agents",
      "Operations copilots",
    ],
    commonMistakes: [
      "Building a kitchen-sink agent instead of roles",
      "Unclear handoff contracts",
      "Runaway cost from agent churn",
      "No global state or audit trail",
    ],
    officialDocs: [
      { label: "Anthropic - multi-agent research system", url: "https://www.anthropic.com/engineering/built-multi-agent-research-system" },
      { label: "LangGraph - multi-agent", url: "https://langchain-ai.github.io/langgraph/concepts/multi_agent/" },
    ],
    youtubeVideo: {
      label: "Multi-Agent Systems Explained",
      url: "https://www.youtube.com/results?search_query=multi+agent+systems+orchestration+tutorial",
    },
    readings: [
      { label: "Anthropic - multi-agent research system", url: "https://www.anthropic.com/engineering/built-multi-agent-research-system" },
      { label: "CrewAI - multi-agent framework", url: "https://docs.crewai.com/" },
    ],
    resources: [
      { label: "LangGraph - multi-agent examples", url: "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/" },
    ],
    exercises: [
      "Define roles for a 3-agent research team",
      "Design the handoff message schema",
      "Implement an orchestrator that assigns tasks",
      "Add a reviewer agent that vetoes bad output",
    ],
    miniProject: {
      title: "Research Team (Design)",
      description:
        "Design and prototype a multi-agent research system: planner, searcher (tool), writer, and critic, with shared state and an audit log.",
      checklist: [
        "Define agent roles and boundaries",
        "Shared state schema and handoffs",
        "Orchestration flow diagram",
        "Budget and iteration limits",
        "Prototype with at least 2 agents",
      ],
    },
    checklist: [
      "Understand multi-agent patterns",
      "Complete all 4 exercises",
      "Prototype the research team",
      "Write notes on orchestration trade-offs",
    ],
  },
];

const langchain: Lesson[] = [
  {
    id: "s5-m2-l1",
    title: "LangChain Fundamentals",
    description:
      "Learn the framework that standardized LLM application development: models, prompts, and chains.",
    objectives: [
      "Install and configure LangChain with providers",
      "Use ChatModels and prompt templates",
      "Chain simple calls together (LCEL)",
      "Use output parsers for structured results",
      "Understand when LangChain helps vs hinders",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Streaming, Function Calling & Structured Outputs", "Python"],
    technologies: ["langchain", "python"],
    whyLearn:
      "LangChain is the most widely used LLM framework — knowing it means you can read and build most production AI codebases.",
    useCases: [
      "Rapid LLM application prototyping",
      "RAG pipelines",
      "Tool-using chains",
      "Standardized provider access",
    ],
    commonMistakes: [
      "Using LangChain for trivial calls",
      "Not understanding LCEL semantics",
      "Ignoring version differences (0.x vs 0.3+)",
      "Hiding logic inside abstractions",
    ],
    officialDocs: [
      { label: "LangChain Python docs", url: "https://python.langchain.com/docs" },
      { label: "LangChain concepts", url: "https://python.langchain.com/docs/concepts/" },
    ],
    youtubeVideo: {
      label: "LangChain Tutorial for Beginners",
      url: "https://www.youtube.com/results?search_query=langchain+tutorial+for+beginners",
    },
    readings: [
      { label: "LCEL documentation", url: "https://python.langchain.com/docs/concepts/lcel/" },
      { label: "LangChain - chat models", url: "https://python.langchain.com/docs/concepts/chat_models/" },
    ],
    resources: [
      { label: "LangChain GitHub", url: "https://github.com/langchain-ai/langchain" },
    ],
    exercises: [
      "Configure a model and run a basic prompt",
      "Build a prompt template with variables",
      "Chain two model calls with LCEL",
      "Parse structured JSON output",
    ],
    miniProject: {
      title: "Summary + Action Extractor",
      description:
        "Build a LangChain pipeline that ingests meeting notes, summarizes them, extracts action items as structured JSON, and writes them to a file.",
      checklist: [
        "Prompt template for summary",
        "Structured output parser for actions",
        "LCEL chain combining both",
        "Error handling on parse failures",
        "Clean project structure",
      ],
    },
    checklist: [
      "Master LangChain basics",
      "Complete all 4 exercises",
      "Build the summary + extractor pipeline",
      "Write notes on LCEL",
    ],
  },
  {
    id: "s5-m2-l2",
    title: "Chains, Runnables & Structured Output",
    description:
      "Go deeper into the LangChain execution model: Runnables, streaming, batching, fallbacks, and reliable structured output.",
    objectives: [
      "Understand the Runnable interface (invoke, stream, batch)",
      "Compose runnables with pipe and RunnableParallel",
      "Add fallbacks and retries",
      "Stream partial results",
      "Combine with structured output and validation",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["LangChain Fundamentals"],
    technologies: ["langchain", "python"],
    whyLearn:
      "The Runnable abstraction is what makes LangChain code composable and production-friendly.",
    useCases: [
      "Parallel fan-out of model calls",
      "Streaming UIs",
      "Resilient chains with fallbacks",
      "Batch processing pipelines",
    ],
    commonMistakes: [
      "Blocking on invoke when you could stream",
      "Not handling partial failures in parallel calls",
      "Missing fallbacks for flaky models",
      "Tight coupling to one provider",
    ],
    officialDocs: [
      { label: "LangChain - Runnables", url: "https://python.langchain.com/docs/concepts/runnables/" },
      { label: "LangChain - streaming", url: "https://python.langchain.com/docs/how_to/streaming/" },
    ],
    youtubeVideo: {
      label: "LangChain Runnable & LCEL Deep Dive",
      url: "https://www.youtube.com/results?search_query=langchain+lcel+runnable+tutorial",
    },
    readings: [
      { label: "LangChain - fallbacks", url: "https://python.langchain.com/docs/how_to/fallbacks/" },
      { label: "LangChain - structured output", url: "https://python.langchain.com/docs/concepts/structured_outputs/" },
    ],
    resources: [
      { label: "LangChain how-to guides", url: "https://python.langchain.com/docs/how_to/" },
    ],
    exercises: [
      "Run the same chain with invoke, batch, and stream",
      "Build a parallel chain with RunnableParallel",
      "Add a fallback from gpt-4o to gpt-4o-mini",
      "Validate structured output and auto-retry",
    ],
    miniProject: {
      title: "Resilient Chain Service",
      description:
        "Package the extractor as a service with fallbacks, streaming, and batch mode, plus a benchmark showing latency and reliability.",
      checklist: [
        "Runnable chain with structured output",
        "Fallback model configuration",
        "Streaming support",
        "Batch mode for many documents",
        "Benchmark report",
      ],
    },
    checklist: [
      "Master Runnables",
      "Complete all 4 exercises",
      "Build the resilient chain service",
      "Write notes on fallback patterns",
    ],
  },
  {
    id: "s5-m2-l3",
    title: "LangChain Tools, Agents & RAG Integration",
    description:
      "Wire tools and retrieval into LangChain: tool decorators, agent executor patterns, and integrating your RAG pipeline.",
    objectives: [
      "Define tools with the @tool decorator",
      "Build agents with tool selection",
      "Integrate vector stores and retrievers",
      "Use document loaders and text splitters",
      "Evaluate the trade-off of LangChain's agent abstractions",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["LangChain Fundamentals", "Building a RAG Pipeline"],
    technologies: ["langchain", "rag", "python"],
    whyLearn:
      "This is where LangChain shows its value: wiring retrieval, tools, and models into working applications in minutes.",
    useCases: [
      "Chat-with-your-docs assistants",
      "Agents with internal tools",
      "Hybrid retrieval apps",
      "Document processing pipelines",
    ],
    commonMistakes: [
      "Letting the agent call tools with bad args",
      "Not testing retrieval quality",
      "Vendor lock-in via framework features",
      "Over-abstraction that hides bugs",
    ],
    officialDocs: [
      { label: "LangChain - tools", url: "https://python.langchain.com/docs/concepts/tools/" },
      { label: "LangChain - agents", url: "https://python.langchain.com/docs/concepts/agents/" },
    ],
    youtubeVideo: {
      label: "LangChain RAG + Agents Tutorial",
      url: "https://www.youtube.com/results?search_query=langchain+rag+agents+tutorial",
    },
    readings: [
      { label: "LangChain - retrieval", url: "https://python.langchain.com/docs/concepts/retrieval/" },
      { label: "LangChain - vector stores", url: "https://python.langchain.com/docs/integrations/vectorstores/" },
    ],
    resources: [
      { label: "LangChain templates", url: "https://github.com/langchain-ai/langchain/tree/master/templates" },
    ],
    exercises: [
      "Define 3 tools with typed arguments",
      "Build an agent that answers with retrieved context",
      "Add a document loader and splitter for PDFs",
      "Debug a tool-calling loop failure",
    ],
    miniProject: {
      title: "Doc Agent with Tools",
      description:
        "Build a LangChain agent over your documents: retrieval tool, a calculator tool, and a 'lookup in codebase' tool, with citations.",
      checklist: [
        "Document ingestion pipeline",
        "Retriever-as-tool",
        "2+ additional tools",
        "Citations in answers",
        "Evaluation on a test set",
      ],
    },
    checklist: [
      "Master tools and agents in LangChain",
      "Complete all 4 exercises",
      "Build the doc agent",
      "Write notes on framework trade-offs",
    ],
  },
  {
    id: "s5-m2-l4",
    title: "LangChain in Production",
    description:
      "The production concerns: tracing, caching, rate limiting, cost tracking, and testing LLM applications built with LangChain.",
    objectives: [
      "Add tracing with LangSmith or alternatives",
      "Implement response caching",
      "Track costs and tokens",
      "Write integration tests for chains",
      "Version prompts and models",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["LangChain Tools, Agents & RAG Integration"],
    technologies: ["langchain", "monitoring", "python"],
    whyLearn:
      "LLM apps fail in ways traditional apps don't. Observability and testing are non-negotiable in production.",
    useCases: [
      "Debugging a bad run with full trace",
      "Cutting cost with caching",
      "Catching prompt regressions",
      "Auditing what models produce",
    ],
    commonMistakes: [
      "No tracing when things break",
      "Uncapped retry storms on provider errors",
      "Testing only happy paths",
      "No cost visibility",
    ],
    officialDocs: [
      { label: "LangSmith docs", url: "https://docs.smith.langchain.com/" },
      { label: "LangChain - monitoring", url: "https://python.langchain.com/docs/concepts/observability/" },
    ],
    youtubeVideo: {
      label: "LLM Observability in Production",
      url: "https://www.youtube.com/results?search_query=langsmith+llm+observability+tutorial",
    },
    readings: [
      { label: "LangChain - testing", url: "https://python.langchain.com/docs/how_to/testing/" },
      { label: "LiteLLM - cost tracking", url: "https://docs.litellm.ai/docs/proxy/logging" },
    ],
    resources: [
      { label: "LangSmith", url: "https://smith.langchain.com/" },
    ],
    exercises: [
      "Trace a chain run and inspect each step",
      "Add caching for repeated prompts",
      "Track cost per user/run",
      "Write integration tests with mocked LLM",
    ],
    miniProject: {
      title: "Production-Ready Chain",
      description:
        "Harden the chain service: tracing, caching, cost tracking, tests, and a runbook for debugging bad outputs.",
      checklist: [
        "Tracing configured and inspected",
        "Cache layer with TTL",
        "Cost tracking report",
        "Integration tests",
        "Runbook with common failures",
      ],
    },
    checklist: [
      "Master LLM observability",
      "Complete all 4 exercises",
      "Build the production-ready chain",
      "Write notes on LLM testing",
    ],
  },
];

const langgraph: Lesson[] = [
  {
    id: "s5-m3-l1",
    title: "State Machines & Graphs",
    description:
      "The foundation of LangGraph: think of agents as graphs with state, nodes, and edges. Control flow you can actually reason about.",
    objectives: [
      "Model a workflow as a state machine",
      "Create graphs with nodes and edges",
      "Use conditional edges for branching",
      "Manage shared state with reducers",
      "Understand cyclic vs acyclic graphs",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Python", "LangChain Fundamentals"],
    technologies: ["langgraph", "python"],
    whyLearn:
      "Graph-based control flow is what makes agents debuggable, resumable, and safe. This is the mental model of modern agent frameworks.",
    useCases: [
      "Conversational agents with state",
      "Approval workflows",
      "RAG with verification loops",
      "Data processing DAGs",
    ],
    commonMistakes: [
      "State mutations outside reducers",
      "Infinite loops without guards",
      "Overcomplicating graphs",
      "Ignoring state schema",
    ],
    officialDocs: [
      { label: "LangGraph documentation", url: "https://langchain-ai.github.io/langgraph/" },
      { label: "LangGraph - state", url: "https://langchain-ai.github.io/langgraph/concepts/low_level/" },
    ],
    youtubeVideo: {
      label: "LangGraph Tutorial for Beginners",
      url: "https://www.youtube.com/results?search_query=langgraph+tutorial+beginner",
    },
    readings: [
      { label: "LangGraph - quickstart", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
      { label: "State machines explained", url: "https://en.wikipedia.org/wiki/Finite-state_machine" },
    ],
    resources: [
      { label: "LangGraph GitHub", url: "https://github.com/langchain-ai/langgraph" },
    ],
    exercises: [
      "Build a 3-node graph with a conditional edge",
      "Use a reducer to accumulate messages",
      "Add a loop with a max-iteration guard",
      "Draw and implement an approval state machine",
    ],
    miniProject: {
      title: "Review Workflow Graph",
      description:
        "Build a document review graph: draft → review → (revisions loop) → approve, with a max revision counter and full state log.",
      checklist: [
        "State schema with reducer",
        "Conditional revision loop",
        "Max iterations guard",
        "Execution log and final state",
        "Unit tests for each edge",
      ],
    },
    checklist: [
      "Master graph and state concepts",
      "Complete all 4 exercises",
      "Build the review workflow graph",
      "Write notes on reducers",
    ],
  },
  {
    id: "s5-m3-l2",
    title: "Building Agents with LangGraph",
    description:
      "Build a production-grade agent loop in LangGraph: tool-calling nodes, conditional routing, and streaming.",
    objectives: [
      "Implement a tool-calling agent as a graph",
      "Route between tool calls and final answers",
      "Stream tokens and steps",
      "Add interrupts for human approval",
      "Structure the agent for testing",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["State Machines & Graphs"],
    technologies: ["langgraph", "python"],
    whyLearn:
      "LangGraph is the framework behind serious agent products. Building agents as graphs gives you control, persistence, and safety.",
    useCases: [
      "Assistants with tool access",
      "Agents with human approvals",
      "Customer support copilots",
      "Operational agents",
    ],
    commonMistakes: [
      "Bypassing the graph and calling models directly",
      "Missing edge cases in routing",
      "No budget on tool calls",
      "Ignoring the state schema evolution",
    ],
    officialDocs: [
      { label: "LangGraph - agent tutorial", url: "https://langchain-ai.github.io/langgraph/tutorials/rag/agent/" },
      { label: "LangGraph - tool calling agents", url: "https://langchain-ai.github.io/langgraph/tutorials/reflexion/" },
    ],
    youtubeVideo: {
      label: "Build an Agent with LangGraph",
      url: "https://www.youtube.com/results?search_query=build+agent+langgraph+tutorial",
    },
    readings: [
      { label: "LangGraph - streaming", url: "https://langchain-ai.github.io/langgraph/how-tos/streaming/" },
      { label: "LangGraph - human in the loop", url: "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/" },
    ],
    resources: [
      { label: "LangGraph template repo", url: "https://github.com/langchain-ai/langgraph-template" },
    ],
    exercises: [
      "Build a tool-calling agent with 3 tools",
      "Add routing that stops after N tool calls",
      "Stream both tokens and step events",
      "Insert a human-approval interrupt",
    ],
    miniProject: {
      title: "Operations Agent",
      description:
        "Build a LangGraph agent that answers ops questions using tools (status lookup, run command mock, docs search), with budgets and streaming.",
      checklist: [
        "Graph with tool-calling node",
        "At least 3 tools with contracts",
        "Streaming to the UI",
        "Budget + interrupt for risky actions",
        "Tests for routing logic",
      ],
    },
    checklist: [
      "Build agents as graphs",
      "Complete all 4 exercises",
      "Build the operations agent",
      "Write notes on graph design",
    ],
  },
  {
    id: "s5-m3-l3",
    title: "Checkpointing, Persistence & Human-in-the-Loop",
    description:
      "Make agents resumable and safe: checkpointers, thread persistence, time-travel, and approval interrupts.",
    objectives: [
      "Add checkpointer-based persistence",
      "Resume conversations across sessions",
      "Implement human-in-the-loop interrupts",
      "Use time-travel for replay/debug",
      "Design durable, auditable agent state",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["Building Agents with LangGraph"],
    technologies: ["langgraph", "python"],
    whyLearn:
      "Production agents must survive restarts, await humans, and be auditable. Persistence and interrupts are how that happens.",
    useCases: [
      "Chat agents that remember sessions",
      "Workflows that wait for approval",
      "Debugging with replay",
      "Compliance-grade audit trails",
    ],
    commonMistakes: [
      "Losing state on restart",
      "Interrupts that deadlock",
      "No audit log of decisions",
      "Storing sensitive data in checkpoints",
    ],
    officialDocs: [
      { label: "LangGraph - persistence", url: "https://langchain-ai.github.io/langgraph/concepts/persistence/" },
      { label: "LangGraph - checkpointer", url: "https://langchain-ai.github.io/langgraph/reference/checkpoints/" },
    ],
    youtubeVideo: {
      label: "LangGraph Human-in-the-Loop",
      url: "https://www.youtube.com/results?search_query=langgraph+human+in+the+loop+tutorial",
    },
    readings: [
      { label: "LangGraph - interrupts", url: "https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/edit-graph-state/" },
      { label: "LangGraph - time travel", url: "https://langchain-ai.github.io/langgraph/how-tos/time-travel/" },
    ],
    resources: [
      { label: "LangGraph - reference", url: "https://langchain-ai.github.io/langgraph/reference/" },
    ],
    exercises: [
      "Persist a conversation and resume it in a new process",
      "Add an approval interrupt and continue",
      "Replay a past run from a checkpoint",
      "Edit graph state before continuing",
    ],
    miniProject: {
      title: "Durable Order Agent",
      description:
        "Build an order-processing agent with checkpointing: persists across restarts, pauses for approvals, and supports replay debugging.",
      checklist: [
        "Checkpointer on a durable store",
        "Session/thread scoping",
        "Approval interrupt with resume",
        "Audit log of all steps",
        "Time-travel debug demo",
      ],
    },
    checklist: [
      "Master persistence",
      "Master human-in-the-loop",
      "Complete all 4 exercises",
      "Build the durable order agent",
      "Write notes on interrupt design",
    ],
  },
  {
    id: "s5-m3-l4",
    title: "Multi-Agent Systems with LangGraph",
    description:
      "Implement real multi-agent coordination in LangGraph: supervisor patterns, handoffs, shared state, and reflection loops.",
    objectives: [
      "Design a supervisor agent pattern",
      "Implement handoff edges between agents",
      "Share state across a team of agents",
      "Add a critic/reflection loop",
      "Control cost and iteration budgets",
    ],
    durationMinutes: 210,
    difficulty: "expert",
    prerequisites: ["Multi-Agent Systems & Orchestration", "Checkpointing, Persistence & Human-in-the-Loop"],
    technologies: ["langgraph", "agents", "python"],
    whyLearn:
      "This is the summit of agent engineering: a team of agents working on one goal with shared memory and controlled flow.",
    useCases: [
      "Research teams (planner/searcher/writer/critic)",
      "Coding agents with review loops",
      "Support systems with specialist routing",
      "Long-running operational missions",
    ],
    commonMistakes: [
      "Agent churn without a supervisor",
      "Shared state races",
      "No global iteration budget",
      "Ignoring evaluation of the whole team",
    ],
    officialDocs: [
      { label: "LangGraph - multi-agent patterns", url: "https://langchain-ai.github.io/langgraph/concepts/multi_agent/" },
      { label: "LangGraph - supervisor tutorial", url: "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/supervisor/" },
    ],
    youtubeVideo: {
      label: "LangGraph Multi-Agent Systems",
      url: "https://www.youtube.com/results?search_query=langgraph+multi+agent+tutorial",
    },
    readings: [
      { label: "Anthropic - multi-agent research", url: "https://www.anthropic.com/engineering/built-multi-agent-research-system" },
      { label: "LangGraph - hierarchical agents", url: "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/hierarchical/" },
    ],
    resources: [
      { label: "LangGraph - multi-agent examples", url: "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/" },
    ],
    exercises: [
      "Build a supervisor with 3 subordinate agents",
      "Implement a handoff with structured payloads",
      "Add a critic loop with max rounds",
      "Run a team mission and log the full trace",
    ],
    miniProject: {
      title: "Research Team MVP",
      description:
        "Implement a working research team in LangGraph: supervisor plans, searcher gathers (mock tool), writer drafts, critic reviews — with budgets and persistence.",
      checklist: [
        "Supervisor routing with handoffs",
        "3 agents with clear roles",
        "Shared state schema",
        "Critic loop with max rounds",
        "Persisted runs + audit trace",
      ],
    },
    checklist: [
      "Master multi-agent LangGraph",
      "Complete all 4 exercises",
      "Build the research team MVP",
      "Write notes on supervision patterns",
    ],
  },
];

const mcp: Lesson[] = [
  {
    id: "s5-m4-l1",
    title: "MCP: The Model Context Protocol",
    description:
      "The open standard that connects AI models to tools and data. Learn the architecture: servers, clients, tools, resources, and prompts.",
    objectives: [
      "Explain the MCP architecture",
      "Understand servers, clients, and transports",
      "Describe tools, resources, and prompt primitives",
      "Use MCP in a client (Claude/other)",
      "See why MCP is becoming an industry standard",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Streaming, Function Calling & Structured Outputs"],
    technologies: ["mcp"],
    whyLearn:
      "MCP is the USB-C of AI tooling. Building skills in MCP now positions you at the center of the agent ecosystem.",
    useCases: [
      "Exposing internal APIs to AI assistants",
      "Reading databases through agents",
      "Standardizing tool integrations",
      "Company-wide AI access to systems",
    ],
    commonMistakes: [
      "Treating MCP like a library instead of a protocol",
      "Exposing too much via broad tools",
      "Ignoring auth and permissions",
      "Skipping the SDK and hand-rolling JSON-RPC",
    ],
    officialDocs: [
      { label: "Model Context Protocol docs", url: "https://modelcontextprotocol.io/" },
      { label: "MCP spec", url: "https://modelcontextprotocol.io/specification" },
    ],
    youtubeVideo: {
      label: "Model Context Protocol Explained",
      url: "https://www.youtube.com/results?search_query=model+context+protocol+explained",
    },
    readings: [
      { label: "Anthropic - MCP introduction", url: "https://www.anthropic.com/news/model-context-protocol" },
      { label: "MCP - architecture", url: "https://modelcontextprotocol.io/docs/concepts/architecture" },
    ],
    resources: [
      { label: "MCP - server examples", url: "https://github.com/modelcontextprotocol/servers" },
    ],
    exercises: [
      "Connect an MCP client to a public server",
      "List the tools exposed by a server",
      "Call a tool and inspect the result",
      "Sketch an MCP architecture for your company",
    ],
    miniProject: {
      title: "MCP Explorer",
      description:
        "Set up a client with two MCP servers (e.g., filesystem + a public one), explore available tools, and document what each exposes.",
      checklist: [
        "Client configured with 2 servers",
        "Tool inventory documented",
        "One end-to-end tool call",
        "Security review of exposed tools",
        "Notes on protocol primitives",
      ],
    },
    checklist: [
      "Understand the MCP architecture",
      "Complete all 4 exercises",
      "Complete the MCP explorer",
      "Write notes on the protocol",
    ],
  },
  {
    id: "s5-m4-l2",
    title: "Building an MCP Server",
    description:
      "Create your own MCP server: define tools, resources, and prompts, and expose your systems safely.",
    objectives: [
      "Set up an MCP server project (Python SDK)",
      "Define typed tools with schemas",
      "Expose resources and prompts",
      "Handle auth and scoping",
      "Test with an MCP client",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["MCP: The Model Context Protocol"],
    technologies: ["mcp", "python"],
    whyLearn:
      "Every company will have MCP servers exposing their systems to AI. Being able to build them is a serious engineering skill.",
    useCases: [
      "Database query server",
      "Internal API exposure",
      "Knowledge base resource server",
      "DevOps command server",
    ],
    commonMistakes: [
      "Tools with no documentation",
      "Unbounded operations",
      "No permission model",
      "Synchronous blocking implementations",
    ],
    officialDocs: [
      { label: "MCP - Python SDK", url: "https://github.com/modelcontextprotocol/python-sdk" },
      { label: "MCP - building a server", url: "https://modelcontextprotocol.io/docs/develop/build-server" },
    ],
    youtubeVideo: {
      label: "Build Your Own MCP Server",
      url: "https://www.youtube.com/results?search_query=build+mcp+server+tutorial",
    },
    readings: [
      { label: "MCP - TypeScript SDK", url: "https://github.com/modelcontextprotocol/typescript-sdk" },
      { label: "MCP - tools overview", url: "https://modelcontextprotocol.io/docs/concepts/tools" },
    ],
    resources: [
      { label: "MCP - server templates", url: "https://github.com/modelcontextprotocol/create-python-server" },
    ],
    exercises: [
      "Create an MCP server with 3 tools",
      "Expose a filesystem resource",
      "Add prompt templates",
      "Connect a client and test every tool",
    ],
    miniProject: {
      title: "Notes Database MCP Server",
      description:
        "Build an MCP server that exposes the Notes API/DB: search notes, get note, create note — with permissioned tools and tests.",
      checklist: [
        "Tools with JSON schemas and docs",
        "Resource exposure for individual notes",
        "Auth/scoping model",
        "Tested from a client",
        "Security review documented",
      ],
    },
    checklist: [
      "Build MCP servers",
      "Complete all 4 exercises",
      "Build the notes DB MCP server",
      "Write notes on server design",
    ],
  },
  {
    id: "s5-m4-l3",
    title: "MCP Clients, Tools & Agents",
    description:
      "Integrate MCP into your applications: build clients, connect tools to LangGraph agents, and compose multiple servers.",
    objectives: [
      "Build an MCP client in Python/TS",
      "Connect MCP tools into a LangGraph agent",
      "Compose tools from multiple servers",
      "Handle tool result caching",
      "Design a secure client runtime",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Building an MCP Server"],
    technologies: ["mcp", "langgraph", "python"],
    whyLearn:
      "Agents are only as useful as their tools. MCP makes your entire system an agent's toolkit.",
    useCases: [
      "Agents that query internal databases",
      "Assistants with filesystem + API access",
      "Orchestrating a suite of MCP servers",
      "Company copilot platforms",
    ],
    commonMistakes: [
      "Not limiting which tools an agent may use",
      "No timeouts on tool calls",
      "Ignoring prompt injection via tool content",
      "Building clients against v0 specs",
    ],
    officialDocs: [
      { label: "MCP - client concepts", url: "https://modelcontextprotocol.io/docs/concepts/transports" },
      { label: "LangChain - MCP integration", url: "https://python.langchain.com/docs/integrations/tools/mcp/" },
    ],
    youtubeVideo: {
      label: "MCP Clients & Agents Tutorial",
      url: "https://www.youtube.com/results?search_query=mcp+client+agent+tools+tutorial",
    },
    readings: [
      { label: "MCP - TypeScript client example", url: "https://modelcontextprotocol.io/docs/develop/connect-clients" },
      { label: "Prompt injection (OWASP)", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
    ],
    resources: [
      { label: "MCP Inspector", url: "https://github.com/modelcontextprotocol/inspector" },
    ],
    exercises: [
      "Build a minimal MCP client",
      "Load MCP tools into a LangGraph agent",
      "Combine tools from 2 servers with name prefixes",
      "Add tool-call timeouts and caching",
    ],
    miniProject: {
      title: "Agent with MCP Toolkit",
      description:
        "Build a LangGraph agent whose tools come from MCP servers: your notes server + a public utility server, with scoped permissions.",
      checklist: [
        "Client connects to 2 servers",
        "Tools exposed to the agent",
        "Permission scoping per server",
        "Timeouts and caching",
        "Prompt-injection risk review",
      ],
    },
    checklist: [
      "Master MCP clients",
      "Complete all 4 exercises",
      "Build the agent with MCP toolkit",
      "Write notes on secure clients",
    ],
  },
  {
    id: "s5-m4-l4",
    title: "MCP in Production & the Ecosystem",
    description:
      "Operate MCP at scale: hosting, auth, observability, versioning, and the broader ecosystem of registries and frameworks.",
    objectives: [
      "Host MCP servers in production (Docker, remote)",
      "Implement auth and rate limiting for servers",
      "Add observability (logs, traces, usage)",
      "Version your protocol and tools",
      "Navigate the MCP ecosystem landscape",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["MCP Clients, Tools & Agents"],
    technologies: ["mcp", "docker", "monitoring"],
    whyLearn:
      "Standards win when they're easy to operate. Production MCP skills are exactly what enterprises will need from agent engineers.",
    useCases: [
      "Company-wide MCP gateway",
      "Managed servers for multiple teams",
      "Audited tool usage",
      "Public MCP marketplaces",
    ],
    commonMistakes: [
      "Running servers without auth",
      "No usage limits or quotas",
      "Unversioned tool contracts",
      "No monitoring of failures",
    ],
    officialDocs: [
      { label: "MCP - best practices", url: "https://modelcontextprotocol.io/docs/develop/roadmap" },
      { label: "MCP - production checklist", url: "https://modelcontextprotocol.io/docs/develop/host-mcp" },
    ],
    youtubeVideo: {
      label: "MCP in Production",
      url: "https://www.youtube.com/results?search_query=mcp+server+production+deployment",
    },
    readings: [
      { label: "Cloudflare - MCP ecosystems", url: "https://blog.cloudflare.com/remote-model-context-protocol-servers-mcp/" },
      { label: "OpenAPI to MCP conversions", url: "https://github.com/modelcontextprotocol/openapi-mcp-server" },
    ],
    resources: [
      { label: "MCP - registry ideas", url: "https://modelcontextprotocol.io/docs/develop/registry" },
    ],
    exercises: [
      "Containerize and deploy an MCP server with auth",
      "Add rate limiting and usage quotas",
      "Instrument server with structured logs",
      "Version a breaking tool change",
    ],
    miniProject: {
      title: "Production MCP Gateway",
      description:
        "Deploy your notes MCP server to a remote host with auth, rate limits, observability, and a client connection from another machine.",
      checklist: [
        "Dockerized server deployment",
        "Auth token flow configured",
        "Rate limiting and quotas",
        "Observability (logs + metrics)",
        "Remote client integration test",
      ],
    },
    checklist: [
      "Operate MCP in production",
      "Complete all 4 exercises",
      "Build the production MCP gateway",
      "Write notes on ecosystem trends",
    ],
  },
];

export const capstone5: Capstone = {
  id: "capstone-5",
  title: "Autonomous Research Assistant",
  description:
    "Build a multi-agent research system in LangGraph: a supervisor plans, a searcher gathers from web + knowledge base, a writer drafts, and a critic reviews — with persistence, human approval, MCP-based tools, and a full evaluation.",
  objectives: [
    "Design and implement a supervised multi-agent system",
    "Use MCP servers as the agent's tool layer",
    "Add persistence, checkpoints, and human-in-the-loop approvals",
    "Control cost, iterations, and risk",
    "Evaluate and document the system end to end",
  ],
  requiredSkills: ["AI Agents", "LangChain", "LangGraph", "MCP", "RAG", "Prompt Engineering"],
  difficulty: "expert",
  estimatedHours: 45,
  xp: 1100,
  technologies: ["agents", "langgraph", "langchain", "mcp", "rag", "python"],
  checklist: [
    "Supervisor + 3 specialized agents",
    "MCP server provides tools (search, notes, web)",
    "Persistence with checkpoints",
    "Human approval for risky actions",
    "Budgets: iterations, tokens, cost",
    "Evaluation suite with quality report",
    "Audit trail and tracing",
    "Final review: self-assessment against the rubric",
  ],
};

const modules5: Module[] = [
  {
    id: "s5-m1",
    title: "AI Agent Fundamentals",
    description: "The concepts: what agents are, how they reason, remember, and coordinate.",
    technologies: ["agents"],
    lessons: agents,
  },
  {
    id: "s5-m2",
    title: "LangChain",
    description: "The framework for composing LLM applications: chains, tools, retrieval, and production concerns.",
    technologies: ["langchain"],
    lessons: langchain,
  },
  {
    id: "s5-m3",
    title: "LangGraph",
    description: "Stateful, persistent, multi-agent systems built as graphs with humans in the loop.",
    technologies: ["langgraph"],
    lessons: langgraph,
  },
  {
    id: "s5-m4",
    title: "MCP",
    description: "The protocol connecting agents to tools and data — build and operate MCP servers.",
    technologies: ["mcp"],
    lessons: mcp,
  },
];

export const semester5: Semester = {
  id: "semester-5",
  number: 5,
  title: "Agent Engineering",
  description:
    "Build intelligent agents: reasoning, memory, tool use, multi-agent systems, and the protocols that connect them.",
  tagline: "Build systems that think and act",
  icon: Network,
  color: "#EC4899",
  duration: "16 weeks",
  xp: 250,
  modules: modules5,
  capstone: capstone5,
};
