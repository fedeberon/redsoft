import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const App = () => {

  const authenticated = useSelector(state => state.loginispcube.authenticated);

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


