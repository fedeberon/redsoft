import React, {Fragment} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { sessionActions } from "../../store";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();

    if (isLoading) {
        return <div>Loading ...</div>;
    } else {
        dispatch(sessionActions.authenticated(true));
        dispatch(sessionActions.setUserid(user.email));
    }

    return (
        isAuthenticated && (
            <Fragment>
                <img style={{
                    height: '25px', 
                    }} src={user.picture} alt={user.name} /> {user.email}
            </Fragment>
        )
    );
};

export default Profile;
