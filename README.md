# Duba Venkata Satyanarayana | Full Stack Engineer

[![Production Build](https://github.com/Satya136-dvsn/satya-spark-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Satya136-dvsn/satya-spark-portfolio/actions/workflows/deploy.yml)
[![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=satyaportfolio-ten.vercel.app&style=flat-square)](https://satyaportfolio-ten.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"Transforming complex problems into elegant solutions."**

A high-performance, architecturally robust portfolio platform engineered to demonstrate advanced Full Stack capabilities. Built with modern React patterns, strict TypeScript typing, and hardware-accelerated animations.

🌐 **Live Production**: [satyaportfolio-ten.vercel.app](https://satyaportfolio-ten.vercel.app/)

---

## 📑 Table of Contents

- [Executive Summary](#-executive-summary)
- [Technical Architecture](#-technical-architecture)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Performance Optimization](#-performance-optimization)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)

---

## 🚀 Executive Summary

This repository houses the source code for my professional portfolio, designed not just as a showcase of work, but as a demonstration of **engineering quality**. It features a decoupled UI architecture, optimized asset delivery pipeline, and a responsive design system that adheres to modern web vitals metrics (LCP, CLS, FID).

**Target Audience**: Technical Recruiters, Engineering Managers, and Collaborators looking for validatable proof of coding standards and architectural decision-making.

---

## 🏗 Technical Architecture

The application is built on a **Client-Side Rendering (CSR)** architecture powered by Vite for lightning-fast HMR and build times.

- **Component Design**: Atomic design principles using `shadcn/ui` (Radix Primitives) for accessible, unstyled core components reshaped via Tailwind CSS.
- **State Management**: React Query (`@tanstack/react-query`) for server state and caching, with React Context for lightweight global UI state.
- **Form Handling**: Strictly typed forms using `react-hook-form` coupled with `zod` schemas for runtime validation.
- **Routing**: `react-router-dom` with code-splitting enabled via `React.lazy()` and `Suspense` boundaries.

---

## � Tech Stack

### Core

- **Framework**: React 18
- **Language**: TypeScript 5.x (Strict Mode)
- **Build Tool**: Vite 5.x

### UI & Styling

- **Styling Engine**: Tailwind CSS 3.4
- **Component Library**: Shadcn UI (Radix UI)
- **Icons**: Lucide React
- **Animations**: CSS3 Hardware Acceleration, Canvas API (Matrix Effect)

### Reliability & Quality

- **Linting**: ESLint + Prettier
- **Validation**: Zod
- **Analytics**: Google Analytics 4 (GA4)
- **Performance**: Vercel Speed Insights

---

## ✨ Key Features

1. **Immersive Intro Sequence**: A Canvas-based "Matrix Rain" simulation that degrades gracefully on mobile devices for performance.
2. **3D/Levitating UI**: CSS-driven floating animations for skill badges, providing an organic feel without heavy JS libraries like Three.js.
3. **Project "Glass" Modals**: Deep-dive project views using intercepted routes/modals to maintain user context.
4. **Secure Contact Form**: Rate-limited, honeypot-protected form submission integrating Web3Forms serverless API.
5. **SEO Optimized**: Full JSON-LD Schema markup, Open Graph tags, and sitemap generation for maximum discoverability.

---

## ⚡ Performance Optimization

Achieving a **95+ Performance Score** on Lighthouse was a primary engineering constraint.

- **Code Splitting**: Route-based chunking ensures users only download the JS needed for the current view (`React.lazy`).
- **Asset Preloading**: Critical assets (Hero images) are preloaded via `<link rel="preload">` to minimize Largest Contentful Paint (LCP).
- **Layout Stability**: Fixed aspect ratios on media prevent Cumulative Layout Shift (CLS).
- **Mobile Logic**: Heavy animations (Canvas) are programmatically disabled on mobile devices to preserve battery and maintain 60fps scrolling.
- **Image Optimization**: WebP/AVIF formats served where supported.

---

## 🛠 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Satya136-dvsn/satya-spark-portfolio.git
    cd satya-spark-portfolio
    ```

2. **Install dependencies**

    ```bash
    npm ci
    ```

    *(Note: usage of `npm ci` ensures exact version matching from `package-lock.json`)*

3. **Configure Environment**
    Create a `.env` file in the root:

    ```env
    VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
    ```

4. **Start Development Server**

    ```bash
    npm run dev
    ```

    Access the app at `http://localhost:8080`

### Production Build

```bash
npm run build
# Preview the production build locally
npm run preview
```

---

## 📦 Project Structure

```bash
src/
├── components/        # Atomic UI components and Feature blocks
│   ├── ui/            # Primitive components (Button, Dialog, etc.)
│   └── ...            # Feature components (Hero, Skills, etc.)
├── hooks/             # Custom React hooks (use-toast, etc.)
├── lib/               # Utility functions (cn, date formatters)
├── pages/             # Route views (Index, NotFound)
└── main.tsx           # Application Entry Point
public/
├── lovable-uploads/   # Static assets and optimizations
├── sitemap.xml        # SEO Roadmap
└── robots.txt         # Crawler directives
```

---

## 🚀 Deployment

The project is configured for seamless deployment on **Vercel**.

1. Connect GitHub Repository to Vercel.
2. Vercel automatically detects `Vite` framework.
3. Add Environment Variables in Vercel Dashboard.
4. **Push to main** triggers an automatic build and deploy.

### CI/CD Pipeline

A GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to:

1. Install dependencies.
2. Lint code for quality.
3. Type-check TypeScript.
4. Verify production build success.

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

### � Contact

**Duba Venkata Satyanarayana**

- **Email**: [d.v.satyanarayana260@gmail.com](mailto:d.v.satyanarayana260@gmail.com)
- **LinkedIn**: [View Profile](https://www.linkedin.com/in/venkatasatyanarayana-duba-679372255)
- **GitHub**: [Satya136-dvsn](https://github.com/Satya136-dvsn)

---
*© 2026 Duba Venkata Satyanarayana. Engineered with care.*
