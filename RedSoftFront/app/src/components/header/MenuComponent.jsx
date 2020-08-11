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
                                    {/*<?php include('svg/whatsapp.php');?> */}
                                    2314 404320
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
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <a href="#" data-toggle="modal" data-target="#modalCart" className="carttop">
                                        {/*<?php include('svg/cart.php');?>*/}
                                        Carrito</a>
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