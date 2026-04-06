<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Super Admin Account
        User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@admin.com',
            'role' => Role::SuperAdmin,
        ]);

        // Create Store Owner Account
        User::factory()->create([
            'name' => 'Store Owner',
            'email' => 'owner@owner.com',
            'role' => Role::StoreOwner,
        ]);
    }
}
