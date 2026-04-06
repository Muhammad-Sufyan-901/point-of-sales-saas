<?php

namespace Database\Factories;

use App\Models\Store;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'store_id' => Store::factory(),
            'invoice_number' => fake()->unique()->numerify('INV-########'),
            'total_amount' => fake()->randomFloat(2, 10, 5000),
            'payment_method' => fake()->randomElement(['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer']),
        ];
    }
}
