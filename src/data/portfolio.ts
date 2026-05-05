export const profile = {
    name: "Ahmad Fadlih Wahyu Sardana",
    shortName: "Ahmad Fadlih",
    initials: "AF",
    username: "afadlih",
    studentId: "2341720069",
    program: "D4 Teknik Informatika",
    role: "Fullstack Developer focused on AI-powered Products",
    secondaryRole: "AI Application Builder",
    location: "Indonesia",
    email: "2341720069@student.belajar.id",
    github: "https://github.com/afadlih",
    linkedin: "https://id.linkedin.com/in/ahmad-fadlih-wahyu-sardana-706933283",
    instagram: "https://instagram.com/ach.fadlih",
    headline: "Building AI-powered systems with product-oriented engineering.",
    subheadline: "Generate → Evaluate → Compare → Decide → Execute",
    description:
        "I am a D4 Informatics Engineering student focused on fullstack development, AI integration, and AI-assisted decision systems. I build applications that go beyond simple AI wrappers by designing workflows that can generate outputs, evaluate alternatives, compare results, and support structured decision-making.",
    about:
        "I build fullstack web applications and AI-assisted workflows with a product-oriented mindset. My focus is not only making an application work, but designing a system that can evaluate inputs, compare alternatives, and support structured decisions.",
    goal:
        "My goal is to grow into an AI Product Engineer who can build useful, reliable, and real-world technology solutions.",
    motto: "Build consistently. Ship real systems. Refine continuously.",
};

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "DevOps", href: "#devops" },
    { label: "Contact", href: "#contact" },
];

export const floatingBadges = ["Next.js", "TS", "AI", "Docker"];

export const coreFocus = [
    "Fullstack web development with Next.js, TypeScript, and Tailwind CSS",
    "AI integration using Gemini API",
    "AI-assisted decision systems and automation workflows",
    "Product-oriented engineering for real-world use cases",
];

export const focusAreas = [
    "AI-powered product workflows",
    "Decision systems and automation",
    "Fullstack web applications",
    "Application-layer AI integration",
    "Product engineering with real user scenarios",
    "Reliable systems with validation, fallback, and error handling",
];

export const currentFocus = [
    "Building AI-assisted decision pipelines grounded in real use cases",
    "Integrating AI into actual product surfaces, not just demos",
    "Improving system reliability through normalization, fallback, and error handling",
    "Developing with a product mindset: ship, measure, refine",
];

export const systemFlow = [
    "Input",
    "AI Generation",
    "Evaluation",
    "Comparison",
    "Decision",
    "Optimization",
    "Output",
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
    "Docker",
    "GitHub Actions",
    "CI/CD",
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
    "Gemini API",
    "Selenium",
    "Git",
    "GitHub",
    "Figma",
    "Docker",
    "GitHub Actions",
    "CI/CD",
];

export const featuredProjects = [
    {
        title: "AI Content Strategy & Decision System",
        description:
            "An AI-powered system that generates multiple content strategies, evaluates them with scoring logic, compares the results, and selects the best strategy automatically.",
        keyFeatures: [
            "Multi-strategy generation: emotional, educational, and viral",
            "Scoring system for engagement potential, hook quality, CTA clarity, and content relevance",
            "Decision engine to compare multiple strategies and select the best output",
            "Gemini API integration for generation, evaluation, and optimization",
            "Structured output designed for content planning and campaign use cases",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
        image: "/projects/ai-content-system.png",
        github:
            "https://github.com/afadlih/AI-Content-Strategy---SEO-Assistant--Web-App-",
        demo: "#",
    },
    {
        title: "FormAI — AI Form Automation System",
        description:
            "An AI-assisted automation system for filling Google Forms using a structured decision pipeline: Analyze → Field Mapping → Rule Engine → AI Fallback → Execution.",
        keyFeatures: [
            "Form structure detection",
            "Field mapping system",
            "Rule engine with dominant, range-based, weighted, and text-based logic",
            "Gemini API fallback for undefined or ambiguous fields",
            "Fast execution mode using HTTP request",
            "Smart execution mode using browser automation",
            "Designed for decision-based automation, not static autofill",
        ],
        stack: [
            "Python",
            "FastAPI",
            "Next.js",
            "TypeScript",
            "Gemini API",
            "Selenium",
        ],
        image: "/projects/formai.png",
        github: "#",
        demo: "#",
    },
    {
        title: "Smart Clothesline IoT System",
        description:
            "An IoT-based automation system that controls a clothesline based on real-time environmental conditions.",
        keyFeatures: [
            "Real-time monitoring dashboard",
            "Sensor data integration",
            "Environment-based automation logic",
            "Web interface for monitoring system status",
            "Decision flow based on changing weather or environmental data",
        ],
        stack: ["Next.js", "TypeScript", "IoT Sensors"],
        image: "/projects/iot-dashboard.png",
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

export const devopsItems = [
    {
        title: "Dockerized App",
        description:
            "Next.js application packaged using optimized multi-stage Docker build with Node Alpine.",
    },
    {
        title: "GitHub Actions",
        description:
            "Automated workflow runs install, lint, build, Docker build, and Docker Hub publishing.",
    },
    {
        title: "Quality Gate",
        description:
            "Pull Requests must pass ESLint, production build, and Docker build validation before being merged into main.",
    },
    {
        title: "Docker Hub Image",
        description:
            "Every successful push to main publishes the latest image to Docker Hub.",
    },
];

export const learningItems = [
    {
        title: "Building with Next.js",
        description:
            "Improving my ability to structure production-ready frontend applications with reusable components and clean data separation.",
        tag: "Next.js",
    },
    {
        title: "AI Workflow Design",
        description:
            "Learning how to design AI workflows that are reliable, structured, and useful beyond basic prompt-response demos.",
        tag: "AI Engineering",
    },
    {
        title: "Docker & CI/CD",
        description:
            "Practicing containerization, automated quality checks, and Docker image publishing through GitHub Actions.",
        tag: "DevOps",
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