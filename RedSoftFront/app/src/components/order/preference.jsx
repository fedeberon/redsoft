import React from "react";
import {useSelector} from 'react-redux';
import {Button} from "react-bootstrap";
import QRCode from "qrcode.react";

const Preference = () => {

    const id = useSelector(state => state.preference.id);

    return (
        <>
            <form action="/procesar-pago" method="POST">
                <script src="www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                        data-preference-id={id}/>
            </form>
            <div>
                <div className="row tilde-success">
                    <div className="col-12">
                        <p className="success-mp">Se generó tu link de pago </p>
                    </div>
                    <div style={{marginLeft: '172px', marginBottom: '88px'}}>
                        <span className="alerticon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/215px-Check_green_icon.svg.png"
                                                         alt="checkmark"
                                                         style={{height: '100px'}}/></span><br/>
                    </div>
                </div>
                <div className="succ-cont">
                    Hacé click debajo para continuar
                       ó escanea el código QR
                </div>
                <div>
                <Button style={{marginLeft: '139px', marginTop: '20px'}} variant="primary">
                    <a className="btn-pay" href={id}>Completar pago</a></Button>
                </div>
                <div className="row qr-code">
                    <QRCode value={id}/>
                </div>
            </div>
        </>
    )
}

export default Preference;