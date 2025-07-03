# Desmond Campbell Portfolio - System Architecture

## Overview

This is a professional portfolio website for Desmond Campbell, a product management and business strategy expert. The application is built as a full-stack web application using modern technologies with a focus on clean design, performance, and user experience. The site showcases Desmond's UC Berkeley Haas education, entrepreneurial experience, and product management expertise, with a responsive design optimized for all devices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animation**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod for runtime type checking and validation
- **Development**: Hot module replacement with Vite integration

### UI/UX Design System
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Design System**: "New York" style with neutral color palette
- **Typography**: Inter font family
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Professional introduction with animations
- **Experience Section**: Timeline-based career history
- **Skills Section**: Technical and leadership competencies
- **Portfolio Section**: Featured projects showcase
- **Contact Section**: Form submission with validation
- **Footer**: Professional links and contact information

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Layer**: Abstracted storage interface supporting both memory and database storage
- **Contact Management**: CRUD operations for contact form submissions
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

### Database Schema
- **contacts table**: Stores contact form submissions
  - id (serial primary key)
  - name (text, required)
  - email (text, required)
  - subject (text, required)
  - message (text, required)
  - createdAt (timestamp, auto-generated)
- **users table**: Basic user schema (for future authentication)
  - id (serial primary key)
  - username (text, unique, required)
  - password (text, required)

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema on client-side
3. Validated data sent to `/api/contact` endpoint via POST request
4. Server validates data again using shared schema
5. Contact record created in database via storage layer
6. Success/error response sent back to client
7. User receives feedback via toast notification

### Content Delivery
1. Static assets served via Vite in development
2. React components render portfolio content
3. Animations triggered by viewport intersection
4. Smooth scrolling navigation between sections
5. Responsive design adapts to device capabilities

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Runtime validation
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: Type-safe SQL ORM
- **@neondatabase/serverless**: PostgreSQL database client
- **connect-pg-simple**: PostgreSQL session store
- **tsx**: TypeScript execution environment

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon Database with connection pooling
- **Environment Variables**: DATABASE_URL for database connection
- **Build Process**: TypeScript compilation with Vite bundling

### Production Deployment
- **Build Command**: `npm run build` - Vite build + esbuild for server
- **Start Command**: `npm start` - Node.js server serving static files
- **Server Bundle**: ESM format with external packages
- **Static Assets**: Served from `dist/public` directory
- **Database Migrations**: Drizzle Kit for schema management

### Environment Configuration
- **NODE_ENV**: Environment detection (development/production)
- **DATABASE_URL**: PostgreSQL connection string
- **Build Artifacts**: 
  - Client: `dist/public` (static files)
  - Server: `dist/index.js` (bundled server)

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
- July 02, 2025. Updated portfolio to focus on product management using actual resume data:
  * Updated hero section and about content to highlight UC Berkeley Haas education
  * Replaced experience section with real professional history (Toshi Markets, Freelance, Primerica)
  * Updated skills to focus on Product Management, Data Analytics, and Business Strategy
  * Updated portfolio projects to reflect actual achievements and PM-relevant experience
  * Updated contact information with real email and phone number
  * Fixed CSS import order issue
- July 02, 2025. Enhanced portfolio with Pinterest cover letter insights:
  * Added pet product startup story - 3rd place Haas entrepreneurship challenge
  * Highlighted multiple PM functions at Toshi Markets (SDR, CSM, APM, GTM)
  * Added mobile martial arts business experience showing entrepreneurial foundation
  * Updated About section with Trader Joe's product validation story
  * Updated contact info to use primary Gmail address
  * Added MVP development messaging to contact section
- July 02, 2025. Implemented UC Berkeley color theme:
  * Updated primary color scheme to Berkeley Blue (hsl(217, 89%, 25%)) and California Gold (hsl(45, 100%, 51%))
  * Applied Berkeley colors throughout navigation, hero section, skills, contact, and footer
  * Maintained accessibility with proper contrast ratios
  * Updated CSS variables and utility classes for consistent theming
- July 02, 2025. Integrated professional photos:
  * Replaced hero section placeholder with Berkeley Haas school photo
  * Added Sather Tower evening photo to about section
  * Used professional headshot in experience section
  * All placeholder images replaced with authentic professional photos
- July 02, 2025. Added trading performance showcase:
  * Featured exceptional 1,400% trading return (4 months) as lead portfolio project
  * Added quantitative achievement to about section statistics
  * Highlighted data analysis and risk management skills for PM roles
  * Updated about section narrative to include trading performance context
- July 02, 2025. Integrated LoyalPup startup branding and link:
  * Replaced pet product placeholder with authentic LoyalPup logo
  * Added direct Instagram link (https://www.instagram.com/loyalpup_ucb/)
  * Updated project description to highlight organic treats for working dogs and mental health awareness
  * Enhanced portfolio component to support clickable external links
  * Fixed image serving by migrating all photos to public directory
- July 02, 2025. Added authentic event and martial arts photos:
  * Integrated Grammy Awards photo for High-Profile Event Production Management project
  * Added behind-the-scenes production coordinator photo to Professional Experience
  * Created Kratos Combat Club featured project (2007-2014) with sunset martial arts silhouette
  * Highlighted martial arts foundation: dual black belts, youth programs, women's self-defense
  * Emphasized character development values: discipline, resilience, humility, mental toughness
- July 03, 2025. Updated social media links:
  * Replaced Twitter link with TradingView profile (@CashFalcon)
  * Added TradingView to both footer and contact sections
  * Maintained LinkedIn and GitHub profile links
  * Enhanced trading performance credibility with direct TradingView connection
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```