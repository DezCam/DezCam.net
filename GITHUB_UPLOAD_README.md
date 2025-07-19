# Desmond Campbell Portfolio Website - GitHub Upload Package

## Project Overview
Professional portfolio website showcasing Desmond Campbell's product management expertise, UC Berkeley education, and entrepreneurial experience. Features an enhanced AI chatbot with comic book design elements.

## Recent Updates (July 19, 2025)
- Enhanced AI chatbot with comic book speech bubble
- New centered avatar with perfect circular cropping
- Expanded chat window for better text display
- Aligned service option icons with uniform spacing
- Applied Berkeley Blue and California Gold branding

## Technology Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Deployment**: Ready for production deployment

## Installation Instructions
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your DATABASE_URL and other required environment variables

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

## Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- `OPENAI_API_KEY` - For AI chatbot functionality (optional)
- `SENDGRID_API_KEY` - For email notifications (optional)

## Key Features
- Professional portfolio showcase
- Interactive AI chatbot with service offerings
- Contact form with database storage
- Trading performance showcase with TradingView integration
- Responsive design optimized for all devices
- UC Berkeley branding and professional photography

## File Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and configurations
│   └── public/            # Static assets and images
├── server/                # Backend Express application
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Database abstraction layer
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
└── drizzle/              # Database migrations and config
```

## Deployment
This project is configured for easy deployment on platforms like:
- Replit Deployments
- Vercel
- Netlify
- Heroku

Build command: `npm run build`
Start command: `npm start`

## Contact
Desmond Campbell - Product Management Professional
- Email: desmondcampbell924@gmail.com
- LinkedIn: linkedin.com/in/desmond-campbell-haas
- TradingView: @CashFalcon

---
Generated: July 19, 2025
Version: Enhanced AI Chatbot Release