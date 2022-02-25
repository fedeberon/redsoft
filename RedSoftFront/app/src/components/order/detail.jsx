import React from "react";
import {useSelector} from 'react-redux'

const Detail = () => {
    const products = useSelector(state => Object.values(state.order.items));

    return (
        <section>
            <div className="cart" >
                Tenés {products.length} productos en el carrito!
            </div>
        </section>
    )
}

export default Detail;