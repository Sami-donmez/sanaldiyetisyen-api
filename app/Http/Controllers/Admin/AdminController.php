<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('benimsaham.admin.dashboard');
    }
    public function logIndex()
    {
        return view('benimsaham.admin.log');
    }
}
