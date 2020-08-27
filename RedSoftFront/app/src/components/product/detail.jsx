import React from 'react';
import {ordersActions} from '../../store';
import {useDispatch} from 'react-redux';
import {Button, Card} from 'react-bootstrap'

const Detail = (props) => {

    const dispatch = useDispatch();

    const addToOrder = (product) => {
        dispatch(ordersActions.addOrder(product));
    }

    const product = props.product;

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.code}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="link" onClick={() => props.handleDetail()}>Volver</Button>
                    <Button variant="success" onClick={() => addToOrder(product)}>Agregar al Carrito</Button>
                </Card.Body>
            </Card>


    )
}

export default Detail;