import React, {useState} from 'react';
import Order from "../order/order";
import {Button} from "react-bootstrap";

const ModalContent = ({products, handleModal}) => {

    const [preferenceIsReady, setPreferenceIsReady] = useState(false)

    const [spinLoad, setSpinLoad] = useState("")

    const handleClick = (value) => {
        setPreferenceIsReady(value)
        setSpinLoad(false)
    }

    return (

    <div className="modal-content" style={{display: 'inline-table'}}>
        <div className="modal-header">
            <button id="btnCloseModal" onClick={handleModal} type="button" className="close" data-dismiss="modal"
                    aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel2">Carrito</h4>
            {/*<Detail/>*/}
        </div>
        <div className="modal-body">
            <div>
                <Order products={products}
                       isReady={preferenceIsReady}
                       changePreference={handleClick}
                        isLoading={spinLoad}
                        setIsLoading={handleClick}/>
            </div>
        </div>
        <div className="row mb-2">
        </div>
        <div className="row mb-2">
            <div className="text-center w-100">
                <Button id="btnConti" variant="light" onClick={() => handleClick(false)}
                        className={`js-modal-close linklr ${products.length === 0 ? 'btn-disab' : ''}`}
                        >Seguir comprando</Button>
            </div>
        </div>
    </div>
    )
}

export default ModalContent;