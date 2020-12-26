import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import Order from './components/order/order';
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
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/clientes/Login";
import Home from "./components/clientes/Home";

function App() {
   
  return (
    <>
    <Provider store={store}>
        <Router>
            <ScrollToTop/>
            {/* <Header/> */}
            <Switch style={{paddingLeft: 0}}>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/details/:id" component={CardDetailComponent}/>
                <Route exact path="/products" component={ProductsList}/>
                <Route exact path="/products/search=:search" component={ProductsList}/>  
                <Route exact path="/clientes/login" component={Login}/>  
                <Route exact path="/clientes/:section" component={Home}/>
                {/*<Route exact path="/products/categories/:name" component={ProductsList}/>*/}
            </Switch>            
        </Router>
        {/* <FooterComponent/>         */}
    </Provider>     
          
    </>
  );
}

export default App;


