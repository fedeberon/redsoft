import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;