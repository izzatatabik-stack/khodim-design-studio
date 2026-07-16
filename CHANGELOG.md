# Changelog

All notable changes to the KHODIM Design Studio project will be documented in this file.

---

## [0.1.0] - Sprint 0.1: Project Initialization - DONE
### Added
- Initialized Next.js App using App Router (React 19, TypeScript).
- Integrated Tailwind CSS utility classes.
- Cloned and synced the local repository with GitHub (`main` branch).

---

## [0.2.0] - Sprint 0.2: Project Cleanup - DONE
### Added
- Reorganized project directory to follow clean Vertical Slice architecture (added `config`, `constants`, `components`, `features`, `hooks`, `lib`, `services`, `stores`, `styles`, `types`, and `utils`).
- Created `KHODIM.md` as the official Engineering Rules & Standards.
- Implemented folder preservation with `.gitkeep` placeholders.

---

## [0.3.0] - Sprint 0.3: Core Dependencies - IN PROGRESS
### Added
- Installed core state management: `zustand`.
- Installed form handling & validation: `react-hook-form`, `zod`, and `@hookform/resolvers`.
- Installed icon package: `lucide-react`.
- Initializing `shadcn/ui` component primitives.

---

## [0.4.0] - Sprint 0.4: Application Shell - DONE
### Added
- Created atomic layout components: `AppLayout`, `Sidebar`, `TopHeader`, `Workspace`, `Logo`, and `Navigation`.
- Transformed `src/app/layout.tsx` into a thin wrapper pushing all visual shell definitions into the decoupled component layout architecture.
- Built full desktop layout grid incorporating locked sidebar navigation and dynamic content viewport.

---

## [1.0.0] - Sprint 1: AI Prompt Studio (MVP) - DONE
### Added
- Implemented core domain types for `PromptVariable` and `PromptState`.
- Created pure domain engine logic in `utils/engine.ts` for real-time variable extraction and text compile simulation.
- Designed lightweight Zustand ledger store (`prompt.store.ts`) decoupled from business logic.
- Built atomic UI interface components: `PromptForm` (with dynamic input generation) and `PromptPreview`.
- Exposed features via main slice entrypoint (`index.tsx`) and connected to the global workspace.