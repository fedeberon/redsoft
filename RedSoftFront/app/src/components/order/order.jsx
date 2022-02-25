import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import {ordersActions, preferenceActions} from "../../store";
import {Button, Table} from 'react-bootstrap';
import axios from 'axios'
import Preference from "./preference";
import Spinner from "react-bootstrap/Spinner";
import { useAuth0 } from '@auth0/auth0-react';


let api = axios.create({
    baseURL: 'https://laredintercomp.com.ar:8886/api',
    timeout: 30000,
});

const Order = ({products, changePreference, isReady, setSpinLoad}) => {

    const [link, setLink] = useState('');
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    let cotizValue = sessionStorage.getItem('dolarToday');

    useEffect(() => {changePreference(false)}, [products])

    useEffect(() => {setIsLoading(false)},[setSpinLoad])

    let totalPrice = 0;

    products.map((product, index) => {
        totalPrice += (parseFloat(product.precioUniVta) * cotizValue) * product.quantity;
    })

    const {
        user,
    } = useAuth0();

    const handleSubmit = async (event) => {

        setIsLoading(true)
        event.preventDefault();
        let details = [];

        let isEqual = true

        for(let i = 0 ; i < order.length; i++) {

            if (order.length === products.length && order[i].quantity === products[i].quantity) {
                order.map((element, index) => isEqual = isEqual && element.code === products[index].code)
            } else {
                isEqual = false
            }
        }
        console.log(isEqual)

        if(link !== "" && isEqual){
            changePreference(true)
            setIsLoading(false);
            return
        }

        products.map((product, index) => {
            let totalTopay = (product.precioUniVta * sessionStorage.getItem('dolarToday')).toFixed(2);
            let detail = {
                product: {
                    code: product.code,
                    name: product.description,
                    price: Number(totalTopay),
                    image: product.webLink,
                },
                quantity: product.quantity
            }
            details.push(detail);
            console.log(totalTopay)
        })
        
        console.log(details);

        try {
            await api
                .post(`/cart/preference?user=${user.email}`, details)
                .then(function (res) {
                    console.log(res.data)
                    setIsLoading(false);
                    dispatch(preferenceActions.set(res.data));
                    changePreference(true);
                    setLink(res.data);
                    setOrder(products);
                    localStorage.removeItem('cartlared');
                })
                .catch(function (error) {
                    console.log(error)
                });
        } catch (error) {
            console.log(error);
        }
    }

    const removeProduct = (product) => {
        if(products.length === 1){
            localStorage.removeItem('cartlared');
        }
        dispatch(ordersActions.remove(product));               
    }

    return (    

        <>  {!isReady ?
            <form onSubmit={handleSubmit} style={{paddingTop: '15px'}}>
                <Table responsive>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="item cart animate">
                                <td style={{width: '114px', heigth: '115px'}}><img alt={product.description} src={product && product.webLink} style={{width: '90px'}}/></td>
                                <td className="col-description">{product.description} <br></br><strong>x {product.quantity}</strong></td>
                                <td className="col-price">${Intl.NumberFormat("de-DE").format((parseFloat(product.precioUniVta).toFixed(2) * sessionStorage.getItem('dolarToday')).toFixed(2))}</td>
                                <td>
                                    <Button id="btnRemove" variant="light" onClick={() => removeProduct(product)}>
                                        <a className="deletecart">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 427">
                                                <title>Eliminar producto</title>
                                                <path
                                                    d="M272.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,272.4,154.7Z"/>
                                                <path
                                                    d="M154.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,154.4,154.7Z"/>
                                                <path
                                                    d="M68.4,127.121V373.5c0,14.562,5.34,28.238,14.668,38.051A49.243,49.243,0,0,0,118.8,427H308a49.229,49.229,0,0,0,35.73-15.449c9.328-9.813,14.668-23.489,14.668-38.051V127.121A38.2,38.2,0,0,0,348.6,52H297.4V39.5A39.28,39.28,0,0,0,257.8,0H169a39.28,39.28,0,0,0-39.6,39.5V52H78.2a38.2,38.2,0,0,0-9.8,75.121ZM308,407H118.8c-17.1,0-30.4-14.688-30.4-33.5V128h250V373.5C338.4,392.312,325.1,407,308,407ZM149.4,39.5A19.265,19.265,0,0,1,169,20h88.8a19.265,19.265,0,0,1,19.6,19.5V52h-128ZM78.2,72H348.6a18,18,0,0,1,0,36H78.2a18,18,0,1,1,0-36Z"/>
                                                <path
                                                    d="M213.4,154.7a10,10,0,0,0-10,10v189a10,10,0,0,0,20,0v-189A10,10,0,0,0,213.4,154.7Z"/>
                                            </svg>
                                        </a>
                                    </Button>
                                </td>
                             </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <div>
                    <div className="cart-total">
                        <h2 className="row text-primary mb-0">
                            <span className="col">Total:</span>
                            <span className="col text-right">${Intl.NumberFormat("de-DE").format(totalPrice.toFixed(2))}</span>
                        </h2>
                    </div>
                    <div className="mb-3">
                        <Button variant="dark" className={`${(products.length === 0) || (products.lenght > 0 && totalPrice === 0) ? 'btn-disab' : ''}`}
                                type={`${(products.length === 0) || (products.lenght > 0 && totalPrice === 0) ? '' : 'submit'}`}
                                size="lg" block><Spinner style={{display: isLoading ? 'block' : 'none',
                                position: 'absolute'}} animation="border" variant="light"
                                />{isLoading ? 'Obteniendo link...' : 'INICIAR COMPRA'}</Button>
                    </div>
                </div>
            </form>
            :
            <Preference/>}
        </>
    )
}

export default Order;