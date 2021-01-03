@extends('benimsaham.admin.layout.app')

@section('title','Sahalar')

@section('sidebar-title','Sahalar')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Hatlar</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Ad</th>
                    <th>Email</th>
                    <th>Yetki</th>
                    <th>İşlemler</th>
                </tr>
                </thead>
                <tbody>
                @foreach($data as $row)
                    <tr>
                        <td>{{$loop->index}}</td>
                        <td>{{$row->name}}</td>
                        <td>{{$row->email}}</td>
                        <td>
                            @if($row->role=="user")
                                Müşteri
                            @else
                                Yetkili
                            @endif
                        </td>

                        <td>
                            <a href="{{route('admin.uye-guncelle',['id'=>$row->id])}}" class="btn btn-xs btn-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                            <a href="{{route('admin.uye-sil',['id'=>$row->id])}}" onclick="return confirm('Silmek istediginize emin misiniz?');" class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></a>

                        </td>
                    </tr>
                @endforeach
                </tbody>
                <tfoot>
                <tr>
                    <th>#</th>
                    <th>Ad</th>
                    <th>Email</th>
                    <th>Yetki</th>
                    <th>İşlemler</th>
                </tr>
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
