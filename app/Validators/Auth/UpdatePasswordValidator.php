<?php

declare(strict_types=1);

namespace App\Validators\Auth;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class UpdatePasswordValidator
{
    /**
     * Validate password update input and return the validated array.
     *
     * @param  array<string, string>  $input
     * @return array<string, string>
     *
     * @throws ValidationException
     */
    public static function validate(array $input): array
    {
        return Validator::make($input, [
            'current_password' => ['required', 'string', 'current_password:web'],
            'password' => ['required', 'string', Password::defaults(), 'confirmed'],
        ], [
            'current_password.current_password' => __('The provided password does not match your current password.'),
        ])->validateWithBag('updatePassword');
    }
}
