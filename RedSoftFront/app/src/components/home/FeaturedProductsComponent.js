import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from "../../axios";
import Spinner from "react-bootstrap/Spinner";

const FeaturedProductsComponent = () => {

    const [outstanding, setOutStanding] = useState ([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cotizacionDolar, setCotizacionDolar] = useState(0);

    const getProducts = async () => {
        let data = await api.get('/api/product/list').then(({data}) => data);
        setProducts(data);
        getUsdValue();
    }

    const getUsdValue = async () => {

        await fetch('https://www.dolarsi.com/api/api.php?type=cotizador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'},
        }).then(res => res.json())
        .then(data => {
            let number = Math.round(Number((data[0].casa?.venta).replace(',', '.')));
            setCotizacionDolar(number)
            sessionStorage.setItem('dolarToday', number.toFixed(2));
        })
    }

    useEffect(()=> {
        getProducts();
    },[]);

    useEffect(() => {
            gettingProducts();
    },[products.length > 0])

    const gettingProducts = () => {

        if(products.length>0){
            do {
                let getindex = parseInt(Math.floor(Math.random()*(2-products.length)+products.length));
                outstanding.push(products[getindex])
            } while (outstanding.length < 4)
            if(outstanding.length === 4){
                setLoading(false)
            }
        } 
    }

    return (
        
        <div className="destacadoshome">
            <div className="container">
                <h4 className="tithome">Productos destacados</h4>
                <div className="row">
            
                    <Spinner animation="border" variant="info" size='sm'
                        style={{display: `${loading ? 'flex' : 'none'} `,
                            marginBottom: '15px'}}/>

                    {outstanding.length > 0 && outstanding.map((product,index) => (
                    
                    <div key={index} className="col-sm-3">
                        <div className="item animate destacados">
                            {/* <div title="En oferta!" className="label-featured">20%</div> */}
                                <a href={`/details/${product.code}`}>
                                    <figure className="destacados-figure">
                                        <img src={product.webLink} alt="" className="foto"/></figure>
                                    <div className="info">
                                        <div style={{fontSize: '14px'}} className="name">{product.description}</div>
                                        <div className="price">${(product.precioUniVta * cotizacionDolar).toFixed(2)}</div>
                                    </div>
                                </a>
                        </div>
                    </div>
                ))}
                    <div className="text-center">
                        <Link to={"/products"} className="btn btn-lg btn-light btn-all" role="button" name="productos">
                            VER TODO</Link>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default FeaturedProductsComponent;