import React from "react";

class FooterComponent extends React.Component {

    render() {
        return (
            <body>
            <div class="footerbanda">
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-6 col-lg-5 col-xs-4">
                            <img src="img/person.svg"/>
                            <ul>
                                <li>Av. Alsina 555</li>
                                <li>Lunes a viernes de 10 a 18 hs</li>
                                <li>Sábados de 10 a 13 hs</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-lg-5 col-xs-4">
                            <img src="img/chat.svg"/>
                            <ul>
                                <li>Presupuestos: ventas@laredwifi.com.ar</li>
                                <li>Consultas: contacto@laredwifi.com.ar</li>
                                <li>Teléfonos: 2314 427308</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-4 col-md-3 logofooter display">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 363"><title>logo-02</title>
                                <path
                                    d="M103.408,160.919l47.927,17.835,6.259,53.716,14.076-44.937,33.588,12.7c9.641,2.764,17.991-2.38,20.608-10.627L262.63,73.912,242.1,65.964l6.387-19.317L153.814,8.127C143.085,4,135.849,3.582,128.006,19.247L91.783,131.558l19.9,7.782Z"
                                    fill="#be1d7b" fill-rule="evenodd"/>
                                <path
                                    d="M186.248,111.33c13.034,5.9,21.6,20.753,20.213,37.293l11.006.962c1.554-18.525-6.264-35.46-19.114-45.054,14.261-7.225,24.787-22.557,26.342-41.083l-11.008-.961C212.375,78.122,202.55,90.729,189.8,95.063a17.025,17.025,0,0,1,.676,6.432,16.521,16.521,0,0,1-4.227,9.835Zm-8.694-22.719c5.779.5,10.025,6.139,9.485,12.584s-5.665,11.26-11.444,10.756-10.027-6.14-9.486-12.585,5.665-11.26,11.445-10.755Zm-12.938,3.837c-11.347-6.686-18.531-20.5-17.252-35.755l-11.006-.962c-1.554,18.525,6.264,35.461,19.114,45.053-14.261,7.226-24.787,22.558-26.342,41.083l11.008.962c1.359-16.2,11.856-29.147,25.28-33.012a16.569,16.569,0,0,1-2.745-10.75,16.972,16.972,0,0,1,1.943-6.619Zm-9.8,70.289-10.8-.943,2-23.786c2.264-15.007,11.939-22.964,22.231-25.1a12.769,12.769,0,0,0,15.046.89c9.668,3.377,18.153,12.9,18.059,30.409l-1.882,22.432-10.761-.94,1.956-23.478c.317-8.58-5.6-16.769-15.452-17.571-10.678-1.018-18.154,6.787-18.545,15.557l-1.852,22.531ZM165.148,39.621,163.22,62.146c-1.075,8.71,4.992,17.7,15.684,18.546,9.841.919,17.037-6.125,18.154-14.634l1.984-23.476,10.76.94L207.92,65.954c-2.5,15.3-10.6,23.259-19.43,26.021a13.574,13.574,0,0,0-10.616-7.2,13.358,13.358,0,0,0-11.168,4.669c-8.223-4.6-14.586-13.59-14.349-26.984l2-23.786Z"
                                    fill="#fff" fill-rule="evenodd"/>
                                <path
                                    d="M3.687,293.459l.2-62.763,13.126-.057-.186,58.807,55.941-.242c7.23-.173,10.13,5.045,9.646,14.659l-70.592.306.034-10.746-8.168.036Zm241.849-42.984.02-6.125-52.508.227-.186,58.806-13.126.058q.029-9.19.058-18.377t.058-18.377q.03-9.187.058-18.377.018-5.185.033-10.375c.014-4.5,2.935-8,8.939-8.041l61.273-.264-.027,8.926,8.572-.037L258.635,259,233.6,275.225,258.5,303.1l-18.6.08-34.335-38.637,18.421-.08,21.55-13.988Zm15.846,52.613.2-61.753,11.45-.05.037-11.755,67.311-.291-.047,14.7-65.632.285-.047,14.7,52.506-.228-.046,14.7-52.507.227-.047,14.7,65.634-.285c.229,7.322-1.988,12.821-9.019,14.74l-69.789.3Zm81.649-.355.14-44.1,5.976-.025-.026,8.214,7.15-.031-.066,21.189,52.505-.229.141-44.1-55.789.24-9.844.043.046-14.7,72.2-.313L422,236.236l-.171,54.105q-.451,11.563-10.759,12.1l-68.039.294ZM132.2,230.14l31.86,73.368-14.592.065L124.86,246.907l-22.825,52c-1.286,2.935-2.374,5.273-7.348,4.9l-9.385.042,27.435-62.5,10.771-.048.036-11.124Z"
                                    fill="#161814" fill-rule="evenodd"/>
                                <path
                                    d="M422,355.425l-2.988,0-.027-13.563-11.951.025.028,13.564-2.988.006-.036-16.955,17.927-.037Zm-23.909-3.341-.021-10.173-11.951.025.021,10.174Zm-14.93,3.422-.036-16.954,17.926-.038.036,16.955Zm-6.012-16.941,2.988-.007.035,16.955-2.987.007Zm-20.913.044,17.926-.039.007,3.392-14.939.031.021,10.173,14.939-.032.007,3.39-17.926.04Zm-10.293.022,7.34,16.938-3.32.008-5.669-13.083L338.678,355.6l-3.321.008,7.27-16.971Zm-24.03,17.005-.028-13.564-7.47.017-.007-3.391,17.927-.038.006,3.391-7.468.016.027,13.563ZM311.42,338.705l.036,16.954-17.927.038-.036-16.954,2.988-.007.03,13.562,11.95-.024-.03-13.564Zm-35.837,7.705,11.952-.025-.01-4.239-11.95.024Zm-3-7.623,17.927-.038.023,11.019-14.939.032.012,5.935-2.987.007Zm-2.952,16.961-2.987,0-.025-11.63-6.826,9.951h-1.245l-6.868-9.921.024,11.632-2.987.007-.037-16.955,3.113-.007,7.367,10.626,7.322-10.657,3.113-.006Zm-26.9-3.334-.021-10.173-11.951.025.021,10.172ZM227.8,355.837l-.035-16.955,17.926-.038.036,16.953Zm-20.951-16.911,17.927-.037.007,3.39-14.938.031.022,10.173,14.939-.032.006,3.392-17.926.038Zm-25.394.055,4.482-.01.01,5.086-4.481.009Zm.026,11.867,4.48-.009.012,5.086-4.482.01ZM173.986,339l4.481-.01.011,5.087-4.482.009Zm.025,11.869,4.481-.01.01,5.086-4.479.01Zm-31.36,5.153-.03-13.564-7.468.016-.008-3.392,17.927-.037.008,3.391-7.471.015.03,13.565Zm-28.383.059-.036-16.954,17.926-.038.007,3.392-14.939.031.009,3.39,11.95-.024.007,3.39-11.951.026.007,3.39,14.939-.031.007,3.391Zm-2.988.007-2.988.007-.028-13.563-11.95.024.027,13.565-2.988,0-.036-16.952,17.927-.04Zm-23.927-12.1,0-1.412L75.4,342.6l.029,13.564-2.987,0q-.006-2.118-.01-4.237t-.009-4.239q0-2.121-.01-4.239t-.008-4.238l17.927-.04.013,6.783-5.678,3.73,5.7,6.442-4.233.01-7.862-8.93,4.193-.01ZM51.526,356.21l-.036-16.954,17.926-.039.009,3.392-14.939.031.006,3.391,11.951-.025.009,3.39-11.952.026.007,3.391,14.939-.032.007,3.39Zm-13.445.029-.028-13.564-7.47.016-.007-3.391,17.927-.039.007,3.392-7.468.015.027,13.564Zm-10.456.021-2.988.007L24.608,342.7l-11.949.025.027,13.564L9.7,356.3l-.036-16.954,17.927-.039Zm-23.938-16.9,2.988,0,.037,16.954-2.988.006Z"
                                    fill="#161814"/>
                            </svg>
                        </div>
                        <div class="col-12 col-md-3">
                            <ul class="datos datosfooter">
                                <img src="img/iso.svg" class="iso mobile"/>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>whatsapp</title>
                                        <path
                                            d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z"/>
                                        <path
                                            d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"
                                            fill-rule="evenodd"/>
                                    </svg>
                                    &nbsp;2314 404320
                                </li>
                                <li>
                                    <svg viewBox="0 0 512 512">
                                        <path
                                            d="M487.8 24.1L387 .8a31.3 31.3 0 0 0-35.8 18.1l-46.5 108.5a31.4 31.4 0 0 0 8.9 36.5l53.9 44.1a350 350 0 0 1-159.6 159.6l-44.1-53.9a31.4 31.4 0 0 0-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7A31.2 31.2 0 0 0 54.5 512 457.4 457.4 0 0 0 512 54.5a31 31 0 0 0-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23A425.3 425.3 0 0 1 55.1 480z"/>
                                    </svg>
                                    &nbsp;2314 427308
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"/>
                                    </svg>
                                    &nbsp;&nbsp;Av. Alsina 555
                                </li>
                                <li>
                                    <svg className="{{ svg_custom_class }}" viewBox="0 0 512 512">
                                        <path
                                            d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM48 96h416a16 16 0 0 1 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3A6862.8 6862.8 0 0 1 32 153.4V112a16 16 0 0 1 16-16zm416 320H48a16 16 0 0 1-16-16V195a11843 11843 0 0 0 130.7 104.7c20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3A11843 11843 0 0 0 480 195v205a16 16 0 0 1-16 16z"/>
                                    </svg>
                                    &nbsp;info@laredwifi.com.ar
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 mobile">
                            <div class="line"></div>
                        </div>
                        <div class="col-6 col-md-3">
                            <ul class="menufooter">
                                <li><a href="index.php">Inicio</a></li>
                                <li><a href="servicios.php">Servicios</a></li>
                                <li><a href="productos.php">Productos</a></li>
                                <li><a href="nosotros.php">Sobre La Red</a></li>
                                <li><a href="contacto.php">Contacto</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="social socialfooter">
                                <h5>Seguinos en</h5>
                                <a href="" class="social-icon"><svg viewBox="0 0 320 512"><path d="M279.1 288l14.3-92.7h-89v-60c0-25.4 12.5-50.2 52.3-50.2H297V6.4S260.4 0 225.4 0C152 0 104.3 44.4 104.3 124.7v70.6H22.9V288h81.4v224h100.2V288z"/></svg></a>
                                <a href="" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                            </div>
                            <div class="afip"><img src="img/qr.png"/></div>
                        </div>
                    </div>
                </div>
                <div class="footer-legal">
                    <div class="container">
                        <div class="row">
                            <div class="col-md copyfooter">
                                Todos los derechos reservados.
                            </div>
                            <div class="col-md text-md-right cont-logo-zurbrand">
                                <a href="https://www.zurbrand.com/?utm_source=lared&utm_medium=firma_shop"
                                   class="link-zurbrand" target="_blank"><img
                                    src="https://www.zurbrand.com/firma/logo-zurbrand-v1-01.png" class="logo-zurbrand"
                                    alt="Zurbrand | Diseño y Marketing Digital"
                                    title="Zurbrand | Diseño y Marketing Digital"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                    crossorigin="anonymous"></script>

            {/*//MegaMenu*/}
            {/*/!*<script type="text/javascript">*!/*/}
            {/*/!*    $(document).ready(function () {*!/*/}
            {/*/!*    $(".megamenu").on("click", function (e) {*!/*/}
            {/*/!*        e.stopPropagation();*!/*/}
            {/*/!*    });*!/*/}
            {/*/!*})*!/*/}
            {/*/!*    ;*!/*/}
            {/*/!*</script>*!/*/}

            //Zoom
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
            <script src='js/jquery.zoom.js'></script>
            {/*<script>*/}
            {/*    $(document).ready(function(){*/}
            {/*    $('#ex1').zoom();*/}
            {/*    $('#ex2').zoom();*/}
            {/*    $('#ex3').zoom();*/}
            {/*    $('#ex4').zoom();*/}
            {/*    $('#ex5').zoom();*/}
            {/*    $('#ex6').zoom();*/}
            {/*});*/}
            {/*</script>*/}


            <script src="js/pushy.min.js"></script>


            //Search Full
            {/*<script>*/}
            {/*    function openSearch() {*/}
            {/*    var element = document.getElementById("myOverlay");*/}
            {/*    element.classList.add("show");*/}
            {/*    element.style.display = "block";*/}
            {/*}*/}

            {/*    function closeSearch() {*/}
            {/*    var element = document.getElementById("myOverlay");*/}
            {/*    element.classList.remove("show");*/}
            {/*    element.style.display = "none";*/}
            {/*}*/}
            {/*</script>*/}

            //Aumentar - disminuir
            {/*<script type="text/javascript">*/}
            {/*    $(document).ready(function (){*/}
            {/*    $(".expand").on("click", function () {*/}
            {/*        $expand = $(this).find(">:first-child");*/}

            {/*        if ($expand.text() == "+") {*/}
            {/*            $expand.text("-");*/}
            {/*        } else {*/}
            {/*            $expand.text("+");*/}
            {/*        }*/}
            {/*    });*/}
            {/*})*/}
            {/*    ;*/}
            {/*</script>*/}


            </body>
        );
    }
}

export default FooterComponent;