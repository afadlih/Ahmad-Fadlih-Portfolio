export const profile = {
    name: "Ahmad Fadlih Wahyu Sardana",
    shortName: "Ahmad Fadlih",
    initials: "AF",
    username: "afadlih",
    role: "Fullstack Developer building AI automation products",
    secondaryRole: "AI Product Engineering & Automation Systems",
    location: "Indonesia",
    email: "2341720069@student.belajar.id",
    github: "https://github.com/afadlih",
    linkedin: "https://id.linkedin.com/in/ahmad-fadlih-wahyu-sardana-706933283",
    instagram: "https://instagram.com/ach.fadlih",
    headline: "Turning AI features into usable product workflows.",
    subheadline: "Input → Mapping → Validation → Execution → Diagnostics",
    description:
        "I build AI-powered web applications, automation tools, and realtime dashboards. My focus is product workflows where AI has a clear role inside a bigger system: analyze input, map fields, generate or decide, validate the result, execute safely, and explain what happened.",
    about:
        "I build fullstack web applications and AI-assisted workflows with a product-oriented mindset. I care about systems that remain useful when input is messy, output is uncertain, or users need a clear next action.",
    goal:
        "Grow into an AI Product Engineer who can build useful, reliable, and real-world technology solutions.",
    motto: "Build real systems. Make them useful. Keep improving.",
};

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export const floatingBadges = ["Next.js", "TS", "AI", "FastAPI"];

export const coreFocus = [
    "Fullstack web development with Next.js, TypeScript, and Tailwind CSS",
    "AI workflow design using Gemini API and structured output",
    "Automation systems with validation, fallback, execution, and diagnostics",
    "Realtime dashboards for IoT and operational monitoring",
];

export const focusAreas = [
    "AI-powered product workflows",
    "Google Form automation and rule engines",
    "Decision systems with scoring and recommendation logic",
    "Fullstack web applications with clean operator-facing UI",
    "Realtime IoT dashboards and telemetry monitoring",
    "Reliable systems with validation, fallback, and actionable error states",
];

export const currentFocus = [
    "Polishing FormAI into a stronger end-to-end automation platform",
    "Improving frontend orchestration, runtime states, and operator diagnostics",
    "Building AI workflows with clearer validation, fallback, and result contracts",
    "Strengthening testing, linting, build checks, and documentation habits",
];

export const systemFlow = [
    "Raw input",
    "Structured data",
    "Rules",
    "AI fallback",
    "Validation",
    "Execution",
    "Diagnostics",
];

export const coreSkills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "FastAPI",
    "Gemini API",
    "Firebase",
    "MQTT",
    "MySQL",
];

export const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "Flutter",
    "Dart",
    "MySQL",
    "Firebase",
    "MQTT",
    "Gemini API",
    "Selenium",
    "Git",
    "GitHub",
    "Figma",
];

export const featuredProjects = [
    {
        title: "FormAI — AI Form Automation Platform",
        description:
            "An end-to-end Google Form automation system designed around form analysis, CSV/manual/rules input, AI fallback, quick checks, execution modes, and diagnostics.",
        keyFeatures: [
            "Google Form analyzer for questions, required fields, options, and submission structure",
            "CSV template workflow for bulk respondent input",
            "Manual override and rule-based answer generation",
            "Gemini fallback for ambiguous or undefined text answers",
            "Fast HTTP submit mode and Smart Browser/Selenium mode",
            "Duplicate guard, validation contract, row-level trace, and actionable diagnosis",
        ],
        stack: ["Python", "FastAPI", "Next.js", "TypeScript", "Gemini API", "Selenium"],
        image: "/projects/formai.svg",
        github: "#",
        demo: "#",
    },
    {
        title: "AI Content Strategy & Decision System",
        description:
            "A decision-first content planning app that generates several strategies, scores them, compares tradeoffs, and recommends the strongest strategy with reasoning.",
        keyFeatures: [
            "Generates emotional, educational, and viral strategy variations",
            "Supports Instagram, TikTok, X/Twitter, and LinkedIn",
            "Scores engagement potential, hook quality, CTA strength, relevance, and weaknesses",
            "Selects the best strategy with reasoning instead of raw AI output only",
            "Produces optimized captions, hashtags, execution guidance, and future content plan",
        ],
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Gemini API"],
        image: "/projects/ai-content-system.svg",
        github:
            "https://github.com/afadlih/AI-Content-Strategy---SEO-Assistant--Web-App-",
        demo: "#",
    },
    {
        title: "Smart Clothesline IoT System",
        description:
            "A realtime IoT operations dashboard for monitoring, controlling, and analyzing an automated clothesline system.",
        keyFeatures: [
            "Realtime dashboard for clothesline state, alerts, and operational summary",
            "MQTT telemetry, heartbeat tracking, and sensor stream health monitoring",
            "Automation center for schedules, thresholds, and safety behavior",
            "Firebase Firestore for schedules, audit data, and application state",
            "Telegram commands for status checks and remote control",
        ],
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase", "MQTT"],
        image: "/projects/iot-dashboard.svg",
        github: "https://github.com/afadlih/smart-clothesline-iot-system",
        demo: "#",
    },
];

export const collaborativeProjects = [
    {
        title: "SIMAPRES — Student Achievement Information System",
        description:
            "A web-based information system for managing, monitoring, and reporting student academic and non-academic achievements.",
        contributionAreas: [
            "Contributed to student achievement data management and reporting workflows",
            "Developed web interface components and application flow",
            "Supported search, filter, and data management features",
            "Collaborated in a Laravel-based team project with frontend, backend, and database integration",
        ],
        stack: ["Laravel", "PHP", "JavaScript", "Blade", "CSS", "MySQL"],
        github: "https://github.com/anugerahhrama/simapres-app",
    },
    {
        title: "Techno Rules — Student Discipline Information System",
        description:
            "A web-based system for recording and managing student discipline data within the Informatics Engineering environment.",
        contributionAreas: [
            "Developed role-based modules for admin, lecturer, student, and discipline committee users",
            "Contributed to violation form, dashboard, and student data management features",
            "Implemented system flow for recording, managing, and evaluating discipline data",
            "Supported web interface development and feature integration",
        ],
        stack: ["PHP", "MySQL", "JavaScript", "CSS"],
        github: "https://github.com/a6iyyu/tatib",
    },
    {
        title: "Jawara Mobile — RT/RW Management Mobile App",
        description:
            "A mobile application designed to support administration and communication workflows in RT/RW communities.",
        contributionAreas: [
            "Contributed as a front-end developer in a Flutter-based mobile application",
            "Developed mobile UI components, page structure, and navigation flow",
            "Supported features for community administration, activities, and communication",
            "Collaborated in a cross-platform mobile development workflow",
        ],
        stack: ["Flutter", "Dart"],
        github: "https://github.com/uhamhz/jawara-mobile",
    },
];

export const services = [
    {
        title: "Fullstack Web Development",
        description:
            "I build responsive web applications using Next.js, TypeScript, and Tailwind CSS with clean structure and maintainable components.",
        tags: ["Web Apps", "UI", "Frontend"],
    },
    {
        title: "AI-assisted Automation",
        description:
            "I design workflows that use AI to support automation, fallback logic, decision-making, and structured output generation.",
        tags: ["AI Tools", "Automation", "Gemini API"],
    },
    {
        title: "Decision Support Systems",
        description:
            "I build systems that evaluate options, compare alternatives, and help users select better outputs with reasoning.",
        tags: ["Scoring", "Evaluation", "Decision"],
    },
];

export const learningItems = [
    {
        title: "Product-minded engineering",
        description:
            "Improving how I turn rough ideas into clear product flows, usable interfaces, and reliable implementation details.",
        tag: "Product",
    },
    {
        title: "AI Workflow Design",
        description:
            "Learning how to design AI workflows that are reliable, structured, and useful beyond basic prompt-response demos.",
        tag: "AI Engineering",
    },
    {
        title: "System Reliability",
        description:
            "Practicing validation, fallback handling, result contracts, diagnostics, and operator-friendly error states.",
        tag: "Reliability",
    },
];

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/afadlih",
    },
    {
        label: "LinkedIn",
        href: "https://id.linkedin.com/in/ahmad-fadlih-wahyu-sardana-706933283",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/ach.fadlih",
    },
];
