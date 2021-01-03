<?php

use Illuminate\Support\Facades\Http;
use werk365\IdentityDocuments\IdentityDocuments;
function logEkle($table,$id,$islem){
    $log= new \App\Models\Log();
    $log->user=request()->ip();
    $log->tablo=$table;
    $log->islem_id=$id;
    $log->islem=$islem;
    $log->save();
}
function gnohesapla($universite,$gno,$type){
    if ($type=="4"){
        if ($universite=="Fırat University" or $universite=="Fırat University"){
            $gno=\App\Models\FıratDonusum::where('dortluk',"=",$gno)->select('yuzluk')->first();
        }else{
            $gno=\App\Models\YokDonusum::where('dortluk',"=",$gno)->select('yuzluk')->first();
        }
        return $gno->yuzluk;
    }else{
        return $gno;
    }
}
function pasaport($path){

    $response = Http::post('https://api.idanalyzer.com', [
        'url'=>$path,
        //'file_base64'=>base64_encode(),
        'apikey'=>'j7DxLx4WeyJf7QbGiYnHFSixC7JlpXAb',
        'type'=>'P'
    ]);

    $res= $response->json();
    if (empty($res['error'])){
        return true;
    }else{
        return false;
    }
}
