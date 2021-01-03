@extends('benimsaham.admin.layout.app')

@section('title','Admin Paneli')

@section('sidebar-title','Admin Paneli')
@section('content')

    <form class="form-horizontal" method="post" action="{{route('admin.uye-ekle.post')}}">
        <fieldset>
        @csrf
        <!-- Form Name -->
            <legend>Üye Ekle</legend>

            <!-- Select Basic -->
            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="textinput">Ad-Soyad</label>
                <div class="col-md-8">
                    <input id="textinput" name="ad" type="text" placeholder="" class="form-control input-md" required="">

                </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="textarea">Email</label>
                <div class="col-md-8">
                    <input id="textinput" name="email" type="text" placeholder="" class="form-control input-md" required="">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-4 control-label" for="textarea">Şifre</label>
                <div class="col-md-8">
                    <input id="textinput" name="sifre" type="password" placeholder="" class="form-control input-md" required="">
                </div>
            </div>
            <div class="form-group hatdiv" style="">
                <label class="col-md-4 control-label" for="selectbasic">yetki</label>
                <div class="col-md-8">
                    <select id="selectbasic5" name="yetki" class="form-control">
                        <option value="user">Müşteri</option>
                        <option value="admin">Yetkili</option>
                    </select>
                </div>
            </div>
            <!-- Button -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="singlebutton"></label>
                <div class="col-md-8">
                    <button id="singlebutton" name="singlebutton" class="btn btn-success pull-right">Kaydet</button>
                </div>
            </div>

        </fieldset>
    </form>

@endsection

@section('css')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
@endsection

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script !src="">
        $(document).ready(function () {

        });
    </script>
@endsection

