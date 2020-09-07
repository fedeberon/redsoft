import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Preference = () => {

    const id = useSelector(state => state.preference.id);

    return (
        <>
            <form action="/procesar-pago" method="POST">
                <script src="www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                        data-preference-id={id}/>
            </form>
            <div style={{backgroundColor: 'rgb(119 178 85)', height: '250px'}}>
                <div className="row tilde-success" style={{marginLeft: '169px', height: '250px', width: '224px'}}>
                    <div className="col-12" style={{right: '150px', width: '380px'}}>
                        <p className="success-mp">Se generó tu link de pago </p>
                    </div>
                    <div style={{paddingLeft: '98px'}}>

                    </div>
                </div>
                <Button style={{marginBottom: '-55px', marginLeft: '139px'}} variant="primary">
                    <a className="btn-pay" href={""}>Completar pago</a></Button>
            </div>

        </>
    )
}

export default Preference;