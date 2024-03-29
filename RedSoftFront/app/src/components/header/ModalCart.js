import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import ModalContent from "./ModalContent";

export default function ModalCart({setShowMobile}) {

    const products = useSelector(state => Object.values(state.order.items), shallowEqual);

    const [show, setShow] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    function BodyHidden() {
        let bg = document.body;
        bg.style.overflow = show === true ? "" : "hidden"
        bg.style.paddingRight = show === true ? "" : "15px"
    }

    const handleModal = () => {
        setShow(!show)
        setTimeout(()=> setShowDialog(!showDialog),200)
        BodyHidden()
    }

    /*Listener para cerrar modalcart desde ModalContent*/
    const setMod = document.getElementById('btnConti');
    if (setMod) {
        setMod.addEventListener('click', function () {
                handleModal()
            }
        )
    }

    return (

        <>
                                    
            {window.innerWidth > 767 ?
                <button id="mod1" title="Ver carrito" className="carttop" onClick={handleModal}
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
                    &nbsp;Carrito
                </button> 
            : 
            <a onClick={handleModal} title="modal" data-target="#modalCart" 
            className="icontop">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><title>cart</title>
                 <path
                     d="M20.511,37.073A3.932,3.932,0,1,0,16.58,41,3.931,3.931,0,0,0,20.511,37.073Zm-6.469,0A2.537,2.537,0,1,1,16.58,39.61,2.537,2.537,0,0,1,14.042,37.073Z"
                     fill="#161814"/>
                 <path
                     d="M31.137,41a3.932,3.932,0,1,0-3.931-3.931A3.931,3.931,0,0,0,31.137,41Zm0-6.468A2.537,2.537,0,1,1,28.6,37.073,2.536,2.536,0,0,1,31.137,34.536Z"
                     fill="#161814"/>
                 <path
                     d="M1.041,3.394H5.293A2.828,2.828,0,0,1,8.1,5.791l3.367,21.267a4.216,4.216,0,0,0,4.183,3.573h20.81a.7.7,0,0,0,0-1.395H15.649a2.829,2.829,0,0,1-2.806-2.4l-.572-3.615H33.584a4.239,4.239,0,0,0,4-2.849L41.54,8.963a.7.7,0,0,0-.659-.926H9.867l-.39-2.464A4.216,4.216,0,0,0,5.293,2H1.041a.7.7,0,1,0,0,1.394ZM39.9,9.432,36.268,19.919a2.842,2.842,0,0,1-2.684,1.91H12.05l-1.963-12.4Z"
                     fill="#161814"/>
             </svg>
             </a> }

                <div className={`modal right fade ${show ? "show" : ""}`}
                     style={{
                         display: show ? 'block' : 'none',
                         backgroundColor: 'rgba(0,0,0,0.5)',
                     }} id="modalCart" tabIndex="-1"
                     role="dialog"
                     aria-labelledby="myModalLabel2">
                    <div id="modal-dial" className="modal-dialog" role="document"
                         style={{borderRadius: '4px', right: showDialog ? '0' : ''}}>
                        <ModalContent products={products} handleModal={handleModal}/>
                    </div>
                </div>
        </>
    )
}
