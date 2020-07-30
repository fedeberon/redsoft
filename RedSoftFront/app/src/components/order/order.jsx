import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ordersActions} from "../../store";
import {Button, Table} from 'react-bootstrap';
import api from '../../axios'

const Order = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.order.items));


    const handleSubmit = async () => {
        debugger;
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

        let data = await api.post('http://localhost:8084/cart/preference', order);
        console.log(data);
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
                <Button variant="success" type={"submit"}>Pagar</Button>
            </form>
        </>
    )

}

export default Order;