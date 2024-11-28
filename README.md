# 🚀 The Last Svelte Starter You'll Ever Need

Because let's face it - you're tired of spending weeks configuring your project instead of actually building stuff. This isn't just another starter template; it's your ticket to skipping the boring parts and getting straight to the fun.

## ✨ What's In The Box?

- **SvelteKit + TypeScript**: Because writing JavaScript without types is like skydiving without a parachute
- **Drizzle ORM + PostgreSQL**: SQL with superpowers - so good it'll make your database jealous
- **Testing Trinity**:
  - `Unit Tests with Vitest` (because "it works on my machine" doesn't cut it anymore)
  - `Integration Tests` (because sometimes components need couples therapy)
  - `E2E Tests with Cucumber.js` (because robots should click buttons for you)
- **Tailwind CSS**: For those who want their CSS to look like keyboard smash but work like magic
- **Code Quality** (Because We're Not Animals):
  - `ESLint`: Because semicolons matter (or do they?)
  - `Prettier`: Because tabs vs. spaces wars are so last decade
  - `Husky`: Catches your mistakes before your colleagues do
  - `GitHub Dependabot`: Like having a robot butler for your dependencies
- **Git Hooks** (The Fun Police):
  - `pre-commit`: Makes sure your code doesn't look like it was written at 3 AM
  - `pre-push`: Ensures you're not pushing broken code (you're welcome)
- **GitHub Actions**: CI/CD pipelines that automatically test, lint, and enforce quality checks—because if your code isn’t perfect, it won’t even make it to main.

## 🎯 Why This Stack?

- **Why SvelteKit?** Because React is too mainstream, and Angular... well, let's not go there
- **Why Drizzle?** Because Prisma is so 2023, and raw SQL is for masochists
- **Why Cucumber.js?** Because "Given-When-Then" beats "hope-it-works-somehow"
- **Why Tailwind?** Because life's too short to write CSS files
- **Why GitHub Actions?** Because manual testing in local environments is for dinosaurs. Automate everything and sleep better.

## 🏗️ Project Structure

```bash
.
├── cucumber.js                # Cucumber.js configuration for E2E testing
├── drizzle.config.ts          # Configuration for Drizzle ORM
├── eslint.config.js           # ESLint configuration
├── .github                    # Github
│   ├── dependabot.yml         # CI: Dependabot configuration
│   └── workflows              # Github actions
├── .husky                     # Git hooks (pre-commit, pre-push)
├── LICENSE                    # License file
├── package.json               # Project metadata and dependencies
├── postcss.config.js          # PostCSS configuration for Tailwind
├── svelte.config.js           # SvelteKit configuration
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── src                        # Where the magic happens
│   ├── app.css                # Global styles
│   ├── app.html               # The HTML file you'll probably never touch
│   ├── lib                    # Shared library
│   │   └── server/data        # Database and schema management
│   │       ├── migrations     # SQL migration files
│   │       └── schema         # Drizzle ORM schema definitions
│   └── routes                 # Because URLs need homes too
│       ├── +layout.svelte     # Root layout
│       └── +page.svelte       # Home page
├── static                     # For stuff that doesn't need to be cool
├── tests                      # Proof that your code actually works
│   ├── e2e                    # End-to-end tests (Cucumber.js)
│   ├── integration            # Integration tests (Vitest)
│   └── unit                   # Unit tests (Vitest)
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher, because we're not savages)
- npm/pnpm (yarn users, you do you)
- A pulse (recommended but not required)

### 🏃‍♂️ Quick Start

```bash
# Clone this bad boy
git clone https://github.com/mochams/svelte-drizzle-template.git

# Install dependencies (and pray to the npm gods)
npm install

# Copy env vars (the fun part begins)
cp .env.example .env

# Start the dev server
npm run dev
```

## 💾 Database Done Right: The Drizzle ORM Section

Why Drizzle ORM? Because raw SQL is for masochists, and those other ORMs? They wish they were this clean. Drizzle brings you actual control without the bloat—SQL with the elegance of a luxury sports car.

### 🚀 Drizzle Commands to Rule Them All

#### Generate Migrations

Writing migrations manually? Passé. Just run this command, and let Drizzle handle the heavy lifting:

```bash
npm run drizzle:makemigrations
```

Boom. Your migrations, beautifully generated and ready for action.

#### Open Drizzle Studio

Need a visual? Dive into your schema like a boss with Drizzle Studio:

```bash
npm run drizzle:studio
```

Think of it as the command center for your database kingdom.

#### Run Migrations

Apply those migrations with surgical precision:

```bash
npm run drizzle:migrate
```

Drizzle ensures your database evolves exactly how you designed it—no drama, no surprises.

### 🗂 Drizzle Folder Structure: Organized Like a Pro

All your Drizzle magic lives in `src/lib/server/data` because chaos isn’t our style. Here's the breakdown:

- `schema/`
  Define your database structure in a clean, declarative way that’ll make you wonder why you ever tolerated anything else. Designed for schema in multiple files.
- `migrations/`
  Auto-generated SQL migrations live here, with versioned files that keep your database history as pristine as your codebase.

So, go ahead—add complex queries, manage schema changes, and keep your database humming. Drizzle’s got your back, and the competition? They’re eating dust.

## 🧪 Testing (Because Trust Issues Are Real)

We've got tests for days:

```bash
# Run unit and integration tests (for the perfectionists and paranoid)
npm run test:integration

# Run E2E tests (for the trust-no-one crowd)
npm run test:e2e

# Run all tests (for the true believers)
echo 'i am about to figure it out'
```

## 🤖 Continuous Integration (Because Robots Do It Better)

Yes, we've got GitHub Actions doing the heavy lifting! Because manually checking things is so 2010.

```yaml
Your repo is guarded by:
├── 🧪 Test Runner
│   └── Runs all test suites because YOLO isn't a testing strategy
├── 🕵️ Code Quality Guard
│   ├── Lint checks (catches your silly mistakes)
│   ├── Type checks (TypeScript's got trust issues)
│   └── Format checks (spaces vs tabs: civil war)
└── 🏗️ Build Verification
    └── Makes sure your project actually builds
```

### What Gets Checked?

Every push and PR triggers our robot army to:

- Run all tests (unit, integration, E2E) because we trust no one
- Check code quality (ESLint's judgment is harsh but fair)
- Verify types (TypeScript: the strict parent you never had)
- Check formatting (Prettier is watching... always watching)
- Build the project (because "works on my machine" isn't good enough)

### Branch Protection Rules

Your Main branch should be protected like Fort Knox:

- All checks must pass (no exceptions, we're not savages)
- PRs require review (peer pressure works)
- Status checks are mandatory (trust the robots)

## 📝 Configuration Files

They're all there. Don't touch them unless you know what you're doing (and even then, think twice).

## 🚀 Production Mode

```bash
# Build for production (fingers crossed)
npm run build

# Preview your soon-to-be masterpiece
npm run preview
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## 🤝 Contributing

1. Fork it
2. Clone it
3. Branch it
4. Code it
5. Push it
6. Pull-request it

Found a bug? Cool, open an issue. Made something better? Even cooler, send a PR.

## 🙌 Why You’ll Never Need Another Starter

This isn’t just a template; it’s your new benchmark. The rest? Well, they’re just trying to keep up.

Built with ☕️ and mild sleep deprivation.

_P.S. If this template saves you 10 hours of setup time, you owe me a ⭐️_

_P.P.S. The robots checking your code don't accept bribes... we tried_
