# AGENTS.md

## Project Name

Ahmad Fadlih Portfolio

## Project Type

Production-ready personal portfolio website + Container and CI/CD assignment.

This project is built as a real personal portfolio for Ahmad Fadlih Wahyu Sardana and also fulfills a containerization assignment using Docker, GitHub Actions, Pull Request workflow, and Docker Hub image publishing.

---

## Owner Profile

- Name: Ahmad Fadlih Wahyu Sardana
- Program Study: D4 Teknik Informatika
- Role: Fullstack Developer & AI Engineer Student
- Focus:
  - AI Application Layer
  - Fullstack Product Development
  - Automation System
  - Decision Support System
  - AI Product Engineering

The website should represent the owner as a product-oriented AI/fullstack engineer, not just a student completing an assignment.

---

## Main Objective

Build and maintain a modern, production-ready portfolio website using Next.js.

The project must satisfy two goals:

1. Portfolio Goal
   - Serve as a public personal website.
   - Show profile summary, skills, projects, focus areas, and contact links.
   - Be deployable to Vercel as the main production hosting target.

2. Assignment Goal
   - Use Docker multi-stage build.
   - Provide GitHub Actions CI/CD.
   - Run quality checks on Pull Request.
   - Build Docker image.
   - Push Docker image to Docker Hub after merge to `main`.

---

## Tech Stack

Use the following stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Node.js 20+
- Docker
- GitHub Actions
- Docker Hub
- Vercel

Do not introduce unnecessary libraries unless they provide clear value.

---

## Product Direction

This project should look and feel like a clean developer portfolio inspired by modern SaaS landing pages.

Visual direction:

- Clean white background
- Soft gray cards
- Blue accent color
- Rounded cards
- Subtle shadows
- Modern typography
- Developer portfolio layout
- Professional but simple design
- Responsive on desktop, tablet, and mobile

Avoid:

- Generic default Next.js starter page
- Overly colorful student-assignment look
- Unnecessary animations
- Heavy dependencies
- Complex backend logic unless needed

---

## Repository Structure

Expected structure:

```txt
ahmad-fadlih-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   ├── profile.jpg
│   ├── og-image.png
│   └── projects/
│       ├── formai.png
│       ├── ai-content-system.png
│       └── iot-dashboard.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── DevOpsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   └── lib/
│       └── site.ts
├── .dockerignore
├── Dockerfile
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json

If the current structure differs, refactor carefully and keep imports clean.

Important Files
src/data/portfolio.ts

Use this file as the source of truth for personal content.

Store:

Profile data
Skills
Focus areas
Projects
DevOps items
Contact links

Do not hardcode repeated profile data inside components if it belongs in portfolio.ts.

src/lib/site.ts

Use this file for site-level config:

Site name
SEO title
SEO description
Production URL
Open Graph image

Example fields:

export const siteConfig = {
  name: "Ahmad Fadlih Wahyu Sardana",
  title: "Ahmad Fadlih Wahyu Sardana | Fullstack Developer & AI Engineer",
  description:
    "Personal portfolio of Ahmad Fadlih Wahyu Sardana, a D4 Teknik Informatika student focused on fullstack development, AI engineering, automation systems, and decision support systems.",
  url: "https://ahmad-fadlih-portfolio.vercel.app",
  ogImage: "/og-image.png",
};

Update the url when the final Vercel deployment URL is known.

Required Homepage Sections

The homepage must contain these sections:

Navbar
Logo: AF.
Navigation:
Home
About
Projects
DevOps
Contact
Hero Section
Badge: Fullstack Developer & AI Engineer Student
Main headline:
Building AI-Powered Web Apps with Product-Oriented Engineering.
Short description about AI applications, automation, decision systems, and fullstack product development
CTA buttons:
View My Projects
See DevOps Workflow
Profile card with initials or profile image
Floating tech badges such as Next.js, TS, AI, Docker
About Section
Ringkasan diri
Student ID
Program Study
Career goal
Skills Section
Next.js
TypeScript
Tailwind CSS
Node.js
Gemini API
Docker
GitHub Actions
CI/CD
Projects Section
AI Content Strategy Decision System
FormAI
Smart Clothesline IoT Dashboard
DevOps Section
Dockerized App
CI/CD Pipeline
Quality Gate
Pull Request Workflow
Vercel Deployment
Contact Section
GitHub link
Email link
Optional LinkedIn link
Footer
Copyright
Tech stack mention
Portfolio Copywriting Direction

Use this positioning:

Ahmad Fadlih is a D4 Teknik Informatika student focused on building AI-powered applications with a product-oriented engineering approach. He does not only build working apps, but also designs systems that can evaluate, decide, and automate processes.

Tone:

Professional
Clear
Confident
Not exaggerated
Not too casual
Suitable for portfolio and academic assignment

Avoid wording that sounds fake, overclaimed, or too corporate.

Project Descriptions

Use these project descriptions unless the user provides updated content.

AI Content Strategy Decision System

A system that helps determine the best content strategy using AI multi-strategy evaluation, scoring, and recommendation logic.

FormAI

An AI-powered Google Form automation platform with rule engine, CSV-driven automation, fallback AI, and diagnostic result.

Smart Clothesline IoT Dashboard

A web-based IoT dashboard for real-time monitoring and control of a smart clothesline system.

Development Commands

Use npm.

Install dependencies:

npm install

Run development server:

npm run dev

Run lint:

npm run lint

Run production build:

npm run build

Run production server locally:

npm run start
Docker Commands

Build Docker image locally:

docker build -t ahmad-fadlih-portfolio .

Run Docker container locally:

docker run -p 3000:3000 ahmad-fadlih-portfolio

Open:

http://localhost:3000

Stop container:

docker ps
docker stop CONTAINER_ID
Docker Requirements

The Dockerfile must:

Use multi-stage build
Use node:20-alpine
Install dependencies in a separate stage
Run lint during build
Run Next.js production build
Use Next.js standalone output for Docker runtime
Run app as non-root user
Expose port 3000
Start using node server.js

Expected Docker build behavior:

RUN DOCKER_BUILD=true npm run build

This works with:

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.DOCKER_BUILD === "true" ? "standalone" : undefined,
};

export default nextConfig;

Reason:

Vercel should use normal Next.js build.
Docker should use standalone output.

Do not force output: "standalone" for every environment unless needed.

.dockerignore Requirements

The .dockerignore file should include:

node_modules
.next
.git
.github
Dockerfile
.dockerignore
README.md
npm-debug.log
.env
.env.local
.env.production

Do not include secrets or local environment files inside Docker build context.

GitHub Actions Requirements

Workflow file:

.github/workflows/ci.yml

The CI/CD workflow must run on:

Pull Request to main
Push to main

Workflow behavior:

On Pull Request:
Checkout repository
Setup Node.js
Install dependencies using npm ci
Run ESLint
Run Next.js build
Validate Docker image build
Do not push Docker image
On push to main:
Checkout repository
Setup Node.js
Install dependencies using npm ci
Run ESLint
Run Next.js build
Build Docker image
Login to Docker Hub
Push Docker image to Docker Hub

Docker image tags:

DOCKERHUB_USERNAME/ahmad-fadlih-portfolio:latest
DOCKERHUB_USERNAME/ahmad-fadlih-portfolio:<github-sha>

Required GitHub repository secrets:

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN

Never hardcode Docker Hub credentials inside the workflow.

Git Workflow

Do not commit directly to main for feature work.

Use feature branches:

git checkout -b feature/portfolio-homepage

Commit changes:

git add .
git commit -m "feat(homepage): add production portfolio landing page"

Push branch:

git push -u origin feature/portfolio-homepage

Create Pull Request into main.

Merge only after CI passes.

Commit Message Convention

Use Conventional Commit style.

Examples:

chore: scaffold nextjs portfolio project
feat(homepage): add production portfolio landing page
feat(projects): add featured project showcase
feat(devops): add container and cicd assignment section
chore(docker): add multi-stage docker build
ci(actions): add quality check and docker publish workflow
docs(readme): add setup deployment and assignment guide
chore(seo): add sitemap robots and metadata
fix(layout): improve mobile responsive spacing

Commit types:

feat: new feature
fix: bug fix
docs: documentation update
style: visual/styling changes
refactor: code structure improvement without behavior change
chore: setup, config, maintenance
ci: GitHub Actions or pipeline changes
Code Style Rules

Use TypeScript.

General rules:

Prefer simple, readable code.
Use named exports for components.
Keep components focused.
Avoid large monolithic page.tsx.
Keep repeated content in src/data/portfolio.ts.
Use semantic HTML when possible.
Use accessible anchor text and button labels.
Keep styling in Tailwind classes unless global style is necessary.
Do not introduce UI libraries unless explicitly requested.

Component rules:

Each major section should be its own component.
Components should be placed in src/components.
Data should be imported from src/data/portfolio.ts.
Site config should be imported from src/lib/site.ts.

Import style:

import { profile } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

Do not use deep relative imports like:

import { profile } from "../../../data/portfolio";

unless absolutely necessary.

UI/UX Rules

Design should follow this direction:

White main background
Slate text
Blue accent
Rounded cards
Subtle shadows
Clean spacing
Grid-based layout
Responsive layout

Recommended Tailwind patterns:

max-w-6xl mx-auto px-6
rounded-3xl border border-slate-200 bg-white shadow-sm
text-slate-950
text-slate-600
text-blue-600
bg-blue-600

Avoid:

Too many colors
Low contrast text
Tiny unreadable font
Hardcoded widths that break mobile
Overcomplicated animation
Unnecessary JavaScript state
Responsive Design Requirements

The site must work on:

Mobile
Tablet
Desktop

Rules:

Use mobile-first Tailwind classes.
Use md: and lg: breakpoints.
On mobile, sections should stack vertically.
Project cards should be single column on mobile and three columns on desktop.
Navbar links may be hidden on mobile if no mobile menu exists, but the logo and contact CTA should remain visible.
SEO Requirements

The project should include:

Metadata in src/app/layout.tsx
src/app/sitemap.ts
src/app/robots.ts
Open Graph metadata
Twitter card metadata
Meaningful title and description

Do not leave default Next.js metadata.

Image Rules

If images are added:

Put static assets in public/.
Put project images in public/projects/.
Prefer optimized dimensions.
Use next/image when rendering real images.
Use gradient placeholders if final screenshots are not available yet.

Example project image paths:

/projects/formai.png
/projects/ai-content-system.png
/projects/iot-dashboard.png

Do not break the build if images are missing. If images are not available, use placeholder cards instead.

Vercel Deployment Rules

Vercel is the main production hosting target.

Expected behavior:

main branch deploys to production.
Pull Requests create preview deployments.
Docker is not required for Vercel deployment.
Docker remains required for the container assignment and Docker Hub publishing.

Do not add Vercel-specific secrets unless needed.

If the Vercel URL changes, update:

src/lib/site.ts

Specifically:

url: "https://actual-vercel-url.vercel.app"
Assignment Requirements Mapping

The project must clearly satisfy the assignment.

Requirement mapping:

Assignment Requirement	Implementation
Next.js project	Next.js App Router with TypeScript
Student profile homepage	Portfolio homepage with profile, skills, projects
Feature branch and PR	Git workflow documented in README
Dockerfile multi-stage	Dockerfile using node:20-alpine multi-stage build
Push image to Docker Hub	GitHub Actions push after merge to main
CI integration for PR	GitHub Actions runs on pull_request
Quality check	ESLint and production build validation
Production usage	Vercel deployment as public portfolio
README Requirements

README must include:

Project title
Short description
Student profile
Tech stack
Local development steps
Production build steps
Docker build and run steps
Git workflow
CI/CD explanation
Docker Hub image link placeholder
Vercel deployment link placeholder
Assignment context

README should be written for humans.

AGENTS.md should be written for coding agents.

Do not replace README content with AGENTS.md content.

Security Rules

Never commit:

.env
.env.local
Docker Hub token
API keys
Gemini API key
Private credentials
Vercel tokens

Use environment variables for secrets.

If environment variables are introduced later, document them in:

.env.example

Example:

NEXT_PUBLIC_SITE_URL=
GEMINI_API_KEY=

Do not create fake secrets.

Quality Gate Before Any Final Answer or PR

Before considering work complete, run:

npm run lint
npm run build

If Docker-related files changed, also run:

docker build -t ahmad-fadlih-portfolio .

If possible, run the container:

docker run -p 3000:3000 ahmad-fadlih-portfolio

Then check:

http://localhost:3000
Definition of Done

A task is done only when:

Code is readable
UI is responsive
No default starter content remains
Lint passes
Build passes
Docker build passes if Docker files changed
README is updated if workflow/setup changed
No secrets are committed
Portfolio content still reflects Ahmad Fadlih’s profile
Assignment requirements remain visible in the project
Agent Behavior Guidelines

When working on this repository:

Preserve the production portfolio direction.
Keep the assignment requirements intact.
Do not remove Docker, GitHub Actions, or DevOps section.
Do not replace portfolio content with generic filler.
Prefer small, focused changes.
Explain changes clearly when asked.
If making code changes, update related documentation when needed.
If unsure about personal data such as NIM, email, GitHub username, or LinkedIn URL, leave a clear placeholder instead of inventing data.
Do not add backend/API routes unless explicitly requested.
Do not add database dependencies unless explicitly requested.
Personal Data Placeholders

The following values may need to be updated by the user:

ISI_NIM_KAMU
EMAIL_KAMU
USERNAME_KAMU
https://linkedin.com/in/USERNAME_KAMU
https://ahmad-fadlih-portfolio.vercel.app
DOCKERHUB_USERNAME

Do not invent these values.

Common Tasks
Add a new project

Update:

src/data/portfolio.ts

Add a new item to projects.

If using an image, place it in:

public/projects/

Then reference it using:

/projects/image-name.png
Update profile summary

Update:

src/data/portfolio.ts

Edit:

profile.description
profile.goal
focusAreas
Update site URL after Vercel deployment

Update:

src/lib/site.ts

Edit:

url: "https://actual-production-url.vercel.app"
Update Docker image name

Update:

.github/workflows/ci.yml
README.md

Use:

DOCKERHUB_USERNAME/ahmad-fadlih-portfolio:latest
Add analytics

Only add analytics if requested.

If using Vercel Analytics, install:

npm install @vercel/analytics

Then add Analytics component in layout.tsx.

Preferred Final Project Narrative

Use this wording in README or presentation:

This project is a production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It is designed to showcase my profile, skills, projects, and engineering focus.

The project also fulfills the Container and CI/CD assignment requirements by providing a Docker multi-stage build, GitHub Actions quality gate, Pull Request workflow, and Docker Hub image publishing.

For production hosting, the application is deployed to Vercel, while Docker support remains available for container-based deployment and assignment validation.

Indonesian version:

Project ini dikembangkan sebagai website portfolio pribadi yang production-ready menggunakan Next.js, TypeScript, dan Tailwind CSS. Website ini digunakan untuk menampilkan ringkasan diri, skill, project, dan fokus engineering saya.

Selain sebagai portfolio, project ini juga memenuhi requirement tugas Container dan CI/CD melalui Docker multi-stage build, GitHub Actions quality gate, Pull Request workflow, serta publikasi image ke Docker Hub.

Untuk hosting production, aplikasi dideploy ke Vercel, sedangkan Docker tetap tersedia sebagai jalur deployment berbasis container.
Do Not Do

Do not:

Remove CI/CD workflow
Remove Dockerfile
Remove DevOps section
Commit credentials
Add unnecessary state management
Add unnecessary UI libraries
Use fake personal links as if they are real
Break Vercel deployment for Docker-specific configuration
Break Docker deployment for Vercel-specific configuration
Replace production portfolio direction with basic assignment UI
Final Checklist

Before finalizing the project, verify:

✅ Next.js app runs locally
✅ TypeScript is active
✅ Tailwind CSS is active
✅ ESLint is active
✅ Homepage contains student profile
✅ Homepage contains skills
✅ Homepage contains projects
✅ Homepage contains DevOps assignment section
✅ Data is separated in src/data/portfolio.ts
✅ SEO metadata exists
✅ sitemap.ts exists
✅ robots.ts exists
✅ Dockerfile multi-stage exists
✅ .dockerignore exists
✅ Docker build succeeds
✅ GitHub Actions runs on pull_request
✅ GitHub Actions runs on push main
✅ Docker image is pushed to Docker Hub after merge
✅ README explains local, Docker, CI/CD, Vercel, and assignment context
✅ Vercel deployment is live

Tambahan kecil: karena kamu juga punya `CLAUDE.md`, isi file itu bisa dibuat pendek seperti ini supaya Claude tetap mengikuti aturan yang sama:

```md
# CLAUDE.md

This project uses `AGENTS.md` as the main repository instruction file.

Before editing code, read and follow:

```txt
AGENTS.md

Important priorities:

Keep this as a production-ready personal portfolio.
Preserve Docker and CI/CD assignment requirements.
Keep Vercel deployment compatibility.
Do not commit secrets.
Run npm run lint and npm run build before finalizing changes.
```