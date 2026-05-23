# DezCam Consulting

**Boutique consulting and software studio for RevOps, AI agents, custom software, websites, and market analysis services.**

🌐 **Website:** [dezcam.net](https://dezcam.net)

---

## What We Do

DezCam Consulting helps businesses improve their revenue operations, build practical software tools, and make smarter growth decisions. We combine strategic thinking with hands-on technical execution — so you get a partner who understands your business *and* can actually build the solution.

**Start a project → [dezcam.net](https://dezcam.net)**

---

## Core Services

### 1. RevOps Consulting
Build better systems for sales, marketing, and operations.
- Sales process improvement
- CRM & workflow strategy
- Customer journey optimization
- Business systems planning
- GTM & revenue workflow support

### 2. Software Development
Turn ideas into working products.
- AI agents & automation workflows
- Custom internal tools
- Business websites & landing pages
- MVP / prototype development
- Full-stack web applications

### 3. Market Analysis
Understand your market before you move.
- Market research & sizing
- Competitor analysis
- Customer discovery
- Product positioning
- Trading & financial market analysis

---

## Project Structure

```
├── client/               # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── pages/        # Home, Services, Work, About, Contact
│   │   ├── components/   # Shared UI components
│   │   └── index.css     # Global styles & design tokens
├── server/               # Express backend (Node.js + TypeScript)
│   ├── routes.ts         # API endpoints
│   ├── storage.ts        # Database interface
│   └── db.ts             # Database connection
├── shared/
│   └── schema.ts         # Drizzle ORM schema & Zod types
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | Framer Motion |
| Routing | Wouter |
| Forms | React Hook Form + Zod |
| State | TanStack Query (React Query) |
| Backend | Node.js, Express.js |
| Database | PostgreSQL (Neon) via Drizzle ORM |
| Deployment | Replit |

---

## Getting Started

```bash
# Install dependencies
npm install

# Push database schema
npm run db:push

# Start development server
npm run dev
```

The dev server runs on port 5000 with Vite HMR for the frontend and Express for the backend API.

---

## Deployment

The site is deployed on Replit and available at [dezcam.net](https://dezcam.net).

**Build for production:**
```bash
npm run build   # Vite build + esbuild server bundle
npm start       # Serve from dist/
```

---

## Contact & Inquiries

Ready to build something? Start here:

- **Book a free consultation:** [dezcam.net/contact](https://dezcam.net/contact)
- **Email:** Desmondjr88@gmail.com
- **LinkedIn:** [linkedin.com/in/desmondcampbell](https://linkedin.com/in/desmondcampbell)

---

© 2025 Desmond Campbell · DezCam Consulting
