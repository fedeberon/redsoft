import React from "react";
import {useSelector} from 'react-redux'

const Preference = () => {

    const id = useSelector(state => Object.values(state.preference.id));

    return (
        <>
            <form action="/procesar-pago" method="POST">
                <script
                    src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                    data-preference-id={id}>
                </script>
            </form>
        </>
    )
}

export default Preference;