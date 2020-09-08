import React, {Component} from 'react';
import api from '../../axios'
import Spinner from 'react-bootstrap/Spinner'
import { useAuth0 } from '@auth0/auth0-react';

class Products extends Component {

    state = {
        isLoading: false,
        products: [],
        details: false,
        selected: null,
    }

    componentDidMount() {
        this.findAll()
    }

    handleDetail = (index = null) => {
        this.setState({details: !this.state.details, selected: index != null ? this.state.products[index] : null})
    }

    render() {

        return (

            this.state.isLoading && <Spinner animation="border"/>,

            this.state.products.map((product, index) =>


                <div className="col-6 col-sm-4">
                    <div className="item animate" key={index}>
                        <a href="detalle.php">
                            <figure><img src="img/producto-01.jpg" className="foto"/></figure>
                            <div className="info">
                                <div className="key">#{index}</div>
                                <div className="productName"><h5>{product.description}</h5></div>
                                <div className="codigo">{product.code}</div>
                            </div>
                        </a>
                    </div>
                </div>
            )
        )
    }

    getToken() {
        (async () => {
            const {getAccessTokenSilently} = useAuth0();
            try {
                const token = await getAccessTokenSilently({
                    audience: 'http://localhost:8887/api',
                    scope: 'read:products',
                });
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Token: " + token);
            } catch (e) {
                console.error(e);
            }
        })();
    }

    findAll = async () => {

        this.setState({products: [], isLoading: true});
        try {
            const token = await this.getToken()
            let data = await fetch('http://localhost:8887/api/product/list', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({products: data, isLoading: false})
        } catch (e) {
            console.error(e);
            // this.setState({products: [], isLoading: false})
        }

        // let data = await api.get('/api/product/list').then(({data}) => data);

    }
}

export default Products;


 