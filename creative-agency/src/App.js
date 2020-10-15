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
import { ServiceList } from './Components/Order/ServiceList/ServiceList';
import { ServiceReview } from './Components/Order/ServiceReview/ServiceReview';
import {Login} from './Components/Login/Login/Login';
import {PrivateRoute} from './Components/Login/PrivateRoute/PrivateRoute'
import { OrderService } from './Components/Order/ServiceList/OrderService/OrderService';

export const UserContext=createContext()

function App() {
  const [userLogin,setUserLogin]=useState({
    isSignedIn: false,
    name: '',
    email: '',
})
const [userService,setUserService]=useState()
const [orderService,setOrderService]=useState([])
    // console.log(orderService);
    useEffect(() => {
        fetch('http://localhost:50001/userService')
            .then(res => res.json())
            .then(data =>setOrderService(data))
    },[])
  return (
    <UserContext.Provider value={[userService,setUserService,userLogin,setUserLogin]}>
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
          <OrderService orderService={orderService}/>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <ServiceReview/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
        <Dashboard orderService={orderService}/>
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService/>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin/>
        </PrivateRoute>
      </Switch>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;
