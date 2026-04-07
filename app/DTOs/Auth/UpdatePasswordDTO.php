<?php

declare(strict_types=1);

namespace App\DTOs\Auth;

readonly class UpdatePasswordDTO
{
    public function __construct(
        public string $currentPassword,
        public string $password,
    ) {}
}
