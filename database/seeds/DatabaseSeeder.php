<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Listings;
Use App\Bookings;

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

        $this->call(ListingsTableSeeder::class);
        $this->call(BookingsTableSeeder::class);
        $this->call(UsersTableSeeder::class);

        Model::reguard();
    }

}

class ListingsTableSeeder extends Seeder 
{

    public function run()
    {
            
        // We want to delete the users table if it exists before running the seed
        DB::table('listings')->delete();

        $listings = array(
                ['title' => 'Cozy Studio in Gold Coast', 'user_id' => '1', 'price_cents' => '89', 'city' => 'Chicago, IL', 'summary' => 'An awesome place', 'status' => 'Listed']
                
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($listings as $listing)
        {
            Listings::create($listing);
        }
    }
}

class BookingsTableSeeder extends Seeder 
{

    public function run()
    {
            
        // We want to delete the users table if it exists before running the seed
        DB::table('bookings')->delete();

        $bookings = array(
                ['user_id' => '1', 'listing_id' => '1', 'checkin' => '456456', 'checkout' => '23452345', 'status' => 'Booked']
                
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($bookings as $booking)
        {
            Bookings::create($booking);
        }
    }
}

class UsersTableSeeder extends Seeder 
{

    public function run()
    {
            
        // We want to delete the users table if it exists before running the seed
        DB::table('users')->delete();

        $bookings = array(
                ['user_id' => '1', 'listing_id' => '1', 'checkin' => '456456', 'checkout' => '23452345', 'status' => 'Booked']
                
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($bookings as $booking)
        {
            Bookings::create($booking);
        }
    }
}
