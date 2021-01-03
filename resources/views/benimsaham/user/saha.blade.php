@extends('benimsaham.user.layout.app')

@section('title','Admin Paneli')

@section('sidebar-title','Müşteri Paneli')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Sahalar</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body row">
                @foreach($data as $row)
                <div class="card text-center col-md-4 mx-2">
                    <div class="card-header">
                        <h2>{{$row->ad}}</h2>
                    </div>
                    <div class="card-body">

                        <a href="{{route('user.saha-detay',['id'=>$row->id])}}" class="btn btn-primary">Saha Detayları</a>
                    </div>

                </div>

                @endforeach
        </div>
        <!-- /.card-body -->
    </div>
@endsection

@section('css')

@endsection

@section('js')
@endsection
