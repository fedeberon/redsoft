import React, {Component} from 'react';
import api from '../../axios'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import {Button, Badge, Card} from 'react-bootstrap'
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
                    {this.state.isLoading && <Spinner animation="border"/>}

                    {this.state.products.map((product, index) => {
                        return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{product.code}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button  variant="primary" onClick={() => {this.handleDetail(index)}}> Ver Detalle</Button>
                                    </Card.Body>
                                </Card>
                        );
                    })}
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


 