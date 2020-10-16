import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHdd,faCommentDots,faArrowAltCircleRight}from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { UserContext } from '../../../App';

export const Sidebar = () => {
    const[admin,setAdmin]=useState({});
    const [userService,setUserService,userLogin,setUserLogin]=useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:50001/admin?email='+userLogin.email)
        .then(res => res.json())
        .then(data =>{
           if(data[0]){
            const mail=data[0].email;
            setAdmin(mail)
           }
           else{
               setAdmin({})
           }
        })
},[])


    return (
        <nav className="nav flex-column sidebar">
        <Link className="nav-link active" to="/"><img src={logo} alt="" style={{height:'40px'}}/></Link>
        <div className="side-menu">
        <Link className="nav-link active" to="/order">
        <FontAwesomeIcon icon={faShoppingCart} />
         Order
            </Link>
        <Link className="nav-link" to="/servicelist" >
        <FontAwesomeIcon icon={faHdd} />   Service list</Link>
        <Link className="nav-link" to="/review">
        <FontAwesomeIcon icon={faCommentDots} /> 
            Review</Link>
            {
                admin=== userLogin.email ? <Link className="nav-link" to="/dashboard">
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                <h2> Go to Admin panle</h2>
            </Link> : null
            }
        </div>
      </nav>
    )
}
