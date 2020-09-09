import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import {
    Button
} from "reactstrap";

const LoginButton = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return !isAuthenticated && (
        <Button
            id="customerLoginBtn"
            color="primary"
            onClick={() => loginWithRedirect()}
        >
            ACCESO A CLIENTES
        </Button>
    );
}

export default LoginButton;
