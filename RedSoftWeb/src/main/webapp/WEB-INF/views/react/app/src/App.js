import React from 'react';
import './App.css';
import Detail from './components/product/detail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Order from './components/order/order';
import Products from './components/product/product'
import store from './store';

function App() {
   
  return (
    <Provider store={store}>
        <Order />
        <Router>
          <Switch>
            <Route exact path="/product/" component={Products} />
            <Route exact path="/product/:id" component={Detail} />
          </Switch>
        </Router> 
    </Provider>
              
  );
}

export default App;


