import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="dev-jvz7xn8q.us.auth0.com"
        clientId="obyw5eEvi7x4QL8IpNxpG7WkRLdUphzT"
        redirectUri={window.location.origin}
    >
    <App />,
    </Auth0Provider>,
    document.getElementById('root')
);