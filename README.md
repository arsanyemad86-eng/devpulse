# DevPulse

A community platform for Arabic-speaking developers to share build logs, ask technical questions, and showcase finished projects.

## Live Demo

https://devpulse-two-rho.vercel.app

## Why DevPulse

Most social platforms force a single content shape. DevPulse is built around three distinct content types that match how developers actually communicate progress: **Build Logs** (incremental updates), **Questions** (Q&A with tags), and **Showcases** (finished work with links).

## Tech Stack

- **React 19 + TypeScript** — strict typing across the entire data layer using discriminated unions for post types
- **Vite** — build tooling with route-based code splitting
- **Tailwind CSS v4** — CSS-first theming via `@theme`
- **Zustand** — lightweight global state for posts, likes, and follows
- **React Router v6** — client-side routing with lazy-loaded pages

## Architecture Decisions

- **Discriminated unions for posts**: `Post = BuildLogPost | QuestionPost | ShowcasePost`, letting TypeScript narrow types automatically in `PostCard` without manual casting.
- **Feature-based folder structure**: `components/` holds presentation, `features/` holds state and business logic — swapping mock data for a real API later only touches `features/`.
- **Tree-built nested comments**: flat comment data is converted to a recursive tree (`buildCommentTree.ts`) for O(n) construction instead of repeated filtering.
- **`dir="auto"` per content block** instead of a global RTL flip — UI chrome stays LTR while user-generated Arabic/English content auto-detects its own direction.
- **Code-split routes**: each page lazy-loads independently, keeping the initial bundle under 2kB per route.

## Features
- Three post types with type-specific rendering and validation
- Nested comment threads with unlimited reply depth
- Like and Follow with optimistic UI updates
- Functional post creation form
- Loading skeletons, empty states, and error states throughout
- Fully responsive dark-mode UI

## Running Locally

Run these commands in order:

1. `npm install`
2. `npm run dev`

## Project Structure

- `src/components/` — Presentational components (UI, feed, post, layout)
- `src/features/` — State management (Zustand stores)
- `src/pages/` — Route-level components
- `src/data/` — Mock data (to be replaced by API calls)
- `src/types/` — Shared TypeScript interfaces
- `src/lib/` — Utility functions

## What's Next

This frontend is feature-complete and ready for backend integration. The next phase replaces `src/data/mockData.ts` with real API calls inside `features/*/api/`, with no changes needed to any presentational component.