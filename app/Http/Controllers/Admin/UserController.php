<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $data=User::all();
        return view('admin.admin.uye',['data'=>$data]);
    }

    public function addIndex(){

        return view('admin.admin.uye-ekle');
    }
    public function addUser(Request $request)
    {
        $validate=$request->validate([

            'ad'=>'required',
            'email'=>'required|email',
            'sifre'=>'required',
            'yetki'=>'in:user,admin'
        ]);
        $bolum=new  User();
        $bolum->name=$request->get('ad');
        $bolum->email=$request->get('email');
        $bolum->password=Hash::make($request->get('sifre'));
        $bolum->role=$request->get('yetki');

        if($bolum->save()){
            return redirect(route('admin.uye-ekle'))->with('success',"Üye başarı ile eklendi");
        }else{
            return redirect(route('admin.uye-ekle'))->with('error',"Üye eklenemedi");
        }

    }
    public function deleteUser(Request $request)
    {
        $bolum=User::find($request->get('id'));
        if($bolum->delete()){
            return redirect(route('admin.uyeler'))->with('success',"Üye başarı ile silindi");
        }else{
            return redirect(route('admin.uyeler'))->with('error',"Üye  silinemedi");
        }

    }
    public function updateIndex($id){
        $data=User::find($id);
        return view('admin.admin.uye-ekle',['data'=>$data]);
    }
    public function updateUser($id,Request $request)
    {
        $validate=$request->validate([
            'ad'=>'required',
            'email'=>'required|email',
            'yetki'=>'required|in:user,admin'
        ]);
        $bolum=User::find($id);
        $bolum->name=$request->get('ad');
        $bolum->email=$request->get('email');
        if ($request->sifre!="") {
            $bolum->password = Hash::make($request->get('sifre'));
        }
        $bolum->role=$request->get('yetki');

        if($bolum->save()){
            return redirect(url()->current())->with('success',"Üye başarı ile güncellendi");
        }else{
            return redirect(url()->current())->with('error',"Üye güncellenemedi");
        }

    }

}
