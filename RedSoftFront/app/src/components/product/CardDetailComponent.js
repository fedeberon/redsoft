import React, {Component, useState} from 'react';
import 'bootstrap';
import ReactImageZoom from 'react-image-zoom';
import ProductDetail from "./detail";
import api from "../../axios";
import {Link} from "react-router-dom";
import ModalFileUploader from "./ModalFileUploader";
import {Button} from "react-bootstrap";

class CardDetailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            currentPage: 1,
            btnExpand: false,
        }
    }

    handleClick = () => {
        this.setState({btnExpand: !this.state.btnExpand})
        console.log(this.state.btnExpand)
    }

    componentDidMount() {
        this.findAll()
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/api/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    render() {

        let product = this.state.products.find((e) => e.code === this.props.match.params.id)
        let code = this.props.match.params.id
        const {product_description, show_desc} = this.state

        return (

            <div>
                    <div className="categoria">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <Link className="breadcrumb-item linklr" to={"/"}>Home</Link>
                                    <Link className="breadcrumb-item linklr" to={"/products"}>Productos</Link>
                                    <li className="breadcrumb-item active" aria-current="page">Detalles</li>
                                    <div>
                                        <ModalFileUploader/>
                                    </div>
                                </ol>
                            </nav>
                            <div className="row">

                                {/*// <!-- galeria -->*/}
                                <div className="col-sm-6">
                                    <div id="carouselProduct" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="label">20%</div>
                                            <img className="zoom-icon" src="/img/zoom-in.svg"/>
                                            <div className="carousel-item active">
                                            <span className="zoom" id="ex1"><ReactImageZoom width={538} height={508}
                                                                                            zoomWidth={600}
                                                                                            img={`http://164.68.101.162:8093/img/${code}.jpg`}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                            </div>
                                            <div className="carousel-item">
                                            <span className="zoom" id="ex2"><ReactImageZoom width={538} height={508}
                                                                                            zoomWidth={600}
                                                                                            img={`http://164.68.101.162:8093/img/${code}1.jpg`}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                            </div>
                                            <div className="carousel-item">
                                            <span className="zoom" id="ex3"><ReactImageZoom width={538} height={508}
                                                                                            zoomWidth={600}
                                                                                            img={`http://164.68.101.162:8093/img/${code}2.jpg`}
                                                                                            zoomPosition={"original"}
                                                                                            className="d-block w-100"/>
                                            </span>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselProduct" role="button"
                                           data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"><img
                                        src="/img/arrow-car-left.svg"/></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselProduct" role="button"
                                           data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"><img
                                        src="/img/arrow-car-right.svg"/></span>
                                            <span className="sr-only">Next</span>
                                        </a>

                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselProduct" data-slide-to="0" className="active"><img
                                                src={`http://164.68.101.162:8093/img/${code}.jpg`}
                                                className="d-block w-100"/>
                                            </li>
                                            <li data-target="#carouselProduct" data-slide-to="1"><img
                                                src={`http://164.68.101.162:8093/img/${code}1.jpg`}
                                                className="d-block w-100"/>
                                            </li>
                                            <li data-target="#carouselProduct" data-slide-to="2"><img
                                                src={`http://164.68.101.162:8093/img/${code}2.jpg`}
                                                className="d-block w-100"/>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/*// <!-- info -->*/}
                                <div className="col infoProduct" style={{paddingLeft: '40px'}}>
                                    <ProductDetail product={product} awaitDetail={this.state.isLoading}/>
                                    <div id="accordion" className="accordionProduct">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button onClick={this.handleClick} className="btn btn-link expand"
                                                            data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                        MEDIOS DE PAGO <span>+</span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne"
                                                 className={`collapse ${this.state.btnExpand ? 'show' : ''}`}
                                                 aria-labelledby="headingOne"
                                                 data-parent="#accordion">
                                                <div className="card-body">
                                                    Informacion medios de pago.
                                                    <div className="row">
                                                        <img style={{height: '70px'}}
                                                             src="https://www.mercadopago.com/org-img/Manual/ManualMP/imgs/isologoVertical.png"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed expand"
                                                            data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                        MEDIOS DE ENVIO <span>+</span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                 data-parent="#accordion">
                                                <div className="card-body">
                                                    Informacion medios de ENVIO.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*// <!-- description -->*/}
                            <div className="row">
                                <div className="col">
                                    <div className="description">
                                        <div className="row">
                                            <h4 className="tit">Descripción del producto
                                                <Button onClick={() => this.setState({show_desc: true}) } variant="light" style={{
                                                    paddingRight: '6px',
                                                    paddingLeft: '6px',
                                                    paddingTop: 0,
                                                    backgroundColor: 'rgba(247,247,247,1)'
                                                }}>
                                                    <img style={{height: '20px'}} title="Editar"
                                                         src="https://image.flaticon.com/icons/png/512/126/126794.png"
                                                         alt="edit icon"/>
                                                </Button>
                                            </h4>
                                        </div>
                                        <div className="form-group" style={{display: show_desc ? 'block' : 'none'}}>
                                            <textarea className="form-control" id="mensaje"
                                                      rows="6" value={product_description}
                                                      name="product_description" onChange={this.handleChange}
                                            onKeyPress={(e) => e.key === 'Enter' ? this.setState({show_desc: false}) : ''}/>
                                        </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                        <strong>CARACTERÍSTICAS
                                            <Button variant="light" style={{
                                                paddingRight: '6px',
                                                paddingLeft: '6px',
                                                paddingTop: 0,
                                                backgroundColor: 'rgba(247,247,247,0.3)'
                                            }}>
                                                <img style={{height: '20px'}} title="Editar"
                                                     src="https://image.flaticon.com/icons/png/512/126/126794.png"
                                                     alt="edit icon"/>
                                            </Button>
                                        </strong>

                                        <ul>
                                            - Gaming mouse óptico de alta calidad
                                            <li>- Cableado con conexión USB</li>
                                            <li>- 6 Botones</li>
                                            <li>- Retroiluminado</li>
                                            <li>- Rueda scroll con textura antideslizante</li>
                                            <li>- Diseño ergonómico</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CardDetailComponent;