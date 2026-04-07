<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\DTOs\Auth\ResetPasswordDTO;
use App\Models\User;
use App\Validators\Auth\ResetPasswordValidator;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Contracts\ResetsUserPasswords;

class ResetUserPassword implements ResetsUserPasswords
{
    /**
     * Validate and reset the user's forgotten password.
     *
     * @param  array<string, string>  $input
     */
    public function reset(User $user, array $input): void
    {
        $validated = ResetPasswordValidator::validate($input);

        $dto = new ResetPasswordDTO(
            email: $user->email,
            password: $validated['password'],
        );

        $user->forceFill([
            'password' => Hash::make($dto->password),
        ])->save();
    }
}
