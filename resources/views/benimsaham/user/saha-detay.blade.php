@extends('benimsaham.user.layout.app')

@section('title','Admin Paneli')

@section('sidebar-title','Müşteri Paneli')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{$data->ad}}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body row">
           <div class="col-md-12 ">
               <h2>Özellikler</h2>
               {!! $data->detaylar !!}
           </div>

            <div class="col-md-12">

            </div>
        </div>
        <!-- /.card-body -->
    </div>
@endsection

@section('css')

@endsection

@section('js')
@endsection
