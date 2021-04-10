import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Auth0Provider 
        //domain="dev-jvz7xn8q.us.auth0.com" // credenciales from DI to localhost
        //clientId="obyw5eEvi7x4QL8IpNxpG7WkRLdUphzT" // credenciales from DI to localhost
        //domain="dev-e481s0hc.us.auth0.com"  // credenciales from PI to https://laredintercomp.com.ar
        //clientId="IDneTf1XRf6Ibs6d8JIiUplkxpqHS6Au" // credenciales from PI to https://laredintercomp.com.ar
        domain="dev--66svdhv.us.auth0.com"
        clientId="tpgW9uDtzNcwod6mvSWh490zzyHfF4lE"
        //audience="https://laredintercomp.com.ar:8886/api"
        scope={'read:products'}
        redirectUri={window.location.origin}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
);