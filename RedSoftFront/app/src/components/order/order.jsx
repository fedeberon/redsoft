import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ordersActions, preferenceActions} from "../../store";
import {Button, Table} from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Preference from "./preference";

let api = axios.create({
    baseURL: 'http://localhost:8886/api',
    timeout: 10000,
});

const Order = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.order.items));

    const [preferenceIsReady, setPreferenceIsReady] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        let details = [];

        products.map((product, index) => {
            let detail = {
                product: {
                    code: product.code,
                    name: product.description,
                    price: 200
                },
                quantity: 1
            }
            details.push(detail);
        })

        debugger;
        try {
            const res = await api
                .post('/cart/preference', details)
                .then(function (res) {
                    console.log(res.data);
                    dispatch(preferenceActions.set(res.data));
                    setPreferenceIsReady(true)
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
        catch (error){
            console.log(error);
        }
    }

    const removeProduct = (product) => {
        dispatch(ordersActions.remove(product));
    }

    return (
        <>  {!preferenceIsReady ?
            <form onSubmit={handleSubmit}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.code}</td>
                                    <td>{product.description}</td>
                                    <td><Button variant="warning" onClick={() => removeProduct(product)}>Quitar</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Button variant="success" type="submit">Pagar</Button>
            </form>
            :
            <Preference /> }
        </>
    )

}

export default Order;