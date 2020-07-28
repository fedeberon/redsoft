import React, { Component } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import {BrowserRouter as Router, Route, Switch, Link, useParams} from 'react-router-dom'
import { ordersActions } from './../store';
import { useDispatch } from 'react-redux';

const api = axios.create({
  baseURL: 'http://localhost:8887/product/'
})

const Detail = (props) => {

    const dispatch = useDispatch();

    const addToOrder = (product) => {
        dispatch(ordersActions.addOrder(product));
    }

    const product = props.product;   
        return ( 
                <div>
                    <label>Product</label>
                    <h1>{product.code}</h1>
                    <h3>{product.description}</h3>
                    <button onClick={() => props.handleDetail()}>Volver</button>
                    <button onClick={() => addToOrder(product)}>Add to Car</button>
                </div>
            )
}

export default Detail;