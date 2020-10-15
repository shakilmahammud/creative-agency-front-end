import React, { useContext, useEffect, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
// import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../../images/icons/google.png';
import './login.css';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

export const Login = () => {
  const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
  const history = useHistory();
  const location=useLocation().location?.pathname
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const[admin,setAdmin]=useState([]);
  const adminDashboard=(email,email1)=>{
    console.log(userLogin.email)
    if(email===email1 ){
      history.push("/dashboard")
    }
    else{
      history.replace(location || "/")
    }
  }
  useEffect(() => {
    fetch('http://localhost:50001/admin?email='+userLogin.email)
        .then(res => res.json())
        .then(data =>setAdmin(data))
},[])

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res=> {
      const {displayName, email} =res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUserLogin(signedInUser);
            fetch('http://localhost:50001/admin?email='+email)
        .then(res => res.json())
        .then(data =>{
          setAdmin(data)
          adminDashboard(email,data[0].email)
          storeAuthToken();
        }
        )
     
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        // history.replace(location || "/");
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="container ">
      <div className="text-center login-logo">
        <img src={logo} alt="" style={{height:'50px'}}/>
      </div>
      <div className="row" >
        <div className="col-md-6 shadow p-5 m-auto " style={{ height:"457px", }}>
          <h2>Login With</h2>
          <div className="from-group mt-5">
            <div className="login-btn" onClick={handleGoogleSignIn}>
            <img style={{width:'35px', margin:'0', padding:'0'}} src={google} alt=""/>
            <small>Continue with Google</small></div>
          </div>
        </div>
      </div>
    </div>
  );
};