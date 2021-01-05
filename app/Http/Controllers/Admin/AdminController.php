<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.admin.dashboard');
    }
    public function logIndex()
    {
        return view('admin.admin.log');
    }
}
