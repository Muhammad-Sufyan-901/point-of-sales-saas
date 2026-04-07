<?php

declare(strict_types=1);

namespace App\DTOs\Auth;

readonly class RegisterUserDTO
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
    ) {}
}
