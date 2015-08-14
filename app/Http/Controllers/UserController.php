<?php

namespace App\Http\Controllers;

use App\Users;
use App\Listings;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;





class UserController extends Controller
{


	public function listings()
	{	

		$listings = Listings::where('user_id', '=', 1)->get();

		return response()->json($listings);
	}
	
}