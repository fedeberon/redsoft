import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";

const Preference = () => {

    const id = useSelector(state => state.preference.id);

    return (
        <>
           <form action="/procesar-pago" method="POST">
                <script src="www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
    data-preference-id={id}/>
            </form>

            <a href={id}>Pagar</a>
            </>
    )
}

export default Preference;