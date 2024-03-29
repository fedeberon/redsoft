import React, {Fragment} from 'react';
import api from "../../axios";
import Button from "react-bootstrap/Button";
import CardDetailComponent from "./CardDetailComponent";
import {Link} from "react-router-dom";
import {Auth0Context} from '@auth0/auth0-react';
import ImageProduct from "./ImageProduct";
import { Spinner } from 'react-bootstrap';

class PaginationComponent extends React.Component {

    static contextType = Auth0Context;

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentPage: 1,
            todosPerPage: 21,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            details: false,
            selected: null,
            textSearch: '',
            productsBackup: [],
            cotizacionDolar: 0,
            dataUsdValue: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);

        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }

    async componentDidMount() {
        await this.getUsdValue()
    }

    async getUsdValue() {
        await fetch('https://www.dolarsi.com/api/api.php?type=cotizador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'},
        }).then(res => res.json())
        .then(data => {
                this.setState({dataUsdValue: data});
                this.state.dataUsdValue.map(elem => {
                    if(elem.casa?.agencia === "302"){
                        this.setState({cotizacionDolar: Math.round(elem.casa?.venta.replace(',', '.'))});
                        sessionStorage.setItem('dolarToday', Number(this.state.cotizacionDolar).toFixed(2));
                    }
                })                
                this.findAll();
        })
    }

    async findAll() {
        let newData = [];

        this.setState({products: [], productsBackup: [], isLoading: true})
        let data = await api.get('/api/product/list').then(({data}) => data);
        this.setState({products: data, productsBackup: data, isLoading: false})
        let newSearch;
        if (this.props.search && this.props.search !== ""){
            const regex = / [yYoO] /g;
            newSearch = this.props.search.replace(regex, ' ');  
        } 
        if(newSearch){
            const text = newSearch.split(' ');

            text.map(elem => {
                    if(elem.endsWith('es') && elem !== 'mouses' && elem !== 'cables'){
                        let newElem = elem.slice(0, -2);
                        data.filter(function (item) {
                            const itemData = item.description.toUpperCase();
                            if(itemData.includes(newElem.toUpperCase())){
                                return newData.push(item);
                            }
                        })
                    }else if(elem.endsWith('s')){
                        let newElem = elem.slice(0, -1);
                        data.filter(function (item) {
                            const itemData = item.description.toUpperCase();
                            if(itemData.includes(newElem.toUpperCase())){
                                return newData.push(item);
                            }
                        })
                    } else {
                        data.filter(function (item) {
                            const itemData = item.description.toUpperCase()
                            if(itemData.includes(elem.toUpperCase())){
                                return newData.push(item);
                            }
                        })
                    }                
            })
            this.setState({
                products: newData,
                textSearch: text,
            })
        }
    }

    handleClick(event) {
        let listid = Number(event.target.id);
        this.setState({
            currentPage: listid
        });

        this.setPrevAndNextBtnClass(listid);
    }

    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.products.length / this.state.todosPerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if (totalPage === listid && totalPage > 1) {
            this.setState({isPrevBtnActive: ''});
        } else if (listid === 1 && totalPage > 1) {
            this.setState({isNextBtnActive: ''});
        } else if (totalPage > 1) {
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }

    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }

    btnDecrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }

    btnPrevClick() {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listid = this.state.currentPage - 1;
        this.setState({currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }

    btnNextClick() {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1;
        this.setState({currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }

    handleDetail = (productCode = null) => {

        let product = this.state.products.find((e) => e.code === productCode)

        this.setState({
            details: true,
            selected: productCode != null ? product : null
        })

    }

    render() {
        let {
            products, currentPage, todosPerPage, upperPageBound, lowerPageBound,
            isPrevBtnActive, isNextBtnActive, dataUsdValue, cotizacionDolar,
        } = this.state;

        // Logica para mostrar todos los productos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((product, index) => {

            return <div key={index} className="col-6 col-sm-4"> {!this.state.details ?
                <div className="item animate" style={{height: '378px'}}>
                    <Link to={`/details/${product.code}`}>
                        <figure style={{height: '210px', textAlign: 'center'}}><ImageProduct
                            products={product}
                            setHeight={210}
                            setWidth={210}
                        /></figure>
                        <div className="info">
                            <div className="name"><h5>{product.description}</h5></div>
                            <div className="price">
                                $ {Intl.NumberFormat("de-DE").format(((parseFloat(product.precioUniVta).toFixed(2) * Number(cotizacionDolar)).toFixed(2)))}</div>
                            <button className="btn btn-sm" onClick={() => {
                                this.handleDetail(product.code)
                            }}>Ver Detalle
                            </button>
                        </div>
                    </Link>
                </div>
                :
                <CardDetailComponent product={this.state.selected} handleDetail={this.handleDetail}/>}
            </div>
        });


        // Logica para mostrar los numeros de paginas
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <Button key={number} className="btn-info-active" variant="info">
                        <li key={number} className='page-item active'
                            id={number}><a id={number}
                                           onClick={this.handleClick}>{number}</a></li>
                    </Button>
                )
            } else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <Button key={number} className={number === currentPage ? 'btn-info-active' : ""} variant={number === currentPage ? 'info' : "light"}>
                        <li className={number === currentPage ? 'page-item active' : ""}
                            key={number} id={number}><a id={number}
                                                        onClick={this.handleClick}>{number}</a>
                        </li>
                    </Button>
                )
            }
        });
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
            pageIncrementBtn = <Button variant="light">
                <li className=''><a onClick={this.btnIncrementClick}> &hellip; </a></li>
            </Button>
        }
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
            pageDecrementBtn = <Button variant="light">
                <li className=''><a onClick={this.btnDecrementClick}> &hellip; </a></li>
            </Button>
        }
        let renderPrevBtn = null;
        if (isPrevBtnActive === 'disabled') {
            renderPrevBtn = <Button variant="light">
                <li className={isPrevBtnActive}><span id="btnPrev"> Anterior </span></li>
            </Button>
        } else {
            renderPrevBtn = <Button variant="info">
                <li className={isPrevBtnActive}><a id="btnPrev" onClick={this.btnPrevClick}> Anterior </a></li>
            </Button>
        }
        let renderNextBtn = null;
        if (isNextBtnActive === 'disabled') {
            renderNextBtn = <Button variant="light">
                <li className={isNextBtnActive}><span id="btnNext"> Siguiente </span></li>
            </Button>
        } else {
            renderNextBtn = <Button variant="info">
                <li className={isNextBtnActive}><a id="btnNext" onClick={this.btnNextClick}> Siguiente </a></li>
            </Button>
        }
        return (
            <Fragment>
                {/* <div className="row-filter"> */}
                    {/* <input className="form-control col-sm-4 pl-0" type="text" style={{
                        display:`${this.state.isLoading ? 'none' : 'block'}`,
                        marginBottom: '10px', backgroundColor: 'ghostwhite', border: '1px solid #ced4da',
                        fontFamily: 'unset', fontSize: 'medium', paddingTop: '0px', paddingBottom: '0px',
                        height: '32px', width: '262px'
                    }}
                           placeholder="Filtrar por nombre..." aria-label="Search"
                           value={this.state.text}
                           // defaultValue={this.props.search}
                           onChange={(text) => this.filter(text)}/> */}
                {/* </div> */}
                
                <div style={{justifyContent: 'center', width: '100%',
                    display:`${this.state.isLoading ? 'flex' : 'none'}`}}>
                    <Spinner animation="border"/>
                </div>                    
                <div style={{display: 'contents'}}>
                    {renderTodos}
                </div>                
                <div className="pagination-desktop row">
                    <ul className="pagination" style={{display:`${this.state.isLoading ? 'none' : 'block'}`}}>
                        {renderPrevBtn}
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        {renderNextBtn}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default PaginationComponent;