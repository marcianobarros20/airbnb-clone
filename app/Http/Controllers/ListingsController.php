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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
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
            ->where('location', 'like', $location)
            ->whereNotBetween('checkin', $checkin)
            ->whereNotBetween('checkout', $checkout)
            -get();

        $listings = DB::table('listings')
            ->where('location', 'like', $location)
            ->whereNotIn('id', $booked)
            ->get();

        return response()->json($listings);
    }
}
