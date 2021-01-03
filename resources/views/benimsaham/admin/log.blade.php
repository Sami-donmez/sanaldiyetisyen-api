@extends('benimsaham.admin.layout.app')

@section('title','Log Kayıtları')

@section('sidebar-title','Sahalar')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Sahalar</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>İp adresi</th>
                    <th>Tablo</th>
                    <th>İşlem id</th>
                    <th>İşlem</th>
                    <th>Tarih</th>
                </tr>
                </thead>
                <tbody>
                @foreach($data as $row)
                    <tr>
                        <td>{{$loop->index}}</td>
                        <td>{{$row->user}}</td>
                        <td>{{$row->tablo}}</td>
                        <td>{{$row->islem}}</td>
                        <td>{{$row->islem_id}}</td>
                        <td>{{$row->created_at}}</td>
                    </tr>
                @endforeach
                </tbody>
                <tfoot>
                <tr>
                    <th>#</th>
                    <th>İp adresi</th>
                    <th>Tablo</th>
                    <th>İşlem id</th>
                    <th>İşlem</th>
                    <th>Tarih</th>
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
