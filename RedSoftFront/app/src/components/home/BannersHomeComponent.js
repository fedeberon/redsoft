import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";

const BannersHomeComponent = () => {

    const {
        loginWithRedirect,
    } = useAuth0();

    return(
        <div className="bannershome">
            <div className="container">
                <div className="row">
                    <div style={{cursor: 'pointer'}} className="col-md-6" onClick={() => loginWithRedirect()}><img alt="Acceso a clientes" src="img/banner-home-clientes.jpg"/></div>
                    <div className="col-md-6"><Link to={"/services"}><img alt="" src="img/banner-home-servicios.jpg"/></Link></div>
                </div>
            </div>
        </div>
    );
}
export default BannersHomeComponent;
