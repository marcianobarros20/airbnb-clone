<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use App\Bookings;
use App\Listings;
use App\Messages;
use App\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $bookings = Bookings::all();
        return response()->json($bookings);

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
        $messages = new Messages;
        $messages->bookings_id = $request->input('bookings_id');
        $messages->user_id     = Auth::user()->id;
        $messages->content     = $request->input('content');
        $messages->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $bookings = Bookings::where('bookings.id', '=', $id)
            ->join('users', 'users.id', '=', 'bookings.host_id')
            ->join('listings', 'listings.id', '=', 'bookings.id')
            ->select('bookings.id', 'bookings.checkin', 'bookings.checkout', 'bookings.status',
                'bookings.host_id', 'listings.price_cents', 'listings.title', 'listings.address',
                'users.name', 'users.avatar')
            ->first();

        $messages = Messages::where('bookings_id', '=', $bookings->id)
            ->join('users', 'users.id', '=', 'messages.id')
            ->select('users.avatar', 'users.name', 'users.id', 'messages.content', 'messages.created_at')
            ->get();

        $bookings['messages'] = $messages;
        $bookings['auth']  = Auth::user()->id;

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
}
