import React from 'react';
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
import {Login} from './Components/Login/Login/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
        <Route path="/servicelist">
          <ServiceList/>
        </Route>
        <Route path="/review">
          <ServiceReview/>
        </Route>
        <Route path="/allServicelist">
        <Dashboard/>
        </Route>
        <Route path="/addService">
          <AddService/>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
