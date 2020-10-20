import React from "react";
import {Link} from "react-router-dom";

class FeaturedProductsComponent extends React.Component {

    render() {
        return (
            <div className="destacadoshome">
                <div className="container">
                    <h4 className="tithome">Productos destacados</h4>
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="item animate">
                                <Link to={"/details/D6948391225609D"}>
                                    <figure><img src="img/producto-01.jpg" alt="Producto Destacado 1" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Mouse HP M270 Gaming Negro Óptico</div>
                                        <div className="price">$13.000,00</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <Link to={"/details/E091163255673E"}>
                                    <figure>
                                        <div className="label">20%</div>
                                        <img src="img/producto-02.jpg" alt="Producto Destacado 2"className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price"><span className="offer">$7000,00</span>$5650,00</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <Link to={"/details/HP4645"}>
                                    <figure><img src="img/producto-03.jpg" alt="Producto Destacado 3" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Impresora HP Deskjet Ink 2145</div>
                                        <div className="price">$69.650,00</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href={"/details/AA"}>
                                    <figure><img src="http://164.68.101.162:8093/img/AA.jpg" alt="Producto Destacado 4" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Gigabyte Radeon RX 570 8GB Gaming</div>
                                        <div className="price">$340.00000</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        {/*<Link to={"/products"} className="btn btn-lg btn-light"*/}
                        {/*      role="button" aria-pressed="true">Ver todo</Link>*/}
                        <a href="/products" className="btn btn-lg btn-light btn-all" role="button" name="productos">
                            VER TODO</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProductsComponent;