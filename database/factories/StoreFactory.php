<?php

namespace Database\Factories;

use App\Enums\StoreStatus;
use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'name' => fake()->company(),
            'address' => fake()->address(),
            'payment_method' => fake()->randomElement(['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer']),
            'status' => fake()->randomElement(StoreStatus::cases())->value,
        ];
    }
}
