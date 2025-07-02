# Desmond Campbell Portfolio - System Architecture

## Overview

This is a professional portfolio website for Desmond Campbell, a strategic technology leader. The application is built as a full-stack web application using modern technologies with a focus on clean design, performance, and user experience. The site features a comprehensive portfolio showcase, contact functionality, and responsive design optimized for all devices.

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
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```