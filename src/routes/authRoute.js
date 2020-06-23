import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "../firebase";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useContext(FirebaseContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
