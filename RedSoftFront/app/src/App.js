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
import CarouselComponent from "./components/home/CarouselComponent";
import BannersHomeComponent from "./components/home/BannersHomeComponent";
import CategoriesHomeComponent from "./components/home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./components/home/FeaturedProductsComponent";
import FooterComponent from "./components/home/FooterComponent";
import Contacto from "./components/contacto/Contacto";
import Switch from "react-bootstrap/Switch";
import Route from "react-router-dom/es/Route";




function App() {
   
  return (
    <Provider store={store}>
        <Router>
            <Header/>
            <CarouselComponent/>
            <BannersHomeComponent/>
            <CategoriesHomeComponent/>
            <FeaturedProductsComponent/>
            <FooterComponent/>
            {/*<Contacto/>*/}
            {/*<OrderDetail />*/}
            <Switch>
                {/*<Redirect from="/index" to="/home"/>*/}
                <Route exact path="/" component={Products} />
                <Route exact path="/product/" component={Products} />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/order/" component={OrderDetail} />
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
                <Route exact path="/contacto" component={Contacto}/>
            </Switch>
        </Router>
    </Provider>
              
  );
}

export default App;


