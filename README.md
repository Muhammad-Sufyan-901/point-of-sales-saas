# 🛒 POS Generator SaaS

Aplikasi _Software as a Service_ (SaaS) berbasis _Multi-tenant_ yang memungkinkan pengguna (Pemilik Toko) mendaftar dan secara instan mendapatkan sistem _Point of Sales_ (POS) untuk bisnis mereka. Proyek ini juga dilengkapi dengan Dasbor Super Admin untuk verifikasi penyewa (tenant) secara terpusat.

## ✨ Fitur Utama

**Untuk Super Admin:**

- Dasbor analitik (Overview Metrics) platform.
- Manajemen Tenant: _Approve_ (Setujui), _Suspend_ (Tangguhkan), dan _Reject/Delete_ pendaftaran toko.

**Untuk Pemilik Toko (Store Owner):**

- Pendaftaran mandiri dan _onboarding_ toko.
- Dasbor ringkasan performa toko dan peringatan stok menipis.
- Manajemen Produk (CRUD) dengan fitur _Soft Deletes_.
- Antarmuka Kasir (POS) SPA interaktif dengan fitur keranjang dan kalkulasi total otomatis.
- Riwayat Transaksi lengkap dengan fitur ekspor ke CSV/Excel.

## 🛠️ Tech Stack & Arsitektur

Proyek ini dibangun menggunakan arsitektur **Modern Monolith** (_Service Layer_ di sisi Backend dan _Feature-Based_ di sisi Frontend).

- **Backend:** Laravel 13, PHP 8.4.
- **Frontend:** React 19, Inertia.js v3, Tailwind CSS v4, ShadcnUI.
- **State Management:** Zustand (Client State).
- **Routing Frontend:** Laravel Wayfinder.
- **Database:** MySQL / MariaDB (Multi-tenant via `store_id`).
- **Testing:** Pest v4.

## 📦 Prasyarat Sistem

Pastikan sistem Anda telah menginstal:

- PHP >= 8.4
- Composer >= 2.x
- Node.js >= 20.x & NPM
- MySQL / MariaDB

## 🚀 Panduan Instalasi (Lokal)

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer Anda:

**1. Clone Repositori**

```bash
git clone https://github.com/Muhammad-Sufyan-901/POS-generator-saas.git
cd POS-generator-saas
```

**2. Instalasi Dependensi Backend**

```bash
composer install
```

**3. Instalasi Dependensi Frontend**

```bash
npm install
```

**4. Konfigurasi Environment**
Salin file `.env.example` menjadi `.env` dan atur konfigurasi koneksi _database_ Anda.

```bash
cp .env.example .env
php artisan key:generate
```

_(Pastikan untuk mengatur `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD` di dalam berkas `.env`)_

**5. Jalankan Migrasi & Seeder Database**

```bash
php artisan migrate --seed
```

**6. Generate Routing Wayfinder (Frontend)**
Sistem ini tidak menggunakan _hardcode URL_ di React. Anda harus melakukan _generate function_ rute:

```bash
php artisan wayfinder:generate
```

**7. Jalankan Server Development**
Buka dua terminal dan jalankan kedua perintah berikut secara bersamaan:

**Terminal 1 (Backend Laravel):**

```bash
php artisan serve
```

**Terminal 2 (Frontend Vite/React):**

```bash
npm run dev
```

**atau dengan composer agar langsung menjalankan keduanya:**

```bash
composer run dev
```

Aplikasi dapat diakses di `http://localhost:8000` atau `http://127.0.0.1:8000`.

## 🧪 Pengujian & Standar Kode

- **Testing:** Proyek ini menggunakan Pest. Untuk menjalankan pengujian, gunakan perintah:

```bash
php artisan test --compact
```

- **Code Formatting:** Pastikan kode Backend rapi dan sesuai standar dengan menggunakan Laravel Pint:

```bash
vendor/bin/pint --dirty --format agent
```
