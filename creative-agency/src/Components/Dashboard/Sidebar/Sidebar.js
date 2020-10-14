import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faHdd,faUserPlus}from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidebar = ({handleHeader}) => {
    return (
        <nav className="nav flex-column sidebar">
        <Link className="nav-link active" to="/"><img src={logo} alt="" style={{height:'40px'}}/></Link>
        <div className="side-menu">
        <Link className="nav-link" to="/allservicelist" >
        <FontAwesomeIcon icon={faHdd} /> Service list</Link>
        <Link className="nav-link active" to="/addService" onClick={handleHeader}>
        <FontAwesomeIcon icon={faPlus} />
        Add Service
        </Link>
        <Link className="nav-link" to="/makeAdmin">
        <FontAwesomeIcon icon={faUserPlus} /> 
        Make Admin</Link>
        </div>
      </nav>
    )
}
