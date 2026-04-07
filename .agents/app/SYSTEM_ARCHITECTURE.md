# System Architecture & Best Practices: POS Generator SaaS

**Target Audience:** Fullstack Developers, AI Coding Agents
**Architecture Type:** Modern Monolith (Action-Based Backend + Feature-Based Frontend)

## 1. Concept of Communication (The Bridge)

This project adopts a **Modern Monolith** architecture. Instead of building a fully decoupled REST API and SPA frontend, the system relies on a tightly integrated bridge:

- **Backend (Laravel 13):** Acts as the main engine. This layer handles all database interactions, strict business logic via Action classes, external integrations via Services, and routing definitions.
- **Frontend (React 19):** Acts purely as the presentation and interaction layer (View).
- **The Bridge (Inertia.js v3):** Connects Laravel and React without full page reloads. Laravel Controllers return `Inertia::render()`, passing data directly to React components as props. For standalone client-side requests, the system uses Inertia v3's built-in `useHttp` client.

---

## 2. Backend Architecture: Action-Based Architecture

To ensure extreme scalability and separation of concerns, the backend strictly uses an **Action-Based Architecture** combined with Data Transfer Objects (DTOs). The "Fat Service" anti-pattern is strictly prohibited.

### 2.1 The Standard Workflow

1. **HTTP Request** is validated by `app/Http/Requests` (FormRequest).
2. **Controller** maps the validated array into a strongly-typed `DTO`.
3. **Controller** passes the `DTO` into a specific **Action** class.
4. **Action** executes the exact business logic (Database transactions, etc.). If external APIs are needed, the Action calls a **Service**.
5. **Action** returns the result to the Controller, which returns an Inertia response.

### 2.2 Directory Structure (`app/`)

```text
app/
├── Actions/                  # 🧠 BUSINESS LOGIC: Single responsibility classes.
│   ├── Auth/                 # Fortify auth actions (CreateNewUser, etc.)
│   ├── Tenant/               # e.g., CreateStoreAction, ApproveStoreAction
│   └── Cashier/              # e.g., ProcessCheckoutAction
├── DTOs/                     # 📦 DATA CONTRACTS: Strongly typed data wrappers.
│   └── Tenant/               # e.g., CreateStoreDTO (readonly classes)
├── Enums/                    # 🏷️ STATIC DATA: e.g., StoreStatus, UserRole.
├── Http/
│   ├── Controllers/          # 🚏 TRAFFIC COPS: Thin controllers. Only maps Request -> DTO -> Action.
│   └── Requests/             # 🛡️ VALIDATION: Handles raw HTTP input validation.
├── Models/                   # 🗄️ ORM: Eloquent Models with strict relationships.
└── Services/                 # 🔌 EXTERNAL VENDORS: Strict third-party integrations only.
    └── PaymentGatewayService.php # Deals with Xendit/Midtrans, NO internal business logic.
```

### 2.3 Backend Best Practices

- **Single Responsibility Actions:** An Action class must do exactly one thing (usually containing a single `execute()` method).
- **Immutable DTOs:** Always use PHP 8.2 `readonly class` for DTOs to ensure data cannot be mutated during transit.
- **Strict Typing:** Always use `declare(strict_types=1);` at the top of every PHP file. Use Constructor Property Promotion for dependency injection.
- **Authentication:** Use **Laravel Fortify** as the headless authentication backend. Inject custom Actions (like `CreateStoreAction`) directly into Fortify's `CreateNewUser` action.
- **Testing:** Strictly use **Pest v4**. Every Action class must have a corresponding feature/unit test.

---

## 3. Frontend Architecture: Feature-Based (Core & Features)

The React frontend completely separates foundational/global code (`Core`) from business-specific domain code (`Features`).

### 3.1 Directory Structure (`resources/js/`)

```text
resources/js/
├── Core/                     # ⚙️ FOUNDATION: Feature-agnostic global setups.
│   ├── Components/           # Dumb UI components (Tailwind v4 / Shadcn primitives).
│   │   └── common/           # Custom primitives (Box, Text, Heading, Container, Image).
│   │   └── ui/               # Custom shadcn UI components (Card, Button, Input, etc).
│   ├── Config/               # Global configurations and constants.
│   ├── Store/                # Global UI client state (e.g., useThemeStore.ts using Zustand).
│   ├── Types/                # Global TypeScript interfaces.
│   └── Utils/                # Pure helper functions (e.g., formatCurrency, Tailwind cn()).
│
├── Features/                 # 📦 BUSINESS DOMAINS: Strict isolation per feature.
│   ├── Auth/                 # (Example Feature Module)
│   │   ├── components/       # Presentational components specific to Auth (e.g., AuthSideHero.tsx)
│   │   ├── hooks/            # Feature-specific hooks (e.g., useLogin.ts, useRegister.ts)
│   │   ├── layouts/          # Feature-specific layouts (e.g., AuthLayout.tsx)
│   │   ├── pages/            # Smart components / Inertia entry points (e.g., LoginPage.tsx)
│   │   ├── schemas/          # Zod validation schemas (e.g., auth.schema.ts)
│   │   └── index.ts          # Public API export (Barrel file) for the Auth feature.
│   └── Cashier/              # POS components, Zustand Cart store, Cashier Types, etc.
│
├── Pages/                    # 📍 INERTIA ENTRY POINTS (Optional Router wrapper)
└── app.tsx                   # Main React 19 & Inertia v3 initialization.
```

### 3.2 Frontend Best Practices

- **Strict Feature Isolation:** Files inside `Core/` MUST NEVER import anything from `Features/`. Each domain inside `Features/` must be self-contained.
- **Barrel Pattern:** Use `index.ts` inside a feature folder to expose only the necessary components/hooks to the rest of the application.
- **Component Standards:** NEVER use native HTML tags for basic layout and typography. Exclusively use custom primitive components from `Core/Components/common/` (e.g., replace `<div>` with `<Box>`, `<p>` with `<Text>`, `<h1>` with `<Heading>`).
- **Routing (Laravel Wayfinder):** NEVER hardcode API or page URLs in React. **ALWAYS** use typed functions generated by Laravel Wayfinder (`wayfinder:generate`) imported from `@/actions/` or `@/routes/`.
- **State Management:**
  - **Server State:** Handled natively by Inertia Props or Inertia v3's `useHttp` hook.
  - **Client State:** Use **Zustand** exclusively for persistent UI state. Do not use React Context or `useState` for complex global state.
- **Form Handling:** All forms MUST use `react-hook-form` integrated with `@hookform/resolvers/zod`. Zod schemas must reside in the feature's `schemas/` folder.
