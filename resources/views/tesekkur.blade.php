@extends('layouts.front')

@section('title','Fırat Üniversitesi Fen Bilimleri Fakültesi')


@section('content')
    <div class="modal-body row">

        <div class="col-md-1"></div>
        <div class="col-md-2"></div>
        <div class="col-md-6 orta">
            <a href="{{url()->to('/')}}"><img src="{{asset('img/logo.png')}}" id="logo"></a>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2"></div>

    </div>
    <div class="modal-body row">

        <div class="col-md-1"></div>

        <div class="col-md-2"></div>


        <div class="col-md-6">

            <!-- Your first column here -->
            <div id="form-signin" class="form-signin form">


                <div id="complete">
                    We got the message. We will contact you.
                </div>
            </div>
        </div>

        <div class="col-md-2"></div>
        <div class="col-md-1"></div>
    </div>
@endsection

@section('js')

@endsection
