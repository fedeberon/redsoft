import React from "react";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";

const Detail = () => {
    const products = useSelector(state => Object.values(state.order.items));

    return (
        <section>
            <div className="cart" >

                Tiene {products.length} productos en el carro.
                    <li href="/product/details"> Ver mas ..</li>
            </div>
        </section>
    )
}

export default Detail;