import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Detail from "../order/detail";
import product from "../product/product";
import Order from "../order/order";


export default function ModalCart() {

    const [show, setShow] = useState(false);
    const handleModal = () => setShow(!show);
    let totalPrice = 0;

    return (

        <>

            <button id="mod1" title="Ver carrito" className="carttop" onClick={handleModal}
                    style={{background: "border-box", padding: '5px 35px'}}
                    type="button" data-dismiss="modal">
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
                &nbsp;&nbsp;Carrito
            </button>

            <div className={`modal right fade ${show ? "show" : ""}`}
                 style={{display: show ? 'block' : 'none', paddingRight: '15px',}} id="modalCart" tabIndex="-1"
                 role="dialog"
                 aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document" style={{borderRadius: '4px',}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={handleModal} className="close" data-dismiss="modal"
                                    aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel2">Carrito</h4>
                        </div>
                        <div className="modal-body">

                                <Order/>



                            {/*<div className="item cart animate">*/}
                            {/*    <div className="row">*/}
                            {/*        <figure className="col-3 col-sm-3"><img src="img/producto-02.jpg"*/}
                            {/*                                                className="foto"/>*/}
                            {/*        </figure>*/}
                            {/*        <div className="info col-4 col-sm-5">*/}
                            {/*            <div className="name">Auriculares con Micrófono Genius HS-610 -*/}
                            {/*                Rojo <span>x 1</span></div>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-5 col-sm-4 price">*/}
                            {/*            $5650,00*/}
                            {/*            <a href=""*/}
                            {/*               className="deletecart">*/}
                            {/*                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 427"><title>delete</title><path d="M272.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,272.4,154.7Z"/><path d="M154.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,154.4,154.7Z"/><path d="M68.4,127.121V373.5c0,14.562,5.34,28.238,14.668,38.051A49.243,49.243,0,0,0,118.8,427H308a49.229,49.229,0,0,0,35.73-15.449c9.328-9.813,14.668-23.489,14.668-38.051V127.121A38.2,38.2,0,0,0,348.6,52H297.4V39.5A39.28,39.28,0,0,0,257.8,0H169a39.28,39.28,0,0,0-39.6,39.5V52H78.2a38.2,38.2,0,0,0-9.8,75.121ZM308,407H118.8c-17.1,0-30.4-14.688-30.4-33.5V128h250V373.5C338.4,392.312,325.1,407,308,407ZM149.4,39.5A19.265,19.265,0,0,1,169,20h88.8a19.265,19.265,0,0,1,19.6,19.5V52h-128ZM78.2,72H348.6a18,18,0,0,1,0,36H78.2a18,18,0,1,1,0-36Z"/><path d="M213.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,213.4,154.7Z"/></svg></a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="cart-total">
                                <h2 className="row text-primary mb-0">
                                    <span className="col">Total:</span>
                                    <span className="col text-right">${() => totalPrice = totalPrice + product.precioUni}</span>
                                </h2>
                            </div>
                            <div className="mb-3">
                                <input className="btn btn-primary btn-iniciar btn-block btn-lg" type="submit"
                                       style={{backgroundColor: '#000', borderColor: '#000', color: '#fff',}}
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
