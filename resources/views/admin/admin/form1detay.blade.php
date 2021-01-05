
@extends('admin.admin.layout.app')

@section('title','Admin Paneli')

@section('sidebar-title','Admin Paneli')
@section('content')
<div class="col-md-12 flex-row my-2">
    <div class="col-md-12">
        <p>Ad-Soyad:{{$row->ad}} {{$row->soyadi}}</p>
        <p>Üniversite:{{$row->university}}</p>
        <p>Telefon:{{$row->phone}}</p>
        <p>Basvurdugu Anabilim dalı: {{$row->departman()->firs()->ad}}</p>
        <p>Adres:{{$row->adres}} {{$row->sehir}} {{$row->region}} {{$row->ulke}}</p>
        <p>Pasaport: <a href="{{asset('passport/'.$row->pasaport)}}">Görmek için tıklayınız</a></p>
        <p>Transkript: <a href="{{asset('transkript/'.$row->pasaport)}}">Görmek için tıklayınız</a></p>
        <p>Diploma: <a href="{{asset('diploma/'.$row->pasaport)}}">Görmek için tıklayınız</a></p>
    </div>
</div>
@endsection

@section('css')
@endsection

@section('js')
    <script src="//cdn.ckeditor.com/4.15.0/standard/ckeditor.js"></script>

@endsection


