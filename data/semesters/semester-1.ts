import type { Capstone, Lesson, Module, Semester } from "@/types";
import { Code2 } from "lucide-react";

const javascript: Lesson[] = [
  {
    id: "s1-m1-l1",
    title: "JavaScript Fundamentals",
    description:
      "Learn the core building blocks of JavaScript: variables, data types, operators, control flow and the mental model of how JS runs in the browser and Node.js.",
    objectives: [
      "Explain what JavaScript is and where it runs (browser + Node.js)",
      "Use let, const, var correctly and understand scoping differences",
      "Work confidently with strings, numbers, booleans, null and undefined",
      "Write control flow with if/else, switch, and loops",
      "Debug code using console and browser DevTools",
    ],
    durationMinutes: 180,
    difficulty: "beginner",
    prerequisites: ["Basic computer literacy", "A modern browser"],
    technologies: ["javascript"],
    whyLearn:
      "JavaScript is the only language that runs natively in every browser and powers the entire AI-automation toolchain from the frontend to Node.js backends and agent runtimes.",
    useCases: [
      "Building interactive web dashboards for automation tools",
      "Writing automation scripts that run in Node.js",
      "Configuring and extending tools like n8n with custom JS",
      "Powering the UI layer of every modern AI application",
    ],
    commonMistakes: [
      "Using var and confusing hoisting with actual behavior",
      "Comparing with == instead of strict === equality",
      "Forgetting to convert types and hitting NaN surprises",
      "Not understanding truthy/falsy coercion in conditions",
    ],
    officialDocs: [
      { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
      { label: "MDN JavaScript Reference", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" },
    ],
    youtubeVideo: {
      label: "JavaScript Crash Course for Beginners (Traversy Media)",
      url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    },
    readings: [
      { label: "Eloquent JavaScript (free online book)", url: "https://eloquentjavascript.net/" },
      { label: "JavaScript.info - The Modern JavaScript Tutorial", url: "https://javascript.info/" },
    ],
    resources: [
      { label: "MDN JavaScript playground (try live code)", url: "https://developer.mozilla.org/en-US/play" },
      { label: "Node.js official site", url: "https://nodejs.org/" },
    ],
    exercises: [
      "Write a program that converts Celsius to Fahrenheit and validates input",
      "Build a simple FizzBuzz that logs numbers 1-100 with fizz/buzz rules",
      "Create a truth table script that prints JS equality gotchas with == vs ===",
      "Rewrite a for loop as a while loop and as a do-while loop",
    ],
    miniProject: {
      title: "Interactive Tip Calculator",
      description:
        "Build a script that computes a tip based on bill amount, service quality, and number of people splitting the bill. Use functions, conditionals and template literals.",
      checklist: [
        "Prompt for bill amount, tip % and party size",
        "Validate inputs and show helpful errors",
        "Compute total per person and format currency",
        "Handle edge cases: zero bill, negative numbers, huge parties",
        "Refactor with clear, named functions",
      ],
    },
    checklist: [
      "Watch the crash course video",
      "Follow along in the browser console and Node REPL",
      "Complete all 4 exercises",
      "Build the tip calculator mini project",
      "Read the MDN guide sections on data types and control flow",
      "Write personal notes explaining your mental model",
    ],
  },
  {
    id: "s1-m1-l2",
    title: "Functions, Scope & Closures",
    description:
      "Master the single most important concept in JavaScript: functions as values. Understand scope chains, hoisting, closures, this-binding and why they matter in real apps.",
    objectives: [
      "Declare functions with declarations, expressions, and arrow syntax",
      "Explain lexical scope, scope chains, and closures",
      "Use closures to create private state and module patterns",
      "Understand how this binds differently in regular vs arrow functions",
      "Use default, rest, and destructured parameters",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["JavaScript Fundamentals"],
    technologies: ["javascript"],
    whyLearn:
      "Closures and higher-order functions are the foundation of every JS framework, React hooks, event handlers, and the functional patterns used throughout automation pipelines.",
    useCases: [
      "React useState/useEffect rely on closures internally",
      "Event listeners and callbacks in browser automation",
      "Memoizing expensive computations in data pipelines",
      "Creating factory functions for reusable configuration",
    ],
    commonMistakes: [
      "Expecting arrow functions to have their own this",
      "Losing closure state in for-loop callbacks with var",
      "Mutating captured variables when you meant to copy them",
      "Creating memory leaks by holding stale references in closures",
    ],
    officialDocs: [
      { label: "MDN Functions Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
      { label: "MDN Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" },
    ],
    youtubeVideo: {
      label: "Closures in 100 Seconds (Fireship)",
      url: "https://www.youtube.com/watch?v=vKJpN5FAeF4",
    },
    readings: [
      { label: "You Don't Know JS: Scope & Closures", url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md" },
      { label: "JavaScript.info - Closures", url: "https://javascript.info/closure" },
    ],
    resources: [
      { label: "JavaScript Visualizer for scope/closure", url: "https://www.jsv9000.app/" },
    ],
    exercises: [
      "Implement a counter() factory that returns increment/decrement/reset functions with private state",
      "Write a memoize(fn) higher-order function that caches results by argument",
      "Fix a classic for-loop-with-var closure bug and explain the fix",
      "Build a throttle(fn, wait) utility and test it with setInterval",
    ],
    miniProject: {
      title: "Debounced Search Library",
      description:
        "Create a small library exposing debounce and throttle utilities built on closures. Export it as a module and write a demo that simulates rapid keystrokes.",
      checklist: [
        "Implement debounce(fn, delay) using a closure over a timer id",
        "Implement throttle(fn, limit) with trailing call support",
        "Export both as a module and import them in a demo file",
        "Simulate a search box calling the API on every keystroke",
        "Document each function with JSDoc comments",
      ],
    },
    checklist: [
      "Understand the difference between function declaration, expression, and arrow",
      "Explain lexical scope and closures out loud",
      "Complete the 4 exercises",
      "Build the debounce/throttle mini project",
      "Read JavaScript.info closures chapter",
      "Write notes on how React uses closures",
    ],
  },
  {
    id: "s1-m1-l3",
    title: "Arrays, Objects & Higher-Order Functions",
    description:
      "Work with JavaScript's workhorse data structures using map, filter, reduce and friends. Learn to transform data the way real data pipelines do.",
    objectives: [
      "Use array methods: map, filter, reduce, forEach, find, some, every, sort",
      "Copy and mutate arrays and objects without aliasing bugs",
      "Use destructuring and spread for objects and arrays",
      "Chain functional transformations into clean pipelines",
      "Understand immutability and why it matters for UI state",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["JavaScript Fundamentals", "Functions, Scope & Closures"],
    technologies: ["javascript"],
    whyLearn:
      "Every AI automation pipeline is data transformation. Reduce, map and filter are the same patterns you will later apply in Python, SQL and agent workflows.",
    useCases: [
      "Normalizing API responses before rendering or storing",
      "Aggregating logs and metrics in monitoring dashboards",
      "Filtering and deduplicating large datasets",
      "Transforming data between formats in ETL-style pipelines",
    ],
    commonMistakes: [
      "Mutating arrays with push inside a map and getting side effects",
      "Not copying nested objects and mutating shared references",
      "Using sort() without a compare function",
      "Over-nesting loops instead of chaining functional methods",
    ],
    officialDocs: [
      { label: "MDN Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" },
    ],
    youtubeVideo: {
      label: "Array methods in JavaScript (Net Ninja)",
      url: "https://www.youtube.com/watch?v=4lqJBBEpjK0",
    },
    readings: [
      { label: "JavaScript.info - Array Methods", url: "https://javascript.info/array-methods" },
      { label: "MDN reduce deep dive", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" },
    ],
    resources: [
      { label: "Higher-order functions explained (freeCodeCamp article)", url: "https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/" },
    ],
    exercises: [
      "Take an array of objects and produce a summary object with count, average, min, max using reduce",
      "Filter, map, and sort a list of books by rating in one pipeline",
      "Deep-clone a nested object without JSON tricks, using recursion",
      "Implement groupBy(cb) on an array of transactions by category",
    ],
    miniProject: {
      title: "Transaction Analyzer",
      description:
        "Write a module that takes an array of bank transactions and computes category totals, monthly averages, largest expense and a top-N summary using only higher-order functions.",
      checklist: [
        "Model transactions as objects with date, category, amount",
        "Compute category totals with reduce",
        "Find the largest expense and busiest month",
        "Chain operations into readable pipelines",
        "Export a pure analyze(transactions) function",
      ],
    },
    checklist: [
      "Build fluency with map, filter, reduce and friends",
      "Understand immutability and shallow vs deep copy",
      "Complete all 4 exercises",
      "Build the transaction analyzer",
      "Read the JavaScript.info array methods chapter",
      "Write notes with your own examples for each method",
    ],
  },
  {
    id: "s1-m1-l4",
    title: "Async JavaScript: Promises & Async/Await",
    description:
      "JavaScript is single-threaded but non-blocking. Learn the event loop, callbacks, Promises, async/await, and how to orchestrate concurrent work without deadlocks.",
    objectives: [
      "Explain the event loop and why setTimeout works the way it does",
      "Create and consume Promises and avoid callback hell",
      "Use async/await with proper error handling (try/catch)",
      "Run tasks in parallel with Promise.all and handle failures with Promise.allSettled",
      "Understand microtasks vs macrotasks ordering",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["JavaScript Fundamentals", "Functions, Scope & Closures"],
    technologies: ["javascript"],
    whyLearn:
      "Every API call, file read and AI model invocation is async. Misunderstanding async is the #1 source of bugs in automation and agent code.",
    useCases: [
      "Calling multiple AI APIs concurrently and aggregating results",
      "Fetching paginated REST endpoints without racing",
      "Retry logic with backoff for flaky network calls",
      "Streaming tokens from LLM responses",
    ],
    commonMistakes: [
      "Awaiting inside loops sequentially when calls are independent",
      "Forgetting try/catch and causing unhandled rejections",
      "Not aborting or canceling stale requests",
      "Trusting Promise.all to survive one rejected promise",
    ],
    officialDocs: [
      { label: "MDN Using Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" },
      { label: "MDN async function", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" },
    ],
    youtubeVideo: {
      label: "Async/Await in 100 Seconds (Fireship)",
      url: "https://www.youtube.com/watch?v=vn3tm0quoqE",
    },
    readings: [
      { label: "JavaScript.info - Promises, async/await", url: "https://javascript.info/async" },
      { label: "MDN event loop article", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" },
    ],
    resources: [
      { label: "Loupe - event loop visualizer", url: "http://latentflip.com/loupe/" },
    ],
    exercises: [
      "Write an async function that fetches 5 pages with Promise.all and returns an ordered array",
      "Build a promiseRetry(fn, times, delay) helper with exponential backoff",
      "Simulate a race between two AI providers and return the first success",
      "Implement a manual promise with states that resolves and rejects correctly",
    ],
    miniProject: {
      title: "Concurrent API Fetcher",
      description:
        "Build a CLI-style script that fetches multiple URLs concurrently with a configurable concurrency limit, retries failures, and prints a clean summary of success/failure.",
      checklist: [
        "Implement a worker pool with configurable concurrency",
        "Add retry with exponential backoff per URL",
        "Collect per-URL results including status and latency",
        "Print a readable summary table",
        "Handle abort signals for graceful shutdown",
      ],
    },
    checklist: [
      "Internalize the event loop and microtask ordering",
      "Complete all 4 exercises",
      "Build the concurrent fetcher mini project",
      "Read JavaScript.info async chapter",
      "Write notes on when to use Promise.all vs allSettled",
    ],
  },
];

const typescript: Lesson[] = [
  {
    id: "s1-m2-l1",
    title: "TypeScript Setup & Basic Types",
    description:
      "Bring static typing to JavaScript. Set up tsconfig, understand the type system's primitives, and learn why type safety saves AI projects from silent runtime failures.",
    objectives: [
      "Install and configure TypeScript with a strict tsconfig",
      "Annotate primitives, arrays, tuples, and enums",
      "Read type errors and fix them methodically",
      "Use type inference to your advantage",
      "Compile and run TS with tsx or ts-node",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["JavaScript Fundamentals"],
    technologies: ["typescript"],
    whyLearn:
      "Large AI and automation codebases are written in TypeScript because LLM-generated JSON is untrusted — strong types catch contract violations before they reach production.",
    useCases: [
      "Typing LLM response schemas to guarantee output shape",
      "Defining strict API contracts for your services",
      "Refactoring automation pipelines safely",
      "Autocomplete and IntelliSense in every editor",
    ],
    commonMistakes: [
      "Using any everywhere and losing all safety",
      "Not enabling strict mode",
      "Treating unknown and any as the same",
      "Ignoring TS errors and building anyway",
    ],
    officialDocs: [
      { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { label: "TypeScript tsconfig reference", url: "https://www.typescriptlang.org/tsconfig" },
    ],
    youtubeVideo: {
      label: "TypeScript Full Course for Beginners (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=gieEQFIfgYc",
    },
    readings: [
      { label: "TypeScript in 100 seconds (Fireship)", url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA" },
      { label: "The TypeScript Handbook intro", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
    ],
    resources: [
      { label: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
    ],
    exercises: [
      "Create a strict project with a hand-written tsconfig from scratch",
      "Type a shape for a user object and a tuple for lat/lng coordinates",
      "Convert a working JS file to TS and fix every implicit any",
      "Write type annotations for a small event emitter",
    ],
    miniProject: {
      title: "Typed Config Loader",
      description:
        "Build a config loader that reads environment variables into a typed Config object, validating types at runtime and compiling the schema with TS.",
      checklist: [
        "Define a Config interface for a service (host, port, retries, apiKey)",
        "Parse process.env with runtime validation helpers",
        "Return precise error messages for missing or mistyped values",
        "Run the project with strict: true and zero errors",
        "Add unit checks for the validation logic",
      ],
    },
    checklist: [
      "Configure a strict TypeScript project",
      "Watch the freeCodeCamp course (first half)",
      "Complete all 4 exercises",
      "Build the typed config loader",
      "Write notes on unknown vs any vs never",
    ],
  },
  {
    id: "s1-m2-l2",
    title: "Interfaces, Types & Generics",
    description:
      "Design robust types with interfaces, type aliases, unions and generics. Model the real shapes your AI applications exchange with models and APIs.",
    objectives: [
      "Choose between interface and type alias deliberately",
      "Model complex data with union and intersection types",
      "Write generic functions, classes, and constraints",
      "Use keyof, typeof, and indexed access types",
      "Create branded types for domain safety",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["TypeScript Setup & Basic Types"],
    technologies: ["typescript"],
    whyLearn:
      "Generic and mapped types let you define a single typed wrapper for any AI model response, any API client, or any event bus — the backbone of reusable infrastructure code.",
    useCases: [
      "A generic API client that types each endpoint's request/response",
      "Typed wrappers around OpenAI/Gemini/Claude clients",
      "State machines and event payloads in agent frameworks",
      "Form validation schemas shared between frontend and backend",
    ],
    commonMistakes: [
      "Defining 10 similar interfaces instead of one generic",
      "Spreading types everywhere instead of composing them",
      "Forgetting to use satisfies to check literals against a type",
      "Using type assertions (as) to paper over design gaps",
    ],
    officialDocs: [
      { label: "TypeScript Generics Handbook", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
      { label: "TypeScript Everyday Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
    ],
    youtubeVideo: {
      label: "TypeScript Generics - Full Course (freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=gieEQFIfgYc",
    },
    readings: [
      { label: "Total TypeScript (free beginner tutorials)", url: "https://www.totaltypescript.com/tutorials" },
      { label: "TypeScript Advanced Types Handbook", url: "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" },
    ],
    resources: [
      { label: "Type Challenges - practice with generics", url: "https://github.com/type-challenges/type-challenges" },
    ],
    exercises: [
      "Write a generic first<T>(arr): T | undefined with full inference",
      "Model a Result<T> = Success | Failure union and a guard function",
      "Implement a typed event emitter using generics with a map of events",
      "Use keyof to write a type-safe pluck(object, ...keys) function",
    ],
    miniProject: {
      title: "Typed API Client",
      description:
        "Build a generic HttpClient that types every request and response based on endpoint definitions, including headers, query params, and error handling.",
      checklist: [
        "Define an Endpoint type mapping path to request/response",
        "Implement request<T>() that is fully type-safe",
        "Support typed query params and headers",
        "Return a discriminated Result<T, ApiError>",
        "Write tests showing type safety at the call site",
      ],
    },
    checklist: [
      "Master generics syntax and inference",
      "Complete all 4 exercises",
      "Build the typed API client",
      "Try 5 problems on type-challenges",
      "Write notes on when to use union vs intersection",
    ],
  },
  {
    id: "s1-m2-l3",
    title: "Advanced Types: Guards, Utilities & Patterns",
    description:
      "Go deep on type narrowing, user-defined guards, template literal types, utility types, and decorators to write type-safe code that survives in production.",
    objectives: [
      "Write user-defined type guard functions",
      "Use narrowing with in, instanceof, and discriminated unions",
      "Apply built-in utility types (Partial, Pick, Omit, Record, ReturnType)",
      "Create template literal types for routes and event names",
      "Validate untrusted data into typed values safely",
    ],
    durationMinutes: 180,
    difficulty: "advanced",
    prerequisites: ["Interfaces, Types & Generics"],
    technologies: ["typescript"],
    whyLearn:
      "AI outputs are untrusted strings. Production-grade apps validate those strings into typed domain models — guards and parsers are how you stay safe.",
    useCases: [
      "Parsing and validating LLM JSON output",
      "Narrowing WebSocket message types",
      "Building type-safe route paths with template literal types",
      "Runtime schema validation (zod-style patterns)",
    ],
    commonMistakes: [
      "Trusting as after an LLM returns JSON",
      "Writing guards that lie (returning true without real checks)",
      "Using any to escape deeply nested type problems",
      "Not discriminating unions with a literal tag field",
    ],
    officialDocs: [
      { label: "TypeScript Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
      { label: "TypeScript Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" },
    ],
    youtubeVideo: {
      label: "TypeScript Narrowing - Advanced (Fireship)",
      url: "https://www.youtube.com/watch?v=Ge3yG7m-FDk",
    },
    readings: [
      { label: "Zod docs - schema validation", url: "https://zod.dev/" },
      { label: "Basarat's TypeScript deep dive", url: "https://basarat.gitbook.io/typescript" },
    ],
    resources: [
      { label: "TS essentials cheatsheet", url: "https://www.typescriptlang.org/cheatsheets/" },
    ],
    exercises: [
      "Write a guard isUser(x): x is User that checks shape at runtime",
      "Parse an unknown JSON blob into a typed object with explicit validation",
      "Build a DiscriminatedEvent type and a handler that narrows per tag",
      "Compose Partial, Pick and Record into a domain config type",
    ],
    miniProject: {
      title: "LLM Output Validator",
      description:
        "Create a validator that takes an LLM's raw JSON string and returns a fully typed, validated object or a precise list of validation errors.",
      checklist: [
        "Define the expected schema with discriminated unions",
        "Write hand-rolled guards that verify every field",
        "Return collected error paths, not just a boolean",
        "Add a fallback to strict parsing if LLM wraps JSON in markdown",
        "Unit test with valid, invalid, and malicious payloads",
      ],
    },
    checklist: [
      "Master narrowing and discriminated unions",
      "Learn the core utility types",
      "Complete all 4 exercises",
      "Build the LLM output validator",
      "Write notes comparing guards vs zod",
    ],
  },
  {
    id: "s1-m2-l4",
    title: "TypeScript in Real Projects",
    description:
      "Apply everything in a real project: project structure, tsconfig strictness, path aliases, testing setup, and migrating a JavaScript codebase safely.",
    objectives: [
      "Structure a production TS project with clear layering",
      "Configure path aliases, module resolution, and build tooling",
      "Write and run unit tests with Vitest or Jest",
      "Migrate a JS codebase incrementally with allowJs and checkJs",
      "Use declaration files to type third-party libraries",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Advanced Types: Guards, Utilities & Patterns"],
    technologies: ["typescript", "javascript"],
    whyLearn:
      "Real automation projects are maintained for months. The difference between a prototype and a product is exactly the discipline this lesson installs.",
    useCases: [
      "Building a maintainable SDK for an internal automation API",
      "Sharing types between frontend and backend packages",
      "Onboarding a team onto a large legacy JS codebase",
      "Keeping AI-generated code type-checked",
    ],
    commonMistakes: [
      "One giant src/ with no layering",
      "disable eslint/tsc complaints instead of fixing them",
      "Skipping tests because types exist",
      "Ignoring declaration files for untyped dependencies",
    ],
    officialDocs: [
      { label: "TypeScript Project Configuration", url: "https://www.typescriptlang.org/docs/handbook/project-configuration.html" },
      { label: "Vitest docs", url: "https://vitest.dev/guide/" },
    ],
    youtubeVideo: {
      label: "TypeScript Project Setup & Structure (Jack Herrington)",
      url: "https://www.youtube.com/watch?v=1UcLoOD1lWM",
    },
    readings: [
      { label: "Clean Code TypeScript (open source)", url: "https://github.com/labs42io/clean-code-typescript" },
      { label: "TypeScript ESLint rules", url: "https://typescript-eslint.io/" },
    ],
    resources: [
      { label: "TS project references docs", url: "https://www.typescriptlang.org/docs/handbook/project-references.html" },
    ],
    exercises: [
      "Set up Vitest and write tests for the config loader from module 2",
      "Add path aliases (@/lib, @/types) and refactor imports",
      "Create a declaration file for an untyped npm package",
      "Enable checkJs on a small JS file and fix the reported issues",
    ],
    miniProject: {
      title: "Script Runner CLI",
      description:
        "Build a small TypeScript CLI (with Commander or plain argv) that discovers and runs automation scripts in a folder, with typed config, logging and tests.",
      checklist: [
        "Define a Script manifest type with name, command, timeout",
        "Discover scripts from a configurable directory",
        "Run a script and capture output, exit code, and duration",
        "Write unit tests for parsing and execution logic",
        "Add --help, --list and --run flags",
      ],
    },
    checklist: [
      "Set up a clean project structure",
      "Wire up testing and linting",
      "Complete all 4 exercises",
      "Build the Script Runner CLI",
      "Write notes on your project conventions",
    ],
  },
];

const git: Lesson[] = [
  {
    id: "s1-m3-l1",
    title: "Git Fundamentals",
    description:
      "Understand how Git snapshots your work. Learn staging, commits, history, and the mental model of the three trees.",
    objectives: [
      "Initialize repositories and stage/commit changes with good messages",
      "Navigate history with log, show, and diff",
      "Undo mistakes with restore, reset, and revert",
      "Use .gitignore and understand tracked vs untracked",
      "Describe how Git stores commits, trees, and blobs",
    ],
    durationMinutes: 150,
    difficulty: "beginner",
    prerequisites: ["Basic command line comfort"],
    technologies: ["git"],
    whyLearn:
      "Git is the backbone of professional engineering. Every project, every AI artifact, every deployment is tracked with Git — it is your safety net.",
    useCases: [
      "Tracking changes to automation scripts and configs",
      "Collaborating on shared codebases",
      "Reproducing and reverting experiments",
      "Auditing who changed what and when",
    ],
    commonMistakes: [
      "Committing secrets and API keys",
      "Writing vague messages like 'fix' or 'update'",
      "Committing huge generated files",
      "Using force push casually and destroying history",
    ],
    officialDocs: [
      { label: "Git documentation", url: "https://git-scm.com/doc" },
      { label: "Git reference manual", url: "https://git-scm.com/docs" },
    ],
    youtubeVideo: {
      label: "Git and GitHub for Beginners - Crash Course (Traversy Media)",
      url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    },
    readings: [
      { label: "Pro Git book (free)", url: "https://git-scm.com/book/en/v2" },
      { label: "Git in 100 seconds (Fireship)", url: "https://www.youtube.com/watch?v=hwP7WQkmECE" },
    ],
    resources: [
      { label: "Git cheat sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
    ],
    exercises: [
      "Create a repo and build 10 meaningful commits with proper messages",
      "Practice unstaging, amending, and recovering a deleted file with git restore",
      "Compare commits with git diff and git log -p",
      "Write a .gitignore for a Node/TS project and verify ignored files",
    ],
    miniProject: {
      title: "Learning Journal Repo",
      description:
        "Create a personal learning journal repository that you will maintain through the entire academy: one folder per semester, one markdown file per lesson.",
      checklist: [
        "Initialize the repo with a README and .gitignore",
        "Create the semester folder structure",
        "Make meaningful commits as you add content",
        "Write a commit convention (Conventional Commits) in README",
        "Keep history clean and inspectable",
      ],
    },
    checklist: [
      "Internalize the three-trees mental model",
      "Complete all 4 exercises",
      "Set up the learning journal repo",
      "Read Pro Git chapters 1-2",
      "Write notes on undo strategies (reset vs revert)",
    ],
  },
  {
    id: "s1-m3-l2",
    title: "Branching & Merging",
    description:
      "Branch, merge, and resolve conflicts with confidence. Learn strategies that keep main always deployable.",
    objectives: [
      "Create, switch, and delete branches",
      "Merge branches with merge and rebase, understanding trade-offs",
      "Resolve merge conflicts systematically",
      "Use stash to park unfinished work",
      "Follow a branching strategy (GitFlow vs trunk-based)",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["Git Fundamentals"],
    technologies: ["git"],
    whyLearn:
      "Feature branches let you experiment on AI models and pipelines without breaking production. Conflict resolution is a daily skill on any team.",
    useCases: [
      "Experimenting with a new agent workflow on a branch",
      "Parallel work by multiple contributors",
      "Isolating a risky migration behind a feature branch",
      "Reverting a bad merge cleanly",
    ],
    commonMistakes: [
      "Rebasing a shared branch and rewriting teammates' history",
      "Leaving branches open forever",
      "Merging with unverified conflicts",
      "Working directly on main for everything",
    ],
    officialDocs: [
      { label: "Git branch documentation", url: "https://git-scm.com/docs/git-branch" },
      { label: "Git merge documentation", url: "https://git-scm.com/docs/git-merge" },
    ],
    youtubeVideo: {
      label: "Git Branching and Merging (The Net Ninja)",
      url: "https://www.youtube.com/watch?v=HwrPyQ8E4gM",
    },
    readings: [
      { label: "Learn Git Branching (interactive game)", url: "https://learngitbranching.js.org/" },
      { label: "Atlassian merge vs rebase", url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing" },
    ],
    resources: [
      { label: "Git cheatsheet (branching)", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
    ],
    exercises: [
      "Create a feature branch, commit, then merge with --no-ff",
      "Introduce an intentional conflict and resolve it in both sides",
      "Rebase a short-lived feature onto updated main",
      "Practice stashing and popping with a checklist",
    ],
    miniProject: {
      title: "Multi-Stage Project History",
      description:
        "Take an existing mini project and build a realistic history: main always deployable, feature branches for features, a released tag, and a clean merged log.",
      checklist: [
        "Define main as protected and always green",
        "Create at least 3 feature branches with meaningful names",
        "Merge them with clear merge commits",
        "Tag a v1.0.0 release",
        "Write a short branch strategy doc",
      ],
    },
    checklist: [
      "Get fluent at creating and merging branches",
      "Complete all 4 exercises",
      "Complete the Learn Git Branching game",
      "Build the multi-stage project history",
      "Write notes on merge vs rebase trade-offs",
    ],
  },
  {
    id: "s1-m3-l3",
    title: "GitHub: Remotes, Collaboration & Pull Requests",
    description:
      "Use GitHub as the collaboration layer: remotes, issues, pull requests, code review, and protecting your main branch.",
    objectives: [
      "Connect a local repo to a GitHub remote",
      "Open, review, and merge pull requests",
      "Write good issues and use templates",
      "Configure branch protection rules",
      "Collaborate with forks or feature branches",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Branching & Merging"],
    technologies: ["github", "git"],
    whyLearn:
      "GitHub is the professional portfolio and the home of modern open source. Employers evaluate your PRs, issues and READMEs as much as your code.",
    useCases: [
      "Publishing open-source automation libraries",
      "Running team code review processes",
      "Powering GitHub Actions for CI/CD",
      "Hosting documentation and portfolios",
    ],
    commonMistakes: [
      "Pushing directly to main on shared repos",
      "Opening a PR with no description or context",
      "Reviewing code without leaving actionable comments",
      "Not keeping PRs small and reviewable",
    ],
    officialDocs: [
      { label: "GitHub Docs - Collaborating with PRs", url: "https://docs.github.com/en/pull-requests" },
      { label: "GitHub Docs - Issues", url: "https://docs.github.com/en/issues" },
    ],
    youtubeVideo: {
      label: "Pull Requests in 4 minutes (Fireship)",
      url: "https://www.youtube.com/watch?v=5AwhP4gWQ7o",
    },
    readings: [
      { label: "GitHub flow guide", url: "https://docs.github.com/en/get-started/using-github/github-flow" },
      { label: "Writing a great README", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
    ],
    resources: [
      { label: "GitHub student developer pack", url: "https://education.github.com/pack" },
    ],
    exercises: [
      "Push the learning journal repo and write a polished README",
      "Open an issue with a good template describing a bug",
      "Simulate a PR review: add comments, request changes, then approve",
      "Protect main with required reviews and test branch protection",
    ],
    miniProject: {
      title: "Open Source Contribution",
      description:
        "Find a small open-source project, read its contributing guide, and open a real or high-quality dummy pull request following all their conventions.",
      checklist: [
        "Pick a project with friendly first issues",
        "Read CONTRIBUTING and setup instructions",
        "Create a branch and make a small, focused change",
        "Open a PR that follows their templates",
        "Respond to review feedback gracefully",
      ],
    },
    checklist: [
      "Understand the full PR lifecycle",
      "Complete all 4 exercises",
      "Complete the open source contribution",
      "Write notes on good PR etiquette",
    ],
  },
  {
    id: "s1-m3-l4",
    title: "Professional Git Workflows",
    description:
      "Adopt workflows that scale: Conventional Commits, semantic versioning, changelogs, Git Hooks, and automation around your Git history.",
    objectives: [
      "Write Conventional Commits and enforce them with hooks",
      "Use semantic versioning for releases",
      "Generate changelogs from commit history",
      "Set up Git hooks (pre-commit linting, commitlint)",
      "Structure multi-developer workflows with GitFlow or trunk-based dev",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["GitHub: Remotes, Collaboration & Pull Requests"],
    technologies: ["git", "github", "cicd"],
    whyLearn:
      "Professional repositories are automated: linted commits, semantic releases, and machine-readable history. This is what makes a year-long project maintainable.",
    useCases: [
      "Automating version bumps and changelogs on release",
      "Enforcing code style before commits",
      "Generating release notes for stakeholders",
      "Keeping a clean, readable project timeline",
    ],
    commonMistakes: [
      "Vague commit messages that break automation",
      "Versioning manually and inconsistently",
      "Skipping hooks because they are annoying",
      "Mixing unrelated changes in one commit",
    ],
    officialDocs: [
      { label: "Conventional Commits spec", url: "https://www.conventionalcommits.org/" },
      { label: "Semantic Versioning spec", url: "https://semver.org/" },
    ],
    youtubeVideo: {
      label: "Git Workflow Best Practices (ThePrimeagen)",
      url: "https://www.youtube.com/watch?v=5AwhP4gWQ7o",
    },
    readings: [
      { label: "Git Hooks documentation", url: "https://git-scm.com/docs/githooks" },
      { label: "husky - Git hooks made easy", url: "https://typicode.github.io/husky/" },
    ],
    resources: [
      { label: "commitlint - lint commit messages", url: "https://commitlint.js.org/" },
      { label: "semantic-release", url: "https://semantic-release.gitbook.io/" },
    ],
    exercises: [
      "Install husky and enforce lint before every commit",
      "Configure commitlint and commit with at least 5 conventional messages",
      "Set up semantic-release in a practice repo and cut a release",
      "Write a CONTRIBUTING.md documenting your workflow",
    ],
    miniProject: {
      title: "Release Automation Demo",
      description:
        "Turn the Script Runner CLI into a professionally managed repo with conventional commits, a semantic release pipeline and a generated changelog.",
      checklist: [
        "Standardize on Conventional Commits",
        "Add pre-commit hooks for formatting and linting",
        "Automate versioning and changelog generation",
        "Document the workflow in CONTRIBUTING.md",
        "Cut and tag a real v1.0.0 release",
      ],
    },
    checklist: [
      "Adopt Conventional Commits",
      "Set up Git hooks",
      "Complete all 4 exercises",
      "Automate a release in the mini project",
      "Write notes on your personal Git workflow",
    ],
  },
];

const linux: Lesson[] = [
  {
    id: "s1-m4-l1",
    title: "Linux Fundamentals",
    description:
      "The operating system of the cloud and of AI infrastructure. Learn navigation, files, help systems, and the philosophy of the command line.",
    objectives: [
      "Navigate the filesystem with pwd, ls, cd, find",
      "Read, create, edit, and move files with CLI tools",
      "Understand the Linux philosophy: small tools, pipes",
      "Use man pages and --help to learn any command",
      "Work comfortably in a shell on a real Linux machine",
    ],
    durationMinutes: 180,
    difficulty: "beginner",
    prerequisites: ["Basic computer usage"],
    technologies: ["linux"],
    whyLearn:
      "Every server, container, and cloud function you will ever deploy runs on Linux. AI training, inference and automation all happen on Linux hosts.",
    useCases: [
      "Deploying AI services on cloud VMs",
      "Debugging containers and servers",
      "Running automation workers and cron jobs",
      "Managing GPU servers for model training",
    ],
    commonMistakes: [
      "Using Windows habits (like relying on a GUI) when a CLI is faster",
      "Running commands without understanding what they do",
      "Using rm -rf carelessly",
      "Not learning to use the manual pages",
    ],
    officialDocs: [
      { label: "GNU Coreutils manual", url: "https://www.gnu.org/software/coreutils/manual/coreutils.html" },
      { label: "Bash reference manual", url: "https://www.gnu.org/software/bash/manual/" },
    ],
    youtubeVideo: {
      label: "Beginner's Guide to the Bash Terminal (Joe Collins / freeCodeCamp)",
      url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak",
    },
    readings: [
      { label: "Linux Journey - free interactive course", url: "https://linuxjourney.com/" },
      { label: "The Linux Command Line (free book)", url: "https://linuxcommand.org/tlcl.php" },
    ],
    resources: [
      { label: "explainshell - explain any command", url: "https://explainshell.com/" },
      { label: "OverTheWire Bandit wargame", url: "https://overthewire.org/wargames/bandit/" },
    ],
    exercises: [
      "Complete the first 10 levels of OverTheWire Bandit",
      "Create a directory tree for a project and manage files with mv/cp/rm",
      "Practice using man, info and --help for 5 unfamiliar commands",
      "Combine 3 small commands with pipes to solve a text problem",
    ],
    miniProject: {
      title: "System Scout",
      description:
        "Write a one-liner and a script that reports system health: uptime, memory, disk usage, top processes, and recent logins — readable at a glance.",
      checklist: [
        "Use commands like uptime, free, df, ps, last",
        "Format output with awk/sort/head into a clean summary",
        "Handle a system with multiple drives gracefully",
        "Make the script executable and place it in a scripts folder",
        "Document each command in the script with comments",
      ],
    },
    checklist: [
      "Complete Bandit levels 0-10",
      "Master file and directory operations",
      "Complete all 4 exercises",
      "Build the System Scout script",
      "Read The Linux Command Line (chapters 1-6)",
      "Write notes on the tools you will use daily",
    ],
  },
  {
    id: "s1-m4-l2",
    title: "File System & Permissions",
    description:
      "Understand the Linux filesystem hierarchy, permissions, ownership, and the subtle rules that keep multi-user systems safe.",
    objectives: [
      "Navigate the Filesystem Hierarchy Standard (FHS)",
      "Interpret rwx permissions and apply chmod/chown correctly",
      "Understand users, groups, and sudo",
      "Work with hard links, symlinks, and inodes",
      "Use find, grep, and wildcards to operate on files safely",
    ],
    durationMinutes: 150,
    difficulty: "intermediate",
    prerequisites: ["Linux Fundamentals"],
    technologies: ["linux"],
    whyLearn:
      "Container security, user isolation, and data protection all come down to permissions. Most server breaches are permission misconfigurations.",
    useCases: [
      "Securing API keys and private files on servers",
      "Configuring read-only mounts in Docker",
      "Setting up service users for automation workers",
      "Debugging 'permission denied' in CI pipelines",
    ],
    commonMistakes: [
      "Running chmod 777 on everything",
      "Using root for routine tasks",
      "Misunderstanding octal permission math",
      "Putting secrets in world-readable files",
    ],
    officialDocs: [
      { label: "GNU coreutils - permissions", url: "https://www.gnu.org/software/coreutils/manual/coreutils.html#File-permissions" },
    ],
    youtubeVideo: {
      label: "Linux File Permissions in 100 seconds (Fireship)",
      url: "https://www.youtube.com/watch?v=AG7vv05YHDs",
    },
    readings: [
      { label: "Linux Journey - Permissions", url: "https://linuxjourney.com/lesson/file-permissions" },
      { label: "Filesystem Hierarchy Standard", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" },
    ],
    resources: [
      { label: "Permission calculator tool", url: "https://chmod-calculator.com/" },
    ],
    exercises: [
      "Explain and apply rwx, octal (755, 644, 700) and symbolic modes",
      "Create a shared folder with a group and sticky bit (/tmp behavior)",
      "Use find with -perm and -user to locate risky files",
      "Fix a deliberately broken permission setup on a practice dir",
    ],
    miniProject: {
      title: "Secure Home Directory Setup",
      description:
        "Design a secure layout for a developer home directory: private keys, project folders, and scripts each with the minimal permissions they need.",
      checklist: [
        "Create ~/.ssh with 700/600 permissions",
        "Set up project dirs with correct ownership",
        "Make only scripts executable, not configs",
        "Document the permission map in a README",
        "Verify with find and ls -la",
      ],
    },
    checklist: [
      "Master octal and symbolic permissions",
      "Complete all 4 exercises",
      "Build the secure home directory setup",
      "Write notes on users, groups, and sudo",
    ],
  },
  {
    id: "s1-m4-l3",
    title: "Shell Scripting",
    description:
      "Automate anything with Bash. Variables, conditionals, loops, functions, and the patterns behind every production script.",
    objectives: [
      "Write robust Bash scripts with set -euo pipefail",
      "Use variables, arrays, conditionals and loops",
      "Write reusable functions and source shared libraries",
      "Handle exit codes and errors explicitly",
      "Build idempotent scripts you can run repeatedly",
    ],
    durationMinutes: 180,
    difficulty: "intermediate",
    prerequisites: ["Linux Fundamentals", "File System & Permissions"],
    technologies: ["linux"],
    whyLearn:
      "Automation engineers script everything: backups, deployments, cron jobs, and AI pipeline glue. Bash is the duct tape of the entire cloud.",
    useCases: [
      "Deploy scripts that provision servers",
      "Scheduled data cleanup and backup jobs",
      "Wrapping Python/Node automation in reliable entrypoints",
      "Bootstrap scripts for new machines",
    ],
    commonMistakes: [
      "Not quoting variables (spaces break everything)",
      "Missing set -euo pipefail and hiding failures",
      "Using ls parsing in loops",
      "Writing non-idempotent scripts that fail on re-run",
    ],
    officialDocs: [
      { label: "Bash scripting guide (TLDP)", url: "https://tldp.org/LDP/abs/html/" },
      { label: "GNU Bash manual", url: "https://www.gnu.org/software/bash/manual/" },
    ],
    youtubeVideo: {
      label: "Shell Scripting Crash Course (Traversy Media)",
      url: "https://www.youtube.com/watch?v=v-F3YLd6oEM",
    },
    readings: [
      { label: "Bash pitfalls - great writeup", url: "https://mywiki.wooledge.org/BashPitfalls" },
      { label: "Google Shell Style Guide", url: "https://google.github.io/styleguide/shellguide.html" },
    ],
    resources: [
      { label: "ShellCheck - lint your scripts", url: "https://www.shellcheck.net/" },
    ],
    exercises: [
      "Write a backup script with timestamps and rotation (keep last 7)",
      "Create a menu-driven script with functions for common tasks",
      "Write a script that greps logs, counts errors, and emails a summary",
      "Add strict mode and error handling to an existing messy script",
    ],
    miniProject: {
      title: "Dev Environment Bootstrap",
      description:
        "Write an idempotent script that sets up a fresh Linux machine: installs tools, clones dotfiles, configures SSH, and prints a summary of what changed.",
      checklist: [
        "Use set -euo pipefail and check running as correct user",
        "Detect the package manager and install tools conditionally",
        "Idempotently configure dotfiles and SSH permissions",
        "Log each action with a clear prefix",
        "Verify completion with a final health check",
      ],
    },
    checklist: [
      "Master Bash control flow and functions",
      "Complete all 4 exercises",
      "Build the bootstrap script",
      "Write notes on bash pitfalls",
    ],
  },
  {
    id: "s1-m4-l4",
    title: "Processes, Services & CLI Power Tools",
    description:
      "Run and supervise processes, schedule jobs with cron, and level up your terminal with tools that make you 10x faster.",
    objectives: [
      "Manage processes with ps, top, htop, kill, and signals",
      "Run background jobs with & and nohup",
      "Manage services with systemd (systemctl)",
      "Schedule tasks with cron and systemd timers",
      "Use powerful text tools: grep, sed, awk, jq, ripgrep",
    ],
    durationMinutes: 150,
    difficulty: "advanced",
    prerequisites: ["Shell Scripting"],
    technologies: ["linux"],
    whyLearn:
      "AI workloads are long-running services. If you cannot supervise, restart, and debug processes, you cannot run production AI systems.",
    useCases: [
      "Running and monitoring worker processes",
      "Auto-restarting services after crashes with systemd",
      "Scheduling nightly retraining jobs with cron",
      "Parsing JSON logs with jq in CI",
    ],
    commonMistakes: [
      "Killing processes with SIGKILL before trying SIGTERM",
      "Using cron without logging output",
      "Not daemonizing long-running jobs properly",
      "Ignoring zombie processes and resource leaks",
    ],
    officialDocs: [
      { label: "systemd.service man page", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html" },
      { label: "cron documentation", url: "https://man7.org/linux/man-pages/man8/cron.8.html" },
    ],
    youtubeVideo: {
      label: "Linux Crash Course - Understanding Processes (Learn Linux TV)",
      url: "https://www.youtube.com/watch?v=PB69EjqoP9Q",
    },
    readings: [
      { label: "jq manual", url: "https://jqlang.github.io/jq/manual/" },
      { label: "awk - GNU manual", url: "https://www.gnu.org/software/gawk/manual/gawk.html" },
    ],
    resources: [
      { label: "cheat.sh - community cheatsheets", url: "https://cheat.sh/" },
      { label: "tldr pages", url: "https://tldr.sh/" },
    ],
    exercises: [
      "Start a process, background it, and kill it with SIGTERM vs SIGKILL",
      "Write a systemd service for a simple Python HTTP server and enable it",
      "Create a cron job that runs a backup script with logging",
      "Use jq to parse a JSON API response and extract fields",
    ],
    miniProject: {
      title: "Service Supervisor",
      description:
        "Build a small stack: a worker script that periodically writes a heartbeat, a systemd service that keeps it alive, and a cron job that reports if it ever dies.",
      checklist: [
        "Write the worker with graceful shutdown on SIGTERM",
        "Create a systemd unit with Restart=always",
        "Enable and verify auto-restart after a kill",
        "Add a cron health check that logs and alerts",
        "Document the whole setup in a README",
      ],
    },
    checklist: [
      "Master process supervision",
      "Complete all 4 exercises",
      "Build the service supervisor",
      "Write notes on systemd units and cron",
    ],
  },
];

export const capstone1: Capstone = {
  id: "capstone-1",
  title: "The Developer's Command Center",
  description:
    "Synthesize Semester 1 into a single showcase: a Linux-based development environment you can reproduce anywhere, an automation toolkit written in TypeScript, and a professional GitHub repository that proves you are ready for real engineering work.",
  objectives: [
    "Set up and script a complete, reproducible Linux developer environment",
    "Build a TypeScript CLI toolkit that automates everyday developer tasks",
    "Apply professional Git workflows with conventional commits and releases",
    "Ship a portfolio-quality GitHub repository with documentation and CI",
    "Demonstrate mastery of the command line, scripting, and version control",
  ],
  requiredSkills: ["JavaScript", "TypeScript", "Git & GitHub", "Linux & Shell scripting"],
  difficulty: "intermediate",
  estimatedHours: 20,
  xp: 500,
  technologies: ["javascript", "typescript", "git", "github", "linux"],
  checklist: [
    "Environment: bootstrap script fully automates setup and is idempotent",
    "CLI toolkit: at least 5 useful commands built in TypeScript with tests",
    "Git discipline: conventional commits, feature branches, clean history",
    "CI: GitHub Actions runs lint, typecheck and tests on every PR",
    "Documentation: polished README with usage examples and architecture",
    "Final review: code reviewed and self-assessed against a rubric",
  ],
};

const modules: Module[] = [
  {
    id: "s1-m1",
    title: "JavaScript Essentials",
    description:
      "The universal language of the web and automation. Build a rock-solid mental model before touching frameworks.",
    technologies: ["javascript"],
    lessons: javascript,
  },
  {
    id: "s1-m2",
    title: "TypeScript",
    description:
      "JavaScript that scales. Type safety is what keeps large AI and automation codebases reliable.",
    technologies: ["typescript"],
    lessons: typescript,
  },
  {
    id: "s1-m3",
    title: "Git & GitHub",
    description:
      "Version control is your safety net and your portfolio. Learn the workflows professionals use daily.",
    technologies: ["git", "github"],
    lessons: git,
  },
  {
    id: "s1-m4",
    title: "Linux & the Command Line",
    description:
      "The cloud runs on Linux. Become fluent with the shell, scripting, and process management.",
    technologies: ["linux"],
    lessons: linux,
  },
];

export const semester1: Semester = {
  id: "semester-1",
  number: 1,
  title: "Software Foundations",
  description:
    "Master the raw materials: JavaScript, TypeScript, Git, and Linux. Everything you build for the next five semesters stands on this layer.",
  tagline: "Build the foundation that everything else stands on",
  icon: Code2,
  color: "#3B82F6",
  duration: "12 weeks",
  xp: 250,
  modules,
  capstone: capstone1,
};
