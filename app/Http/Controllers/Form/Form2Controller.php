<?php

namespace App\Http\Controllers\Form;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

use Zip;
class Form2Controller extends Controller
{
    public function index()
    {
        return view('front.form2');
    }

    public function add(Request $request)
    {
        $data=$request->all();

        view()->share('employee',$data);
        $zipname=time().uniqid();
        $filename2=uniqid().'.pdf';
        $pdf2 = PDF::loadView('pdf.form31', $data)->save(base_path('/storage/temp/'.$filename2));
        if($request->egitim=="doktora"){
            $filename4=uniqid().'.pdf';
            $pdf4 = PDF::loadView('pdf.form34', $data)->save(base_path('/storage/temp/'.$filename4));
            $zip = Zip::create($zipname.'.zip');
            $zip->add( array(base_path('/storage/temp/'.$filename4),base_path('/storage/temp/'.$filename2)));
        }else{

            $filename=uniqid().'.pdf';
            $pdf = PDF::loadView('pdf.form30', $data)->save(base_path('/storage/temp/'.$filename));
            $zip = Zip::create($zipname.'.zip');
            $zip->add( array(base_path('/storage/temp/'.$filename2),base_path('/storage/temp/'.$filename)));
        }

        $zip->close();
        // download PDF file with download method
        return response()->download(base_path('public/'.$zipname.'.zip'));
    }
}
