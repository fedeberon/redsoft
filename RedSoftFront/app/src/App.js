import React from 'react';
import ProductDetail from './components/product/detail';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import Order from './components/order/order';
import Products from './components/product/product'
import OrderDetail from './components/order/detail'
import store from './store';
import Header from "./components/header/Header";
import Preference from "./components/order/preference"
import FooterComponent from "./components/home/FooterComponent";
import Contact from "./components/navbar/Contact";
import Switch from "react-bootstrap/Switch";
import Route from "react-router-dom/es/Route";
import HomeContainer from "./components/HomeContainer";
import AboutUs from "./components/navbar/AboutUs";
import Services from "./components/navbar/Services";
import CardDetailComponent from "./components/product/CardDetailComponent";
import ProductsList from "./components/product/ProductsList";


function App() {
   
  return (
    <Provider store={store}>
        <div className="modal-open" style={{overflow: "hidden"}}>
        <Header/>
        <Router>
            {/*<OrderDetail />*/}
            <Switch>
                {/*<Route exact path="/" component={ProductsList} />*/}
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/product/" component={Products} />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/order/" component={OrderDetail} />
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/details" component={CardDetailComponent}/>
                <Route exact path="/products" component={ProductsList}/>
            </Switch>
        </Router>
        <FooterComponent/>
        </div>
    </Provider>
              
  );
}

export default App;


