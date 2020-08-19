import {useState} from "react";
import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalCart2 (){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="outline-dark" onClick={handleShow}>Carrito REACT</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <Button variant="outline-info" onClick={handleClose}>
                                Seguir comprando
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

