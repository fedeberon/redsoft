import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ordersActions} from "../../store";
import {Button, Table} from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

let api = axios.create({
    baseURL: 'http://localhost:8086/api',
    timeout: 10000,
});

const Order = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.order.items));


    const handleSubmit = async () => {
        let order = {
            details: []
        };

        products.map((product, index) => {
            let detail = {
                product: {
                    code: product.code,
                    description: product.description
                },
                quantity: 1
            }
            order.details.push(detail);
        })

        debugger;
        try {
            const res = await api
                .get('/cart/preference')
                .then(function (res) {
                    //useHistory.push("/order/preference");
                    console.log(res.data.json);
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
        <>
            <form onSubmit={() => handleSubmit()}>
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
        </>
    )

}

export default Order;