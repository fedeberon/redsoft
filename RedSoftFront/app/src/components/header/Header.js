import React from "react";
import ModalCart from "./ModalCart";
import {Link, Route} from "react-router-dom";
import Contacto from "../contacto/Contacto";
import {BrowserRouter as Router} from 'react-router-dom';
import Switch from "react-bootstrap/Switch";


class Header extends React.Component {

    render() {
        return (

            <div>
                <div id="myOverlay" className="overlay fade searchfull">
                    {/*<span className="closebtn" onClick="closeSearch()" title="Close Overlay">×</span>*/}
                    <span className="closebtn" title="Close Overlay">×</span>
                    <div className="overlay-content">
                        <form action="resultados.php">
                            <input type="text" placeholder="Buscar producto" name="search"/>
                            <button type="submit">
                                {/*<?php include('svg/search.php');?>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>search</title>
                                    <path
                                        d="M39.063,37.986,27.935,26.858a14.549,14.549,0,1,0-1.078,1.077L37.985,39.063a.762.762,0,1,0,1.078-1.077ZM17.19,30.143A12.953,12.953,0,1,1,30.143,17.19,12.968,12.968,0,0,1,17.19,30.143Z"/>
                                    <path
                                        d="M38.523,40.507a1.985,1.985,0,0,1-1.393-.574L26.785,29.584a15.745,15.745,0,1,1,2.8-2.8L39.926,37.123a1.fff983,1.983,0,0,1-1.4,3.384ZM17.19,5.456A11.735,11.735,0,1,0,28.923,17.19,11.746,11.746,0,0,0,17.19,5.456Z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <nav className="pushy pushy-left" data-focus="#first-link">
                    <a className="close-pushy">&times;</a>
                    <div className="logo-pushy">
                        {/*<?php include('svg/logo.php');?>*/}
                    </div>
                    <div className="pushy-content">
                        <ul>
                            <li className="pushy-link"><a href="index.php">Inicio</a></li>
                            <li className="pushy-link"><a href="servicios.php">Servicios</a></li>
                            <li className="pushy-submenu">
                                <button id="first-link">Productos</button>
                                <ul>
                                    <li className="pushy-submenu">
                                        <button>Categoria 1</button>
                                        <ul>
                                            <li className="pushy-link"><a href="productos.php">Item 1</a></li>
                                            <li className="pushy-link"><a href="productos.php">Item 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="pushy-submenu">
                                        <button>Categoria 2</button>
                                        <ul>
                                            <li className="pushy-link"><a href="productos.php">Item 1</a></li>
                                            <li className="pushy-link"><a href="productos.php">Item 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="pushy-link"><a href="productos.php">Categoria 4</a></li>
                                    <li className="pushy-link"><a href="productos.php">Categoria 5</a></li>
                                </ul>
                            </li>
                            <li className="pushy-link"><a href="nosotros.php">Sobre La Red</a></li>
                            <li className="pushy-link"><a href="#">Acceso a clientes</a></li>
                            <li className="pushy-link"><a href="contacto.php">Contacto</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="site-overlay"/>


                <div className="bandmobile">
                    <div className="band">
                        <button className="menu-btn"><span>&#9776;</span> Menu</button>
                        {/*<a href="#" className="icontop" onClick="openSearch()">*/}
                        {/*    /!*<?php include('svg/search.php');?>*!/*/}
                        {/*</a>*/}
                        <a href="#" data-toggle="modal" data-target="#modalCart"
                           className="icontop">
                            {/*<?php include('svg/cart.php');?>*/}
                        </a>
                        <div className="spacer"></div>
                    </div>
                    <div className="logotop"><a href="index.php">
                        {/*<?php include('svg/logo.php');?>*/}
                    </a></div>
                </div>

                <div className="banddesktop">
                    <div className="band1">
                        <div className="container">
                            <ul className="datos">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>whatsapp</title>
                                        <path
                                            d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z"/>
                                        <path
                                            d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"
                                            fillRule="evenodd"/>
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
                                    &nbsp;Av. Alsina 555
                                </li>
                                <li>
                                    <svg className="{{ svg_custom_class }}" viewBox="0 0 512 512">
                                        <path
                                            d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM48 96h416a16 16 0 0 1 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3A6862.8 6862.8 0 0 1 32 153.4V112a16 16 0 0 1 16-16zm416 320H48a16 16 0 0 1-16-16V195a11843 11843 0 0 0 130.7 104.7c20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3A11843 11843 0 0 0 480 195v205a16 16 0 0 1-16 16z"/>
                                    </svg>
                                    &nbsp;info@laredwifi.com.ar
                                </li>
                            </ul>
                            <a href="" className="clientes">Acceso a clientes &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <title>arrow-right-circle</title>
                                    <path
                                        d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z"/>
                                    <path
                                        d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z"/>
                                </svg>
                            </a>
                            <div className="spacer"></div>
                        </div>
                    </div>
                    <div className="band2">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="logotop"><a href="/index">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 90"><title>logo</title>
                                            <path
                                                d="M7.037,61.112,25.493,67.98,27.9,88.666l5.42-17.3,12.934,4.89a6.24,6.24,0,0,0,7.936-4.093L68.352,27.606l-7.906-3.06,2.46-7.439L26.448,2.273C22.316.685,19.529.523,16.509,6.555L2.56,49.805l7.663,3Z"
                                                fill="#be1d7b" fillRule="evenodd"/>
                                            <path
                                                d="M38.938,42.016c5.019,2.272,8.318,7.991,7.784,14.361l4.238.37A19.54,19.54,0,0,0,43.6,39.4a19.385,19.385,0,0,0,10.144-15.82l-4.239-.37c-.5,6.021-4.288,10.875-9.2,12.544a6.551,6.551,0,0,1,.261,2.477,6.366,6.366,0,0,1-1.628,3.788ZM35.59,33.267a4.314,4.314,0,0,1,3.652,4.846,4.279,4.279,0,0,1-4.407,4.142,4.316,4.316,0,0,1-3.653-4.847,4.279,4.279,0,0,1,4.408-4.141Zm-4.982,1.477a14.47,14.47,0,0,1-6.644-13.769l-4.238-.37a19.54,19.54,0,0,0,7.36,17.35,19.387,19.387,0,0,0-10.144,15.82l4.239.371c.524-6.239,4.566-11.225,9.735-12.713a6.387,6.387,0,0,1-1.057-4.14,6.529,6.529,0,0,1,.749-2.549ZM26.835,61.812l-4.158-.363.769-9.16c.872-5.779,4.6-8.843,8.561-9.666a4.92,4.92,0,0,0,5.794.343c3.723,1.3,6.991,4.968,6.954,11.71l-.724,8.639-4.144-.363.753-9.041a6.422,6.422,0,0,0-5.951-6.766,6.34,6.34,0,0,0-7.141,5.991l-.713,8.676ZM30.813,14.4l-.743,8.674A6.561,6.561,0,0,0,43.1,24.582l.764-9.041,4.143.362-.725,8.639C46.32,30.435,43.2,33.5,39.8,34.562a5.226,5.226,0,0,0-4.088-2.771,5.144,5.144,0,0,0-4.3,1.8C28.246,31.817,25.8,28.356,25.887,23.2l.768-9.16Z"
                                                fill="#fff" fillRule="evenodd"/>
                                            <path
                                                d="M91.263,49.847l.078-24.633,5.152-.022-.073,23.08,21.956-.095c2.837-.068,3.975,1.98,3.785,5.753l-27.7.12.013-4.217-3.206.014Zm94.92-16.87.007-2.4-20.607.089-.073,23.08-5.152.023.023-7.213.023-7.212.022-7.213q.008-2.036.013-4.072c.006-1.766,1.152-3.138,3.508-3.156L188,24.8l-.01,3.5,3.364-.014-.025,8.036-9.826,6.37,9.771,10.94-7.3.031L170.5,38.5l7.23-.031,8.458-5.49ZM192.4,53.626l.077-24.236,4.493-.02.015-4.613,26.418-.115-.019,5.77-25.759.112-.018,5.77,20.607-.09-.017,5.77-20.608.089-.019,5.771,25.76-.112c.09,2.874-.78,5.032-3.54,5.785l-27.39.119Zm32.045-.139.055-17.31,2.345-.01-.01,3.224,2.806-.012-.026,8.316,20.607-.09L250.28,30.3l-21.9.094-3.864.017.018-5.769,28.336-.123,2.566,2.874-.067,21.234q-.177,4.539-4.222,4.748l-26.7.116ZM141.7,25l12.5,28.8-5.727.025-9.658-22.239-8.959,20.41c-.5,1.152-.931,2.069-2.883,1.922l-3.684.016L134.063,29.4l4.227-.019.014-4.366Z"
                                                fill="#161814" fillRule="evenodd"/>
                                            <path
                                                d="M255.44,74.167l-1.173,0-.01-5.323-4.691.01.011,5.323-1.172,0-.015-6.655,7.036-.014Zm-9.384-1.311-.008-3.993-4.69.01.008,3.993ZM240.2,74.2l-.014-6.654,7.035-.015.014,6.654Zm-2.36-6.649,1.173,0,.014,6.655-1.173,0Zm-8.208.017,7.036-.015,0,1.331-5.863.012.008,3.993,5.863-.012,0,1.33-7.036.016Zm-4.039.009,2.881,6.648-1.3,0-2.225-5.135-2.2,5.144-1.3,0,2.853-6.661Zm-9.432,6.674-.01-5.324-2.932.007,0-1.331,7.036-.015,0,1.331-2.931.007.011,5.322Zm-4.118-6.645.014,6.654-7.035.015L205,67.62l1.173,0,.012,5.323,4.69-.01-.012-5.323Zm-14.065,3.024,4.691-.01,0-1.664-4.69.01ZM196.8,67.637l7.036-.015.009,4.325-5.863.012,0,2.33-1.172,0Zm-1.159,6.657-1.172,0-.01-4.565-2.679,3.906h-.489l-2.7-3.893.009,4.565-1.172,0-.014-6.654,1.221,0,2.891,4.171,2.874-4.183,1.222,0Zm-10.556-1.309-.009-3.992-4.69.009L180.391,73Zm-5.86,1.344-.014-6.655,7.036-.015.014,6.654ZM171,67.692l7.036-.015,0,1.331-5.863.012.008,3.992L178.047,73l0,1.331-7.035.015Zm-9.966.021,1.759,0,0,2-1.759,0Zm.01,4.658,1.758,0,.005,2-1.759,0ZM158.1,67.719l1.759,0,0,2-1.759,0Zm.01,4.658,1.759,0,0,2-1.758,0ZM145.8,74.4l-.012-5.324-2.931.006,0-1.331,7.036-.015,0,1.331-2.932.006.012,5.324Zm-11.139.023-.015-6.654,7.036-.015,0,1.331-5.862.012,0,1.331,4.69-.01,0,1.331-4.691.01,0,1.331,5.863-.013,0,1.331Zm-1.173,0-1.173,0-.011-5.323-4.69.01.011,5.323-1.173,0-.014-6.653,7.035-.016ZM124.1,69.676v-.554l-4.691.01.012,5.324-1.173,0q0-.832,0-1.663t0-1.664q0-.833,0-1.664c0-.554,0-1.109,0-1.663l7.036-.016,0,2.662-2.228,1.464,2.237,2.529-1.661,0-3.086-3.505,1.646,0Zm-14.061,4.8-.014-6.654,7.035-.015,0,1.331-5.863.012,0,1.331,4.69-.01,0,1.331-4.691.01,0,1.331,5.863-.012,0,1.33Zm-5.277.012-.011-5.324-2.932.006,0-1.33,7.035-.016,0,1.332-2.931,0,.011,5.324Zm-4.1.008-1.172,0-.012-5.323-4.69.009.011,5.324-1.172,0-.015-6.654,7.036-.015Zm-9.395-6.634,1.173,0,.015,6.653-1.173,0Z"
                                                fill="#161814"/>
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                                <div className="col-sm-4">

                                    <div className="input-group md-form form-sm pl-0 searchtop">
                                        <input className="form-control my-0 py-1 searchtop-input" type="text"
                                               placeholder="Buscar productos" aria-label="Search"/>
                                        <div className="input-group-append">
                                                <span className="input-group-text searchtop-icon" id="basic-text1">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 42 42"><title>search</title>
                                                        <path d="M39.063,37.986,27.935,26.858a14.549,14.549,0,1,0-1.078,1.077L37.985,39.063a.762.762,0,1,0,1.078-1.077ZM17.19,30.143A12.953,12.953,0,1,1,30.143,17.19,12.968,12.968,0,0,1,17.19,30.143Z"/>
                                                        <path
                                                            d="M38.523,40.507a1.985,1.985,0,0,1-1.393-.574L26.785,29.584a15.745,15.745,0,1,1,2.8-2.8L39.926,37.123a1.983,1.983,0,0,1-1.4,3.384ZM17.19,5.456A11.735,11.735,0,1,0,28.923,17.19,11.746,11.746,0,0,0,17.19,5.456Z"/>
                                                    </svg>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                {/*===MODAL===*/}
                                <div className="col-sm-2">
                                    <div>
                                        <ModalCart/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="band3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="collapse navbar-collapse" id="navbar">
                                            <Router>
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="index.php">Inicio</a></li>
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="servicios.php">Servicios</a></li>
                                                <li className="nav-item dropdown megamenu-li">
                                                    <a className="nav-link dropdown-toggle" href="" id="dropdown01"
                                                       data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">Productos</a>
                                                    <div className="dropdown-menu megamenu"
                                                         aria-labelledby="dropdown01">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-lg-3">
                                                                <h5>Categoria</h5>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                                <a className="dropdown-item" href="productos.php">Something
                                                                    else here</a>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                                <a className="dropdown-item" href="productos.php">Something
                                                                    else here</a>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <h5>Categoria</h5>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                                <a className="dropdown-item" href="productos.php">Something
                                                                    else here</a>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <h5>Categoria</h5>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                                <a className="dropdown-item" href="productos.php">Something
                                                                    else here</a>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <h5>Categoria</h5>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                                <a className="dropdown-item" href="productos.php">Something
                                                                    else here</a>
                                                                <a className="dropdown-item" href="productos.php">Another
                                                                    action</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="nosotros.php">Sobre
                                                    La Red</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Acceso a
                                                    clientes</a></li>
                                                <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
                                                </ul>

                                            </Router>
                                        </div>
                                    </nav>
                                    <div className="social top">
                                        <a href="https://www.facebook.com/lared.wifi" target="_blank"
                                           className="social-icon">
                                            <svg viewBox="0 0 320 512">
                                                <path
                                                    d="M279.1 288l14.3-92.7h-89v-60c0-25.4 12.5-50.2 52.3-50.2H297V6.4S260.4 0 225.4 0C152 0 104.3 44.4 104.3 124.7v70.6H22.9V288h81.4v224h100.2V288z"/>
                                            </svg>
                                        </a>
                                        <a href="" target="_blank" className="social-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Header;