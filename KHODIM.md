# KHODIM Engineering Rules & Standards

This document is the absolute source of truth for **KHODIM Design Studio**. 
Every AI Agent (Claude Code, Copilot, Cursor, etc.) and developer MUST strictly adhere to these rules. No exceptions.

---

## 1. TECH STACK & CORE DEPENDENCIES
* **Framework:** Next.js (App Router, React 19)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS + shadcn/ui
* **State Management:** Zustand (Global State)
* **Form & Validation:** React Hook Form + Zod

---

## 2. PROJECT STRUCTURE (VERTICAL SLICE ARCHITECTURE)
All application logic must reside in `src/`. Below is the strict directory map:

```text
src/
├── app/            # Routes, layouts, and page entrypoints only (No business logic)
├── components/     # Truly global, reusable UI components (e.g., UI primitives)
├── config/         # App configs, environment variables, and navigation maps
├── constants/      # Business constants (e.g., AI models, image ratios, routes)
├── features/       # Business modules (Vertical Slices: Prompt Studio, Gallery, etc.)
├── hooks/          # Global custom React hooks
├── lib/            # Third-party library initializations (e.g., client setups)
├── services/       # External API integrations and global fetchers
├── stores/         # Zustand global stores (No React Context unless requested)
├── styles/         # Global CSS style modifications
├── types/          # Global TypeScript type definitions
└── utils/          # Pure utility helper functions (No side effects)