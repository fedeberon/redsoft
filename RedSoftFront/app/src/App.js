import React from 'react';
import ProductDetail from './components/product/detail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Order from './components/order/order';
import Products from './components/product/product'
import OrderDetail from './components/order/detail'
import store from './store';
import Header from "./components/header/header";
import Preference from "./components/order/preference"
import MenuComponent from "./components/header/MenuComponent";
import CarouselComponent from "./components/home/CarouselComponent";
import BannersHomeComponent from "./components/home/BannersHomeComponent";
import CategoriesHomeComponent from "./components/home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./components/home/FeaturedProductsComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ModalCart from "./components/header/ModalCart";

function App() {
   
  return (
    <Provider store={store}>
        <Router>
            {/*<Header />*/}
            <MenuComponent/>
            <CarouselComponent/>
            <BannersHomeComponent/>
            <CategoriesHomeComponent/>
            <FeaturedProductsComponent/>
            <ModalCart/>
            <FooterComponent/>
            {/*<OrderDetail />*/}
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/product/" component={Products} />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/order/" component={OrderDetail} />
                <Route exact path="/order/details" component={Order}/>
                <Route exact path="/order/preference" component={Preference}/>
          </Switch>
        </Router>
    </Provider>
              
  );
}

export default App;


