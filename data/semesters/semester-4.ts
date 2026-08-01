import type { Capstone, Lesson, Module, Semester } from "@/types";
import { Workflow, Container, GitBranch, Zap } from "lucide-react";

const fundamentals: Lesson[] = [
  {
    id: "s4-m1-l1",
    title: "The Automation Mindset",
    description:
      "Think like an automation engineer: identify what to automate, weigh ROI, design for reliability, and build systems that run without you.",
    objectives: [
      "Identify automation opportunities and estimate ROI",
      "Apply the rule of three (do, document, automate)",
      "Design workflows with failure handling from the start",
      "Understand humans-in-the-loop vs full automation",
      "Measure and monitor automated processes",
    ],
    durationMinutes: 120,
    difficulty: "beginner",
    prerequisites: ["Some programming experience"],
    technologies: ["python", "linux"],
    whyLearn:
      "Automation engineering is a discipline, not a tool. The mindset determines which tasks you automate and how reliably they run for years.",
    useCases: [
      "Replacing manual report generation",
      "Automating data sync between systems",
      "Self-healing infrastructure tasks",
      "Customer-facing workflow automation",
    ],
    commonMistakes: [
      "Automating one-off tasks (low ROI)",
      "No failure handling or alerting",
      "Building fragile scripts nobody can maintain",
      "Ignoring security in automated processes",
    ],
    officialDocs: [
      { label: "Automate the Boring Stuff (free book)", url: "https://automatetheboringstuff.com/" },
    ],
    youtubeVideo: {
      label: "Automate the Boring Stuff with Python (full course)",
      url: "https://www.youtube.com/results?search_query=automate+the+boring+stuff+python+full+course",
    },
    readings: [
      { label: "The Pragmatic Programmer - automation chapter", url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/" },
      { label: "DevOps handbook excerpts", url: "https://itrevolution.com/product/the-devops-handbook/" },
    ],
    resources: [
      { label: "Rule of three (dev.to)", url: "https://dev.to/coffeestains/rule-of-three-coding-rule-1m82" },
    ],
    exercises: [
      "Inventory your week and list 10 repeatable tasks",
      "Score each by frequency, time, and error-proneness",
      "Pick the top 3 and design automations on paper",
      "Write a one-page automation proposal with ROI",
    ],
    miniProject: {
      title: "Automation Audit",
      description:
        "Audit a real workflow (yours or a team's) and produce an automation plan: process map, automation candidates, risk analysis, and phased roadmap.",
      checklist: [
        "Map the current process step by step",
        "Identify automatable steps with ROI estimates",
        "List failure modes and human-in-the-loop checkpoints",
        "Design the target architecture",
        "Write the phased implementation roadmap",
      ],
    },
    checklist: [
      "Internalize the automation mindset",
      "Complete all 4 exercises",
      "Complete the automation audit",
      "Write notes on your automation philosophy",
    ],
  },
  {
    id: "s4-m1-l2",
    title: "File, Data & Workflow Automation",
    description:
      "Automate the boring stuff: file operations, data transformations, report generation, and glue code between systems.",
    objectives: [
      "Automate file organization and batch operations",
      "Build data transformation pipelines",
      "Generate reports and email them automatically",
      "Use templates and config to keep automations flexible",
      "Add logging and idempotency to automations",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Python Fundamentals"],
    technologies: ["python"],
    whyLearn:
      "Most internal automation is boring glue work. Mastering it makes you indispensable and frees hours every week.",
    useCases: [
      "Auto-organizing downloads and exports",
      "Weekly report generation and distribution",
      "Syncing CSV/Excel data into databases",
      "Renaming and converting batches of files",
    ],
    commonMistakes: [
      "Hard-coding paths and formats",
      "Non-idempotent scripts that double-process",
      "No logging when things break",
      "Processing before validating inputs",
    ],
    officialDocs: [
      { label: "pathlib docs", url: "https://docs.python.org/3/library/pathlib.html" },
      { label: "watchdog - file watchers", url: "https://pythonhosted.org/watchdog/" },
    ],
    youtubeVideo: {
      label: "Python Automation Projects",
      url: "https://www.youtube.com/results?search_query=python+automation+projects+for+beginners",
    },
    readings: [
      { label: "Automate the Boring Stuff - chapters 8-11", url: "https://automatetheboringstuff.com/2e/chapter8/" },
      { label: "pandas docs", url: "https://pandas.pydata.org/docs/" },
    ],
    resources: [
      { label: "SendGrid - email API", url: "https://sendgrid.com/" },
    ],
    exercises: [
      "Build a script that renames and organizes a messy downloads folder",
      "Convert multiple CSV files into one clean Excel/JSON report",
      "Create a script that validates and deduplicates data",
      "Add dry-run mode and logging to a destructive script",
    ],
    miniProject: {
      title: "Inbox Zero Assistant",
      description:
        "Automate an email inbox: download attachments, classify by folder rules, generate a daily summary digest, and archive processed items (simulated).",
      checklist: [
        "Simulate an inbox with a folder of emails/attachments",
        "Classify and move files by rules",
        "Generate a daily digest report",
        "Add logging and a dry-run mode",
        "Schedule with cron and verify idempotency",
      ],
    },
    checklist: [
      "Automate file and data work",
      "Complete all 4 exercises",
      "Build the inbox assistant",
      "Write notes on idempotency patterns",
    ],
  },
  {
    id: "s4-m1-l3",
    title: "Web Scraping & Browser Automation",
    description:
      "Extract data from the web at scale: HTTP scraping, BeautifulSoup/parsing, Playwright browser automation, and staying ethical and robust.",
    objectives: [
      "Scrape static pages with requests + parsers",
      "Handle dynamic pages with Playwright",
      "Interact with forms, clicks, and navigation",
      "Respect robots.txt and rate limits",
      "Build resilient scrapers with retries and selectors",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Working with Data: Files, JSON & Requests"],
    technologies: ["python", "http"],
    whyLearn:
      "A huge share of automation involves reading websites that have no API. Scraping and browser automation unlock those sources.",
    useCases: [
      "Monitoring competitor pricing",
      "Collecting training data for AI models",
      "Automating internal web tools",
      "Aggregating public data feeds",
    ],
    commonMistakes: [
      "Scraping without checking terms/robots",
      "Fragile CSS selector dependence",
      "Blocking the event loop with sync calls",
      "No rate limiting and getting IP-banned",
    ],
    officialDocs: [
      { label: "Playwright docs", url: "https://playwright.dev/python/docs/intro" },
      { label: "BeautifulSoup docs", url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
    ],
    youtubeVideo: {
      label: "Scrapy Course - Python Web Scraping (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=mBoX_JCKZTE",
    },
    readings: [
      { label: "requests-html docs", url: "https://docs.python-requests.org/" },
      { label: "How to scrape responsibly (web.dev)", url: "https://developer.chrome.com/blog/scraping-the-web-responsibly" },
    ],
    resources: [
      { label: "Scrapy - production scraping framework", url: "https://scrapy.org/" },
    ],
    exercises: [
      "Scrape a static page and extract structured data",
      "Use Playwright to render and extract from a JS-heavy page",
      "Implement polite crawling with rate limits",
      "Build a scraper that survives selector changes with fallbacks",
    ],
    miniProject: {
      title: "Data Monitor Bot",
      description:
        "Build a bot that periodically monitors public pages (e.g., job board, docs changelog), detects changes, and sends a summary notification.",
      checklist: [
        "Choose a target and respect robots/terms",
        "Extract structured data robustly",
        "Detect changes vs previous snapshot",
        "Notify via email/webhook",
        "Schedule, log, and monitor failures",
      ],
    },
    checklist: [
      "Master scraping and browser automation",
      "Complete all 4 exercises",
      "Build the data monitor bot",
      "Write notes on ethics and resilience",
    ],
  },
  {
    id: "s4-m1-l4",
    title: "Scheduling, Orchestration & Reliability",
    description:
      "Run automations on schedule, retry on failure, alert when broken, and design for year-long operation without babysitting.",
    objectives: [
      "Schedule jobs with cron and systemd timers",
      "Implement retries, backoff, and dead-letter handling",
      "Design health checks and alerting",
      "Structure automations as pipelines with state",
      "Write runbooks for your own automations",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["The Automation Mindset"],
    technologies: ["linux", "python"],
    whyLearn:
      "An automation that needs babysitting isn't automation. Reliability engineering is what turns scripts into systems.",
    useCases: [
      "Nightly data pipeline jobs",
      "Alerting when integrations fail",
      "Multi-step orchestration with retries",
      "Self-healing scheduled jobs",
    ],
    commonMistakes: [
      "Cron with no logging",
      "Silent failures that nobody notices",
      "Retries that duplicate side effects",
      "No recovery path after partial failure",
    ],
    officialDocs: [
      { label: "cron (man page)", url: "https://man7.org/linux/man-pages/man8/cron.8.html" },
      { label: "systemd timers", url: "https://wiki.archlinux.org/title/Systemd/Timers" },
    ],
    youtubeVideo: {
      label: "Cron Jobs & Scheduling Explained",
      url: "https://www.youtube.com/results?search_query=cron+jobs+linux+tutorial",
    },
    readings: [
      { label: "Celery docs - distributed task queue", url: "https://docs.celeryq.dev/" },
      { label: "Health checks pattern", url: "https://microservices.io/patterns/observability/health-check-api.html" },
    ],
    resources: [
      { label: "healthchecks.io - cron monitoring", url: "https://healthchecks.io/" },
    ],
    exercises: [
      "Schedule a script with cron and verify logs",
      "Convert a cron job to a systemd timer with on-failure alerts",
      "Implement retry with backoff and a max attempts policy",
      "Add a heartbeat health check that alerts if a job misses",
    ],
    miniProject: {
      title: "Reliable Batch Processor",
      description:
        "Build a scheduled batch processor: picks up files, processes them, writes results, retries failures, and reports status to a health dashboard.",
      checklist: [
        "Idempotent processing with a job state table",
        "Retry + dead-letter queue for failures",
        "Heartbeat reporting to healthchecks.io (or local)",
        "Comprehensive logging with rotation",
        "Runbook with recovery steps",
      ],
    },
    checklist: [
      "Master scheduling and retries",
      "Complete all 4 exercises",
      "Build the reliable batch processor",
      "Write notes on reliability patterns",
    ],
  },
];

const docker: Lesson[] = [
  {
    id: "s4-m2-l1",
    title: "Containers & Images",
    description:
      "Understand containers: images, layers, the container runtime, and why containers made deployment reproducible.",
    objectives: [
      "Explain containers vs VMs",
      "Pull, run, and inspect images",
      "Manage containers: exec, logs, attach, rm",
      "Understand images, layers, and registries",
      "Use Docker Hub and tags responsibly",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["Linux Fundamentals"],
    technologies: ["docker", "linux"],
    whyLearn:
      "Every AI service is shipped as a container. Docker is the deployment primitive of the entire modern stack.",
    useCases: [
      "Deploying FastAPI/Next.js apps reproducibly",
      "Running databases and Redis locally",
      "Shipping ML inference servers",
      "Isolated dev environments",
    ],
    commonMistakes: [
      "Thinking containers are lightweight VMs",
      "Running containers as root",
      "Not pinning image tags",
      "Pulling untrusted images from the internet",
    ],
    officialDocs: [
      { label: "Docker docs - getting started", url: "https://docs.docker.com/get-started/" },
      { label: "Docker concepts", url: "https://docs.docker.com/get-started/docker-concepts/" },
    ],
    youtubeVideo: {
      label: "Docker Tutorial for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
    },
    readings: [
      { label: "Docker cheat sheet", url: "https://docs.docker.com/get-started/docker_cheatsheet.pdf" },
    ],
    resources: [
      { label: "Docker Hub", url: "https://hub.docker.com/" },
    ],
    exercises: [
      "Run an nginx and a postgres container and inspect them",
      "Practice exec, logs, port mapping, and cleanup",
      "Pull images by digest and pinned tags",
      "Run a container with a read-only filesystem and non-root user",
    ],
    miniProject: {
      title: "Local Dev Stack",
      description:
        "Stand up a local dev environment entirely in containers: a Postgres DB, Redis, and a simple app, with a documented workflow.",
      checklist: [
        "Run Postgres with a volume and health check",
        "Run Redis with a password",
        "Connect an app container to both",
        "Document every command in a README",
        "Clean up resources when done",
      ],
    },
    checklist: [
      "Master containers and images",
      "Complete all 4 exercises",
      "Build the local dev stack",
      "Write notes on images vs containers",
    ],
  },
  {
    id: "s4-m2-l2",
    title: "Dockerfiles & Image Layers",
    description:
      "Write production-grade Dockerfiles: base images, layer caching, multi-stage builds, and minimal attack surface.",
    objectives: [
      "Write Dockerfiles for Python and Node apps",
      "Order instructions for optimal layer caching",
      "Use multi-stage builds to slim images",
      "Run as non-root with minimal dependencies",
      "Build and scan images for vulnerabilities",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Containers & Images"],
    technologies: ["docker"],
    whyLearn:
      "A good Dockerfile is fast to build, small to ship, and hard to hack. This is the difference between toy and production images.",
    useCases: [
      "Packaging FastAPI backends",
      "Packaging Next.js static sites",
      "Slim inference images",
      "Reproducible CI builds",
    ],
    commonMistakes: [
      "Copying everything then installing (kills caching)",
      "Running as root in production images",
      "Including secrets in build context",
      "Using huge base images unnecessarily",
    ],
    officialDocs: [
      { label: "Dockerfile reference", url: "https://docs.docker.com/reference/dockerfile/" },
      { label: "Best practices for writing Dockerfiles", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
    ],
    youtubeVideo: {
      label: "Docker Tutorial - Dockerfiles (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=pGYAg7TMmp0",
    },
    readings: [
      { label: "Multi-stage builds", url: "https://docs.docker.com/build/building/multi-stage/" },
      { label: "Docker security best practices (Docker)", url: "https://docs.docker.com/engine/security/security/" },
    ],
    resources: [
      { label: "hadolint - Dockerfile linter", url: "https://github.com/hadolint/hadolint" },
      { label: "trivy - vulnerability scanner", url: "https://trivy.dev/" },
    ],
    exercises: [
      "Dockerize a FastAPI app with a multi-stage build",
      "Optimize a build for layer caching and measure speedup",
      "Build a slim image and run it as a non-root user",
      "Scan the image with trivy and fix critical issues",
    ],
    miniProject: {
      title: "Optimized Service Image",
      description:
        "Create an optimized Docker image for the Notes API: multi-stage, non-root, health check, minimal size, and a vulnerability scan report.",
      checklist: [
        "Multi-stage build with a slim runtime stage",
        "Layers ordered for caching",
        "Non-root user and read-only filesystem where possible",
        "HEALTHCHECK defined",
        "Size before/after + trivy report",
      ],
    },
    checklist: [
      "Master Dockerfile patterns",
      "Complete all 4 exercises",
      "Build the optimized service image",
      "Write notes on image hardening",
    ],
  },
  {
    id: "s4-m2-l3",
    title: "Docker Compose & Multi-Container Apps",
    description:
      "Orchestrate multiple containers: networks, volumes, services, health checks, and the Compose lifecycle.",
    objectives: [
      "Define multi-service stacks in compose.yaml",
      "Configure networks and service discovery",
      "Use volumes and bind mounts correctly",
      "Set health checks and dependencies",
      "Manage environments with .env and profiles",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Dockerfiles & Image Layers"],
    technologies: ["docker"],
    whyLearn:
      "Real apps are stacks: app + db + cache + worker. Compose is how you run and ship them together.",
    useCases: [
      "Running FastAPI + Postgres + Redis locally",
      "Shipping a documented demo stack",
      "CI services for integration tests",
      "Local replicas of production architectures",
    ],
    commonMistakes: [
      "Not setting health checks",
      "Hard-coding connection strings",
      "Committing .env secrets",
      "Using container names as brittle coupling",
    ],
    officialDocs: [
      { label: "Compose file reference", url: "https://docs.docker.com/compose/compose-file/" },
      { label: "Compose - getting started", url: "https://docs.docker.com/compose/gettingstarted/" },
    ],
    youtubeVideo: {
      label: "Docker Compose in 12 Minutes (TechWorld with Nana)",
      url: "https://www.youtube.com/watch?v=Qw9zlE3t8Ko",
    },
    readings: [
      { label: "Compose networking", url: "https://docs.docker.com/compose/networking/" },
      { label: "Compose environment variables", url: "https://docs.docker.com/compose/environment-variables/" },
    ],
    resources: [
      { label: "Awesome Compose examples", url: "https://github.com/docker/awesome-compose" },
    ],
    exercises: [
      "Compose a stack: app + postgres + redis with health checks",
      "Add a worker service that depends on the app",
      "Wire environment variables via .env (gitignored)",
      "Scale a service and verify load distribution",
    ],
    miniProject: {
      title: "Full Notes Stack",
      description:
        "Compose the Notes API with Postgres, Redis, and a background worker into one reproducible stack with health checks and profiles.",
      checklist: [
        "Services: api, db, redis, worker",
        "Health checks and dependency ordering",
        "Persistent volumes for the database",
        ".env.example with documented variables",
        "One-command startup documented in README",
      ],
    },
    checklist: [
      "Master Compose",
      "Complete all 4 exercises",
      "Build the full notes stack",
      "Write notes on multi-container patterns",
    ],
  },
  {
    id: "s4-m2-l4",
    title: "Container Networking, Volumes & Security",
    description:
      "Go deep on what happens inside the sandbox: networks, storage, secrets, resource limits, and scanning.",
    objectives: [
      "Explain bridge, host, and overlay networks",
      "Choose volumes vs bind mounts vs tmpfs",
      "Pass secrets safely (Docker secrets, env, vault)",
      "Set resource limits (CPU/memory) and cap capabilities",
      "Scan and harden images",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["Docker Compose & Multi-Container Apps"],
    technologies: ["docker", "linux"],
    whyLearn:
      "Container security is cloud security. Misconfigurations here are how systems get breached.",
    useCases: [
      "Isolating internal services",
      "Securing database credentials",
      "Preventing resource exhaustion in shared hosts",
      "Hardening public-facing images",
    ],
    commonMistakes: [
      "Exposing ports to the world",
      "Storing secrets in image layers",
      "Unlimited resource usage",
      "Capabilities far beyond what's needed",
    ],
    officialDocs: [
      { label: "Docker networking overview", url: "https://docs.docker.com/network/" },
      { label: "Docker security best practices", url: "https://docs.docker.com/engine/security/" },
    ],
    youtubeVideo: {
      label: "Docker Networking in 6 Minutes",
      url: "https://www.youtube.com/results?search_query=docker+networking+explained",
    },
    readings: [
      { label: "Docker storage - volumes", url: "https://docs.docker.com/storage/volumes/" },
      { label: "CIS Docker Benchmark", url: "https://www.cisecurity.org/benchmark/docker" },
    ],
    resources: [
      { label: "Dive - inspect image layers", url: "https://github.com/wagoodman/dive" },
      { label: "grype - image scanner", url: "https://github.com/anchore/grype" },
    ],
    exercises: [
      "Isolate services on a private network and probe connectivity",
      "Pass secrets via env and Docker secrets and compare",
      "Set CPU/memory limits and watch a container throttle",
      "Run a security scan and harden the top findings",
    ],
    miniProject: {
      title: "Hardened Stack",
      description:
        "Harden the Notes stack: private networks, limited ports, secrets via env files (not committed), resource limits, and a security review checklist.",
      checklist: [
        "Private network with only the proxy exposed",
        "Secrets managed via gitignored env files",
        "Resource limits on every service",
        "Non-root, read-only, cap_drop hardening",
        "Security checklist documented",
      ],
    },
    checklist: [
      "Master container networking",
      "Master secrets and limits",
      "Complete all 4 exercises",
      "Harden the stack",
      "Write notes on container security",
    ],
  },
];

const cicd: Lesson[] = [
  {
    id: "s4-m3-l1",
    title: "CI/CD Fundamentals & GitHub Actions",
    description:
      "Understand continuous integration and delivery, then build your first pipeline with GitHub Actions.",
    objectives: [
      "Explain CI vs CD and the pipeline stages",
      "Understand events, jobs, steps, and runners",
      "Write a first GitHub Actions workflow",
      "Use actions marketplace components",
      "Read pipeline logs and debug failures",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Git & GitHub"],
    technologies: ["cicd", "github", "git"],
    whyLearn:
      "Every professional repo has CI. Automating checks is how teams catch broken code in minutes instead of days.",
    useCases: [
      "Lint, typecheck, and test on every PR",
      "Building and publishing images",
      "Auto-deploying preview environments",
      "Release automation",
    ],
    commonMistakes: [
      "Running CI only after merge",
      "Flaky tests breaking every pipeline",
      "Ignoring pipeline caching",
      "Secrets in workflow files",
    ],
    officialDocs: [
      { label: "GitHub Actions docs", url: "https://docs.github.com/en/actions" },
      { label: "Workflow syntax reference", url: "https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions" },
    ],
    youtubeVideo: {
      label: "GitHub Actions Tutorial (TechWorld with Nana)",
      url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
    },
    readings: [
      { label: "What is CI/CD (Red Hat)", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
      { label: "GitHub Actions best practices", url: "https://docs.github.com/en/actions/learn-github-actions/best-practices-for-using-github-actions" },
    ],
    resources: [
      { label: "GitHub Actions marketplace", url: "https://github.com/marketplace?type=actions" },
    ],
    exercises: [
      "Create a workflow that runs lint + typecheck + tests on push",
      "Gate the main branch with required checks",
      "Use a marketplace action and pin it by SHA",
      "Debug a failing pipeline step from logs",
    ],
    miniProject: {
      title: "Quality Gate Pipeline",
      description:
        "Set up CI for the Script Runner CLI: lint, typecheck, tests, coverage report, and a build artifact, with branch protection requiring green checks.",
      checklist: [
        "Workflow triggers: push + pull_request",
        "Lint, typecheck, test jobs",
        "Artifact upload for coverage/build",
        "Branch protection with required checks",
        "README section documenting the pipeline",
      ],
    },
    checklist: [
      "Understand CI/CD concepts",
      "Complete all 4 exercises",
      "Build the quality gate pipeline",
      "Write notes on pipeline design",
    ],
  },
  {
    id: "s4-m3-l2",
    title: "Building a CI Pipeline for AI Projects",
    description:
      "CI specifically for AI/ML projects: data tests, model tests, prompt evaluation gates, and dependency pinning.",
    objectives: [
      "Test data quality in CI",
      "Run prompt/RAG evaluation suites in CI",
      "Pin and cache dependencies (pip/uv, npm)",
      "Use caching and matrix builds efficiently",
      "Add a prompt-regression gate to CI",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["CI/CD Fundamentals & GitHub Actions"],
    technologies: ["cicd", "github", "python", "prompting"],
    whyLearn:
      "AI projects break silently — a model update can change outputs. CI with evaluation gates is how you keep them reliable.",
    useCases: [
      "Blocking deploys when RAG quality drops",
      "Data pipeline validation",
      "Model artifact versioning",
      "Automated eval runs on every change",
    ],
    commonMistakes: [
      "No evaluation in the pipeline",
      "Flaky eval thresholds",
      "Heavy training in CI",
      "Untracked datasets",
    ],
    officialDocs: [
      { label: "GitHub Actions - caching", url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows" },
      { label: "GitHub Actions - matrices", url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow" },
    ],
    youtubeVideo: {
      label: "MLOps: CI/CD for Machine Learning",
      url: "https://www.youtube.com/results?search_query=mlops+ci+cd+machine+learning+pipeline",
    },
    readings: [
      { label: "MLOps principles (Google)", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning" },
      { label: "DVC - data version control", url: "https://dvc.org/" },
    ],
    resources: [
      { label: "uv - fast Python package manager", url: "https://docs.astral.sh/uv/" },
    ],
    exercises: [
      "Add data validation tests to a dataset",
      "Wire the prompt regression suite into CI with a threshold",
      "Configure dependency caching and matrix builds",
      "Version a dataset and model artifact in a pipeline",
    ],
    miniProject: {
      title: "Eval-Gated CI",
      description:
        "Extend the Knowledge Copilot's CI with an evaluation job: run the RAG eval suite, gate on quality thresholds, and publish a report artifact.",
      checklist: [
        "Eval job with pinned models and data",
        "Quality thresholds that block merges",
        "Report artifact published",
        "Caching for embeddings/index",
        "Documentation of the gate",
      ],
    },
    checklist: [
      "Design AI-specific CI",
      "Complete all 4 exercises",
      "Build the eval-gated CI",
      "Write notes on eval gates",
    ],
  },
  {
    id: "s4-m3-l3",
    title: "Continuous Deployment",
    description:
      "Ship automatically: build and push images, deploy to servers or platforms, roll back safely, and manage environments.",
    objectives: [
      "Build and push container images in CD",
      "Deploy to a VM or a platform (Fly/Render/VPS)",
      "Use environments: dev, staging, prod",
      "Implement automatic rollback on failed health checks",
      "Understand blue-green and canary strategies",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["CI/CD Fundamentals & GitHub Actions"],
    technologies: ["cicd", "docker", "deployment", "github"],
    whyLearn:
      "Deployment is the final mile. Safe, automated deployment is what lets you ship daily without fear.",
    useCases: [
      "Auto-deploying the Notes API to staging on merge",
      "Releasing images to a registry",
      "Zero-downtime production updates",
      "Rolling back a bad release instantly",
    ],
    commonMistakes: [
      "Deploying to prod on every push",
      "No rollback strategy",
      "Deploying unverified images",
      "Manual server configuration drift",
    ],
    officialDocs: [
      { label: "GitHub Actions - deployment", url: "https://docs.github.com/en/actions/deployment" },
      { label: "GitHub - environments", url: "https://docs.github.com/en/actions/reference/environments" },
    ],
    youtubeVideo: {
      label: "What is CI/CD? (TechWorld with Nana)",
      url: "https://www.youtube.com/watch?v=scEDHsr3APg",
    },
    readings: [
      { label: "Blue-green deployment pattern", url: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
      { label: "Canary release pattern", url: "https://martinfowler.com/bliki/CanaryRelease.html" },
    ],
    resources: [
      { label: "Fly.io - deploy containers", url: "https://fly.io/docs/" },
      { label: "Render docs", url: "https://render.com/docs" },
    ],
    exercises: [
      "Build and push an image to GHCR in a workflow",
      "Deploy the Notes API to a free platform with a CD workflow",
      "Set up separate staging and production environments",
      "Add a health-check that triggers rollback on failure",
    ],
    miniProject: {
      title: "Auto-Deploy Pipeline",
      description:
        "Create a full CD pipeline: merge to main builds the image, deploys to staging, runs smoke tests, then promotes to production with rollback.",
      checklist: [
        "Image build + push to registry",
        "Staging deploy with smoke tests",
        "Approval/protected promote step",
        "Production deploy with health verification",
        "Rollback procedure documented and tested",
      ],
    },
    checklist: [
      "Master continuous deployment",
      "Complete all 4 exercises",
      "Build the auto-deploy pipeline",
      "Write notes on deploy strategies",
    ],
  },
  {
    id: "s4-m3-l4",
    title: "Advanced Pipelines: Caching, Secrets & Security",
    description:
      "Harden your pipelines: secure secrets, dependency supply-chain security, caching strategy, and pipeline self-hosting.",
    objectives: [
      "Manage secrets safely in CI/CD",
      "Harden dependency resolution (lockfiles, SBOMs)",
      "Implement effective caching strategies",
      "Use composite and reusable workflows",
      "Consider self-hosted runners and cost control",
    ],
    durationMinutes: 150,
    difficulty: "expert",
    prerequisites: ["Continuous Deployment"],
    technologies: ["cicd", "github"],
    whyLearn:
      "Compromised CI is game over for a company. Supply-chain security in pipelines is now a core engineering responsibility.",
    useCases: [
      "Protecting deploy keys and tokens",
      "Scanning dependencies in every build",
      "Reducing pipeline cost and time",
      "Sharing pipeline logic across repos",
    ],
    commonMistakes: [
      "Committing .env files",
      "Using unvetted actions",
      "Secret keys with long lifetimes",
      "No dependency pinning",
    ],
    officialDocs: [
      { label: "GitHub - security hardening for Actions", url: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions" },
      { label: "GitHub - encrypted secrets", url: "https://docs.github.com/en/actions/reference/encrypted-secrets" },
    ],
    youtubeVideo: {
      label: "GitHub Actions Advanced Patterns",
      url: "https://www.youtube.com/results?search_query=github+actions+advanced+tutorial",
    },
    readings: [
      { label: "SLSA framework", url: "https://slsa.dev/" },
      { label: "Dependency-courier / pip-audit", url: "https://github.com/pypa/pip-audit" },
    ],
    resources: [
      { label: "zizmor - GitHub Actions security scanner", url: "https://github.com/woodruffw/zizmor" },
    ],
    exercises: [
      "Store and reference secrets in a workflow",
      "Pin every action by commit SHA",
      "Add a dependency audit step (pip-audit / npm audit)",
      "Extract a reusable workflow and share it",
    ],
    miniProject: {
      title: "Security-Hardened Pipeline",
      description:
        "Audit and harden the existing pipelines: pinned actions, secret hygiene, dependency scanning, SBOM generation, and a documented incident checklist.",
      checklist: [
        "Pin all third-party actions by SHA",
        "Secrets scoped with least privilege",
        "Dependency scan gates in CI",
        "SBOM artifact generated on release",
        "Security review documented",
      ],
    },
    checklist: [
      "Harden your pipelines",
      "Complete all 4 exercises",
      "Build the hardened pipeline",
      "Write notes on supply-chain security",
    ],
  },
];

const n8n: Lesson[] = [
  {
    id: "s4-m4-l1",
    title: "Workflow Automation with n8n",
    description:
      "Meet n8n, the open-source workflow automation tool. Build visual workflows that glue APIs, databases, and AI together.",
    objectives: [
      "Install and run n8n locally or with Docker",
      "Understand nodes, triggers, and executions",
      "Build a simple workflow with triggers",
      "Use the editor, execution history, and logs",
      "Understand when n8n beats custom code (and vice versa)",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["HTTP Fundamentals"],
    technologies: ["n8n"],
    whyLearn:
      "n8n is how automation engineers ship integrations 10x faster — and it's the platform behind many AI automation products.",
    useCases: [
      "Connecting CRMs, email, and databases",
      "AI-powered lead processing",
      "Internal tool orchestration",
      "Customer-facing automations",
    ],
    commonMistakes: [
      "Building brittle workflows without error handling",
      "Putting business logic in UI-only workflows",
      "Ignoring execution logs",
      "Not versioning workflow JSON",
    ],
    officialDocs: [
      { label: "n8n documentation", url: "https://docs.n8n.io/" },
      { label: "n8n - getting started", url: "https://docs.n8n.io/try-it-out/" },
    ],
    youtubeVideo: {
      label: "n8n Tutorial for Beginners",
      url: "https://www.youtube.com/results?search_query=n8n+tutorial+for+beginners",
    },
    readings: [
      { label: "n8n - nodes overview", url: "https://docs.n8n.io/integrations/builtin/core-nodes/" },
      { label: "n8n - expression editor", url: "https://docs.n8n.io/code/expressions/" },
    ],
    resources: [
      { label: "n8n community templates", url: "https://n8n.io/workflows/" },
    ],
    exercises: [
      "Install n8n and create an account-free local instance",
      "Build a schedule-triggered workflow that fetches an API",
      "Transform data with the Set/Edit Fields node",
      "Review execution history and fix a failed run",
    ],
    miniProject: {
      title: "Daily Digest Workflow",
      description:
        "Build a scheduled workflow that fetches news/weather via APIs, formats a summary, and sends it to email (simulated via webhook).",
      checklist: [
        "Schedule trigger at a chosen time",
        "HTTP Request nodes with headers/auth",
        "Data transformation and formatting",
        "Notification/send step",
        "Error handling and execution logging",
      ],
    },
    checklist: [
      "Master n8n basics",
      "Complete all 4 exercises",
      "Build the daily digest workflow",
      "Write notes on n8n vs code",
    ],
  },
  {
    id: "s4-m4-l2",
    title: "n8n Nodes, Credentials & HTTP Integrations",
    description:
      "Connect anything: HTTP nodes, credentials management, webhooks, and calling your own FastAPI services.",
    objectives: [
      "Use HTTP Request, Webhook, and trigger nodes",
      "Manage credentials securely in n8n",
      "Call REST APIs with pagination and auth",
      "Call your own FastAPI/Next.js services",
      "Handle JSON paths with expressions",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Workflow Automation with n8n"],
    technologies: ["n8n", "http"],
    whyLearn:
      "Real automations are integrations. HTTP nodes and credentials are how n8n talks to every system you have.",
    useCases: [
      "Syncing data between SaaS tools",
      "Exposing webhooks to external systems",
      "Calling internal APIs from workflows",
      "Building integration layers for teams",
    ],
    commonMistakes: [
      "Storing credentials in workflow JSON",
      "Not paginating API responses",
      "Hard-coding values instead of expressions",
      "No handling for API rate limits",
    ],
    officialDocs: [
      { label: "n8n - HTTP Request node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/" },
      { label: "n8n - Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/" },
    ],
    youtubeVideo: {
      label: "n8n HTTP & Webhooks Tutorial",
      url: "https://www.youtube.com/results?search_query=n8n+webhook+http+request+tutorial",
    },
    readings: [
      { label: "n8n - credentials overview", url: "https://docs.n8n.io/credentials/" },
      { label: "n8n - expression editor", url: "https://docs.n8n.io/code/expressions/" },
    ],
    resources: [
      { label: "n8n - integrations list", url: "https://docs.n8n.io/integrations/" },
    ],
    exercises: [
      "Build a workflow that calls the GitHub API with credentials",
      "Add a webhook trigger and test it with curl",
      "Call your FastAPI notes API from a workflow",
      "Handle pagination to collect all pages of a resource",
    ],
    miniProject: {
      title: "CRM Sync Workflow",
      description:
        "Build a workflow that receives a webhook from a form, looks up the contact in a mock CRM API, enriches data, and updates a spreadsheet via API.",
      checklist: [
        "Webhook trigger with form payload",
        "Credentials stored securely",
        "Lookup + enrichment calls",
        "Update/insert in the target system",
        "Logging and error branches",
      ],
    },
    checklist: [
      "Master n8n integrations",
      "Complete all 4 exercises",
      "Build the CRM sync workflow",
      "Write notes on credential hygiene",
    ],
  },
  {
    id: "s4-m4-l3",
    title: "Multi-Step Workflows & Error Handling",
    description:
      "Design robust workflows: branching, loops, error workflows, retries, and human-approval steps.",
    objectives: [
      "Branch workflows with IF and Switch nodes",
      "Loop over items with Loop/Each",
      "Design error workflows and retries",
      "Add human-in-the-loop approval steps",
      "Make workflows idempotent and re-runnable",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["n8n Nodes, Credentials & HTTP Integrations"],
    technologies: ["n8n"],
    whyLearn:
      "Production automations must survive failures. Multi-step control flow and error handling are what separate demos from operations.",
    useCases: [
      "Approval gates in invoice processing",
      "Retrying flaky third-party calls",
      "Branching by record type",
      "Batch processing large datasets",
    ],
    commonMistakes: [
      "No error branch anywhere",
      "Retrying without backoff",
      "Side effects on retry (duplicate emails)",
      "Unbounded loops",
    ],
    officialDocs: [
      { label: "n8n - IF node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/" },
      { label: "n8n - error workflows", url: "https://docs.n8n.io/flow-logic/error-handling/" },
    ],
    youtubeVideo: {
      label: "n8n Error Handling & Branching",
      url: "https://www.youtube.com/results?search_query=n8n+error+handling+branching+tutorial",
    },
    readings: [
      { label: "n8n - loop nodes", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/" },
      { label: "n8n - human in the loop", url: "https://docs.n8n.io/flow-logic/waiting/" },
    ],
    resources: [
      { label: "n8n - re-running executions", url: "https://docs.n8n.io/workflows/executions/" },
    ],
    exercises: [
      "Branch an order workflow by total amount",
      "Add a wait-for-approval node and test the resume",
      "Build an error workflow that alerts on failure",
      "Make a workflow re-runnable without duplicating records",
    ],
    miniProject: {
      title: "Invoice Approval Flow",
      description:
        "Build an invoice workflow: receives invoice, validates and extracts data, branches by amount (approval for large), logs to a sheet, and notifies on failure.",
      checklist: [
        "Validation branch with clear error messages",
        "Approval gate with wait/resume",
        "Record logging that is idempotent",
        "Error workflow with alerting",
        "Retry behavior for transient failures",
      ],
    },
    checklist: [
      "Master workflow control flow",
      "Complete all 4 exercises",
      "Build the invoice approval flow",
      "Write notes on error handling design",
    ],
  },
  {
    id: "s4-m4-l4",
    title: "AI-Powered Workflows in n8n",
    description:
      "Combine n8n with AI: call models, use the AI Agent node, process documents, and build autonomous-ish pipelines with guardrails.",
    objectives: [
      "Call LLM nodes (OpenAI, Claude) in workflows",
      "Use the AI Agent node with tools",
      "Process and summarize documents",
      "Build classification and extraction flows",
      "Add guardrails and cost controls",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Multi-Step Workflows & Error Handling", "Prompting Fundamentals & Patterns"],
    technologies: ["n8n", "openai", "claude"],
    whyLearn:
      "AI automation is where n8n shines: visual pipelines that call models, act on outputs, and integrate with everything.",
    useCases: [
      "AI email triage and drafting",
      "Document extraction into CRMs",
      "Support copilots",
      "Content workflows with review gates",
    ],
    commonMistakes: [
      "No output validation from models",
      "Unbounded agent loops and costs",
      "Ignoring token usage",
      "No human review for high-stakes outputs",
    ],
    officialDocs: [
      { label: "n8n - AI Agent node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/" },
      { label: "n8n - LangChain nodes", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/" },
    ],
    youtubeVideo: {
      label: "n8n AI Agents Tutorial",
      url: "https://www.youtube.com/results?search_query=n8n+ai+agent+workflow+tutorial",
    },
    readings: [
      { label: "n8n - AI workflows guide", url: "https://docs.n8n.io/advanced-ai/" },
      { label: "n8n - model nodes", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/" },
    ],
    resources: [
      { label: "n8n AI template gallery", url: "https://n8n.io/workflows/?categories=145" },
    ],
    exercises: [
      "Build a workflow that summarizes incoming emails with an LLM",
      "Add classification routing based on model output",
      "Create an AI Agent with 2 tools",
      "Add validation + retry when model output fails a schema",
    ],
    miniProject: {
      title: "AI Email Triage",
      description:
        "Build an AI-powered email triage workflow: ingest messages, classify intent with a model, extract action items, route to the right response, with a human approval gate.",
      checklist: [
        "Ingest and preprocess messages",
        "Classify intent and extract JSON",
        "Draft a response with the model",
        "Human approval before send",
        "Cost tracking and failure handling",
      ],
    },
    checklist: [
      "Master AI nodes in n8n",
      "Complete all 4 exercises",
      "Build the AI email triage",
      "Write notes on AI workflow guardrails",
    ],
  },
];

export const capstone4: Capstone = {
  id: "capstone-4",
  title: "Automation Command Center",
  description:
    "Design and ship a real automated system: scheduled data collection, processing, AI analysis, alerting, and a dashboard — built with a mix of Python, n8n, Docker, and CI/CD, and documented for year-long operation.",
  objectives: [
    "Design a complete automation architecture end to end",
    "Build scheduled, resilient data collection and processing",
    "Layer AI analysis with guardrails and cost controls",
    "Containerize every component and automate deployment",
    "Document reliability, monitoring, and runbooks",
  ],
  requiredSkills: ["Python", "Docker", "CI/CD", "n8n", "HTTP/REST", "Linux scheduling"],
  difficulty: "advanced",
  estimatedHours: 35,
  xp: 900,
  technologies: ["docker", "cicd", "n8n", "python", "linux", "monitoring"],
  checklist: [
    "Architecture diagram and component breakdown",
    "Scheduled collection with retries and dead letters",
    "AI analysis with validation and cost tracking",
    "Notification and dashboard layers",
    "All components containerized",
    "CI/CD deploying the stack",
    "Monitoring, logging, and runbooks",
    "Final review: self-assessment against the rubric",
  ],
};

const modules4: Module[] = [
  {
    id: "s4-m1",
    title: "Automation Fundamentals",
    description: "The discipline of automation: finding work, making it reliable, and running it without you.",
    technologies: ["python", "linux"],
    lessons: fundamentals,
  },
  {
    id: "s4-m2",
    title: "Docker & Containers",
    description: "Package, ship, and run everything reproducibly with containers and Compose.",
    technologies: ["docker", "linux"],
    lessons: docker,
  },
  {
    id: "s4-m3",
    title: "CI/CD",
    description: "Automate quality and delivery: pipelines, deployments, and security from commit to production.",
    technologies: ["cicd", "github", "docker"],
    lessons: cicd,
  },
  {
    id: "s4-m4",
    title: "n8n & Visual Automation",
    description: "Ship integrations fast with n8n workflows, from HTTP glue to AI-powered agents.",
    technologies: ["n8n"],
    lessons: n8n,
  },
];

export const semester4: Semester = {
  id: "semester-4",
  number: 4,
  title: "Automation Engineering",
  description:
    "Turn engineering into leverage: automate work with code, containers, pipelines, and n8n workflows.",
  tagline: "Build systems that do the work for you",
  icon: Zap,
  color: "#F59E0B",
  duration: "14 weeks",
  xp: 250,
  modules: modules4,
  capstone: capstone4,
};
