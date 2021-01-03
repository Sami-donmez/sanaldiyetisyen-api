<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function tesekkur()
    {
        return view('tesekkur');
    }
    public function thanks()
    {
        return view('thanks');
    }
    public function logs()
    {
        $data=Log::all();
        return view('benimsaham.admin.log',['data'=>$data]);
    }
    public  function logout(){
        Auth::logout();
        return redirect('/login');
    }
}
