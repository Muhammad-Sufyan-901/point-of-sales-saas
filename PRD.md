# AI Context PRD: POS Generator SaaS

## 1. Project Overview

A Multi-tenant Software as a Service (SaaS) platform that allows users to obtain an independent Point of Sales (POS) system. The system utilizes a centralized verification workflow where every new store (Tenant) must be approved by a Super Admin before it can operate.

## 2. Tech Stack & Tools

- **Backend**: Laravel.
- **Frontend**: React.js, TypeScript, Inertia.js.
- **Database**: MySQL.
- **Styling**: Tailwind CSS and ShadcnUI.
- **Testing**: Pest v4.
- **Frontend Routing**: Laravel Wayfinder.

## 3. Strict Architectural Rules

### Backend (Modern Monolith & Service Layer)

- Uses a strict Service Layer pattern to avoid "Fat Controllers".
- Thin Controllers: The Controller only receives requests, calls the Service, and returns a Response.
- All business logic must be placed inside the `app/Services/` folder (e.g., `TenantService.php`, `CashierService.php`).
- Mandatory use of PHP Enums (`app/Enums/`) for static data (e.g., `StoreStatus`). Hardcoded magic strings are prohibited.
- Implement Strict Typing (`declare(strict_types=1);`) and Constructor Property Promotion.

### Frontend (Feature-Based Architecture)

- The frontend directory is strictly separated into `Core/` (agnostic foundation) and `Features/` (business domains such as `Auth`, `Cashier`).
- **State Management**: Server state uses Inertia Props and `useHttp`. Client state **must** use Zustand exclusively (do not use React Context/useState for global state).
- **Forms & Validation**: All forms must use `react-hook-form` + `Zod`. Schemas are stored inside their respective feature folders.
- **Routing**: Hardcoding URLs is prohibited. Must use typed functions from Laravel Wayfinder (`wayfinder:generate`).
- **Inertia UX**: Use `Inertia::defer()` with skeleton loading and implement optimistic updates in the Cashier cart.

## 4. Core Database Schema (Single Database Multi-tenancy)

All data is strictly separated using the `store_id` foreign key.

- **`users`**: `id`, `name`, `email`, `password`, `role` (enum: superadmin, store_owner).
- **`stores`**: `id`, `user_id`, `name`, `address`, `payment_method`, `status` (enum: pending, active, suspended).
- **`categories`**: `id`, `store_id`, `name`.
- **`products`**: `id`, `store_id`, `category_id`, `name`, `price`, `stock`, `image_url`, `deleted_at` (Soft Deletes).
- **`transactions`**: `id`, `store_id`, `invoice_number`, `total_amount`, `payment_method`.
- **`transaction_items`**: `id`, `transaction_id`, `product_id`, `product_name` (snapshot), `price` (snapshot), `quantity`, `subtotal`.

## 5. User Workflows

- **Super Admin**: Login -> Tenant Management Module -> Approve, Suspend, or Delete store entities.
- **Store Owner**: Registration -> Enters waiting room/`pending` status -> Approved by Admin (becomes `active`) -> Accesses Dashboard.
- **Cashier (POS)**: Store Owner can select products (added to Cart), automatic calculation, Checkout (deducts stock), and print receipts.
