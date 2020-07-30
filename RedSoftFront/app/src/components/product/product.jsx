import React, {Component} from 'react';
import api from '../../axios'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import {Button, Badge} from 'react-bootstrap'
import Detail from './detail'

class Products extends Component {

    state = {
        isLoading: false,
        products: [],
        details: false,
        selected: null

    }

    componentDidMount() {
        this.findAll()
    }

    handleDetail = (index = null) => {
        this.setState({details: !this.state.details, selected: index != null ? this.state.products[index] : null})
    }

    render() {
        return <div> {!this.state.details ?
            <>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>description</th>
                        <th>
                            <Badge variant="info">Se encontraron {this.state.products.length} productos</Badge>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.isLoading && <tr><td colSpan={3}><Spinner animation="border"/></td></tr>}

                    {this.state.products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.code}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Button  variant="primary" onClick={() => {this.handleDetail(index)}}> Ver Detalle</Button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </>
            :
            <Detail product={this.state.selected} handleDetail={this.handleDetail}/>}

        </div>;
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }
}

export default Products;


 