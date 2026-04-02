# Database Schema & Migration Brief: POS Generator SaaS

**Database System:** MySQL
**ORM Framework:** Laravel Eloquent

## 1. Architecture Overview

- This database system is designed with a **Single Database Multi-tenancy** approach.
- All data from various stores is stored in the same database but is strictly isolated using the `store_id` foreign key.
- This design also accommodates the Super Admin role to manage the approval status of every registered store.

## 2. Migration Standards

- **Data Integrity:** Use `cascadeOnDelete` for strong relationships (e.g., if a store is deleted, its categories are also deleted). Use `nullOnDelete` for historical data (e.g., if a product is deleted, the transaction history remains, but the product ID becomes null).
- **Audit Trail:** Every main table must include Laravel's built-in `timestamps()` (`created_at` and `updated_at`).
- **Soft Deletes:** Specifically used on the `products` table so that products deleted by the store owner do not break past report calculations.

---

## 3. Detailed Table Specifications

### A. `users` Table

Stores authentication data for both Super Admins and Store Owners.

| Column       | Data Type         | Attributes / Constraints                                          |
| :----------- | :---------------- | :---------------------------------------------------------------- |
| `id`         | `bigint`          | Primary Key, Auto-increment                                       |
| `name`       | `string`          | -                                                                 |
| `email`      | `string`          | Unique                                                            |
| `password`   | `string`          | -                                                                 |
| `role`       | `enum` / `string` | Values: `['superadmin', 'store_owner']`, Default: `'store_owner'` |
| `timestamps` | `timestamp`       | `created_at`, `updated_at`                                        |

### B. `stores` Table

Stores store entity information and its verification status.

| Column           | Data Type         | Attributes / Constraints                                           |
| :--------------- | :---------------- | :----------------------------------------------------------------- |
| `id`             | `bigint`          | Primary Key, Auto-increment                                        |
| `user_id`        | `foreignId`       | References `users(id)`, `cascadeOnDelete`                          |
| `name`           | `string`          | Store name                                                         |
| `address`        | `text`            | Nullable                                                           |
| `payment_method` | `string`          | Nullable (e.g., "QRIS", "BCA - 123456")                            |
| `status`         | `enum` / `string` | Values: `['pending', 'active', 'suspended']`, Default: `'pending'` |
| `timestamps`     | `timestamp`       | `created_at`, `updated_at`                                         |

### C. `categories` Table

Stores product/menu categories per store (e.g., _Beverages_, _Main Course_).

| Column       | Data Type   | Attributes / Constraints                   |
| :----------- | :---------- | :----------------------------------------- |
| `id`         | `bigint`    | Primary Key, Auto-increment                |
| `store_id`   | `foreignId` | References `stores(id)`, `cascadeOnDelete` |
| `name`       | `string`    | -                                          |
| `timestamps` | `timestamp` | `created_at`, `updated_at`                 |

### D. `products` Table

Stores master data for products/items.

| Column        | Data Type        | Attributes / Constraints                                |
| :------------ | :--------------- | :------------------------------------------------------ |
| `id`          | `bigint`         | Primary Key, Auto-increment                             |
| `store_id`    | `foreignId`      | References `stores(id)`, `cascadeOnDelete`              |
| `category_id` | `foreignId`      | References `categories(id)`, `nullable`, `nullOnDelete` |
| `name`        | `string`         | -                                                       |
| `price`       | `decimal(15, 2)` | Supports up to billions with 2 decimal places           |
| `stock`       | `integer`        | Default: 0                                              |
| `image_url`   | `string`         | Nullable                                                |
| `timestamps`  | `timestamp`      | `created_at`, `updated_at`                              |
| `deleted_at`  | `timestamp`      | Uses `softDeletes()`                                    |

### E. `transactions` Table

Stores the main header data for a payment receipt/invoice.

| Column           | Data Type        | Attributes / Constraints                   |
| :--------------- | :--------------- | :----------------------------------------- |
| `id`             | `bigint`         | Primary Key, Auto-increment                |
| `store_id`       | `foreignId`      | References `stores(id)`, `cascadeOnDelete` |
| `invoice_number` | `string`         | Unique (Format example: INV-20260330-001)  |
| `total_amount`   | `decimal(15, 2)` | -                                          |
| `payment_method` | `string`         | Default: `'cash'`                          |
| `timestamps`     | `timestamp`      | `created_at`, `updated_at`                 |

### F. `transaction_items` Table

Stores the details (snapshot) of items purchased in a transaction.

| Column           | Data Type        | Attributes / Constraints                                |
| :--------------- | :--------------- | :------------------------------------------------------ |
| `id`             | `bigint`         | Primary Key, Auto-increment                             |
| `transaction_id` | `foreignId`      | References `transactions(id)`, `cascadeOnDelete`        |
| `product_id`     | `foreignId`      | References `products(id)`, `nullable`, `nullOnDelete`   |
| `product_name`   | `string`         | Snapshot of the product name at the time of transaction |
| `price`          | `decimal(15, 2)` | Snapshot of the price at the time of transaction        |
| `quantity`       | `integer`        | -                                                       |
| `subtotal`       | `decimal(15, 2)` | Result of `price` \* `quantity`                         |
| `timestamps`     | `timestamp`      | `created_at`, `updated_at`                              |

---

## 4. Eloquent Relationships Mapping

Guidelines for writing Laravel Models:

- **`User` Model:** `hasOne(Store::class)`
- **`Store` Model:** `belongsTo(User::class)`, `hasMany(Category::class)`, `hasMany(Product::class)`, `hasMany(Transaction::class)`
- **`Category` Model:** `belongsTo(Store::class)`, `hasMany(Product::class)`
- **`Product` Model:** `belongsTo(Store::class)`, `belongsTo(Category::class)`, `hasMany(TransactionItem::class)`
- **`Transaction` Model:** `belongsTo(Store::class)`, `hasMany(TransactionItem::class)`
- **`TransactionItem` Model:** `belongsTo(Transaction::class)`, `belongsTo(Product::class)`

---

## 5. Security & Access Notes

- Every query (Select, Update, Delete) executed by the `store_owner` role MUST include a filter `where('store_id', auth()->user()->store->id)` to prevent data leakage between stores.
- The implementation of Laravel **Global Scopes** is highly recommended to automate this filtering process.
