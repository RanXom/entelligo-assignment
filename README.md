# User Directory

## Overview

A modern, responsive User Directory application built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui. The project showcases robust client-side filtering, searching, sorting, and seamless modal user interactions, alongside an unhinged easter egg experience.

## Tech Stack

- Framework: Next.js 15+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (v4/OKLCH theme)
- UI Components: shadcn/ui & Base UI primitives
- Animations: Framer Motion
- Notifications: Sonner

## Features

- Dynamic Data Pipeline: Real-time client-side searching, role/blood group filtering, and multi-field sorting (name, age, ID).
- Infinite Load More: Smooth expandable list behavior powered by Framer Motion layout transitions.
- Interactive Modals: Glassmorphic profile cards with unique deterministic gradient backgrounds and a loading skeleton state.
- Easter Egg Interaction: "Get in Touch" button triggers unhinged, general-audience randomized response toasts via Sonner.
- Resilient UX: Custom route-level loading skeletons, error boundaries, and a custom 404 "not found" page.

## Getting Started

Clone the repository and run it locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

> Utilizes the public DummyJSON /users endpoint for fast, keyless, and stable user payloads.

## Architecture

Structured for separation of concerns and clear data boundaries:

- src/app/: Next.js App Router pages, global error boundary, 404 page, and route loading skeletons.
- src/components/: Modular UI primitives, table structures, and user card/modal views.
- src/lib/: Centralized API clients and utility functions.
- src/types/: Strict TypeScript interfaces for the user schema.

Error and Loading States

- Loading: Displays custom skeleton shimmer states for route loading and profile card inspection.
- Error Boundaries: Gracefully handles network or API failures with a clean recovery retry UI.
- Not Found: Intercepts missing or invalid routes with a dedicated 404 view.

> AI was leveraged as an engineering assistant for accelerating boilerplate code generation, implementing Framer Motion physics, and refining error-handling patterns.
