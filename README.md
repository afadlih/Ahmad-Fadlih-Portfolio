# Ahmad Fadlih Portfolio

Production-ready personal portfolio website for **Ahmad Fadlih Wahyu Sardana**, built with Next.js, TypeScript, and Tailwind CSS.

This project is designed to serve two purposes:

1. **Portfolio website** — showcases profile, skills, engineering focus, projects, DevOps workflow, and contact links.
2. **Container and CI/CD assignment** — demonstrates Docker multi-stage build, GitHub Actions quality gate, Pull Request workflow, and Docker Hub image publishing.

---

## Profile

| Field | Value |
|---|---|
| Name | Ahmad Fadlih Wahyu Sardana |
| Student ID | 2341720069 |
| Program | D4 Teknik Informatika |
| GitHub | [afadlih](https://github.com/afadlih) |
| LinkedIn | [Ahmad Fadlih Wahyu Sardana](https://id.linkedin.com/in/ahmad-fadlih-wahyu-sardana-706933283) |
| Focus | Fullstack Development, AI Automation Products, Decision Systems, Realtime Dashboards |

---

## Project Narrative

This project is a production-ready personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It showcases my profile, skills, projects, and engineering focus.

The project also fulfills the Container and CI/CD assignment requirements by providing a Docker multi-stage build, GitHub Actions quality gate, Pull Request workflow, and Docker Hub image publishing.

For production hosting, the application is intended to be deployed to **Vercel**, while Docker support remains available for container-based deployment and assignment validation.

---

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Node.js 20+
- Docker
- GitHub Actions
- Docker Hub
- Vercel

---

## Main Features

- Responsive portfolio landing page
- Hero section with profile summary and CTA buttons
- About section with student identity and engineering direction
- Core skills and focus areas
- Featured project cards with screenshot placeholders
- Collaboration project showcase
- DevOps / Docker / CI/CD section
- Contact CTA section
- SEO metadata, sitemap, and robots route
- Docker multi-stage production build
- GitHub Actions lint, build, Docker validation, and Docker publish workflow

---

## Featured Projects

### FormAI — AI Form Automation Platform

An end-to-end Google Form automation system designed around form analysis, CSV/manual/rules input, AI fallback, quick checks, execution modes, and diagnostics.

### AI Content Strategy & Decision System

A decision-first content planning app that generates several strategies, scores them, compares tradeoffs, and recommends the strongest strategy with reasoning.

Repository: [AI Content Strategy & SEO Assistant Web App](https://github.com/afadlih/AI-Content-Strategy---SEO-Assistant--Web-App-)

### Smart Clothesline IoT System

A realtime IoT operations dashboard for monitoring, controlling, and analyzing an automated clothesline system.

Repository: [Smart Clothesline IoT System](https://github.com/afadlih/smart-clothesline-iot-system)

---

## Image Replacement Guide

Project placeholders are stored in:

```txt
public/projects/
```

Current placeholder files:

```txt
public/projects/formai.svg
public/projects/ai-content-system.svg
public/projects/iot-dashboard.svg
```

To replace them with real screenshots, use the same file names or update the `image` field in:

```txt
src/data/portfolio.ts
```

Recommended screenshot size:

```txt
1600 x 1000 px
```

You may use `.png`, `.jpg`, `.webp`, or `.svg`. If you change the extension, update the matching path in `src/data/portfolio.ts`.

---

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

Run production server locally:

```bash
npm run start
```

---

## Docker Usage

Build Docker image locally:

```bash
docker build -t ahmad-fadlih-portfolio .
```

Run Docker container:

```bash
docker run -p 3000:3000 ahmad-fadlih-portfolio
```

Open:

```txt
http://localhost:3000
```

Stop container:

```bash
docker ps
docker stop CONTAINER_ID
```

---

## CI/CD Workflow

Workflow file:

```txt
.github/workflows/ci.yml
```

The workflow runs on:

- Pull Request to `main`
- Push to `main`
- Manual trigger through `workflow_dispatch`

### Pull Request behavior

- Checkout repository
- Setup Node.js 20
- Install dependencies with `npm ci`
- Run ESLint
- Run Next.js production build
- Validate Docker image build
- Do not push Docker image

### Push to main behavior

- Run quality checks
- Build Docker image
- Login to Docker Hub
- Push image with `latest` and commit SHA tags

### Docker Hub image tags

```txt
DOCKERHUB_USERNAME/ahmad-fadlih-portfolio:latest
DOCKERHUB_USERNAME/ahmad-fadlih-portfolio:<github-sha>
```

Required repository secrets for Docker Hub publishing:

```txt
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

Never commit Docker Hub credentials or private tokens to the repository.

---

## Git Workflow

Create a feature branch:

```bash
git checkout -b feature/your-change-name
```

Commit changes:

```bash
git add .
git commit -m "feat(scope): describe your change"
```

Push branch:

```bash
git push -u origin feature/your-change-name
```

Open a Pull Request into `main` and merge only after CI passes.

---

## Deployment

Production hosting target:

```txt
Vercel
```

Current production URL in `src/lib/site.ts`:

```txt
https://ahmad-fadlih-portfolio.vercel.app
```

If the deployed Vercel URL changes, update:

```txt
src/lib/site.ts
```

Specifically update:

```ts
url: "https://actual-production-url.vercel.app"
```

---

## Assignment Mapping

| Requirement | Implementation |
|---|---|
| Next.js project | Next.js App Router with TypeScript |
| Student profile homepage | Portfolio homepage with profile, skills, projects, and contact section |
| Feature branch and PR | Git workflow documented in this README |
| Dockerfile multi-stage | `Dockerfile` using `node:20-alpine` multi-stage build |
| CI integration for PR | GitHub Actions runs on Pull Request to `main` |
| Quality check | ESLint, production build, and Docker build validation |
| Docker Hub publishing | GitHub Actions can publish image after merge to `main` |
| Production usage | Vercel deployment as public portfolio target |
| SEO | Metadata, Open Graph config, sitemap, and robots route |

---

## Environment and Security

No environment variables are required for local portfolio rendering.

Do not commit:

- `.env`
- `.env.local`
- Docker Hub token
- API keys
- Gemini API key
- Private credentials
- Vercel tokens

If environment variables are added later, document them in `.env.example`.

---

## Repository Structure

```txt
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   └── projects/
│       ├── README.md
│       ├── formai.svg
│       ├── ai-content-system.svg
│       └── iot-dashboard.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   ├── data/
│   │   └── portfolio.ts
│   └── lib/
│       └── site.ts
├── .dockerignore
├── Dockerfile
├── next.config.ts
├── package.json
└── README.md
```

---

## License

This project is maintained as a personal portfolio and academic assignment project by Ahmad Fadlih Wahyu Sardana.
