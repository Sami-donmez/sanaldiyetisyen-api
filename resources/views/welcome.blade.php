@extends('layouts.front')

@section('title','Fırat Üniversitesi Fen Bilimleri Fakültesi')


@section('content')
    <section>

        <header>
            <a href="{{url()->to('/')}}"><img src="{{asset('img/logo.png')}}" id="logo"></a>
        </header>
        <nav>
            <ul>
                <li><a href="{{route('form-1')}}">Foreign Student Application Form</a></li>
                <li><a href="{{route('form-2')}}">Tez Öneri Formu</a></li>
            </ul>
        </nav>
    </section>
@endsection

@section('js')

@endsection
