import React from "react";


export default function MenuComponent() {
    return (
            <body>
                    <div id="myOverlay" className="overlay fade searchfull">
                        <span className="closebtn" onClick="closeSearch()" title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <form action="resultados.php">
                                <input type="text" placeholder="Buscar producto" name="search"/>
                                    <button type="submit">
                                        {/*<?php include('svg/search.php');?>*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>search</title><path d="M39.063,37.986,27.935,26.858a14.549,14.549,0,1,0-1.078,1.077L37.985,39.063a.762.762,0,1,0,1.078-1.077ZM17.19,30.143A12.953,12.953,0,1,1,30.143,17.19,12.968,12.968,0,0,1,17.19,30.143Z"></path><path d="M38.523,40.507a1.985,1.985,0,0,1-1.393-.574L26.785,29.584a15.745,15.745,0,1,1,2.8-2.8L39.926,37.123a1.983,1.983,0,0,1-1.4,3.384ZM17.19,5.456A11.735,11.735,0,1,0,28.923,17.19,11.746,11.746,0,0,0,17.19,5.456Z"></path></svg>
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

                <div className="site-overlay"></div>

                <header>
                <div className="bandmobile">
                    <div className="band">
                        <button className="menu-btn"><span>&#9776;</span> Menu</button>
                        <a href="#" className="icontop" onClick="openSearch()">
                            {/*<?php include('svg/search.php');?>*/}
                        </a>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>whatsapp</title><path d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z" /><path d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"  fill-rule="evenodd"/></svg>
                                    &nbsp;2314 404320
                                </li>
                                <li>
                                    {/*<?php include('svg/phone.php');?> */}
                                    2314 427308</li>
                                <li>
                                    {/*<?php include('svg/map-maker.php');?> */}
                                    Av. Alsina 555</li>
                                <li>
                                    {/*<?php include('svg/email.php');?> */}
                                    info@laredwifi.com.ar</li>
                            </ul>
                            <a href="" className="clientes">Acceso a clientes
                                {/*<?php include('svg/arrow-right-circle.php');?>*/}
                            </a>
                            <div className="spacer"></div>
                        </div>
                    </div>
                    <div className="band2">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="logotop"><a href="index.php">
                                        {/*<?php include('svg/logo.php');?>*/}
                                    </a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group md-form form-sm pl-0 searchtop">
                                        <input className="form-control my-0 py-1 searchtop-input" type="text"
                                               placeholder="Buscar productos" aria-label="Search"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text searchtop-icon" id="basic-text1">
                                                    {/*<?php include('svg/search.php');?>*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>search</title>
                                                        <path d="M39.063,37.986,27.935,26.858a14.549,14.549,0,1,0-1.078,1.077L37.985,39.063a.762.762,0,1,0,1.078-1.077ZM17.19,30.143A12.953,12.953,0,1,1,30.143,17.19,12.968,12.968,0,0,1,17.19,30.143Z"/>
                                                        <path d="M38.523,40.507a1.985,1.985,0,0,1-1.393-.574L26.785,29.584a15.745,15.745,0,1,1,2.8-2.8L39.926,37.123a1.983,1.983,0,0,1-1.4,3.384ZM17.19,5.456A11.735,11.735,0,1,0,28.923,17.19,11.746,11.746,0,0,0,17.19,5.456Z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <a href="#" data-toggle="modal" data-target="#modalCart" className="carttop">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>cart</title><path d="M20.511,37.073A3.932,3.932,0,1,0,16.58,41,3.931,3.931,0,0,0,20.511,37.073Zm-6.469,0A2.537,2.537,0,1,1,16.58,39.61,2.537,2.537,0,0,1,14.042,37.073Z" fill="#161814"/><path d="M31.137,41a3.932,3.932,0,1,0-3.931-3.931A3.931,3.931,0,0,0,31.137,41Zm0-6.468A2.537,2.537,0,1,1,28.6,37.073,2.536,2.536,0,0,1,31.137,34.536Z" fill="#161814"/><path d="M1.041,3.394H5.293A2.828,2.828,0,0,1,8.1,5.791l3.367,21.267a4.216,4.216,0,0,0,4.183,3.573h20.81a.7.7,0,0,0,0-1.395H15.649a2.829,2.829,0,0,1-2.806-2.4l-.572-3.615H33.584a4.239,4.239,0,0,0,4-2.849L41.54,8.963a.7.7,0,0,0-.659-.926H9.867l-.39-2.464A4.216,4.216,0,0,0,5.293,2H1.041a.7.7,0,1,0,0,1.394ZM39.9,9.432,36.268,19.919a2.842,2.842,0,0,1-2.684,1.91H12.05l-1.963-12.4Z" fill="#161814"/></svg>
                                        &nbsp;&nbsp;Carrito</a>
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
                                                <li className="nav-item"><a className="nav-link"
                                                                            href="contacto.php">Contacto</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <div className="social top">
                                        <a href="" className="social-icon">
                                            {/*<?php include('svg/facebook.php');?>*/}
                                            </a>
                                        <a href="" className="social-icon">
                                            {/*<?php include('svg/instagram.php');?>*/}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </body>
        );
        }