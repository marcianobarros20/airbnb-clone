<?php

namespace App\Http\Controllers;

use App\Listings;
use App\Bookings;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;

class ListingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $listings = Listings::orderBy('created_at', 'DESC')->simplePaginate(10);
        return response()->json($listings);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(Request $request)
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
         
        $listings = new Listings;
        $listings->title        =         $request->input('title');
        $listings->price_cents  =    $request->input('price_cents');
        $listings->summary      =       $request->input('summary');
        $listings->city         =          $request->input('city');
        $listings->home_type    =      $request->input('home_type');
        $listings->city         =           $request->input('city');
        $listings->address      =        $request->input('address');
        $listings->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    public function search($location, $checkin, $checkout)
    {

        $booked = DB::table('bookings')
            ->whereNotBetween('checkin', [$checkin, $checkout])
            ->whereNotBetween('checkout', [$checkin, $checkout])
            ->lists('listing_id');

        $listings = DB::table('listings')
            ->where('city', 'LIKE', '%'.$location.'%')
            ->whereNotIn('id', $booked)
            ->get();

        return response()->json($listings);

    }
}
