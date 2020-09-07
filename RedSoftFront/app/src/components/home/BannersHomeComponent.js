import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const BannersHomeComponent = () => {

    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return(
        <div className="bannershome">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" onClick={() => loginWithRedirect()}><a href=""><img src="img/banner-home-clientes.jpg"/></a></div>
                    <div className="col-md-6"><a href=""><img src="img/banner-home-servicios.jpg"/></a></div>
                </div>
            </div>
        </div>
    );
}
export default BannersHomeComponent;
