import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {ordersActions} from "../../store/order";
import 'bootstrap';
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useAuth0 } from '@auth0/auth0-react';

const Detail = (props) => {

    const dispatch = useDispatch();
    const addToOrder = (product) => {
        product = {
            ...product, 
            quantity: quantity,
            webLink: product.webLink
        }
        dispatch(ordersActions.addOrder(product));           
    }

    const emptyProduct = {description: "", precioUni: ""}
    const product = props.product ? props.product : emptyProduct;
    const awaitDetail = props.awaitDetail;
    const {user, loginWithRedirect, loginWithPopup} = useAuth0();
    const [show, setShow] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [cotizUsd, setCotizUsd] = useState(0);

    /*Listener para habilitar button AddToCart desde removeProduct en Order.jsx*/
    const elem = document.getElementById('btnRemove');
    if(elem){
        elem.addEventListener('click', function (){
            setBtnClicked(false)
        })
    }

    const [quantity, setQuantity] = useState(1)

    function callFunctions() {
        addToOrder(product);
        setBtnClicked(true);
        showAlert();
    }

    function showAlert() {
        setShow(true);
        setTimeout(
            () => setShow(false),
            3000
        );
    }

    const sessionValidate = () => {
        if(user){
            callFunctions();
        } else {
            if(window.innerWidth < 767){
                loginWithRedirect();
            } else {
                loginWithPopup();
            }
        }
    }

    useEffect(()=> {
        setCotizUsd(sessionStorage.getItem('dolarToday'));
        if(cotizUsd === 0){
            fetch('https://www.dolarsi.com/api/api.php?type=cotizador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'},
            }).then(res => res.json())
            .then(data => {
                let cotizUsd = Math.round(Number((data[0].casa?.venta).replace(',', '.')));
                setCotizUsd(cotizUsd)
                sessionStorage.setItem('dolarToday', cotizUsd.toFixed(2));
            })
        }
    },[])

    return (
    
        <div>
            <div className="info">
                <a className="categoria detalle">Computación</a>
                <Spinner animation="border" variant="info" size='sm'
                         style={{display: `${awaitDetail ? 'flex' : 'none'} `,
                             margin: '0 auto'}}/>
                <div id="infoProducts" className="name detalle">
                    <h4>{product.description}</h4>
                </div>
                <div className="price detalle" style={{display: awaitDetail ? 'none' : 'block'}}>
                    $ {Intl.NumberFormat("de-DE").format((parseFloat(product.precioUniVta).toFixed(2) * cotizUsd).toFixed(2))}
                </div>
                {/* <p>* Precio sujeto a cotización del día en moneda extranjera ($USD)</p> */}
            </div>
                <form>
                <div className="row">
                    <div className="col-3 col-sm-2 quantity">
                        <span>Cantidad</span>
                        <input style={{width: '71px'}} id="inputQuantity" className="form-control form-control-lg"
                               type="number" min="1" max={`${parseInt(product.cantiStock)}`} placeholder="1"
                               onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>
                    <div className="col-9 col-sm-6">
                        <button id="buttonAdd" disabled={parseInt(product.cantiStock) === 0}
                            type="button" className={`${awaitDetail ? 'btn-disab' : ''} ${btnClicked ? 'addtocart-clicked btn-disab' : 'addtocart'}`}
                                onClick={sessionValidate}
                                >{btnClicked ? 'Producto Agregado' : 'Agregar al Carrito'}
                        </button>
                    </div>
                    <div className="col-3" style={{display: `${window.innerWidth < 767 ? 'none' : ''}`, padding: '1rem'}}>
                        <Alert variant='light' show={show}>
                            <img style={{height: '25px'}} src="https://e7.pngegg.com/pngimages/194/825/png-clipart-computer-icons-check-mark-graphics-camellot-academy-accepting-applications-soon-blue-angle-thumbnail.png" alt="check"/>
                        </Alert>
                    </div>
                    <div className="col-9" style={{marginTop: '.5rem'}}>
                        <p style={{fontSize: '15px'}}>Stock Disponible: 
                            <span style={{color: '#ca247b', margin: '0 10px'}}>
                                {parseInt(product.cantiStock) === 0 ? 'Sin stock' : `${parseInt(product.cantiStock) === 1 ? `${parseInt(product.cantiStock)} unidad` : `${parseInt(product.cantiStock)} unidades`}`}
                            </span>
                        </p>
                    </div>
                </div>
            </form>
            <Link to="/contact" className="btn btn-lg btn-whatsapp" id="btn-details"role="button"
               aria-pressed="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>WhatsApp</title>
                    <path
                        d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z"/>
                    <path
                        d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"
                        fillRule="evenodd"/>
                </svg>
                &nbsp;Consultar</Link>
        </div>
    
    )
}

export default Detail;