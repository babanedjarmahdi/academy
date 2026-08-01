import type { Capstone, Lesson, Module, Semester } from "@/types";
import { Server } from "lucide-react";

const http: Lesson[] = [
  {
    id: "s2-m1-l1",
    title: "HTTP Fundamentals",
    description:
      "The protocol that powers the internet and every API your AI systems will call. Understand requests, responses, methods, status codes, headers and caching.",
    objectives: [
      "Describe the HTTP request/response lifecycle",
      "Use HTTP methods correctly: GET, POST, PUT, PATCH, DELETE",
      "Read and interpret status codes (1xx-5xx)",
      "Understand headers: content-type, authorization, cache-control, CORS",
      "Explain statelessness and how state is layered on top",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["Basic networking intuition"],
    technologies: ["http"],
    whyLearn:
      "Every AI call, webhook, and API integration you will ever build runs on HTTP. When something breaks in automation, 90% of the time it is an HTTP problem.",
    useCases: [
      "Calling OpenAI/Gemini/Claude REST APIs",
      "Receiving webhooks from n8n and Zapier-like tools",
      "Debugging slow or failing API integrations",
      "Building browser-to-server data flows",
    ],
    commonMistakes: [
      "Using GET for side-effectful operations",
      "Ignoring status codes and only checking body",
      "Confusing 401 vs 403 semantics",
      "Not handling redirects and rate-limit (429) responses",
    ],
    officialDocs: [
      { label: "MDN HTTP Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
      { label: "HTTP Status Codes (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
    ],
    youtubeVideo: {
      label: "HTTP Crash Course & Exploration (Traversy Media)",
      url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
    },
    readings: [
      { label: "MDN HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" },
      { label: "MDN HTTP Caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" },
    ],
    resources: [
      { label: "HTTPie - a nicer curl", url: "https://httpie.io/" },
      { label: "Webhook.site - test webhooks", url: "https://webhook.site/" },
    ],
    exercises: [
      "Use curl to exercise GET, POST, PUT, DELETE against a public API",
      "Trigger each status code class and record the meaning",
      "Inspect request headers the server receives (httpbin.org/headers)",
      "Trace a full redirect chain with curl -L -v",
    ],
    miniProject: {
      title: "HTTP Debugging Lab",
      description:
        "Create a local lab with httpbin-style endpoints that echo requests. Write a script that exercises every method and status code, and document the results.",
      checklist: [
        "Stand up a local echo server (python -m http.server or a tiny Node app)",
        "Script calls for every HTTP method",
        "Capture and pretty-print status codes and headers",
        "Document caching and CORS behavior you observe",
        "Save results into your learning journal",
      ],
    },
    checklist: [
      "Internalize methods and status codes",
      "Complete all 4 exercises",
      "Build the HTTP debugging lab",
      "Write notes on headers and caching",
    ],
  },
  {
    id: "s2-m1-l2",
    title: "REST API Design",
    description:
      "Design APIs that developers love: resource modeling, naming, versioning, pagination, filtering, and error formats.",
    objectives: [
      "Model resources and collections with consistent naming",
      "Design endpoints that respect REST conventions",
      "Version APIs without breaking clients",
      "Implement pagination, filtering and sorting consistently",
      "Design a coherent error format and envelope decisions",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["HTTP Fundamentals"],
    technologies: ["rest-api", "http"],
    whyLearn:
      "Well-designed APIs are the contract between your automation systems and the rest of the world. A bad API costs months of pain.",
    useCases: [
      "Designing internal service boundaries",
      "Publishing public APIs for AI products",
      "Integrating third-party systems",
      "Building BFF (backend-for-frontend) layers",
    ],
    commonMistakes: [
      "Naming verbs in URLs (/getUser) instead of nouns",
      "Ignoring pagination for unbounded lists",
      "Returning inconsistent error shapes",
      "Breaking clients with unversioned changes",
    ],
    officialDocs: [
      { label: "Google API Design Guide", url: "https://cloud.google.com/apis/design" },
      { label: "Microsoft REST API Guidelines", url: "https://github.com/microsoft/api-guidelines" },
    ],
    youtubeVideo: {
      label: "REST API concepts and examples (Traversy Media)",
      url: "https://www.youtube.com/watch?v=7YcW25PHnAA",
    },
    readings: [
      { label: "The RESTful API design blog post (siteleak)", url: "https://restfulapi.net/" },
      { label: "JSON API spec", url: "https://jsonapi.org/" },
    ],
    resources: [
      { label: "OpenAPI specification", url: "https://spec.openapis.org/oas/latest.html" },
      { label: "Stripe's API docs as inspiration", url: "https://stripe.com/docs/api" },
    ],
    exercises: [
      "Design a REST API for a todo/task app: full endpoint list with methods",
      "Define pagination conventions (page/cursor) and filter query params",
      "Design a uniform error envelope and document it",
      "Write an OpenAPI spec for one resource",
    ],
    miniProject: {
      title: "API Blueprint",
      description:
        "Design and document a complete REST API for an AI-assisted note-taking app, including auth, resources, pagination, errors and an OpenAPI spec.",
      checklist: [
        "Model resources: users, notes, tags, embeddings",
        "Define all endpoints with methods and status codes",
        "Decide pagination, sorting and filtering conventions",
        "Design a consistent error format",
        "Write an OpenAPI YAML for the core resource",
      ],
    },
    checklist: [
      "Master resource modeling",
      "Complete all 4 exercises",
      "Build the API blueprint",
      "Write notes on versioning strategies",
    ],
  },
  {
    id: "s2-m1-l3",
    title: "Testing APIs with curl, Postman & scripts",
    description:
      "Become dangerous at API testing: manual with curl, scripted with code, and automated in CI. Learn to read server responses like a detective.",
    objectives: [
      "Craft precise curl commands with headers, bodies, and auth",
      "Automate API test suites with scripts and assertions",
      "Use tools like Postman or Hoppscotch for exploration",
      "Read response headers and debug server errors",
      "Integrate API tests into CI",
    ],
    durationMinutes: 120,
    difficulty: "intermediate",
    prerequisites: ["HTTP Fundamentals", "REST API Design"],
    technologies: ["http", "rest-api"],
    whyLearn:
      "Automation engineers live on the boundary between systems. The ability to probe, test, and prove an API works is the core debugging skill.",
    useCases: [
      "Verifying webhook deliveries",
      "Smoke-testing AI endpoints after deployment",
      "Writing contract tests for internal services",
      "Debugging OAuth flows step by step",
    ],
    commonMistakes: [
      "Testing only happy paths",
      "Hard-coding tokens and committing them",
      "Not checking response times and rate limits",
      "Forgetting to test auth failures",
    ],
    officialDocs: [
      { label: "curl man page", url: "https://curl.se/docs/manpage.html" },
      { label: "Postman learning center", url: "https://learning.postman.com/" },
    ],
    youtubeVideo: {
      label: "curl Tutorial (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=7XK8Cj7Y5z0",
    },
    readings: [
      { label: "Hoppscotch - lightweight API tool", url: "https://hoppscotch.io/" },
      { label: "httpbin - request/response service", url: "https://httpbin.org/" },
    ],
    resources: [
      { label: "Postman download", url: "https://www.postman.com/" },
    ],
    exercises: [
      "Exercise a public API (GitHub API) with curl: search, auth, pagination",
      "Write a shell script that asserts status codes and fields",
      "Build a Postman collection with environment variables",
      "Test error paths: bad auth, bad body, nonexistent resource",
    ],
    miniProject: {
      title: "API Test Harness",
      description:
        "Write a Node or Python test harness that runs a suite of HTTP checks against any API defined in a simple manifest file, with pass/fail reporting.",
      checklist: [
        "Define a manifest format for test cases",
        "Execute requests with assertions on status and JSON paths",
        "Support auth headers and environment variables",
        "Produce a clear pass/fail summary",
        "Add one happy-path and two error-path tests",
      ],
    },
    checklist: [
      "Get fluent with curl",
      "Complete all 4 exercises",
      "Build the API test harness",
      "Write notes on API debugging workflows",
    ],
  },
  {
    id: "s2-m1-l4",
    title: "JWT, Sessions & OAuth",
    description:
      "Secure your APIs. Understand the difference between sessions and tokens, how JWTs work, and how OAuth 2.0 delegates authorization safely.",
    objectives: [
      "Explain stateless vs stateful authentication",
      "Understand JWT structure: header, payload, signature",
      "Implement login/register flows with hashed passwords",
      "Protect routes with middleware and role checks",
      "Understand OAuth 2.0 flows: authorization code, PKCE, client credentials",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["REST API Design", "Python Fundamentals or Node experience"],
    technologies: ["jwt", "oauth", "http"],
    whyLearn:
      "Every real AI product needs auth. You will implement it, secure it, and debug OAuth integrations with providers daily.",
    useCases: [
      "Securing your FastAPI/Next.js applications",
      "Integrating 'Sign in with Google/GitHub'",
      "Issuing machine-to-machine tokens for services",
      "Protecting admin and automation endpoints",
    ],
    commonMistakes: [
      "Storing passwords in plaintext",
      "Putting secrets in JWT payloads",
      "Not verifying token signatures or expiry",
      "Confusing authentication (who you are) with authorization (what you can do)",
    ],
    officialDocs: [
      { label: "jwt.io introduction", url: "https://jwt.io/introduction" },
      { label: "OAuth 2.0 spec (RFC 6749)", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
    ],
    youtubeVideo: {
      label: "JWT in 100 Seconds (Fireship)",
      url: "https://www.youtube.com/watch?v=UBUNrFtufWo",
    },
    readings: [
      { label: "Fireship - OAuth in 100 seconds", url: "https://www.youtube.com/watch?v=zF34dRivLOw" },
      { label: "Auth0 blog - JWT handbook", url: "https://auth0.com/resources/ebooks/jwt-handbook" },
    ],
    resources: [
      { label: "jwt.io debugger", url: "https://jwt.io/" },
      { label: "OAuth 2.0 playground", url: "https://oauth.tools/" },
    ],
    exercises: [
      "Decode and verify a JWT by hand with a library",
      "Implement password hashing with bcrypt/argon2 and a login endpoint",
      "Add a middleware that enforces role-based access",
      "Walk through an authorization-code OAuth flow with PKCE on paper",
    ],
    miniProject: {
      title: "Secure Auth API",
      description:
        "Build a minimal auth service: register, login, refresh tokens, protected endpoints, and role-based guards, with tests for security failures.",
      checklist: [
        "Hash passwords with a modern algorithm",
        "Issue access + refresh tokens with short expiry",
        "Protect endpoints with a reusable middleware",
        "Add role checks (admin vs user)",
        "Write tests for wrong password, expired token, and forbidden access",
      ],
    },
    checklist: [
      "Understand JWTs deeply",
      "Complete all 4 exercises",
      "Build the secure auth API",
      "Write notes on OAuth flows",
    ],
  },
];

const python: Lesson[] = [
  {
    id: "s2-m2-l1",
    title: "Python Fundamentals",
    description:
      "The lingua franca of AI. Learn Python syntax, data structures, control flow, and the ecosystem that makes it the default choice for AI engineering.",
    objectives: [
      "Write idiomatic Python: variables, types, control flow",
      "Use lists, dicts, sets, tuples and comprehensions fluently",
      "Read and write files and handle exceptions",
      "Structure programs with functions and modules",
      "Use the standard library: os, pathlib, json, collections",
    ],
    durationMinutes: 180,
    difficulty: "beginner",
    prerequisites: ["Some programming basics (JavaScript helps)"],
    technologies: ["python"],
    whyLearn:
      "FastAPI, LangChain, LangGraph, PyTorch and the entire AI ecosystem are Python-first. Python is the #1 language in AI engineering.",
    useCases: [
      "Writing AI backends with FastAPI",
      "Building agent workflows with LangGraph",
      "Data processing for RAG pipelines",
      "Automation scripts and infrastructure tooling",
    ],
    commonMistakes: [
      "Copying JavaScript habits (indentation, naming) into Python",
      "Using list/dict where the right structure is better",
      "Swallowing exceptions with bare except:",
      "Not using f-strings",
    ],
    officialDocs: [
      { label: "Python 3 official docs", url: "https://docs.python.org/3/" },
      { label: "Python Tutorial", url: "https://docs.python.org/3/tutorial/index.html" },
    ],
    youtubeVideo: {
      label: "Learn Python - Full Course for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    },
    readings: [
      { label: "Python for Everybody (free book)", url: "https://www.py4e.com/book" },
      { label: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
    ],
    resources: [
      { label: "Real Python tutorials", url: "https://realpython.com/" },
      { label: "Python style guide (PEP 8)", url: "https://peps.python.org/pep-0008/" },
    ],
    exercises: [
      "Write a program that reads a CSV of expenses and prints a summary",
      "Build a word-frequency counter using dicts and comprehension",
      "Handle file-not-found and value errors with proper try/except",
      "Refactor a script into a module with functions and a __main__ guard",
    ],
    miniProject: {
      title: "Daily Planner CLI",
      description:
        "Build a command-line task planner that stores tasks in JSON, supports add/list/complete/delete, and prints a daily digest.",
      checklist: [
        "Store tasks in a JSON file with pathlib",
        "Implement add, list, complete, delete commands",
        "Validate input and handle missing files gracefully",
        "Print a clean daily digest of pending tasks",
        "Organize code into functions with docstrings",
      ],
    },
    checklist: [
      "Become fluent in Python basics",
      "Complete all 4 exercises",
      "Build the daily planner CLI",
      "Write notes on Python idioms vs JS",
    ],
  },
  {
    id: "s2-m2-l2",
    title: "Python OOP, Modules & Best Practices",
    description:
      "Design maintainable Python: classes, inheritance, composition, dataclasses, typing, packaging, and linting.",
    objectives: [
      "Write classes with __init__, properties, and dunder methods",
      "Use dataclasses and type hints effectively",
      "Understand inheritance vs composition",
      "Structure packages with imports done right",
      "Apply tooling: ruff, mypy, pytest, virtualenvs",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Python Fundamentals"],
    technologies: ["python"],
    whyLearn:
      "The quality of AI projects depends on maintainable code. Python's type system, dataclasses and tooling are what professionals rely on.",
    useCases: [
      "Modeling domain objects (users, sessions, agents)",
      "Writing testable service classes for AI clients",
      "Packaging internal libraries",
      "Enforcing code quality in teams",
    ],
    commonMistakes: [
      "Overusing classes when functions suffice",
      "Ignoring type hints in shared code",
      "Deep inheritance chains that become brittle",
      "Importing everything with *",
    ],
    officialDocs: [
      { label: "Python dataclasses docs", url: "https://docs.python.org/3/library/dataclasses.html" },
      { label: "typing module docs", url: "https://docs.python.org/3/library/typing.html" },
    ],
    youtubeVideo: {
      label: "Python OOP Tutorials (Corey Schafer)",
      url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
    },
    readings: [
      { label: "pytest docs", url: "https://docs.pytest.org/" },
      { label: "mypy docs", url: "https://mypy.readthedocs.io/" },
    ],
    resources: [
      { label: "ruff - fast Python linter", url: "https://docs.astral.sh/ruff/" },
      { label: "Real Python - OOP", url: "https://realpython.com/python3-object-oriented-programming/" },
    ],
    exercises: [
      "Convert a dict-based module into a dataclass-based one with validation",
      "Write pytest tests with fixtures and parametrize",
      "Type-hint a full module and run mypy --strict",
      "Structure a package with __init__.py exports and clean imports",
    ],
    miniProject: {
      title: "Expense Tracker (OOP)",
      description:
        "Rewrite the planner as a well-structured package: domain models with dataclasses, a storage layer, a CLI layer, and a pytest suite.",
      checklist: [
        "Model Expense with dataclasses and validation",
        "Separate storage, domain, and CLI layers",
        "Write pytest tests for every command",
        "Configure ruff + mypy and get a clean run",
        "Package as installable with pyproject.toml",
      ],
    },
    checklist: [
      "Master Python OOP idioms",
      "Complete all 4 exercises",
      "Build the OOP expense tracker",
      "Write notes on composition over inheritance",
    ],
  },
  {
    id: "s2-m2-l3",
    title: "Working with Data: Files, JSON & Requests",
    description:
      "Move data in and out of your programs: files, JSON, CSV, APIs with requests, and clean data pipelines.",
    objectives: [
      "Read/write files with pathlib and context managers",
      "Serialize and deserialize JSON with proper error handling",
      "Consume REST APIs with the requests library",
      "Build small, testable data pipelines",
      "Handle large files efficiently (streaming)",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Python Fundamentals"],
    technologies: ["python", "http"],
    whyLearn:
      "Data wrangling is 70% of real AI work: collecting, cleaning, and transforming data before models ever see it.",
    useCases: [
      "Building datasets for RAG and fine-tuning",
      "Ingesting webhooks and API payloads",
      "Exporting and importing configuration",
      "ETL glue between systems",
    ],
    commonMistakes: [
      "Manually parsing JSON strings instead of using json",
      "Blocking network calls in hot paths",
      "Reading entire huge files into memory",
      "Not handling malformed data gracefully",
    ],
    officialDocs: [
      { label: "requests library docs", url: "https://requests.readthedocs.io/" },
      { label: "json module docs", url: "https://docs.python.org/3/library/json.html" },
    ],
    youtubeVideo: {
      label: "Python Requests Tutorial (Corey Schafer)",
      url: "https://www.youtube.com/watch?v=tKTZoB2Vjuk",
    },
    readings: [
      { label: "pathlib docs", url: "https://docs.python.org/3/library/pathlib.html" },
      { label: "csv module docs", url: "https://docs.python.org/3/library/csv.html" },
    ],
    resources: [
      { label: "httpbin for practice", url: "https://httpbin.org/" },
    ],
    exercises: [
      "Fetch JSON from a public API and normalize it into a list of dataclasses",
      "Stream a large file line-by-line and count records without loading it",
      "Write a retry wrapper around a flaky API call",
      "Merge data from two CSV files on a key",
    ],
    miniProject: {
      title: "Data Pipeline: RSS to JSON",
      description:
        "Build a pipeline that fetches RSS feeds, parses items, deduplicates, and writes a clean JSON dataset with a summary report.",
      checklist: [
        "Fetch feeds with requests and handle timeouts",
        "Parse with the stdlib (xml.etree) or feedparser",
        "Normalize and deduplicate entries",
        "Write clean JSON and a summary report",
        "Add tests with mocked HTTP responses",
      ],
    },
    checklist: [
      "Get fluent with files and JSON",
      "Master the requests library",
      "Complete all 4 exercises",
      "Build the RSS-to-JSON pipeline",
      "Write notes on data pipeline patterns",
    ],
  },
  {
    id: "s2-m2-l4",
    title: "Async Python with asyncio",
    description:
      "Make your Python concurrent: asyncio, coroutines, tasks, and the patterns for high-throughput API and AI workloads.",
    objectives: [
      "Explain the event loop and coroutines",
      "Write async functions with await correctly",
      "Run tasks concurrently and manage timeouts",
      "Use aiohttp/httpx for async HTTP",
      "Avoid common asyncio footguns (blocking calls, unawaited tasks)",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Python Fundamentals", "Working with Data"],
    technologies: ["python"],
    whyLearn:
      "AI backends fan out to many model calls. Async Python is how you keep latency low and throughput high.",
    useCases: [
      "Calling multiple LLM providers in parallel",
      "Streaming responses from APIs",
      "High-concurrency webhook processing",
      "Building responsive FastAPI services",
    ],
    commonMistakes: [
      "Calling time.sleep in async code (blocks everything)",
      "Forgetting to await coroutines",
      "Creating unbounded concurrent tasks",
      "Using synchronous requests inside async handlers",
    ],
    officialDocs: [
      { label: "asyncio documentation", url: "https://docs.python.org/3/library/asyncio.html" },
      { label: "asyncio quickstart (Real Python)", url: "https://realpython.com/async-io-python/" },
    ],
    youtubeVideo: {
      label: "Python Asynchronous Programming (Tech With Tim)",
      url: "https://www.youtube.com/watch?v=2IW-ZEui4zw",
    },
    readings: [
      { label: "httpx async docs", url: "https://www.python-httpx.org/async/" },
      { label: "Aiohttp docs", url: "https://docs.aiohttp.org/" },
    ],
    resources: [
      { label: "asyncio cheatsheet (Medium, free)", url: "https://realpython.com/async-io-python/" },
    ],
    exercises: [
      "Write an async fetcher that downloads 20 URLs with bounded concurrency",
      "Add timeout handling so slow calls don't hang your program",
      "Use asyncio.gather vs asyncio.TaskGroup and handle partial failures",
      "Convert a sync requests pipeline to httpx.AsyncClient",
    ],
    miniProject: {
      title: "Parallel Search Aggregator",
      description:
        "Build an async tool that queries several search/data APIs in parallel, deduplicates results, and returns merged ranked results with per-source latency.",
      checklist: [
        "Use httpx AsyncClient with a semaphore limit",
        "Aggregate results from at least 3 mock sources",
        "Handle partial failures gracefully",
        "Report per-source latency in a summary",
        "Test with mocked async sources",
      ],
    },
    checklist: [
      "Internalize the event loop model",
      "Complete all 4 exercises",
      "Build the parallel search aggregator",
      "Write notes on asyncio footguns",
    ],
  },
];

const fastapi: Lesson[] = [
  {
    id: "s2-m3-l1",
    title: "FastAPI Fundamentals",
    description:
      "Build your first production-grade Python API with FastAPI: routing, request/response models, path/query params, and automatic OpenAPI docs.",
    objectives: [
      "Set up a FastAPI project with uvicorn",
      "Create endpoints with path and query parameters",
      "Define request/response models with Pydantic",
      "Use dependency injection for shared logic",
      "Read the auto-generated OpenAPI docs",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["Python Fundamentals", "REST API Design"],
    technologies: ["fastapi", "python"],
    whyLearn:
      "FastAPI is the modern standard for Python APIs — used by OpenAI-compatible tooling, AI products and automation platforms for its speed, validation and docs.",
    useCases: [
      "Serving AI model predictions as APIs",
      "Building backend for agent applications",
      "Exposing internal automation endpoints",
      "Rapid prototyping validated data APIs",
    ],
    commonMistakes: [
      "Putting business logic in route handlers",
      "Mixing sync and async incorrectly",
      "Ignoring Pydantic validation power",
      "Not using dependency injection",
    ],
    officialDocs: [
      { label: "FastAPI official docs", url: "https://fastapi.tiangolo.com/" },
      { label: "FastAPI tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
    ],
    youtubeVideo: {
      label: "FastAPI Tutorial (Patrick Loeber)",
      url: "https://www.youtube.com/watch?v=tLKKmouUams",
    },
    readings: [
      { label: "Pydantic v2 docs", url: "https://docs.pydantic.dev/" },
      { label: "Uvicorn docs", url: "https://www.uvicorn.org/" },
    ],
    resources: [
      { label: "FastAPI + SQLAlchemy templates", url: "https://github.com/fastapi/full-stack-fastapi-template" },
    ],
    exercises: [
      "Create a /health and /ping endpoint with response models",
      "Add path, query, and body parameters with validation constraints",
      "Build a CRUD API for a simple in-memory resource",
      "Read and interact with the /docs interface",
    ],
    miniProject: {
      title: "Notes API",
      description:
        "Build a validated notes API: CRUD endpoints, Pydantic models with constraints, status codes, and automatic docs — no database yet.",
      checklist: [
        "Define Note and NoteCreate models with validation",
        "Implement CRUD endpoints with proper status codes",
        "Use dependency injection for a storage dependency",
        "Add 404 handling and validation errors",
        "Test every endpoint from /docs",
      ],
    },
    checklist: [
      "Master FastAPI basics",
      "Complete all 4 exercises",
      "Build the notes API",
      "Write notes on FastAPI vs Flask",
    ],
  },
  {
    id: "s2-m3-l2",
    title: "Pydantic Models & Validation",
    description:
      "Make your API contract airtight: nested models, validators, field constraints, computed fields, and converting invalid input to clean errors.",
    objectives: [
      "Define nested and recursive Pydantic models",
      "Apply field constraints (min/max, patterns, lengths)",
      "Write field and model validators",
      "Use model_config and computed fields",
      "Customize validation error messages",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["FastAPI Fundamentals"],
    technologies: ["fastapi", "python"],
    whyLearn:
      "When AI output or third-party data hits your API, Pydantic is your gatekeeper. Strong validation prevents bad data from ever entering your system.",
    useCases: [
      "Validating LLM JSON responses",
      "Normalizing webhook payloads from many providers",
      "Enforcing data contracts across services",
      "Building settings management (pydantic-settings)",
    ],
    commonMistakes: [
      "Repeating validation in multiple places",
      "Using str where enum/Literal is safer",
      "Trusting external data without validation",
      "Ignoring model_config (extra/str validation)",
    ],
    officialDocs: [
      { label: "Pydantic v2 - Validators", url: "https://docs.pydantic.dev/latest/concepts/validators/" },
      { label: "Pydantic v2 - Fields", url: "https://docs.pydantic.dev/latest/concepts/fields/" },
    ],
    youtubeVideo: {
      label: "Pydantic v2 Tutorial (ArjanCodes)",
      url: "https://www.youtube.com/watch?v=XIdWn94kC2k",
    },
    readings: [
      { label: "FastAPI - Body - Multiple parameters", url: "https://fastapi.tiangolo.com/tutorial/body-multiple-params/" },
      { label: "Pydantic settings", url: "https://docs.pydantic.dev/latest/concepts/pydantic_settings/" },
    ],
    resources: [
      { label: "Pydantic docs home", url: "https://docs.pydantic.dev/" },
    ],
    exercises: [
      "Model a complex nested schema (orders with line items) with constraints",
      "Write a validator that normalizes email/phone formats",
      "Use Literal and Enum to restrict valid values",
      "Configure extra='forbid' and observe the behavior",
    ],
    miniProject: {
      title: "Webhook Ingestor",
      description:
        "Build an endpoint that accepts webhooks from a simulated provider, validates them into a strict model, and rejects invalid payloads with clear errors.",
      checklist: [
        "Define the provider's payload schema strictly",
        "Add validators for timestamps, signatures, and enums",
        "Return 422 with helpful error details",
        "Store valid events and log rejected ones",
        "Test with valid, malformed, and hostile payloads",
      ],
    },
    checklist: [
      "Master Pydantic v2",
      "Complete all 4 exercises",
      "Build the webhook ingestor",
      "Write notes on validation-first design",
    ],
  },
  {
    id: "s2-m3-l3",
    title: "FastAPI + SQLAlchemy & PostgreSQL",
    description:
      "Wire a real database into your API: models, migrations, sessions, CRUD, and querying with SQLAlchemy against PostgreSQL.",
    objectives: [
      "Define SQLAlchemy ORM models from Pydantic schemas",
      "Manage sessions and dependencies properly",
      "Run migrations with Alembic",
      "Implement database CRUD endpoints",
      "Query with filters, joins, and pagination",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["FastAPI Fundamentals", "PostgreSQL Fundamentals"],
    technologies: ["fastapi", "python", "postgresql"],
    whyLearn:
      "Real products need durable data. This is where your API stops being a demo and becomes an application.",
    useCases: [
      "Persisting user data, notes, and agent state",
      "Storing conversation histories and vector metadata",
      "Building admin backends",
      "Transactional workflows",
    ],
    commonMistakes: [
      "Doing blocking DB work in async handlers",
      "Not using indexes on hot query columns",
      "Exposing ORM objects directly without schemas",
      "Skipping migrations and hand-editing the DB",
    ],
    officialDocs: [
      { label: "SQLAlchemy docs", url: "https://docs.sqlalchemy.org/" },
      { label: "Alembic docs", url: "https://alembic.sqlalchemy.org/" },
    ],
    youtubeVideo: {
      label: "FastAPI Course - full stack (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
    },
    readings: [
      { label: "FastAPI - SQL databases", url: "https://fastapi.tiangolo.com/tutorial/sql-databases/" },
      { label: "Async SQLAlchemy guide", url: "https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html" },
    ],
    resources: [
      { label: "FastAPI full-stack template", url: "https://github.com/fastapi/full-stack-fastapi-template" },
    ],
    exercises: [
      "Define User and Item models with relationships",
      "Run an Alembic migration that adds a table and column",
      "Write filtered + paginated list endpoint",
      "Use async sessions correctly in endpoints",
    ],
    miniProject: {
      title: "Persistent Notes API with PostgreSQL",
      description:
        "Upgrade the Notes API to use PostgreSQL via SQLAlchemy with migrations, relationships, and full CRUD with search.",
      checklist: [
        "Install and run PostgreSQL locally (or Docker)",
        "Define models + Alembic migrations",
        "Implement DB-backed CRUD endpoints",
        "Add full-text-ish search with ILIKE",
        "Write tests using a test database",
      ],
    },
    checklist: [
      "Master SQLAlchemy + Alembic",
      "Complete all 4 exercises",
      "Build the persistent notes API",
      "Write notes on async DB patterns",
    ],
  },
  {
    id: "s2-m3-l4",
    title: "Advanced FastAPI: Auth, Background Tasks & Deployment",
    description:
      "Productionize your API: auth with dependencies, background tasks, rate limiting, logging, error handling, and containerized deployment.",
    objectives: [
      "Secure endpoints with OAuth2/JWT dependencies",
      "Run background tasks and job processing",
      "Add structured logging and exception handlers",
      "Apply rate limiting and basic hardening",
      "Containerize with Docker and run with uvicorn",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["FastAPI + SQLAlchemy & PostgreSQL", "JWT, Sessions & OAuth"],
    technologies: ["fastapi", "python", "jwt", "docker"],
    whyLearn:
      "The gap between a demo and a product is auth, reliability, logging, and deployment. This lesson closes that gap.",
    useCases: [
      "Production AI backends with model access control",
      "Background embeddings and data processing",
      "Internal tool APIs with audit logs",
      "Serving multiple team services behind auth",
    ],
    commonMistakes: [
      "Running heavy jobs synchronously in requests",
      "Logging secrets or full payloads",
      "No rate limiting on expensive AI endpoints",
      "Deploying without health checks",
    ],
    officialDocs: [
      { label: "FastAPI - Security", url: "https://fastapi.tiangolo.com/tutorial/security/" },
      { label: "FastAPI - Background tasks", url: "https://fastapi.tiangolo.com/tutorial/background-tasks/" },
    ],
    youtubeVideo: {
      label: "FastAPI Security & Advanced (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
    },
    readings: [
      { label: "Logging in Python", url: "https://docs.python.org/3/howto/logging.html" },
      { label: "Docker + FastAPI guide", url: "https://fastapi.tiangolo.com/deployment/docker/" },
    ],
    resources: [
      { label: "slowapi - rate limiting for FastAPI", url: "https://slowapi.readthedocs.io/" },
    ],
    exercises: [
      "Add JWT auth as a dependency and protect a route",
      "Implement a background task that 'processes' uploads",
      "Add structured logging and a global exception handler",
      "Write a Dockerfile and docker-compose for the app",
    ],
    miniProject: {
      title: "Production-Ready Notes API",
      description:
        "Harden the persistent Notes API: auth, rate limits, structured logs, background email simulation, Docker deployment, and a health endpoint.",
      checklist: [
        "Protect all note endpoints with JWT auth",
        "Rate limit auth and note creation",
        "Log structured events with request IDs",
        "Containerize app + PostgreSQL with docker-compose",
        "Add /health with DB check and graceful shutdown",
      ],
    },
    checklist: [
      "Secure and harden your API",
      "Complete all 4 exercises",
      "Containerize and deploy the notes API",
      "Write notes on production checklist",
    ],
  },
];

const databases: Lesson[] = [
  {
    id: "s2-m4-l1",
    title: "PostgreSQL Fundamentals",
    description:
      "The world's most advanced open-source relational database. Learn schemas, tables, constraints, and querying from scratch.",
    objectives: [
      "Install and run PostgreSQL and psql",
      "Create databases, schemas, tables, and constraints",
      "Insert, update, delete, and select data",
      "Understand primary/foreign keys and data integrity",
      "Back up and restore with pg_dump",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["SQL basics or any data experience"],
    technologies: ["postgresql"],
    whyLearn:
      "PostgreSQL stores the state of most serious AI and automation products, and pgvector turns it into your vector database.",
    useCases: [
      "Storing application and automation state",
      "Powering RAG with pgvector",
      "Transactional data for e-commerce and SaaS",
      "Analytics and reporting queries",
    ],
    commonMistakes: [
      "Using serial/text where uuid or proper types fit",
      "Ignoring constraints and letting bad data in",
      "Not using transactions for multi-step writes",
      "Developing against production directly",
    ],
    officialDocs: [
      { label: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/" },
      { label: "PostgreSQL tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
    ],
    youtubeVideo: {
      label: "PostgreSQL Tutorial for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
    },
    readings: [
      { label: "PG exercises - practice SQL", url: "https://pgexercises.com/" },
      { label: "PostgreSQL cheatsheet", url: "https://www.postgresqltutorial.com/postgresql-cheat-sheet/" },
    ],
    resources: [
      { label: "DBeaver - DB GUI", url: "https://dbeaver.io/" },
    ],
    exercises: [
      "Create a schema for a library with constraints and FK relationships",
      "Insert sample data and write 10 varied SELECT queries",
      "Practice UPDATE/DELETE with WHERE and transaction rollback",
      "Dump and restore a database with pg_dump",
    ],
    miniProject: {
      title: "Library Database",
      description:
        "Design and populate a library database: books, authors, members, loans — with sensible constraints, indexes, and a set of reporting queries.",
      checklist: [
        "Design tables with proper keys and constraints",
        "Populate realistic sample data",
        "Write join queries for overdue books and top authors",
        "Add an index and show its effect with EXPLAIN",
        "Document the schema and sample queries",
      ],
    },
    checklist: [
      "Master PostgreSQL basics",
      "Complete all 4 exercises",
      "Build the library database",
      "Write notes on constraints and integrity",
    ],
  },
  {
    id: "s2-m4-l2",
    title: "SQL Mastery: Joins, Aggregations & Window Functions",
    description:
      "Go from basic SQL to analytical power: joins, subqueries, CTEs, GROUP BY, and window functions that real dashboards depend on.",
    objectives: [
      "Write inner, left, right, and full joins correctly",
      "Use GROUP BY with aggregates (COUNT, SUM, AVG)",
      "Write subqueries and CTEs (WITH clauses)",
      "Use window functions (ROW_NUMBER, RANK, LAG/LEAD)",
      "Optimize query readability with CTEs",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["PostgreSQL Fundamentals"],
    technologies: ["postgresql"],
    whyLearn:
      "AI products need analytics: usage dashboards, retention reports, and data checks. Window functions are the difference between average and advanced SQL.",
    useCases: [
      "Building usage dashboards for AI apps",
      "Computing leaderboards and rankings",
      "Running cohort and retention analysis",
      "Data quality checks in pipelines",
    ],
    commonMistakes: [
      "Forgetting the join condition and exploding rows",
      "Mixing aggregate and non-aggregate columns in GROUP BY",
      "Using subqueries where joins or CTEs are clearer",
      "Misunderstanding WHERE vs HAVING",
    ],
    officialDocs: [
      { label: "PostgreSQL - Queries", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html" },
      { label: "PostgreSQL - Aggregate functions", url: "https://www.postgresql.org/docs/current/functions-aggregate.html" },
    ],
    youtubeVideo: {
      label: "SQL Tutorial - Full Database Course (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    },
    readings: [
      { label: "Window function tutorial (PG docs)", url: "https://www.postgresql.org/docs/current/tutorial-window.html" },
      { label: "SQL Bolt - interactive", url: "https://sqlbolt.com/" },
    ],
    resources: [
      { label: "PG exercises (advanced)", url: "https://pgexercises.com/questions/joins/" },
    ],
    exercises: [
      "Write 5 different joins and explain the output sets",
      "Compute monthly revenue aggregation with GROUP BY + HAVING",
      "Rank top customers per month with window functions",
      "Rewrite a messy subquery as a CTE chain",
    ],
    miniProject: {
      title: "Analytics Queries Pack",
      description:
        "Against the library database, write a report pack: monthly loan trends, top patrons, overdue aging, and an author popularity ranking using window functions.",
      checklist: [
        "Write at least 6 analytical queries",
        "Use CTEs to structure the report",
        "Apply window functions in 2 queries",
        "Explain each result in comments",
        "Save as a .sql file in the repo",
      ],
    },
    checklist: [
      "Master joins and aggregations",
      "Complete all 4 exercises",
      "Build the analytics queries pack",
      "Write notes on window functions",
    ],
  },
  {
    id: "s2-m4-l3",
    title: "Indexing & Query Performance",
    description:
      "Make slow queries fast. Understand B-tree indexes, EXPLAIN, covering indexes, and when (and when not) to index.",
    objectives: [
      "Read and interpret EXPLAIN ANALYZE output",
      "Create B-tree, partial, and covering indexes",
      "Design indexes based on query patterns",
      "Avoid common query anti-patterns",
      "Measure before and after with realistic data",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["SQL Mastery: Joins, Aggregations & Window Functions"],
    technologies: ["postgresql"],
    whyLearn:
      "A single missing index can turn an RAG lookup or dashboard query from milliseconds to minutes. Performance is a feature.",
    useCases: [
      "Speeding up vector and metadata lookups",
      "Dashboard queries on millions of rows",
      "Reducing DB load under AI traffic spikes",
      "Debugging slow production queries",
    ],
    commonMistakes: [
      "Indexing every column blindly",
      "Selecting * and scanning large tables",
      "Ignoring sequential scans on big tables",
      "Not vacuuming/maintaining tables",
    ],
    officialDocs: [
      { label: "PostgreSQL - Indexes", url: "https://www.postgresql.org/docs/current/indexes.html" },
      { label: "PostgreSQL - EXPLAIN", url: "https://www.postgresql.org/docs/current/using-explain.html" },
    ],
    youtubeVideo: {
      label: "How Database Indexes Work",
      url: "https://www.youtube.com/watch?v=9Zb7wqFVU8E",
    },
    readings: [
      { label: "Use the Index, Luke!", url: "https://use-the-index-luke.com/" },
      { label: "pgMustard - explain visualizer", url: "https://www.pgmustard.com/" },
    ],
    resources: [
      { label: "EXPLAIN playground", url: "https://explain.depesz.com/" },
    ],
    exercises: [
      "Generate a large table and measure seq scan vs index scan",
      "Write 5 queries and optimize each with the right index",
      "Create a partial index for a hot filter (e.g., active=1)",
      "Use EXPLAIN ANALYZE to prove each optimization",
    ],
    miniProject: {
      title: "Query Performance Lab",
      description:
        "Build a benchmark lab: a million-row table, a set of slow queries, and a documented optimization journey with before/after EXPLAIN measurements.",
      checklist: [
        "Generate realistic test data (1M rows)",
        "Baseline each query with EXPLAIN ANALYZE",
        "Add indexes and re-measure",
        "Write a performance report with the numbers",
        "Document anti-patterns you discovered",
      ],
    },
    checklist: [
      "Learn to read EXPLAIN",
      "Complete all 4 exercises",
      "Build the performance lab",
      "Write notes on index selection",
    ],
  },
  {
    id: "s2-m4-l4",
    title: "Redis: Caching, Queues & Pub/Sub",
    description:
      "Make everything faster with Redis: caching layers, rate limiting, job queues, pub/sub, and session stores.",
    objectives: [
      "Run Redis and use core data structures (strings, lists, sets, hashes)",
      "Implement caching patterns with TTL and invalidation",
      "Build a simple job queue with BRPOPLPUSH or lists",
      "Use pub/sub for real-time events",
      "Design cache-aside and write-through strategies",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["PostgreSQL Fundamentals"],
    technologies: ["redis"],
    whyLearn:
      "AI costs money and takes time. Caching LLM responses, rate limiting, and queuing jobs are how production systems stay fast and cheap.",
    useCases: [
      "Caching LLM completions and embedding lookups",
      "Rate limiting API keys with INCR + TTL",
      "Queueing background embedding jobs",
      "Storing ephemeral agent state and sessions",
    ],
    commonMistakes: [
      "Caching without invalidation strategy",
      "Using Redis for durable data",
      "Missing TTLs and filling memory",
      "Blocking the app with synchronous Redis calls",
    ],
    officialDocs: [
      { label: "Redis documentation", url: "https://redis.io/docs/" },
      { label: "Redis data types intro", url: "https://redis.io/docs/data-types/" },
    ],
    youtubeVideo: {
      label: "Redis Crash Course (Traversy Media)",
      url: "https://www.youtube.com/watch?v=Hbt56gFj998",
    },
    readings: [
      { label: "Redis in Action (free chapters)", url: "https://redis.com/ebook/redis-in-action/" },
      { label: "Cache-Aside pattern (Azure docs)", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
    ],
    resources: [
      { label: "redis-py docs", url: "https://redis-py.readthedocs.io/" },
    ],
    exercises: [
      "Implement rate limiting with INCR and EXPIRE",
      "Build a cache-aside layer for an API endpoint",
      "Create a producer/consumer queue with Redis lists",
      "Publish and subscribe to a channel with two clients",
    ],
    miniProject: {
      title: "Caching & Queue Layer",
      description:
        "Add Redis to the Notes API: cache expensive queries, rate-limit endpoints, and push background jobs to a queue consumed by a worker.",
      checklist: [
        "Cache GET responses with TTL and invalidation on writes",
        "Rate limit auth endpoints per IP/key",
        "Push 'embed this note' jobs to a Redis list",
        "Write a worker that consumes and logs jobs",
        "Measure cache hit/miss and report",
      ],
    },
    checklist: [
      "Master Redis data structures",
      "Complete all 4 exercises",
      "Build the caching & queue layer",
      "Write notes on caching strategies",
    ],
  },
];

export const capstone2: Capstone = {
  id: "capstone-2",
  title: "Production API for an AI Notes App",
  description:
    "Combine every backend skill: build a FastAPI service with PostgreSQL persistence, Redis caching and queues, JWT auth, rate limiting, structured logging, a pytest suite, and a Docker-based deployment — the exact shape of a real production service.",
  objectives: [
    "Design and build a complete REST API following clean architecture",
    "Persist data in PostgreSQL with migrations and proper indexing",
    "Layer Redis caching, rate limiting, and a background queue",
    "Implement JWT authentication with role-based access control",
    "Ship a tested, containerized, deployable service",
  ],
  requiredSkills: ["HTTP & REST", "Python", "FastAPI", "PostgreSQL", "Redis", "JWT", "Docker"],
  difficulty: "advanced",
  estimatedHours: 30,
  xp: 800,
  technologies: ["fastapi", "python", "postgresql", "redis", "jwt", "docker", "http"],
  checklist: [
    "Architecture: clean separation of routers, services, repositories, schemas",
    "Database: Alembic migrations, indexes on hot queries, seeded data",
    "Cache & queues: Redis cache-aside with invalidation, background job worker",
    "Auth: JWT access/refresh tokens, roles, protected routes",
    "Quality: pytest suite covering happy and failure paths",
    "Ops: Dockerfile + docker-compose, structured logs, /health",
    "Docs: README with setup, architecture, and API overview",
    "Final review: self-assessment against the rubric",
  ],
};

const modules2: Module[] = [
  {
    id: "s2-m1",
    title: "HTTP & REST APIs",
    description: "The protocol and design principles behind every integration you will ever build.",
    technologies: ["http", "rest-api"],
    lessons: http,
  },
  {
    id: "s2-m2",
    title: "Python",
    description: "The AI lingua franca. Write clean, typed, testable Python that scales.",
    technologies: ["python"],
    lessons: python,
  },
  {
    id: "s2-m3",
    title: "FastAPI",
    description: "Modern Python APIs with automatic validation, docs, and async by design.",
    technologies: ["fastapi"],
    lessons: fastapi,
  },
  {
    id: "s2-m4",
    title: "PostgreSQL & Redis",
    description: "Durable relational storage plus blazing-fast caching, queues, and pub/sub.",
    technologies: ["postgresql", "redis"],
    lessons: databases,
  },
];

export const semester2: Semester = {
  id: "semester-2",
  number: 2,
  title: "Backend Engineering",
  description:
    "Build the systems that power AI products: APIs, databases, caching, auth, and deployment.",
  tagline: "Learn to build and ship real backend systems",
  icon: Server,
  color: "#22C55E",
  duration: "12 weeks",
  xp: 250,
  modules: modules2,
  capstone: capstone2,
};
