import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Wrapper = ({ children }) => {
    const {
        error,
    } = useAuth0();
    // console.log("**************** Wrapper component *****************");
    // console.log(useAuth0());

    if (error) {
        return <li>Oops... {error.message}</li>;
    }
    return <>{children}</>;
}
export default Wrapper;
