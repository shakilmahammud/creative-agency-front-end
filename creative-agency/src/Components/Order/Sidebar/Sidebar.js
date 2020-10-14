import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHdd,faCommentDots}from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

export const Sidebar = () => {
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
        </div>
      </nav>
    )
}
