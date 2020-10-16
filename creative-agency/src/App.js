import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AddService } from './Components/Dashboard/AddService/AddService';
import { Dashboard } from './Components/Dashboard/Dashboard/Dashboard';
import { MakeAdmin } from './Components/Dashboard/MakeAdmin/MakeAdmin';
import { Home } from './Components/Home/Home/Home';
import { Order } from './Components/Order/Order/Order';
import { ServiceReview } from './Components/Order/ServiceReview/ServiceReview';
import {Login} from './Components/Login/Login/Login';
import {PrivateRoute} from './Components/Login/PrivateRoute/PrivateRoute'
import { OrderService } from './Components/Order/ServiceList/OrderService/OrderService';
import { Loaders } from './Components/Loader/Loaders';
import { NotAdmin } from './Components/NotAdmin/NotAdmin';
import { NotFound } from './Components/NotFound/NotFound';

export const UserContext=createContext()


function App() {
  const [userLogin,setUserLogin]=useState({})
  const [userService,setUserService]=useState()
  const [loader,setloader]=useState(false)

    useEffect(()=>{
        setloader(!loader)
    },[])
  return (
    <UserContext.Provider value={[userService,setUserService,userLogin,setUserLogin]}>
      {
      !loader? <Loaders/> :
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/order">
          <Order/>
        </PrivateRoute>
        <PrivateRoute path="/servicelist">
          <OrderService />
        </PrivateRoute>
        <PrivateRoute path="/review">
          <ServiceReview/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
        <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService/>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path="/not">
          <NotAdmin/>
        </PrivateRoute>
        <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
}
    </UserContext.Provider>
  );
}

export default App;
