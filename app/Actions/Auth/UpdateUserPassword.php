<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\DTOs\Auth\UpdatePasswordDTO;
use App\Models\User;
use App\Validators\Auth\UpdatePasswordValidator;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Contracts\UpdatesUserPasswords;

class UpdateUserPassword implements UpdatesUserPasswords
{
    /**
     * Validate and update the user's password.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, array $input): void
    {
        $validated = UpdatePasswordValidator::validate($input);

        $dto = new UpdatePasswordDTO(
            currentPassword: $validated['current_password'],
            password: $validated['password'],
        );

        $user->forceFill([
            'password' => Hash::make($dto->password),
        ])->save();
    }
}
