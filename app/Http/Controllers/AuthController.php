<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('Features/Auth/pages/LoginPage');
    }

    public function showRegister()
    {
        return Inertia::render('Features/Auth/pages/RegisterPage');
    }

    public function showForgotPassword()
    {
        return Inertia::render('Features/Auth/pages/ForgotPasswordPage');
    }
}
