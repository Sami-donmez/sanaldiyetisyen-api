@extends('benimsaham.admin.layout.app')

@section('title','Sahalar')

@section('sidebar-title','Foreign Student Application Forms')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Başvurular</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Ögrenci Adı</th>
                    <th>Anabilim Dalı</th>
                    <th>Gno</th>
                    <th>İşlemler</th>
                </tr>
                </thead>
                <tbody>
                @foreach($data as $row)
                <tr>
                    <td>{{$loop->index}}</td>
                    <td>{{$row->ad}} {{$row->soyadi}}</td>
                    <td>{{$row->departman()->first()->ad}}({{$row->departman()->first()->ad_en}})</td>
                    <td>{{$row->gno}}</td>
                    <td>
                        <a href="{{route('admin.form1.detay',['id'=>$row->id])}}" class="btn btn-xs btn-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>

                    </td>
                </tr>
                @endforeach
                </tbody>
                <tfoot>
                <tr>
                    <th>#</th>
                    <th>Ögrenci Adı</th>
                    <th>Anabilim Dalı</th>
                    <th>Gno</th>
                    <th>İşlemler</th>
                </tr>
                </tfoot>
            </table>
        </div>
        <!-- /.card-body -->
    </div>
@endsection
@section('css')
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
@endsection

@section('js')
    <script src="//cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script !src="">
        $(document).ready( function () {
            $('#example1').DataTable();
        } );
    </script>
@endsection
