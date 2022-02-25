import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <button className="btn-light" 
        style={{
            display: window.innerWidth < 767 ? 'block' : 'contents',
            padding: window.innerWidth < 767 ? '15px 5px' : '',
        }} 
        onClick={() => {
            logout({ returnTo: window.location.origin });
        }}>Log out</button>
    );
}

export default LogoutButton;