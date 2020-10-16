import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

export const PrivateRoute = ({children, ...rest}) => {
  const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
    const location =useLocation()
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      const email=sessionStorage.getItem('email')
      if(!token || !email){
        return false;
      }
      const decodedToken = jwt_decode(token);
      // get current time
      const currentTime = new Date().getTime() / 1000;
      // compare the expiration time with the current time
      // will return false if expired and will return true if not expired
      return decodedToken.exp > currentTime;
    }
    return (
        <Route
      {...rest}
      render={ location  =>
        (userLogin.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              location 
            }}
          />
        )
      }
    />
    );
};