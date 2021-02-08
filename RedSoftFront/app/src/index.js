import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Auth0Provider 
        domain="dev-jvz7xn8q.us.auth0.com" // credenciales from DI
        clientId="obyw5eEvi7x4QL8IpNxpG7WkRLdUphzT"
        // domain="dev-e481s0hc.us.auth0.com"
        // clientId="B51EPQJ50HDq7CsqJFEoA1B8169bF5gf"
        audience="http://localhost:8886/api"
        scope={'read:products'}
        redirectUri={window.location.origin}
    >
        <Provider store={store}>
            <App/>
        </Provider>    
    </Auth0Provider>,
    document.getElementById('root')
);