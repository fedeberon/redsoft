import React from "react";

class ModalCart extends React.Component {

    render() {
        return (

            <div className="modal right fade" id="modalCart" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel2">Carrito</h4>
                        </div>
                        <div className="modal-body">


                            <div className="item cart animate">
                                <div className="row">
                                    <figure className="col-3 col-sm-3"><img src="img/producto-03.jpg" className="foto"/>
                                    </figure>
                                    <div className="info col-4 col-sm-5">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 -
                                            Rojo <span>x 1</span></div>
                                    </div>
                                    <div className="col-5 col-sm-4 price">
                                        $5650,00
                                        <a href="" className="deletecart">{/*<?php include('svg/delete.php');?>*/}</a>
                                    </div>
                                </div>
                            </div>


                            <div className="item cart animate">
                                <div className="row">
                                    <figure className="col-3 col-sm-3"><img src="img/producto-03.jpg" className="foto"/>
                                    </figure>
                                    <div className="info col-4 col-sm-5">
                                        <div className="name">Auriculares con Micrófono Genius HS-610 -
                                            Rojo <span>x 1</span></div>
                                    </div>
                                    <div className="col-5 col-sm-4 price">
                                        $5650,00
                                        <a href="" className="deletecart">{/*<?php include('svg/delete.php');?>*/}</a>
                                    </div>
                                </div>
                            </div>


                            <div className="cart-total">
                                <h2 className="row text-primary mb-0">
                                    <span className="col">Total:</span>
                                    <span className="col text-right">$38.000,00</span>
                                </h2>
                            </div>


                            <div className="mb-3">
                                <input className="btn btn-primary btn-iniciar btn-block btn-lg" type="submit"
                                       name="go_to_checkout" value="Iniciar Compra"/>
                            </div>

                            <div className="row mb-2">
                                <div className="text-center w-100">
                                    <a href="#" className="js-modal-close btn-link">Seguir comprando</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCart;