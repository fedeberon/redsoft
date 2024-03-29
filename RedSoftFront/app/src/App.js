import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useSelector, shallowEqual} from "react-redux";
import Order from './components/order/order';
import Preference from "./components/order/preference";
import Contact from "./components/navbar/Contact";
import Switch from "react-bootstrap/Switch";
import {Route} from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import AboutUs from "./components/navbar/AboutUs";
import Services from "./components/navbar/Services";
import CardDetailComponent from "./components/product/CardDetailComponent";
import ProductsList from "./components/product/ProductsList";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/clientes/Login";
import Home from "./components/clientes/Home";
import PrivateRoute from "./components/PrivateRoute";
import MercadoPagoResponse from "./components/MercadoPagoResponse";
import {useDispatch} from 'react-redux';
import {ordersActions} from "./store/order";
import { useAuth0 } from "@auth0/auth0-react";
import FileUploader from './components/product/FileUploader';

const App = () => {
  const {user, isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.loginispcube.authenticated);
  let products = useSelector(state => Object.values(state.order.items), shallowEqual);

  useEffect(()=> {
    if(!(products.length === 0)){
      localStorage.setItem('cartlared', JSON.stringify(products));
    } else {
      if(localStorage.cartlared){
        localStorage.setItem('cartlared', localStorage.cartlared);
        let cartRecovery = JSON.parse(localStorage.cartlared);
        cartRecovery.map(data => {
          let product = {
            cantiStock: null,
            code: data.code,
            description: data.description,
            precioUni: data.precioUni,
            precioUniVta: data.precioUniVta,
            quantity: data.quantity,
            webLink: data.webLink,
          }
          dispatch(ordersActions.addOrder(product));
        })
      }
    }
  },[products])

  return (
    <>      
      <Router>
          <ScrollToTop/>
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
            <Route 
            exact path="/fileupload" 
            component={isAuthenticated && 
              (user.email === "agustin.sosa.n2015@gmail.com" || 
              user.email === "laredwificomputacion@gmail.com" ||
              user.email === "pablo.psir@gmail.com") 
              ? FileUploader : HomeContainer}
            />
            <Route exact path="/mercadopago/operation/:id" component={MercadoPagoResponse}/>
            <Route exact path="/login" component={Login}/>                          
            <PrivateRoute 
            exact path="/clientes/:section"                
            isAuthenticated={authenticated}
            component={Home}
            />
            <PrivateRoute
            exact path="/logout"
            isAuthenticated={authenticated}
            component={Login}
            />
          </Switch>            
      </Router>       
    </>
  );
}

export default App;


