import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({component: Component, ...rest}) => {
  const isAuth = localStorage.getItem('isAuth');

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component {...props} pageProps={rest}/>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
