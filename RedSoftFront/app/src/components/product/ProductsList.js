import React from 'react';
import PaginationComponent from "./PaginationComponent";
import Header from "../header/Header";
import FooterComponent from "../home/FooterComponent";
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
            <>
            <Header/>
            <div className="categoria">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <Link className="breadcrumb-item" to={"/"}>Home</Link>
                            <Link className="breadcrumb-item active" to={"/products"} aria-current="page">Productos</Link>
                        </ol>
                    </nav>
                    <h1 className="titcategory">Productos</h1>
                    <div className="row">
                        <div className="col-sm-3 sidebar display">
                            <h5>Categorias</h5>
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
                            <div className="row"  style={{justifyContent: 'center'}}>
                                <PaginationComponent search={this.props.match.params.search}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
            </>
        );
    }
}

export default ProductsList;