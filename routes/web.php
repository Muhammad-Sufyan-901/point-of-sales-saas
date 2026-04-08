<?php

use App\Http\Controllers\Marketing\LandingPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing Page Routes (Public)
Route::get('/', [LandingPageController::class, 'index'])->name('home');

// Tenant Dashboard Routes (Private)
Route::get('/{name}/dashboard', function ($name) {
    return Inertia::render('Features/Dashboard/pages/DashboardPage', [
        'name' => $name,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
