<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Form1;
use Illuminate\Http\Request;

class Form1Controller extends Controller
{
    public function index()
    {
        $data=Form1::all();
        return view('admin.admin.form1',["data"=>$data]);
    }
    public function detay($id)
    {
        $data=Form1::find($id);
        return view('admin.admin.form1detay',['row'=>$data]);
    }
}
