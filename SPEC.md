# Spec: LLD & OOP Roadmap — Next.js Web App

## Overview

A focused, self-contained Next.js web app that serves as an **ultra-quick visual roadmap** for Low Level Design (LLD) and Object-Oriented Programming (OOP). Targeted at developers preparing for system design interviews or wanting a structured refresher. The content is opinionated, sequential, and minimal — no fluff, no bloat.

---

## Goals

- Give developers a clear, ordered path through OOP fundamentals → LLD patterns → real-world design problems.
- Each topic is a short, dense page: concept + example + when-to-use.
- Track progress locally (localStorage) so users can see what they've covered.
- Zero auth, zero backend, no database — fully static.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Static export, file-based routing |
| Styling | Tailwind CSS | Fast, utility-first |
| Content | MDX (via `@next/mdx`) | Write topic pages in Markdown + JSX |
| Diagrams | Mermaid.js | Inline UML class/sequence diagrams |
| State | localStorage + React Context | Progress tracking, no backend needed |
| Deployment | Vercel / static export | One-click deploy |

---

## Site Structure

```
/                          → Landing page: roadmap overview + progress bar
/roadmap                   → Interactive roadmap graph (nodes = topics)
/oop/[slug]                → OOP concept pages
/lld/[slug]                → LLD pattern / design problem pages
/cheatsheet                → Single-page quick reference (print-friendly)
```

---

## Roadmap Content

The roadmap is split into three sequential phases. Each phase unlocks after the previous one is conceptually complete (soft gating via UI nudge, not hard lock).

---

### Phase 1 — OOP Foundations

| # | Topic | Slug | Key Concepts |
|---|---|---|---|
| 1 | Classes & Objects | `classes-objects` | Fields, methods, constructors, `this` |
| 2 | Encapsulation | `encapsulation` | Access modifiers, getters/setters, information hiding |
| 3 | Abstraction | `abstraction` | Abstract classes vs interfaces, "what not how" |
| 4 | Inheritance | `inheritance` | `extends`, method overriding, `super`, IS-A vs HAS-A |
| 5 | Polymorphism | `polymorphism` | Compile-time (overloading) vs runtime (overriding), dynamic dispatch |
| 6 | Composition over Inheritance | `composition` | Favor HAS-A, avoiding brittle hierarchies |
| 7 | SOLID Principles | `solid` | SRP, OCP, LSP, ISP, DIP — one example each |

---

### Phase 2 — Design Patterns (LLD Building Blocks)

Grouped by GoF category.

#### Creational
| # | Pattern | Slug | One-liner |
|---|---|---|---|
| 8 | Singleton | `singleton` | One instance, global access point |
| 9 | Factory Method | `factory-method` | Subclass decides what to instantiate |
| 10 | Abstract Factory | `abstract-factory` | Family of related objects without specifying classes |
| 11 | Builder | `builder` | Step-by-step construction of complex objects |
| 12 | Prototype | `prototype` | Clone existing object instead of `new` |

#### Structural
| # | Pattern | Slug | One-liner |
|---|---|---|---|
| 13 | Adapter | `adapter` | Make incompatible interfaces work together |
| 14 | Decorator | `decorator` | Add behavior at runtime without subclassing |
| 15 | Facade | `facade` | Simplified interface to a complex subsystem |
| 16 | Composite | `composite` | Treat individual objects and trees uniformly |
| 17 | Proxy | `proxy` | Control access to another object |

#### Behavioral
| # | Pattern | Slug | One-liner |
|---|---|---|---|
| 18 | Observer | `observer` | Notify dependents on state change (pub/sub) |
| 19 | Strategy | `strategy` | Swap algorithms at runtime |
| 20 | Command | `command` | Encapsulate a request as an object (undo/redo) |
| 21 | Iterator | `iterator` | Sequential access without exposing internals |
| 22 | State | `state` | Object changes behavior when state changes |
| 23 | Template Method | `template-method` | Define skeleton, let subclasses fill in steps |

---

### Phase 3 — LLD Design Problems

Classic interview-style problems. Each page includes: requirements → entities/classes → class diagram → key methods → code skeleton.

| # | Problem | Slug | Core Patterns Used |
|---|---|---|---|
| 24 | Parking Lot | `parking-lot` | Factory, Strategy (pricing), Singleton (entry gate) |
| 25 | Library Management System | `library` | Observer, Iterator, State (book availability) |
| 26 | Elevator System | `elevator` | State, Strategy (scheduling), Observer |
| 27 | Hotel Booking System | `hotel-booking` | Factory, Builder (reservation), Observer |
| 28 | Chess Game | `chess` | Composite (board), Command (moves/undo), Iterator |
| 29 | Ride-Sharing (Uber/Lyft) | `ride-sharing` | Strategy (matching), Observer (location), State (trip) |
| 30 | Splitwise | `splitwise` | Strategy (split algorithms), Observer (notifications) |
| 31 | Snake & Ladder | `snake-ladder` | Command, Composite (board) |
| 32 | ATM Machine | `atm` | State, Facade, Strategy (cash dispensing) |
| 33 | Vending Machine | `vending-machine` | State machine pattern |

---

## Page Layout — Topic Page (`/oop/[slug]` or `/lld/[slug]`)

Each page follows a rigid structure to maintain consistency:

```
[ Breadcrumb ] Phase > Topic Name

[ Concept ]       — 2–4 sentence plain-English explanation
[ When to use ]   — 2–3 bullet points
[ Diagram ]       — Mermaid UML class or sequence diagram
[ Code ]          — Minimal code example (Java or TypeScript, toggle)
[ Gotchas ]       — 1–3 common mistakes
[ ← Prev ] [ Mark as Done ✓ ] [ Next → ]
```

---

## Landing Page (`/`)

- Headline: "LLD + OOP in 33 stops."
- Subheadline: "No filler. Just the concepts, patterns, and problems that matter."
- Overall progress bar (X / 33 topics done).
- Three phase cards linking to Phase 1 / 2 / 3.
- "Start from the beginning" CTA → `/oop/classes-objects`.

---

## Roadmap Page (`/roadmap`)

- Visual node graph rendered with a lightweight layout (flexbox grid or simple SVG lines).
- Nodes are colored by status: **untouched** (gray) / **in-progress** (blue) / **done** (green).
- Clicking a node navigates to that topic's page.
- Phases are visually separated into columns/rows.

---

## Cheatsheet Page (`/cheatsheet`)

- Single scrollable page.
- OOP pillars table, SOLID quick ref, design pattern one-liners, design problem → patterns map.
- "Print / Save as PDF" button.

---

## Progress Tracking

- Stored in `localStorage` under key `lld_progress`: a JSON object `{ [slug]: boolean }`.
- React Context (`ProgressContext`) exposes `markDone(slug)`, `isDone(slug)`, `totalDone`, `reset()`.
- "Mark as Done" button on each topic page updates context + localStorage.
- Progress bar on `/` reads from context.
- No account needed; progress is per-browser.

---

## Content Format (MDX)

Each topic lives in `content/oop/[slug].mdx` or `content/lld/[slug].mdx`.

```mdx
---
title: "Encapsulation"
phase: 1
order: 2
prev: classes-objects
next: abstraction
---

## What is it?

Encapsulation bundles data and the methods that operate on it into a single unit (class),
and restricts direct access to internal state.

## When to use

- Whenever you want to hide implementation details from callers.
- To enforce invariants — e.g. `balance` should never go negative.

## Diagram

\`\`\`mermaid
classDiagram
  class BankAccount {
    -double balance
    +deposit(amount: double)
    +withdraw(amount: double)
    +getBalance(): double
  }
\`\`\`

## Code

\`\`\`typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) { this.balance += amount; }
  withdraw(amount: number) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
  getBalance() { return this.balance; }
}
\`\`\`

## Gotchas

- Don't expose mutable internal objects via getters — return copies or use immutability.
- Overusing getters/setters is just public fields in disguise.
```

---

## Key Files & Directories

```
hld-lld/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── roadmap/page.tsx          # Roadmap graph
│   ├── oop/[slug]/page.tsx       # OOP topic page
│   ├── lld/[slug]/page.tsx       # LLD topic page
│   └── cheatsheet/page.tsx       # Cheatsheet
├── content/
│   ├── oop/                      # MDX files for OOP topics
│   └── lld/                      # MDX files for LLD topics
├── components/
│   ├── ProgressBar.tsx
│   ├── RoadmapGraph.tsx
│   ├── TopicNav.tsx              # Prev / Next / Mark Done
│   ├── CodeBlock.tsx             # Syntax-highlighted code + lang toggle
│   └── MermaidDiagram.tsx
├── context/
│   └── ProgressContext.tsx
├── lib/
│   └── topics.ts                 # Topic metadata, ordering, slug resolution
└── tailwind.config.ts
```

---

## Non-Goals

- No user accounts or server-side state.
- No video content or animations.
- No quizzes or gamification (keep scope tight).
- No HLD (high level design) content — separate app if needed.
- No multi-language UI (English only).

---

## Open Questions

1. Code examples in TypeScript or Java? (Toggle between both is ideal but adds complexity — default to TypeScript, add Java toggle in v2.)
2. Should the roadmap page use a proper graph library (e.g. React Flow) or a simple CSS grid? Start with CSS grid.
3. Dark mode from day one or later? Dark mode via Tailwind `dark:` classes from the start — light mode is the default, with a manual toggle (stored in localStorage) to switch to dark.
