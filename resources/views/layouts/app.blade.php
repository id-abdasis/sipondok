<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>UBold - Responsive Admin Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ url('/') }}/assets/images/favicon.ico">

        @yield('css-plugin')
        <!-- App css -->
        <link href="{{ url('/') }}/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="{{ url('/') }}/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="{{ url('/') }}/assets/css/app.min.css" rel="stylesheet" type="text/css" />

    </head>

    <body>

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Topbar Start -->
            @include('includes.header')
            <!-- end Topbar -->

            <!-- ========== Left Sidebar Start ========== -->
            @include('includes.sidebar')
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        @yield('content')
                        
                    </div> <!-- container -->

                </div> <!-- content -->

                <!-- Footer Start -->
                @include('includes.footer')
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <!-- Right Sidebar -->
        @include('includes.right-sidebar')
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>
        <!-- Vendor js -->
        <script src="{{ asset('js/app.js') }}"></script>

        <script src="{{ url('/') }}/assets/js/vendor.min.js"></script>

        @yield('js-plugin')

        <!-- App js-->
        <script src="{{ url('/') }}/assets/js/app.min.js"></script>

       
        
    </body>
</html>