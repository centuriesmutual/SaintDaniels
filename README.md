# Saint Daniels Healthcare Rewards (TypeScript)

**Project Name:** saint-daniels-healthcare-rewards
**Purpose:** Frontend web application for healthcare rewards, private subsidies, ad network earnings, pharmacy spending, and compound interest management for the Saint Daniels ecosystem.

## Overview

The Saint Daniels Healthcare Rewards project is a Next.js 15 frontend application written entirely in **TypeScript**, providing a comprehensive platform for managing healthcare rewards and private subsidies.

It handles:

- **Healthcare Rewards Management**: Track private subsidies earned through ad network engagement
- **Pharmacy Network**: Find and connect with participating pharmacies to spend rewards
- **Compound Interest**: Monitor and grow unused rewards through daily compound interest
- **Ad Network Integration**: View and engage with health brand campaigns to earn rewards
- **User Dashboard**: Comprehensive dashboard for balance tracking, transaction history, and mailbox
- **Application Portal**: Health insurance enrollment and application management

This project works alongside the Saint Daniels backend services to provide a seamless user experience for healthcare reward management.

## Features

- **Next.js 15** with React 18
- **TypeScript-first**: Fully typed codebase (`.ts` / `.tsx`)
- **Responsive Design**: Mobile-optimized dashboard and pages
- **Healthcare Rewards Dashboard**: Real-time balance tracking with Robinhood-style charts
- **Pharmacy Network**: Interactive Google Maps integration for finding nearby pharmacies
- **Mailbox System**: Gmail-style interface for ad campaigns and rewards
- **Transaction History**: Comprehensive transaction tracking with pagination
- **Application Portal**: Multi-step health insurance enrollment form
- **Video Game Network**: Newsletter page for Fortnite and Call of Duty content
- **Document Management**: Professional document library and help center

## Tech Stack

- **Framework**: Next.js 15.3
- **Language**: TypeScript 5.8
- **UI Libraries**: React Bootstrap, Tailwind CSS, Framer Motion
- **Icons**: React Icons
- **Maps**: Google Maps API
- **Authentication**: NextAuth.js
- **Styling**: CSS Modules, Global CSS, Inline Styles
- **Deployment**: Vercel (or Docker/Kubernetes)

## Project Structure

```
saint-daniels-healthcare-rewards/
├── app/                    # Next.js App Router pages (TSX)
│   ├── dashboard/          # User dashboard with tabs
│   ├── application/        # Health insurance application
│   ├── documents/          # Document library
│   ├── newsletter/         # Video game network content
│   ├── help/               # Help center
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── layout.tsx          # Root layout with metadata
├── components/             # React components (TSX)
│   ├── Hero.tsx            # Homepage hero section
│   ├── Footer.tsx          # Site footer
│   ├── Navbar.tsx          # Navigation bar
│   └── ScrollAnimation.tsx # Framer Motion animations
├── public/                 # Static assets
│   └── images/             # Image files
├── styles/                 # Global styles
│   └── globals.css         # Global CSS
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js **18.18+**, **20 LTS**, **22**, or **24** (anything in `>=18.18.0 <27`)
- NPM or Yarn
- Git

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/centuriesmutual/SaintDaniels.git
cd SaintDaniels
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables in `.env.local`:**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Build for Production

```bash
npm run build
npm start
```

### Type Check

```bash
npm run typecheck
```

## Key Pages

- **Homepage** (`/`): Healthcare rewards overview, eligibility, privacy, and enrollment
- **Application** (`/application`): Health insurance enrollment form
- **Documents** (`/resources`): Program documentation and forms
- **Newsletter** (`/newsletter`): Saint Daniels Video Game Network content
- **Help Center** (`/help`): Support and required documents
- **About** (`/about`): Company information
- **Contact** (`/contact`): Contact information and offices

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Docker/Kubernetes** for containerized deployments
- **Any Node.js hosting service**

For Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build
3. Set environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request on GitHub

## License

Copyright © 2025 Saint Daniels Healthcare. All rights reserved.
