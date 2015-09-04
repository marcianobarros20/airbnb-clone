<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Bookings;
use Auth;
use Mail;

use GuzzleHttp;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
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
        $status = $request->input('status');

        $bookings = new Bookings;
        $bookings->checkin      = $request->input('checkin');
        $bookings->checkout     = $request->input('checkout');
        $bookings->host_id      = $request->input('host_id');
        $bookings->user_id      = Auth::user()->id;
        $bookings->listing_id   = $request->input('listings_id');
        $bookings->status       = $status;
        $bookings->total        = $request->input('total');
        $bookings->save();

        $data = [
            "checkin" => date('Y-m-d', $request->input('checkin')),
            "checkout" => date('Y-m-d', $request->input('checkout')),
            "user"     => Auth::user()->name,
            "status"   => $status
        ];

        print_r($data);

        if ($status == 'Pending'){
            Mail::send('EmailBooking', $data, function($message)
            {
                $message->to('franc.nikolla@gmail.com', 'Franc Nikolla')->subject('FaithBed - Pending Approval');
            });
        } else if ($status == 'Approved') {

        } else if ($status == 'Booked') {

        } else if ($status == 'Declined') {

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $bookings = Bookings::where('listing_id', '=', $id)
        ->join('listings', 'listings.id', '=', 'bookings.listing_id')
        ->join('users', 'users.id', '=', 'bookings.user_id')
        ->select('checkin', 'checkout', 'users.name', 'bookings.id', 'bookings.status')
        ->get();
        return response()->json($bookings);
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
        $bookings = Bookings::find($id);
        $bookings->status = $request->input('status');
        $bookings->save();
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
}
