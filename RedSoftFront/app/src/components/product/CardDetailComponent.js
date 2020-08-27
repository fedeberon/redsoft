import React, {Component} from 'react';
import 'bootstrap';
import ReactImageZoom from 'react-image-zoom';
import Preference from "../order/preference";

class CardDetailComponent extends Component {

    render() {
        return (

            <div>
                <div className="categoria">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/products">Productos</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Detalles</li>
                            </ol>
                        </nav>

                        <div className="row">

                            {/*// <!-- galeria -->*/}
                            <div className="col-sm-6">
                                <div id="carouselProduct" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="label">20%</div>
                                        <img className="zoom-icon" src="img/zoom-in.svg"/>
                                        <div className="carousel-item active">
                                            <span className="zoom" id="ex1"><ReactImageZoom width={600} height={600}
                                             zoomWidth={700} img={"img/producto-01.jpg"} zoomPosition={"original"}
                                             className="d-block w-100"/>
                                            </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span className="zoom" id="ex2"><ReactImageZoom width={600} height={600}
                                             zoomWidth={700} img={"img/producto-02.jpg"} zoomPosition={"original"}
                                             className="d-block w-100"/>
                                            </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span className="zoom" id="ex3"><ReactImageZoom width={500} height={500}
                                             zoomWidth={600} img={"img/producto-03.jpg"} zoomPosition={"original"}
                                             className="d-block w-100"/>
                                            </span>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselProduct" role="button"
                                       data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"><img
                                        src="img/arrow-car-left.svg"/></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselProduct" role="button"
                                       data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"><img
                                        src="img/arrow-car-right.svg"/></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselProduct" data-slide-to="0" className="active"><img
                                            src="img/producto-01.jpg" className="d-block w-100"/></li>
                                        <li data-target="#carouselProduct" data-slide-to="1"><img
                                            src="img/producto-02.jpg"
                                            className="d-block w-100"/>
                                        </li>
                                        <li data-target="#carouselProduct" data-slide-to="2"><img
                                            src="img/producto-03.jpg"
                                            className="d-block w-100"/>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            {/*// <!-- info -->*/}
                            <div className="col infoProduct">
                                <div className="info">
                                    <a href="productos.php" className="categoria detalle">Computación</a>
                                    <div className="name detalle">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                    <div className="price detalle"><span className="offer">$7000,00</span> $5650,00
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-3 col-sm-2 quantity">
                                            <span>Cantidad</span>
                                            <input className="form-control form-control-lg" type="text"
                                                   placeholder="1"/>
                                        </div>
                                        <div className="col-9 col-sm-6">
                                            <button type="button" className="addtocart">Comprar online
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <a href="productos.php" className="btn btn-whatsapp" role="button"
                                   aria-pressed="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>WhatsApp</title>
                                        <path
                                            d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z"/>
                                        <path
                                            d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"
                                            fill-rule="evenodd"/>
                                    </svg>
                                    &nbsp;Consultar</a>

                                <div id="accordion" className="accordionProduct">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link expand" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                    MEDIOS DE PAGO <span>+</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Informacion medios de pago.
                                                <div className="row"><Preference/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed expand" data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                    MEDIOS DE ENVIO <span>+</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Informacion medios de ENVIO.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*// <!-- description -->*/}
                        <div className="row">
                            <div className="col">
                                <div className="description">
                                    <h4 className="tit">Características del producto</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <strong>CARACTERÍSTICAS</strong>
                                    <ul>
                                        <li>- Gaming mouse óptico de alta calidad</li>
                                        <li>- Cableado con conexión USB</li>
                                        <li>- 6 Botones</li>
                                        <li>- Retroiluminado</li>
                                        <li>- Rueda scroll con textura antideslizante</li>
                                        <li>- Diseño ergonómico</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default CardDetailComponent;