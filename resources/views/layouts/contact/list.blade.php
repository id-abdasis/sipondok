@extends('layouts.app')
@section('css-plugin')
    <!-- third party css -->
    <link href="{{ url('/') }}/assets/libs/bootstrap-table/bootstrap-table.min.css" rel="stylesheet" type="text/css" />

<!-- third party css end -->
@endsection
@section('content')

    <div id="list-contact"></div>
     
@endsection

@section('js-plugin')
    <!-- Bootstrap Tables js -->
    <script src="{{ url('/') }}/assets/libs/bootstrap-table/bootstrap-table.min.js"></script>

    <!-- Init js -->
    <script src="{{ url('/') }}/assets/js/pages/bootstrap-tables.init.js"></script>
    <!-- third party js ends -->
@endsection