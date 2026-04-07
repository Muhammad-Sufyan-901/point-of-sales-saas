<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\DTOs\Auth\UpdateProfileDTO;
use App\Models\User;
use App\Validators\Auth\UpdateProfileValidator;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, array $input): void
    {
        $validated = UpdateProfileValidator::validate($input, $user);

        $dto = new UpdateProfileDTO(
            name: $validated['name'],
            email: $validated['email'],
        );

        if ($dto->email !== $user->email && $user instanceof MustVerifyEmail) {
            $this->updateVerifiedUser($user, $dto);
        } else {
            $user->forceFill([
                'name' => $dto->name,
                'email' => $dto->email,
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     */
    protected function updateVerifiedUser(User $user, UpdateProfileDTO $dto): void
    {
        $user->forceFill([
            'name' => $dto->name,
            'email' => $dto->email,
            'email_verified_at' => null,
        ])->save();

        $user->sendEmailVerificationNotification();
    }
}
