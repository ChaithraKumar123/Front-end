import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../services/localStorageService";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const localStorageService = new LocalStorageService();
  const isAuth = localStorageService.getIsAuth();

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component {...props} pageProps={rest} />;
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
