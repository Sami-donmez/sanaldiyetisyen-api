<?php

namespace App\Http\Controllers\Form;

use App\Http\Controllers\Controller;
use App\Models\Form1;
use Illuminate\Http\Request;

class Form1Controller extends Controller
{
    public function index()
    {
        return view('front.form1');
    }

    public function add(Request $request)
    {

     //pasaport yukleme
        $passportname= time().'-'.uniqid().'.'.$request->back_img->extension();
        $request->back_img->move(public_path('passport'), $passportname);
        //pasaport sorgulama fonksiyonu
        $durum=pasaport(asset('passport/'.$passportname));
        if ($durum==false){
            return redirect(url()->current())->with('error','Pasaport belgesi geçerli degildir.');
        }
        //verileri dogrulama
        $request->validate([
           'name'=>'required',
           'surname'=>'required',
           'email'=>'required|email',
           'phone'=>'required',
            'university'=>'required',
            'country'=>'required',
            'region'=>'required',
            'city'=>'required',
            'address'=>'required',
            'department'=>'required',
            'back_img'=>'required|max:10000',
            'graddoc'=>'required|max:10000|mimes:pdf',
            'trans'=>'required|max:10000|mimes:pdf',
            'langdoc'=>'required|max:10000|mimes:pdf',
            'passportcountry'=>'required',
            'whydoapply'=>'required'

        ]);
        //form 1 nesnesi olusturuyor
        $form=new Form1();
        $form->ad=$request->name;
        $form->soyadi=$request->surname;
        $form->email=$request->email;
        $form->tel=$request->phone;
        $form->university=$request->university;
        $form->ulke=$request->country;
        $form->bolge=$request->region;
        $form->sehir=$request->city;
        $form->adres=$request->address;
        $form->anabilim_id=$request->department;
        $form->gno=gnohesapla($request->university,$request->gno,$request->gnotype);
        $fileName = time().'-'.uniqid().'.'.$request->back_img->extension();
        $request->back_img->move(public_path('passport'), $fileName);
        $form->pasaport=$passportname;
        $fileName = time().'-'.uniqid().'.'.$request->graddoc->extension();
        $request->graddoc->move(public_path('diploma'), $fileName);
        $form->diploma=$fileName;

        $fileName = time().'-'.uniqid().'.'.$request->trans->extension();
        $request->trans->move(public_path('transkript'), $fileName);
        $form->transkript=$fileName;
        $files = $request->file('langdoc');
        $filenames=[];
        foreach($files as $file){
            $fileName = time().'-'.uniqid().'.'.$file->extension();
            $request->trans->move(public_path('dildosya'), $fileName);
           array_push($filenames,$fileName);
        }

        $form->dil_belgesi=json_encode($filenames);
        $form->durum=0;
        $form->pasaport_ulke=$request->passportcountry;
        $form->basvuru_nedeni=$request->whydoapply;
        //log ekleme yapılıyor
        logEkle('foreign student form',$form->id,'form ekleme');
        //nesneyi veritabanınna kayıt ediyor
        if ($form->save()){
            return redirect(route('tesekkur_en'));
        }else{
            return redirect()->with('error','form kayıt edilemedi');
        }

    }
}
