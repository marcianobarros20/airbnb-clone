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
                ['title' => 'Cozy Studio in Gold Coast', 'user_id' => '1', 'price_cents' => '89', 'city' => 'Chicago, IL', 'summary' => 'An awesome place', 'status' => 'Listed'],
                ['title' => 'Comfortable Place in Streeterville', 'user_id' => '2', 'price_cents' => '89', 'city' => 'Chicago, IL', 'summary' => 'An awesome place', 'status' => 'Listed']
                
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
                ['user_id' => '4', 'host_id' => '1', 'listing_id' => '1', 'checkin' => '1439825178000', 'checkout' => '1440478800000', 'status' => 'Pending'],
                ['user_id' => '1', 'host_id' => '4', 'listing_id' => '1', 'checkin' => '1439825178000', 'checkout' => '1440478800000', 'status' => 'Pending'],
                
        );
        // Loop through each user above and create the record for them in the database
        foreach ($bookings as $booking)
        {
            Bookings::create($booking);
        }
    }
}

class ListingsPhotosTableSeeder extends Seeder 
{

    public function run()
    {
        // We want to delete the users table if it exists before running the seed
        DB::table('listings_photos')->delete();

        $listings = array(
                ['listings_id' => '1', 'url' => 'https://a0.muscache.com/im/pictures/96643762/5c199e92_original.jpg'],
                ['listings_id' => '1', 'url' => 'https://a0.muscache.com/im/pictures/96643768/f1bd286f_original.jpg'],
                ['listings_id' => '2', 'url' => 'https://a2.muscache.com/im/pictures/96643750/60174b80_original.jpg'] 
        );
        // Loop through each user above and create the record for them in the database
        foreach ($listings as $listing)
        {
            Listings::create($listing);
        }
    }
}

