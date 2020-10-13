import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';
import  {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
       <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand" to="/"><img src={logo} alt="" style={{height:'40px'}}/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/portfolio">Our Portfolio</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/team">Our Team</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li class="nav-item">
        <Link to="/login"><button className="btn">Login</button></Link>
      </li>
    </ul>
    
  </div>
</nav>
       </div>
    )
}
