import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <li>
                <img style={{height: '25px'}} src={user.picture} alt={user.name} /> {user.email}
            </li>
        )
    );
};

export default Profile;
