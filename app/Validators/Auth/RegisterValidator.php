<?php

declare(strict_types=1);

namespace App\Validators\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class RegisterValidator
{
    /**
     * Validate registration input and return the validated array.
     *
     * @param  array<string, string>  $input
     * @return array<string, string>
     *
     * @throws ValidationException
     */
    public static function validate(array $input): array
    {
        return Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => ['required', 'string', Password::defaults(), 'confirmed'],
        ])->validate();
    }
}
