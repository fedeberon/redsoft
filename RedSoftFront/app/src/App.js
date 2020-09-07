import React from 'react';
import ProductDetail from './components/product/detail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Order from './components/order/order';
import OrderDetail from './components/order/detail'
import store from './store';
import Header from "./components/header/header";
import Preference from "./components/order/preference"
import CarouselComponent from "./components/home/CarouselComponent";
import BannersHomeComponent from "./components/home/BannersHomeComponent";
import CategoriesHomeComponent from "./components/home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./components/home/FeaturedProductsComponent";
import ModalCart from "./components/header/ModalCart";

function App() {
   
  return (
    <Provider store={store}>
        <Router>
            <Header/>
            {/*<OrderDetail />*/}
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/order/" component={OrderDetail}/>
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/details/:id" component={CardDetailComponent}/>
                <Route exact path="/products" component={ProductsList}/>
                <Route exact path="/products/search=:search" component={ProductsList}/>

                {/*<Route exact path="/login" component={LoginComponent}/>*/}
            </Switch>
        </Router>
        <FooterComponent/>
    </Provider>
  );
}

export default App;


