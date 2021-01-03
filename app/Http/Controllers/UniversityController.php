<?php

namespace App\Http\Controllers;

use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    public function list(Request $request){
        $options=[];
        $results=University::where('name',"LIKE",'%'.$request->term.'%')->get();
        foreach($results as $k=>$v)
            {
                $options[] = $v->name;
            }

            return response()->json($options);
    }
}
