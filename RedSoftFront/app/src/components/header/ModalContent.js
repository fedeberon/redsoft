import React, {useState} from 'react';
import Order from "../order/order";
import {Button} from "react-bootstrap";

const ModalContent = ({products, handleModal}) => {

    const [preferenceIsReady, setPreferenceIsReady] = useState(false)

    const handleClick = (value) => setPreferenceIsReady(value)

    return (

    <div className="modal-content">
        <div className="modal-header">
            <button type="button" onClick={() => handleModal()} className="close" data-dismiss="modal"
                    aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel2">Carrito</h4>
            {/*<Detail/>*/}
        </div>
        <div className="modal-body">
            <div>
                <Order products={products}
                       isReady={preferenceIsReady}
                       changePreference={handleClick}/>
            </div>
        </div>
        <div className="row mb-2">
        </div>
        <div className="row mb-2">
            <div className="text-center w-100">
                <a onClick={() => handleClick(false)}
                        className="js-modal-close btn-lg btn-link">Seguir
                    comprando
                </a>
            </div>
        </div>
    </div>
    )
}

export default ModalContent;