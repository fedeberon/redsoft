import React from 'react';
import api from "../../axios";
import Button from "react-bootstrap/Button";
import CardDetailComponent from "./CardDetailComponent";

class PaginationComponent extends React.Component {
    constructor() {
        super();
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
        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);

        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }

    componentDidMount() {
        this.findAll()
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

    handleDetail = (index = null) => {
        this.setState({details: true, selected: index != null ? this.state.products[index] : null})
    }

    render() {
        let {
            products, currentPage, todosPerPage, upperPageBound, lowerPageBound,
            isPrevBtnActive, isNextBtnActive, selected, details
        } = this.state;


        // Logica para mostrar todos los productos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((product, index) => {

            return <div className="col-6 col-sm-4"> {!this.state.details ?
                <div className="item animate">
                    <a href={`/details/${(currentPage-1)*21 + index}`}>
                        <figure><img src="img/producto-03.jpg" className="foto"/></figure>
                        <div className="info">
                            <div className="key">#{(currentPage-1)*21 + index + 1}</div>
                            <div className="productName"><h5>{product.description}</h5></div>
                            <div className="codigo">{product.code}</div>
                            <div className="price">${product.precioUni}</div>
                            <button className="btn btn-sm" onClick={() => {
                                this.handleDetail(index)
                            }}> Ver Detalle
                            </button>
                        </div>
                    </a>
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
                    <Button variant="info">
                        <li key={number} className='active' id={number}><a id={number}
                                                                           onClick={this.handleClick}>{number}</a></li>
                    </Button>
                )
            } else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <Button variant={number == currentPage ? 'info' : "light"}>
                        <li className={number == currentPage ? 'active' : ""} key={number} id={number}><a id={number} onClick={this.handleClick}>{number}</a></li>
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
            <div>
                <div className="row">
                    {renderTodos}
                </div>
                <div className="row" style={{paddingLeft: '248px'}}>
                    <ul className="pagination">
                        {renderPrevBtn}
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        {renderNextBtn}
                    </ul>
                </div>
            </div>
        );
    }

    findAll = async () => {
        this.setState({products: [], isLoading: true})
        let data = await api.get('/product/list').then(({data}) => data);
        this.setState({products: data, isLoading: false})
    }
}

export default PaginationComponent;