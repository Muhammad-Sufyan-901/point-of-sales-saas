<?php

use App\Http\Controllers\LandingPageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingPageController::class, 'index'])->name('home');

use App\Http\Controllers\AuthController;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::get('/forgot-password', [AuthController::class, 'showForgotPassword'])->name('password.request');
});

Route::get('/{name}/dashboard', function ($name) {
    return Inertia::render('Features/Dashboard/pages/DashboardPage', [
        'name' => $name,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
