<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<TransactionItem>
 */
class TransactionItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $price = fake()->randomFloat(2, 10, 1000);
        $quantity = fake()->numberBetween(1, 10);

        return [
            'transaction_id' => Transaction::factory(),
            'product_id' => Product::factory(),
            'product_name' => fake()->words(3, true),
            'price' => $price,
            'quantity' => $quantity,
            'subtotal' => $price * $quantity,
        ];
    }
}
