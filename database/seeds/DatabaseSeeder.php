<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Listings;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);

        Model::reguard();
    }

    class UsersTableSeeder extends Seeder {

    public function run()
    {
            
        // We want to delete the users table if it exists before running the seed
        DB::table('listings')->delete();

        $listings = array(
                ['title' => 'Cozy Studio in Gold Coast', 'user_id' => '1', 'price_cents' => '89', 'city' => 'Chicago, IL', 'text' => 'An awesome place']
                
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($listings as $listing)
        {
            Listings::create($listing);
        }
    }
}
}
