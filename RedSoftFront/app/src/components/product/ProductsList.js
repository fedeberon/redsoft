import React from 'react';
import Products from "./product";

class ProductsList extends React.Component {

    render() {

        return (

            <div className="categoria">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Computadoras</li>
                        </ol>
                    </nav>
                    <h1 className="titcategory">Computadoras</h1>
                    <div className="row">
                        <div className="col-sm-3 sidebar display">
                            <h5>Categorias</h5>
                            <div className="list-group list-group-flush">
                                <button type="button" className="list-group-item list-group-item-action active">Cras
                                    justo odio
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Dapibus ac
                                    facilisis in
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Morbi leo
                                    risus
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Porta ac
                                    consectetur ac
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">Vestibulum at
                                    eros
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <Products/>
                            </div>
                            <nav aria-label="">
                                <ul className="pagination pagination-lg">
                                    <li className="page-item active" aria-current="page">
                          <span className="page-link">
                              1
                    <span className="sr-only">(current)</span>
                          </span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsList;