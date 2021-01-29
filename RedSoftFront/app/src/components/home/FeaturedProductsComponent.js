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
                            <div className="item animate destacados">
                                <Link to={"/details/ADAPBLUE"}>
                                    <figure className="destacados-figure">
                                        <img src="http://164.68.101.162:8093/img/ADAPBLUE.jpg" alt="Producto Destacado 1" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Adaptador nisuta calbe divisor pwm para 2 cooler de 3 pines</div>
                                        <div className="price">$6.28</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate destacados">
                                <Link to={"/details/D7798137715821D"}>
                                    <figure className="destacados-figure">
                                        {/* <div className="label">20%</div> */}
                                        <img src="http://164.68.101.162:8093/img/D7798137715821D.jpg" alt="Producto Destacado 2"className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Adaptador bt headset doble usb adaptador para play</div>
                                        <div className="price">
                                            {/* <span className="offer">$21.05</span> */}
                                            $21.05</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate destacados">
                                <Link to={"/details/NSADDV1"}>
                                    <figure className="destacados-figure">
                                        <img src="http://164.68.101.162:8093/img/NSADDV1.jpg" alt="Producto Destacado 3" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Adaptador dvi/vga int.co 0909022a</div>
                                        <div className="price">$3.84</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="item animate destacados">
                                <Link to={"/details/AA"}>
                                    <figure className="destacados-figure">
                                        <img src="http://164.68.101.162:8093/img/AA.jpg" alt="Producto Destacado 4" className="foto"/></figure>
                                    <div className="info">
                                        <div className="name">Gigabyte Radeon RX 570 8GB Gaming</div>
                                        <div className="price">$596.53</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        {/*<Link to={"/products"} className="btn btn-lg btn-light"*/}
                        {/*      role="button" aria-pressed="true">Ver todo</Link>*/}
                        <Link to={"/products"} className="btn btn-lg btn-light btn-all" role="button" name="productos">
                            VER TODO</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProductsComponent;