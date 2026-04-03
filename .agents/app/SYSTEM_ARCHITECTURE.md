# System Architecture & Best Practices: POS Generator SaaS

**Target Audience:** Fullstack Developers, AI Coding Agents
**Architecture Type:** Modern Monolith (Service Layer Backend + Feature-Based Frontend)

## 1. Concept of Communication (The Bridge)

This project adopts a **Modern Monolith** architecture. Instead of building a fully decoupled REST API and SPA frontend, the system relies on a tightly integrated bridge:

- **Backend (Laravel 13):** Acts as the main engine. This layer handles all database interactions, strict business logic via the Service Layer, and routing definitions.
- **Frontend (React 19):** Acts purely as the presentation and interaction layer (View).
- **The Bridge (Inertia.js v3):** Connects Laravel and React without full page reloads. Laravel Controllers return `Inertia::render()`, passing data directly to React components as props. For standalone client-side requests (like background fetches), the system uses Inertia v3's built-in `useHttp` client.

---

## 2. Backend Architecture: Strict Service Layer Pattern

The backend strictly adheres to the **Service Layer Pattern** to prevent "Fat Controllers". Controllers must remain thin, delegating all complex calculations, database transactions, and business rules to dedicated Service classes.

### 2.1 Directory Structure (`app/`)

```text
app/
├── Enums/                    # [MANDATORY] Stores static data (e.g., StoreStatus, UserRole).
├── Http/
│   ├── Controllers/          # Thin Controllers: Receives request, calls Service, returns Response.
│   └── Requests/             # FormRequests: Handles all input validation before reaching Controller.
├── Models/                   # Eloquent ORM Models with strict relationship definitions.
└── Services/                 # 🧠 THE CORE: Contains all business logic.
    ├── TenantService.php     # Logic for store registration, approval, and suspension.
    └── CashierService.php    # Logic for cart calculations, stock deductions, and checkout.
```

### 2.2 Backend Best Practices

- **Strict Typing & PHP 8.4:** Always use `declare(strict_types=1);` at the top of every PHP file. Use Constructor Property Promotion for dependency injection (e.g., `public function __construct(private CashierService $cashierService) {}`).
- **Thin Controllers:** A controller method should ideally only contain 3-4 lines of code: validate request, call service, return response.
- **Authentication:** Use **Laravel Fortify** as the headless authentication backend. Do not write custom auth controllers; leverage Fortify's built-in actions like `CreateNewUser` and `UpdateUserProfileInformation`.
- **No Magic Strings:** Never use hardcoded strings for statuses. Always use PHP Enums from the `app/Enums/` directory.
- **Testing:** Strictly use **Pest v4**. Every Service class method and critical Controller action must have a corresponding feature test using the `it()` and `expect()` syntax. Run tests via `php artisan test --compact`.
- **Formatting:** Always run `vendor/bin/pint --dirty --format agent` to enforce code styling standards before committing.

---

## 3. Frontend Architecture: Feature-Based (Core & Features)

The React frontend completely separates foundational/global code from business-specific domain code. This prevents spaghetti code and ensures high maintainability as the SaaS platform grows.

### 3.1 Directory Structure (`resources/js/`)

```text
resources/js/
├── Core/                     # ⚙️ FOUNDATION: Feature-agnostic global setups.
│   ├── Components/           # Dumb UI components (Tailwind v4 / Shadcn). No business logic!
│   ├── Config/               # Global configurations and constants.
│   ├── Layouts/              # Global layout wrappers (e.g., AppLayout, GuestLayout).
│   ├── Store/                # Global UI client state (e.g., useThemeStore.ts using Zustand).
│   ├── Types/                # Global TypeScript interfaces.
│   └── Utils/                # Pure helper functions (e.g., formatCurrency, Tailwind cn()).
│
├── Features/                 # 📦 BUSINESS DOMAINS: Strict isolation per feature.
│   ├── Auth/                 # Auth UI, forms, and validation schemas.
│   ├── Cashier/              # POS components (ProductGrid), Zustand Cart store, and Cashier Types.
│   └── TenantManagement/     # Super Admin components (TenantTable, ApprovalModal).
│
├── Pages/                    # 📍 INERTIA ENTRY POINTS: Called directly by Laravel Routes.
│   ├── Auth/Login.tsx
│   └── Cashier/Index.tsx     # Smart components that assemble pieces from Features/.
│
└── app.tsx                   # Main React 19 & Inertia v3 initialization.
```

### 3.2 Frontend Best Practices

- **Strict Feature Isolation:** Files inside `Core/` MUST NEVER import anything from `Features/`. Each domain inside `Features/` must be self-contained and avoid importing from other features whenever possible.
- **Routing (Laravel Wayfinder):** NEVER hardcode API or page URLs in React (e.g., `href="/login"`). **ALWAYS** use typed functions generated by Laravel Wayfinder (`wayfinder:generate`) imported from `@/actions/` or `@/routes/` (e.g., `route('login').url()`).
- **State Management Separation:**
    - **Server State:** Handled natively by Inertia Props. For standalone background requests, use Inertia v3's `useHttp` hook (Axios is no longer used in this stack).
    - **Client State:** Use **Zustand** exclusively for persistent UI state (e.g., the Shopping Cart in the Cashier feature or Theme toggles). Do not use React Context or `useState` for complex global state.
- **Form Handling:** All forms MUST use `react-hook-form` integrated with `@hookform/resolvers/zod`. Zod validation schemas must be stored inside their respective feature folders (e.g., `Features/Auth/Schemas/loginSchema.ts`).
- **Inertia v3 UX Features:** Leverage `Inertia::defer()` for heavy data loads with UI skeleton loading, and utilize optimistic updates for the POS cart to ensure instant response times on the client side.
- **Styling:** Use Tailwind CSS v4 utility classes. Extract highly reusable UI components to `Core/Components/` to keep page files clean.
