import React, {useState} from 'react';
import PaginationComponent from "./PaginationComponent";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom";

class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            itemActive: "",
            stepper: ""

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        this.setState({stepper: (e.target.innerHTML.toLowerCase())})
    }


    render() {


        return (

            <div className="categoria">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <Link className="breadcrumb-item" to={"/"}>Home</Link>
                            <Link className="breadcrumb-item active" to={"/products"} aria-current="page">Productos</Link>
                        </ol>
                    </nav>
                    <h1 className="titcategory">Productos</h1>
                    <div className="row" style={{width: '1110px', marginRight: 0, marginLeft: 0}}>
                        <div className="col-sm-3 sidebar display" style={{top: '6px'}}>
                            <h4>Categorias</h4>
                            <div className="list-group list-group-flush">

                                <button type="button" onClick={this.handleClick}
                                        className={"list-group-item list-group-item-action " + (this.state.stepper === 'notebooks' ? 'active' : '')}

                                >Notebooks</button>
                                <button type="button" onClick={this.handleClick}
                                        className={"list-group-item list-group-item-action "+ (this.state.stepper === 'accesorios' ? 'active' : '')}
                                >Accesorios
                                </button>
                                <button type="button" onClick={this.handleClick}
                                        className={"list-group-item list-group-item-action "+ (this.state.stepper === 'perifericos' ? 'active' : '')}
                                >Perifericos
                                </button>
                                <button type="button" onClick={this.handleClick}
                                        className={"list-group-item list-group-item-action "+ (this.state.stepper === 'monitores' ? 'active' : '')}
                                >Monitores
                                </button>
                                <button type="button" onClick={this.handleClick}
                                        className={"list-group-item list-group-item-action "+ (this.state.stepper === 'gaming' ? 'active' : '')}
                                >Gaming
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <PaginationComponent search={this.props.match.params.search}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsList;