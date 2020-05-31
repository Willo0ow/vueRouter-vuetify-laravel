<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
        <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
            .backg{
                background-image: url('/images/Logo.png');
                background-size: contain;
                background-position:center;
            }
            .back:before {
                content: ' ';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                opacity: 0.2;
                background-image: url('/images/Logo.png');
                background-size: contain;
                background-position:center;
                background-repeat: no-repeat;
                -ms-background-size: contain;
                -o-background-size: contain;
                -moz-background-size: contain;
                -webkit-background-size: contain;
            }
            .move{
                position: relative;
                left: 56px;
            }
        </style>
    </head>
    <body>

            <div id="app" class="back">
                <v-app style="background: none;">
                    <sidebar></sidebar>
                    <router-view></router-view>
                </v-app>
            </div>
            

        <script src="{{ asset('js/app.js')}}" defer></script>
    </body>
</html>
