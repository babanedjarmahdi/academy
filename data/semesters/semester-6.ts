import type { Capstone, Lesson, Module, Semester } from "@/types";
import { Building2 } from "lucide-react";

const architecture: Lesson[] = [
  {
    id: "s6-m1-l1",
    title: "Principles of Good Architecture",
    description:
      "The timeless rules that keep systems healthy for years: separation of concerns, dependency direction, modularity, and the trade-offs that define great engineers.",
    objectives: [
      "Apply SOLID and the dependency rule",
      "Separate concerns into clear layers",
      "Design for change with ports & adapters",
      "Evaluate trade-offs and write ADRs",
      "Recognize accidental complexity",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Backend experience from Semester 2"],
    technologies: ["architecture", "system-design"],
    whyLearn:
      "Year-long systems survive because of architecture, not luck. This is the layer that lets you sleep at night.",
    useCases: [
      "Designing the internal structure of the Notes API",
      "Refactoring a growing monolith",
      "Keeping AI pipelines testable",
      "Onboarding teams to a codebase",
    ],
    commonMistakes: [
      "Architecture astronauts (over-engineering)",
      "Dependencies pointing the wrong way",
      "Business logic leaking into every layer",
      "No record of decisions (ADRs)",
    ],
    officialDocs: [
      { label: "The Clean Architecture (blog, R. Martin)", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
      { label: "The Architecture of Open Source Applications", url: "https://aosabook.org/en/" },
    ],
    youtubeVideo: {
      label: "Software Architecture Fundamentals",
      url: "https://www.youtube.com/results?search_query=software+architecture+principles+clean+architecture",
    },
    readings: [
      { label: "Clean Architecture (book summary)", url: "https://martinfowler.com/bliki/CleanArchitecture.html" },
      { label: "Documenting Architecture Decisions (ADR)", url: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions" },
    ],
    resources: [
      { label: "ADR template examples", url: "https://github.com/joelparkerhenderson/architecture-decision-record" },
    ],
    exercises: [
      "Draw the layered architecture of the Notes API",
      "Identify a dependency-direction violation in your code",
      "Write an ADR for a real decision you made",
      "Refactor one module to depend on abstractions",
    ],
    miniProject: {
      title: "Architecture Review",
      description:
        "Perform an architecture review of your best project: document its structure, identify violations, write ADRs, and propose a refactor plan.",
      checklist: [
        "Document the current architecture (diagram)",
        "List architectural principles you will follow",
        "Write 3 ADRs for key decisions",
        "Identify top 5 violations",
        "Propose a phased refactor plan",
      ],
    },
    checklist: [
      "Internalize architectural principles",
      "Complete all 4 exercises",
      "Complete the architecture review",
      "Write notes on your principles",
    ],
  },
  {
    id: "s6-m1-l2",
    title: "Designing AI Systems: Data, Model & Serving Layers",
    description:
      "Architect production AI: the data layer (sources, feature stores), the model layer (inference, versioning), and the serving layer (APIs, caching, scaling).",
    objectives: [
      "Map the data, model, and serving layers of an AI system",
      "Design inference services with caching and batching",
      "Version models and manage experiments",
      "Design feedback loops for continuous improvement",
      "Choose between patterns (inline, sidecar, gateway)",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["RAG experience", "Backend experience"],
    technologies: ["architecture", "system-design", "rag"],
    whyLearn:
      "AI systems fail in layers. Designing the separation between data, model, and serving is what makes AI products operational.",
    useCases: [
      "Designing a RAG platform for a company",
      "Multi-model gateway services",
      "LLM caching and cost control",
      "Data pipelines feeding model quality",
    ],
    commonMistakes: [
      "Tightly coupling prompts and serving logic",
      "No model versioning",
      "Caching without invalidation for fresh data",
      "Ignoring the feedback loop",
    ],
    officialDocs: [
      { label: "MLOps principles (Google)", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning" },
      { label: "OpenAI - architecture for AI apps", url: "https://platform.openai.com/docs/guides/architecture" },
    ],
    youtubeVideo: {
      label: "Designing LLM Application Architectures",
      url: "https://www.youtube.com/results?search_query=llm+application+architecture+design",
    },
    readings: [
      { label: "Feature stores (blog)", url: "https://www.featurestore.org/" },
      { label: "LLM gateway patterns", url: "https://www.braintrust.dev/docs/reference" },
    ],
    resources: [
      { label: "A16z - emerging LLM app stack", url: "https://a16z.com/emerging-architectures-for-llm-applications/" },
    ],
    exercises: [
      "Draw the 3-layer architecture for the Knowledge Copilot",
      "Design caching with invalidation for fresh documents",
      "Define a model versioning scheme",
      "Design a feedback loop for answer quality",
    ],
    miniProject: {
      title: "AI System Blueprint",
      description:
        "Produce a complete blueprint for an enterprise AI system: data sources, ingestion, model serving, caching, feedback, and scaling — with a diagram and ADRs.",
      checklist: [
        "Architecture diagram of all layers",
        "Data + model + serving layer design",
        "Caching and cost strategy",
        "Feedback loop design",
        "3 ADRs on key decisions",
      ],
    },
    checklist: [
      "Design AI systems in layers",
      "Complete all 4 exercises",
      "Write the AI system blueprint",
      "Write notes on layer boundaries",
    ],
  },
  {
    id: "s6-m1-l3",
    title: "Scalability & Reliability Patterns",
    description:
      "Make systems that survive traffic, failures, and time: load balancing, horizontal scaling, redundancy, queues, and graceful degradation.",
    objectives: [
      "Explain horizontal vs vertical scaling",
      "Use load balancers and statelessness",
      "Apply redundancy and failover patterns",
      "Design with queues for burst absorption",
      "Implement rate limiting, backpressure, and degradation",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Principles of Good Architecture"],
    technologies: ["system-design", "architecture"],
    whyLearn:
      "Enterprise systems must serve thousands of users and survive incidents. Reliability is a design property, not an accident.",
    useCases: [
      "Scaling an inference API during load",
      "Designing for AI feature rollouts",
      "Protecting systems with queues",
      "Multi-region failover",
    ],
    commonMistakes: [
      "Scaling the database instead of fixing queries",
      "Stateful services behind load balancers",
      "No backpressure on bursty AI traffic",
      "Testing scale only in production",
    ],
    officialDocs: [
      { label: "Scalability patterns (Microsoft)", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/category/scalability" },
      { label: "Reliability patterns", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/category/reliability" },
    ],
    youtubeVideo: {
      label: "System Design - Scalability Explained",
      url: "https://www.youtube.com/results?search_query=system+design+scalability+horizontal+scaling",
    },
    readings: [
      { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { label: "Fallacies of distributed computing", url: "https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing" },
    ],
    resources: [
      { label: "High Scalability blog", url: "http://highscalability.com/" },
    ],
    exercises: [
      "Design a load-balanced inference service",
      "Add a queue to smooth a bursty workload",
      "Write a degradation plan for an AI endpoint",
      "Calculate capacity for a projected load",
    ],
    miniProject: {
      title: "Scaling Plan",
      description:
        "Take the Notes API and write a scaling plan: capacity model, statelessness changes, load balancing, queues for background work, and failure drills.",
      checklist: [
        "Capacity model with numbers",
        "Statelessness audit and fixes",
        "Load balancing design",
        "Queue-based background processing",
        "Failure drill documentation",
      ],
    },
    checklist: [
      "Master scalability patterns",
      "Complete all 4 exercises",
      "Write the scaling plan",
      "Write notes on reliability patterns",
    ],
  },
  {
    id: "s6-m1-l4",
    title: "Security & Compliance for AI Systems",
    description:
      "Secure AI systems end to end: secrets, data privacy, prompt injection, model abuse, auditability, and compliance basics (GDPR/SOC2-style).",
    objectives: [
      "Apply least privilege across AI systems",
      "Protect against prompt injection and tool abuse",
      "Design data handling for privacy (PII, retention)",
      "Build audit logs for AI actions",
      "Map common compliance requirements",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["JWT, Sessions & OAuth"],
    technologies: ["architecture", "oauth", "jwt"],
    whyLearn:
      "AI systems introduce new attack surfaces. Enterprises won't adopt AI products that aren't secure and auditable.",
    useCases: [
      "Scoping AI access to data",
      "Preventing data leakage via prompts",
      "Auditing what models did with user data",
      "Meeting enterprise compliance reviews",
    ],
    commonMistakes: [
      "Sending PII to models without consent",
      "Broad tool permissions",
      "No logging of AI decisions",
      "Treating prompt injection as a joke",
    ],
    officialDocs: [
      { label: "OWASP LLM Top 10", url: "https://genai.owasp.org/llmrisk/llm-top-10/" },
      { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    ],
    youtubeVideo: {
      label: "LLM Security & Prompt Injection",
      url: "https://www.youtube.com/results?search_query=prompt+injection+security+llm",
    },
    readings: [
      { label: "Anthropic - reducing prompt injection risk", url: "https://www.anthropic.com/engineering/prompt-injection-defenses" },
      { label: "GDPR overview (EU)", url: "https://gdpr-info.eu/" },
    ],
    resources: [
      { label: "OWASP GenAI resources", url: "https://genai.owasp.org/" },
    ],
    exercises: [
      "Conduct a threat-modeling session for the Knowledge Copilot",
      "Write a data retention policy for chat data",
      "Design an audit log schema for AI actions",
      "Craft 3 prompt-injection tests and defenses",
    ],
    miniProject: {
      title: "Security & Compliance Review",
      description:
        "Produce a security review of your capstone project: threat model, mitigations, audit logging, data handling policy, and a compliance checklist.",
      checklist: [
        "Threat model (STRIDE-style)",
        "Mitigations for top risks",
        "Audit logging implemented",
        "Data handling + retention policy",
        "Compliance checklist mapped",
      ],
    },
    checklist: [
      "Understand AI-specific threats",
      "Complete all 4 exercises",
      "Complete the security review",
      "Write notes on AI security",
    ],
  },
];

const enterprise: Lesson[] = [
  {
    id: "s6-m2-l1",
    title: "Modular Monoliths & Clean Architecture",
    description:
      "Build enterprise systems that start simple and stay simple: modular monoliths, bounded contexts, and clean boundaries before microservices.",
    objectives: [
      "Structure a modular monolith with clear boundaries",
      "Apply bounded contexts and domain modeling",
      "Choose monolith vs microservices deliberately",
      "Implement clean FastAPI/Next.js layering",
      "Prepare graceful extraction paths",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Principles of Good Architecture", "FastAPI + SQLAlchemy"],
    technologies: ["architecture", "fastapi", "python"],
    whyLearn:
      "Most teams don't need microservices; they need disciplined modularity. Enterprise platforms start as modular monoliths.",
    useCases: [
      "Platform backends with many modules",
      "Team-owned bounded contexts",
      "Refactoring a big-ball-of-mud API",
      "Choosing the right initial architecture",
    ],
    commonMistakes: [
      "Microservices as an organization chart in disguise",
      "Modules that secretly share everything",
      "Leaky boundaries",
      "Distributed monoliths (worst of both)",
    ],
    officialDocs: [
      { label: "Modular Monolith (microservices.io)", url: "https://microservices.io/patterns/monolithic/modular-monolith.html" },
      { label: "Domain-Driven Design (Martin Fowler)", url: "https://martinfowler.com/bliki/BoundedContext.html" },
    ],
    youtubeVideo: {
      label: "Modular Monolith vs Microservices",
      url: "https://www.youtube.com/results?search_query=modular+monolith+vs+microservices",
    },
    readings: [
      { label: "DDD in a nutshell (Vlad Khononov)", url: "https://learning.oreilly.com/library/view/learning-domain-driven-design/9781098100124/" },
      { label: "Martin Fowler - microservice trade-offs", url: "https://martinfowler.com/articles/microservice-trade-offs.html" },
    ],
    resources: [
      { label: "Architecture patterns catalog", url: "https://patterns.arcitura.com/" },
    ],
    exercises: [
      "Identify the bounded contexts in the Notes API",
      "Restructure a module to hide its internals",
      "Decide monolith vs microservices for a scenario and justify",
      "Sketch an extraction path for one module",
    ],
    miniProject: {
      title: "Modular Refactor",
      description:
        "Refactor the Notes API into a modular monolith: clearly separated contexts (auth, notes, analytics) with internal boundaries and dependency rules.",
      checklist: [
        "Define bounded contexts",
        "Separate modules with hidden internals",
        "Enforce dependency direction",
        "Keep tests green during refactor",
        "Document the module map",
      ],
    },
    checklist: [
      "Master modular architecture",
      "Complete all 4 exercises",
      "Complete the modular refactor",
      "Write notes on boundaries",
    ],
  },
  {
    id: "s6-m2-l2",
    title: "Event-Driven Systems & Messaging",
    description:
      "Decouple systems with events: message brokers, event schemas, outbox patterns, and the trade-offs of event-driven design.",
    objectives: [
      "Explain events vs commands vs messages",
      "Use a broker (Redis streams / Kafka-style) for events",
      "Design event schemas and versioning",
      "Apply the transactional outbox pattern",
      "Handle ordering and idempotency",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["Redis: Caching, Queues & Pub/Sub"],
    technologies: ["architecture", "redis"],
    whyLearn:
      "Event-driven design is how enterprise systems integrate without breaking each other. It's the backbone of real AI platforms.",
    useCases: [
      "Emitting events on document changes",
      "Asynchronous re-embedding pipelines",
      "Integrating multiple services",
      "Audit and analytics streams",
    ],
    commonMistakes: [
      "Events as disguised RPC",
      "No schema versioning",
      "Missing idempotency on consumers",
      "Broker as a second database of truth",
    ],
    officialDocs: [
      { label: "Event-driven architecture (AWS)", url: "https://aws.amazon.com/event-driven-architecture/" },
      { label: "Outbox pattern (microservices.io)", url: "https://microservices.io/patterns/data/transactional-outbox.html" },
    ],
    youtubeVideo: {
      label: "Event Driven Architecture Explained (CodeOpinion)",
      url: "https://www.youtube.com/watch?v=STKCRSUsyP0",
    },
    readings: [
      { label: "Kafka documentation", url: "https://kafka.apache.org/documentation/" },
      { label: "Event sourcing overview", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
    ],
    resources: [
      { label: "Redis streams docs", url: "https://redis.io/docs/data-types/streams/" },
    ],
    exercises: [
      "Model an event schema for 'note_updated' with versioning",
      "Implement producer + consumer with Redis streams",
      "Make a consumer idempotent",
      "Implement the transactional outbox in the API",
    ],
    miniProject: {
      title: "Event Platform",
      description:
        "Add an event layer to the Notes API: outbox on write, broker for 'note.updated', a re-embedding consumer, and an analytics consumer.",
      checklist: [
        "Event schema with version field",
        "Transactional outbox",
        "Redis streams broker",
        "Idempotent consumers",
        "Observability of the event flow",
      ],
    },
    checklist: [
      "Master event-driven design",
      "Complete all 4 exercises",
      "Build the event platform",
      "Write notes on events vs RPC",
    ],
  },
  {
    id: "s6-m2-l3",
    title: "Multi-Tenancy & Platform Engineering",
    description:
      "Design for many customers: tenant isolation, shared vs silo databases, quotas, billing, and platform-level concerns.",
    objectives: [
      "Choose a tenancy model (silent, pool, hybrid)",
      "Implement tenant isolation in data and compute",
      "Design quotas, rate limits, and usage metering",
      "Handle cross-tenant security and testing",
      "Build platform features: API keys, webhooks, dashboards",
    ],
    durationMinutes: 180,
    difficulty: "expert",
    prerequisites: ["Modular Monoliths & Clean Architecture"],
    technologies: ["architecture", "postgresql", "redis"],
    whyLearn:
      "Enterprise AI platforms serve many teams. Multi-tenancy and metering are what make them businesses.",
    useCases: [
      "SaaS AI products",
      "Internal platform teams",
      "Multi-customer automation hubs",
      "Usage-based billing",
    ],
    commonMistakes: [
      "Tenant data leaking via bad scoping",
      "One shared resource, no quotas",
      "Ignoring noisy-neighbor problems",
      "Testing only single-tenant",
    ],
    officialDocs: [
      { label: "SaaS multi-tenant design (AWS)", url: "https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/saas-architecture-fundamentals.html" },
      { label: "PostgreSQL row-level security", url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
    ],
    youtubeVideo: {
      label: "Multi-Tenant SaaS Architecture",
      url: "https://www.youtube.com/results?search_query=multi+tenancy+architecture+saas",
    },
    readings: [
      { label: "Row-level security guide", url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
      { label: "Stripe - metering API design", url: "https://docs.stripe.com/billing/subscriptions/usage-based" },
    ],
    resources: [
      { label: "OpenTofu/Terraform for IaC", url: "https://opentofu.org/" },
    ],
    exercises: [
      "Choose a tenancy model for the Notes platform and justify",
      "Scope all queries by tenant and test isolation",
      "Implement per-tenant quotas and rate limits",
      "Design a usage metering schema",
    ],
    miniProject: {
      title: "Multi-Tenant Notes Platform",
      description:
        "Upgrade the Notes API to multi-tenant: tenant scoping everywhere, RLS or query scoping, quotas, and an admin dashboard for usage.",
      checklist: [
        "Tenant model with isolation",
        "All queries tenant-scoped",
        "Quotas and rate limits per tenant",
        "Usage metering and reporting",
        "Cross-tenant security tests",
      ],
    },
    checklist: [
      "Master multi-tenancy",
      "Complete all 4 exercises",
      "Build the multi-tenant platform",
      "Write notes on tenancy models",
    ],
  },
  {
    id: "s6-m2-l4",
    title: "Migrations, Refactoring & Legacy Integration",
    description:
      "Change systems safely: schema migrations, data backfills, strangler patterns, and integrating with legacy systems.",
    objectives: [
      "Plan safe schema migrations with zero downtime",
      "Run data backfills without corruption",
      "Apply the strangler fig pattern",
      "Integrate legacy systems via adapters",
      "Measure refactor progress with guardrails",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["Event-Driven Systems & Messaging"],
    technologies: ["architecture", "postgresql"],
    whyLearn:
      "Enterprise work is mostly changing existing systems. Migration and integration skills are what senior engineers are paid for.",
    useCases: [
      "Adding vectors to an existing DB",
      "Moving a monolith to services",
      "Integrating an old CRM",
      "Migrating data to new schemas",
    ],
    commonMistakes: [
      "Destructive migrations in production",
      "Backfills that double-apply",
      "Big-bang rewrites",
      "Ignoring legacy data quirks",
    ],
    officialDocs: [
      { label: "Alembic operations reference", url: "https://alembic.sqlalchemy.org/en/latest/ops.html" },
      { label: "Strangler fig pattern", url: "https://martinfowler.com/bliki/StranglerFigApplication.html" },
    ],
    youtubeVideo: {
      label: "Database Migrations Done Right",
      url: "https://www.youtube.com/results?search_query=database+migrations+best+practices+zero+downtime",
    },
    readings: [
      { label: "Expanding contractions (Braintrust)", url: "https://martinfowler.com/bliki/ParallelChange.html" },
      { label: "Refactoring (Martin Fowler)", url: "https://refactoring.com/" },
    ],
    resources: [
      { label: "pganalyze - migration tooling", url: "https://pganalyze.com/" },
    ],
    exercises: [
      "Plan an additive migration with dual-write strategy",
      "Write a backfill script that is idempotent",
      "Sketch a strangler-fig migration for an old API",
      "Build an adapter for a legacy system",
    ],
    miniProject: {
      title: "Migration Playbook",
      description:
        "Write a migration playbook for adding full RAG to an existing Notes platform: schema changes, dual-writes, backfill, and a rollback plan.",
      checklist: [
        "Zero-downtime migration design",
        "Dual-write + backfill plan",
        "Rollback procedure",
        "Data integrity verification",
        "Playbook documented with runbook",
      ],
    },
    checklist: [
      "Master safe migrations",
      "Complete all 4 exercises",
      "Write the migration playbook",
      "Write notes on parallel change",
    ],
  },
];

const deployment: Lesson[] = [
  {
    id: "s6-m3-l1",
    title: "Cloud & Infrastructure Fundamentals",
    description:
      "Understand the cloud: VMs, networking, storage, DNS, and how to reason about infrastructure choices for AI workloads.",
    objectives: [
      "Explain core cloud concepts (compute, network, storage)",
      "Provision a VM and secure it",
      "Configure DNS and TLS",
      "Choose infrastructure for AI workloads (CPU/GPU)",
      "Understand cost of cloud resources",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Linux", "Docker"],
    technologies: ["deployment", "linux"],
    whyLearn:
      "AI systems run in the cloud. Cloud literacy is the difference between deploying and operating.",
    useCases: [
      "Hosting inference APIs",
      "Running automation workers",
      "Provisioning GPU instances",
      "Multi-region deployments",
    ],
    commonMistakes: [
      "Open ports to the world",
      "Running everything on the biggest instance",
      "No backups or snapshots",
      "Ignoring egress costs",
    ],
    officialDocs: [
      { label: "AWS getting started", url: "https://aws.amazon.com/getting-started/" },
      { label: "Azure fundamentals", url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/" },
    ],
    youtubeVideo: {
      label: "Cloud Computing Explained",
      url: "https://www.youtube.com/results?search_query=cloud+computing+explained+beginner",
    },
    readings: [
      { label: "The cloud computing model (NIST)", url: "https://csrc.nist.gov/pubs/sp/800/145/final" },
      { label: "Cloud security checklist", url: "https://docs.aws.amazon.com/whitepapers/latest/security-best-practices/welcome.html" },
    ],
    resources: [
      { label: "DigitalOcean docs", url: "https://docs.digitalocean.com/" },
    ],
    exercises: [
      "Provision a hardened VM with SSH keys only",
      "Attach a volume and configure a firewall",
      "Point a domain at the VM with TLS",
      "Compare pricing for CPU vs GPU inference",
    ],
    miniProject: {
      title: "Single-Server Deployment",
      description:
        "Deploy the Notes API to a single cloud VM: Dockerized stack, TLS via reverse proxy, backups, and a documented repeatable process.",
      checklist: [
        "VM provisioned and hardened",
        "Stack deployed with Docker",
        "Reverse proxy with TLS",
        "Automated backups",
        "Deployment runbook",
      ],
    },
    checklist: [
      "Master cloud fundamentals",
      "Complete all 4 exercises",
      "Build the single-server deployment",
      "Write notes on infrastructure choices",
    ],
  },
  {
    id: "s6-m3-l2",
    title: "Kubernetes Essentials",
    description:
      "The industry standard for container orchestration: pods, deployments, services, configmaps, and running AI workloads at scale.",
    objectives: [
      "Explain core k8s objects (pod, deployment, service)",
      "Deploy apps with kubectl and manifests",
      "Use ConfigMaps and Secrets",
      "Scale deployments and roll out updates",
      "Know when you need Kubernetes (and when you don't)",
    ],
    durationMinutes: 240,
    difficulty: "advanced",
    prerequisites: ["Docker & Containers"],
    technologies: ["deployment", "docker"],
    whyLearn:
      "Enterprise AI platforms run on Kubernetes. It's the platform behind most serious deployments.",
    useCases: [
      "Running inference services at scale",
      "Orchestrating microservices",
      "GPU workload scheduling",
      "Autoscaling automation workers",
    ],
    commonMistakes: [
      "Using k8s for a single small app",
      "Running stateful apps with no persistent volumes",
      "Secret handling mistakes",
      "Ignoring resource limits",
    ],
    officialDocs: [
      { label: "Kubernetes documentation", url: "https://kubernetes.io/docs/" },
      { label: "kubectl cheat sheet", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" },
    ],
    youtubeVideo: {
      label: "Kubernetes Tutorial for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=X48VuDVv0do",
    },
    readings: [
      { label: "k8s concepts", url: "https://kubernetes.io/docs/concepts/" },
      { label: "minikube - local k8s", url: "https://minikube.sigs.k8s.io/docs/" },
    ],
    resources: [
      { label: "Kind - k8s in Docker", url: "https://kind.sigs.k8s.io/" },
    ],
    exercises: [
      "Run a local cluster with minikube or kind",
      "Deploy the Notes API with deployments and services",
      "Use ConfigMaps and Secrets correctly",
      "Roll out an update and roll back",
    ],
    miniProject: {
      title: "K8s Deployment",
      description:
        "Deploy the Notes stack to a local Kubernetes cluster: manifests for app, DB, Redis, ingress, secrets, and a rolling-update demo.",
      checklist: [
        "Deployment + Service manifests",
        "Secrets via k8s Secrets",
        "Persistent volumes for the DB",
        "Ingress configured",
        "Rolling update + rollback demo",
      ],
    },
    checklist: [
      "Master Kubernetes essentials",
      "Complete all 4 exercises",
      "Build the k8s deployment",
      "Write notes on when to use k8s",
    ],
  },
  {
    id: "s6-m3-l3",
    title: "Infrastructure as Code with Terraform",
    description:
      "Manage infrastructure like software: Terraform state, providers, modules, and reproducible environments.",
    objectives: [
      "Understand IaC principles and Terraform state",
      "Write resources with the core Terraform workflow",
      "Use variables, outputs, and modules",
      "Manage environments (dev/staging/prod)",
      "Handle state safely in teams",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Cloud & Infrastructure Fundamentals"],
    technologies: ["deployment", "architecture"],
    whyLearn:
      "Manual servers are a liability. IaC makes infrastructure reviewable, reproducible, and auditable — exactly what enterprises require.",
    useCases: [
      "Provisioning cloud infrastructure for AI platforms",
      "Reproducible environments",
      "Compliance through reviewable configs",
      "Cleanup of unused resources",
    ],
    commonMistakes: [
      "Storing state with secrets in insecure places",
      "Mixing environments in one state",
      "Manual drift on top of IaC",
      "No locking and team conflicts",
    ],
    officialDocs: [
      { label: "Terraform documentation", url: "https://developer.hashicorp.com/terraform/docs" },
      { label: "OpenTofu docs", url: "https://opentofu.org/docs/" },
    ],
    youtubeVideo: {
      label: "Terraform Tutorial for Beginners (TechWorld with Nana)",
      url: "https://www.youtube.com/watch?v=7xngnjfIlK4",
    },
    readings: [
      { label: "Terraform - state", url: "https://developer.hashicorp.com/terraform/language/state" },
      { label: "Terraform best practices", url: "https://developer.hashicorp.com/terraform/tutorials" },
    ],
    resources: [
      { label: "terraform-docs", url: "https://terraform-docs.io/" },
    ],
    exercises: [
      "Provision a VM and DNS record with Terraform",
      "Use variables and outputs to parameterize",
      "Create a module for a common resource",
      "Use remote state with locking",
    ],
    miniProject: {
      title: "IaC Environment",
      description:
        "Write Terraform for the Notes platform: VPC-ish resources, VM, database, and DNS for dev and prod environments, with modules and remote state.",
      checklist: [
        "Resources for compute + database + DNS",
        "Modules with variables and outputs",
        "Separate dev/prod workspaces",
        "Remote state with locking",
        "Documentation of the workflow",
      ],
    },
    checklist: [
      "Master Terraform",
      "Complete all 4 exercises",
      "Build the IaC environment",
      "Write notes on state management",
    ],
  },
  {
    id: "s6-m3-l4",
    title: "Production Deployment Strategies for AI",
    description:
      "Ship AI safely: shadow traffic, canary releases, blue-green swaps, model version pinning, and rollback for inference services.",
    objectives: [
      "Deploy inference services with canary/blue-green",
      "Use shadow mode to test models safely",
      "Pin and stage model versions",
      "Automate rollback with health gates",
      "Design feature flags for AI features",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["Continuous Deployment", "Kubernetes Essentials"],
    technologies: ["deployment", "cicd", "monitoring"],
    whyLearn:
      "AI deploys can't be 'just ship it' — model changes alter behavior. Deployment strategy is a safety system.",
    useCases: [
      "Rolling out a new model version",
      "Testing prompt changes with real traffic",
      "Comparing model quality in production",
      "Instant rollback on quality dips",
    ],
    commonMistakes: [
      "Deploying new models without shadowing",
      "No pinning of model versions in prompts",
      "Rolling back only code, not models",
      "No quality gates in the deploy path",
    ],
    officialDocs: [
      { label: "MLOps deployment strategies (Google)", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning" },
      { label: "Kubernetes - rolling updates", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
    ],
    youtubeVideo: {
      label: "ML Model Deployment Strategies",
      url: "https://www.youtube.com/results?search_query=ml+model+deployment+canary+shadow",
    },
    readings: [
      { label: "Shadow deployment pattern", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
      { label: "Feature flags (LaunchDarkly)", url: "https://launchdarkly.com/blog/what-are-feature-flags/" },
    ],
    resources: [
      { label: "Argo Rollouts docs", url: "https://argoproj.github.io/rollouts/" },
    ],
    exercises: [
      "Design a canary rollout for an inference service",
      "Implement shadow traffic capture for a new model",
      "Add a quality gate that triggers rollback",
      "Write a feature-flag plan for an AI feature",
    ],
    miniProject: {
      title: "AI Deployment Strategy",
      description:
        "Document and prototype an AI deployment pipeline: canary + shadow mode, quality gates, rollback, and a runbook for model updates.",
      checklist: [
        "Canary strategy designed",
        "Shadow mode prototype",
        "Quality gates in CI/CD",
        "Rollback playbook",
        "Feature flag integration",
      ],
    },
    checklist: [
      "Master AI deployment strategies",
      "Complete all 4 exercises",
      "Write the AI deployment strategy",
      "Write notes on model rollouts",
    ],
  },
];

const observability: Lesson[] = [
  {
    id: "s6-m4-l1",
    title: "Observability: Logs, Metrics & Traces",
    description:
      "See what your systems are doing: structured logs, metrics, distributed tracing, and the platforms (Prometheus, Grafana, OpenTelemetry) that unify them.",
    objectives: [
      "Write structured, searchable logs",
      "Collect and query metrics with Prometheus",
      "Instrument distributed traces",
      "Build dashboards with Grafana",
      "Use OpenTelemetry standards",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["Backend experience"],
    technologies: ["monitoring"],
    whyLearn:
      "You can't fix what you can't see. Observability is the foundation of running enterprise AI systems with confidence.",
    useCases: [
      "Debugging production incidents",
      "Capacity planning with metrics",
      "Tracking latency of AI calls",
      "Compliance and audit logs",
    ],
    commonMistakes: [
      "Unstructured logs (greppable but useless)",
      "No correlation IDs across services",
      "Dashboards without alerts",
      "Metrics with unbounded cardinality",
    ],
    officialDocs: [
      { label: "OpenTelemetry docs", url: "https://opentelemetry.io/docs/" },
      { label: "Prometheus docs", url: "https://prometheus.io/docs/" },
    ],
    youtubeVideo: {
      label: "Prometheus Tutorial (TechWorld with Nana)",
      url: "https://www.youtube.com/watch?v=h4Sl21AKiDg",
    },
    readings: [
      { label: "The Three Pillars of Observability", url: "https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/" },
      { label: "Grafana docs", url: "https://grafana.com/docs/" },
    ],
    resources: [
      { label: "Grafana Cloud free tier", url: "https://grafana.com/products/cloud/" },
    ],
    exercises: [
      "Add structured logging with request IDs to the Notes API",
      "Expose /metrics and scrape with Prometheus",
      "Build a Grafana dashboard for latency and errors",
      "Trace one request across two services",
    ],
    miniProject: {
      title: "Observability Stack",
      description:
        "Set up an observability stack for the Notes platform: structured logs, Prometheus metrics, Grafana dashboards, and trace correlation.",
      checklist: [
        "Structured logs with request IDs",
        "Prometheus metrics exported",
        "Grafana dashboards",
        "Trace correlation",
        "Runbook for querying",
      ],
    },
    checklist: [
      "Master the three pillars",
      "Complete all 4 exercises",
      "Build the observability stack",
      "Write notes on cardinality",
    ],
  },
  {
    id: "s6-m4-l2",
    title: "Monitoring AI Systems: Quality, Drift & Cost",
    description:
      "Monitor what makes AI systems special: output quality, model drift, latency, token cost, and failure rates — and act on it.",
    objectives: [
      "Track quality metrics (eval scores, user feedback)",
      "Detect model and data drift",
      "Monitor latency, cost, and error budgets for AI",
      "Build dashboards for AI operations",
      "Create feedback loops that improve quality",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["Observability: Logs, Metrics & Traces"],
    technologies: ["monitoring", "rag", "prompting"],
    whyLearn:
      "AI systems rot silently — the model updates, the data drifts, the cost explodes. Monitoring AI is a discipline in itself.",
    useCases: [
      "Production RAG quality monitoring",
      "Cost alerts on LLM usage",
      "Detecting degraded answers",
      "Retraining triggers",
    ],
    commonMistakes: [
      "Monitoring only uptime, not quality",
      "No baseline for drift",
      "Cost tracking after the bill arrives",
      "Alert fatigue from noise",
    ],
    officialDocs: [
      { label: "MLflow docs", url: "https://mlflow.org/docs/" },
      { label: "Evidently AI - drift monitoring", url: "https://www.evidentlyai.com/" },
    ],
    youtubeVideo: {
      label: "Monitoring LLM Applications",
      url: "https://www.youtube.com/results?search_query=monitoring+llm+applications+drift+quality",
    },
    readings: [
      { label: "Monitoring machine learning (Google)", url: "https://developers.google.com/machine-learning/crash-course/machine-learning-operations" },
      { label: "LLM cost tracking (LiteLLM)", url: "https://docs.litellm.ai/docs/proxy/logging" },
    ],
    resources: [
      { label: "Langfuse - LLM observability", url: "https://langfuse.com/" },
    ],
    exercises: [
      "Instrument the Knowledge Copilot with quality scores",
      "Set up drift detection on a corpus",
      "Build a cost-per-request metric and alert",
      "Design a feedback loop from bad answers to eval set",
    ],
    miniProject: {
      title: "AI Operations Dashboard",
      description:
        "Build a dashboard for the Knowledge Copilot: quality scores, latency, token cost, drift indicators, and alert rules with thresholds.",
      checklist: [
        "Quality metrics collected",
        "Cost and latency dashboards",
        "Drift indicators",
        "Alert rules with thresholds",
        "Feedback loop design",
      ],
    },
    checklist: [
      "Monitor AI quality and cost",
      "Complete all 4 exercises",
      "Build the AI ops dashboard",
      "Write notes on drift detection",
    ],
  },
  {
    id: "s6-m4-l3",
    title: "Alerting, Incident Response & Runbooks",
    description:
      "Respond to production incidents professionally: alert design, on-call, incident timelines, postmortems, and runbooks that actually work.",
    objectives: [
      "Design meaningful alerts (no noise)",
      "Run a structured incident response",
      "Write effective runbooks",
      "Hold blameless postmortems",
      "Track reliability with SLOs and error budgets",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["Observability: Logs, Metrics & Traces"],
    technologies: ["monitoring"],
    whyLearn:
      "Incidents are inevitable. Professional response and learning from failures is what keeps enterprises running for years.",
    useCases: [
      "Handling a production AI outage",
      "Responding to quality degradation",
      "On-call rotations",
      "Meeting SLO commitments",
    ],
    commonMistakes: [
      "Paging on every minor dip",
      "No runbook and panicked debugging",
      "Postmortems that blame people",
      "SLOs nobody tracks",
    ],
    officialDocs: [
      { label: "Google SRE handbook", url: "https://sre.google/sre-book/table-of-contents/" },
      { label: "Postmortem culture (Google)", url: "https://sre.google/sre-book/postmortem-culture/" },
    ],
    youtubeVideo: {
      label: "Incident Response & SRE Explained",
      url: "https://www.youtube.com/results?search_query=incident+response+sre+runbook+tutorial",
    },
    readings: [
      { label: "Alerting on what matters (Google)", url: "https://sre.google/sre-book/practical-alerting/" },
      { label: "PagerDuty incident guide", url: "https://response.pagerduty.com/" },
    ],
    resources: [
      { label: "SLO calculator (Google)", url: "https://sli.sre.xyz/" },
    ],
    exercises: [
      "Design an alert hierarchy for the platform",
      "Write 3 runbooks for common failures",
      "Simulate an incident and run the response",
      "Write an SLO with an error budget",
    ],
    miniProject: {
      title: "Incident Kit",
      description:
        "Create a complete incident kit: alert rules, on-call docs, runbooks, an incident template, and a postmortem template for the platform.",
      checklist: [
        "Alert rules with clear thresholds",
        "Runbooks for top 5 failures",
        "Incident response template",
        "Postmortem template",
        "SLO/error budget defined",
      ],
    },
    checklist: [
      "Master incident response",
      "Complete all 4 exercises",
      "Build the incident kit",
      "Write notes on SLOs",
    ],
  },
  {
    id: "s6-m4-l4",
    title: "Cost Optimization & FinOps for AI",
    description:
      "Make AI sustainable financially: understand model pricing, caching strategies, batching, model routing, and FinOps practices.",
    objectives: [
      "Model the cost drivers of an AI system",
      "Apply caching, batching, and model routing",
      "Right-size infrastructure (compute, storage)",
      "Track and allocate costs per team/feature",
      "Balance quality vs cost trade-offs",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["Monitoring AI Systems: Quality, Drift & Cost"],
    technologies: ["monitoring", "architecture"],
    whyLearn:
      "AI can be ruinously expensive if unmanaged. Cost engineering is now a core skill, and it pays for itself instantly.",
    useCases: [
      "Cutting LLM spend with caching",
      "Routing queries to cheaper models",
      "Rightsizing GPU instances",
      "Cost allocation for billing",
    ],
    commonMistakes: [
      "Using the biggest model for everything",
      "No caching on repeated prompts",
      "Idle GPU instances",
      "No cost visibility",
    ],
    officialDocs: [
      { label: "FinOps foundation", url: "https://www.finops.org/" },
      { label: "OpenAI - pricing page", url: "https://openai.com/api/pricing/" },
    ],
    youtubeVideo: {
      label: "LLM Cost Optimization Strategies",
      url: "https://www.youtube.com/results?search_query=llm+cost+optimization+strategies",
    },
    readings: [
      { label: "FinOps on AWS", url: "https://aws.amazon.com/finops/" },
      { label: "Model routing research", url: "https://arxiv.org/abs/2308.07253" },
    ],
    resources: [
      { label: "LiteLLM - unified model gateway", url: "https://www.litellm.ai/" },
    ],
    exercises: [
      "Build a cost model for the Knowledge Copilot",
      "Add semantic caching and measure savings",
      "Design a model-routing policy (easy/medium/hard)",
      "Set cost budgets and alerts",
    ],
    miniProject: {
      title: "Cost Optimization Report",
      description:
        "Produce a cost optimization report for the platform: current costs, caching and routing recommendations, projected savings, and monitoring.",
      checklist: [
        "Cost model with numbers",
        "Caching strategy implemented",
        "Model routing policy",
        "Cost alerts configured",
        "Savings projection documented",
      ],
    },
    checklist: [
      "Master cost engineering",
      "Complete all 4 exercises",
      "Write the cost optimization report",
      "Write notes on quality-cost trade-offs",
    ],
  },
];

export const capstone6: Capstone = {
  id: "capstone-6",
  title: "Enterprise AI Platform",
  description:
    "Design, build, and operate a multi-tenant enterprise AI platform: modular backend, event-driven processing, Kubernetes deployment with IaC, full observability, AI quality monitoring, cost controls, and a documented security posture.",
  objectives: [
    "Architect a multi-tenant AI platform with clean boundaries",
    "Implement event-driven, reliable internal processing",
    "Deploy with Kubernetes and Infrastructure as Code",
    "Build production observability and AI quality monitoring",
    "Manage cost, security, and compliance deliberately",
  ],
  requiredSkills: ["System Design", "FastAPI", "Kubernetes", "Terraform", "Observability", "Security", "Event-driven design"],
  difficulty: "expert",
  estimatedHours: 60,
  xp: 1500,
  technologies: ["architecture", "system-design", "deployment", "kubernetes", "monitoring", "fastapi", "redis"],
  checklist: [
    "Modular, multi-tenant architecture documented",
    "Event-driven processing with outbox and idempotency",
    "Kubernetes deployment with IaC (Terraform)",
    "Observability: logs, metrics, traces, dashboards",
    "AI quality + drift + cost monitoring",
    "Security review and audit logging",
    "Runbooks, SLOs, and incident kit",
    "Final review: self-assessment against the rubric",
  ],
};

const modules6: Module[] = [
  {
    id: "s6-m1",
    title: "Architecture & System Design",
    description: "The principles and patterns for systems that live for years.",
    technologies: ["architecture", "system-design"],
    lessons: architecture,
  },
  {
    id: "s6-m2",
    title: "Building Enterprise Systems",
    description: "Modular monoliths, events, multi-tenancy, and safe migrations.",
    technologies: ["architecture", "fastapi"],
    lessons: enterprise,
  },
  {
    id: "s6-m3",
    title: "Deployment & DevOps",
    description: "Cloud, Kubernetes, IaC, and AI-safe deployment strategies.",
    technologies: ["deployment", "docker"],
    lessons: deployment,
  },
  {
    id: "s6-m4",
    title: "Monitoring & Observability",
    description: "See everything, respond professionally, and keep AI affordable.",
    technologies: ["monitoring"],
    lessons: observability,
  },
];

export const semester6: Semester = {
  id: "semester-6",
  number: 6,
  title: "Enterprise AI Systems",
  description:
    "Put it all together: architecture, platforms, deployment, observability, and the operations discipline of production AI.",
  tagline: "Operate AI at enterprise scale",
  icon: Building2,
  color: "#14B8A6",
  duration: "16 weeks",
  xp: 250,
  modules: modules6,
  capstone: capstone6,
};
