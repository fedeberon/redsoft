import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


export default function ModalCart () {

    const [show, setShow] = useState(false);

    const handleModal = () => setShow(!show);
    

        return (

            <>

                {/*Original Button below*/}
                <button title="Ver carrito" className="carttop" onClick={handleModal} style={{background: "border-box", padding: '5px 35px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>cart</title>
                        <path d="M20.511,37.073A3.932,3.932,0,1,0,16.58,41,3.931,3.931,0,0,0,20.511,37.073Zm-6.469,0A2.537,2.537,0,1,1,16.58,39.61,2.537,2.537,0,0,1,14.042,37.
                            073Z" fill="#161814"/>
                        <path d="M31.137,41a3.932,3.932,0,1,0-3.931-3.931A3.931,3.931,0,0,0,31.137,41Zm0-6.468A2.537,2.537,0,1,1,28.6,37.073,2.536,2.536,0
                            ,0,1,31.137,34.536Z" fill="#161814"/>
                        <path d="M1.041,3.394H5.293A2.828,2.828,0,0,1,8.1,5.791l3.367,21.267a4.216,4.216,0,0,0,4.183,3.573h20.81a.7.7,0,0,0
                            ,0-1.395H15.649a2.829,2.829,0,0,1-2.806-2.4l-.572-3.615H33.584a4.239,4.239,0
                            ,0,0,4-2.849L41.54,8.963a.7.7,0,0,0-.659-.926H9.867l-.39-2.464A4.216,4.216,0
                            ,0,0,5.293,2H1.041a.7.7,0,1,0,0,1.394ZM39.9,9.432,36.268,19.919a2.842,2.842,
                            0,0,1-2.684,1.91H12.05l-1.963-12.4Z" fill="#161814"/>
                    </svg>
                    &nbsp;&nbsp;Carrito</button>


                <div className={`modal right fade ${show ? "show" : ""}`} style={{display: show ? 'block' : 'none', paddingRight: '15px'}} id="modalCart" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel2">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" onClick={handleModal} className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel2">Carrito</h4>
                            </div>
                            <div className="modal-body">


                                <div className="item cart animate">
                                    <div className="row">
                                        <figure className="col-3 col-sm-3"><img src="img/producto-03.jpg"
                                                                                className="foto"/>
                                        </figure>
                                        <div className="info col-4 col-sm-5">
                                            <div className="name">Auriculares con Micrófono Genius HS-610 -
                                                Rojo <span>x 1</span></div>
                                        </div>
                                        <div className="col-5 col-sm-4 price">
                                            $5650,00
                                            <a href=""
                                               className="deletecart">{/*<?php include('svg/delete.php');?>*/}</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="item cart animate">
                                    <div className="row">
                                        <figure className="col-3 col-sm-3"><img src="img/producto-03.jpg"
                                                                                className="foto"/>
                                        </figure>
                                        <div className="info col-4 col-sm-5">
                                            <div className="name">Auriculares con Micrófono Genius HS-610 -
                                                Rojo <span>x 1</span></div>
                                        </div>
                                        <div className="col-5 col-sm-4 price">
                                            $5650,00
                                            <a href=""
                                               className="deletecart">{/*<?php include('svg/delete.php');?>*/}</a>
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
            </>
        )
    }
//
// export default ModalCart;
