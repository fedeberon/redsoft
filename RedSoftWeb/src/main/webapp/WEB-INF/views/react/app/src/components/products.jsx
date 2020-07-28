import React from "react";
import {connect} from 'react-redux'
import { Table } from "react-bootstrap";


const Products = _ => {


    return (
        <Table responsive>
        <thead>
            <tr>
            <th>Code</th>
            <th>description</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {products.map( (product, index) => {
                return (

                    <tr key={index}>
                    <td>{product.code}</td>
                    <td>{product.description}</td>
                    <td>
                        <button onClick={() => this.addToOrder(product)}>Add to Order</button>
                    </td>
                    <td>
                        <button onClick={() => {this.handleDetail(index)}}> Ver Detalle </button>
                    </td>
                    </tr>              
                );
            })}
        </tbody>
        </Table>
    )


}

export default Products;