import React from "react";

class FeaturedProductsComponent extends React.Component {

    render() {
        return (
            <div className="destacadoshome">
                <div className="container">
                    <h4 className="tithome">Productos destacados</h4>
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="detalle.php">
                                    <figure><img src="img/producto-01.jpg" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price">$5650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="detalle.php">
                                    <figure>
                                        <div className="label">20%</div>
                                        <img src="img/producto-02.jpg" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price"><span className="offer">$7000,00</span>$5650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="detalle.php">
                                    <figure><img src="img/producto-03.jpg" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price">$5650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate">
                                <a href="detalle.php">
                                    <figure><img src="img/producto-04.jpg" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 - Rojo</div>
                                        <div className="price">$5650,00</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="productos.php" className="btn btn-lg btn-light" role="button" aria-pressed="true">Ver todo</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProductsComponent;