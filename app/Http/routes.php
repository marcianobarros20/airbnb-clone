<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function(){
	return view('index');
});


// API

Route::group(array('prefix' => 'api/v1'), function()
{
	Route::resource('listings', 'ListingsController');
	Route::resource('bookings', 'BookingsController');
	Route::resource('messages', 'MessagesController');

	Route::get('search/listings', 'ListingsController@search');
});
