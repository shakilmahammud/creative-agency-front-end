import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';
import  {Link} from 'react-router-dom'
import { UserContext } from '../../../App';
import Avatar from '@material-ui/core/Avatar';
import { Login } from '../../Login/Login/Login';

export const Navbar = () => {
  const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
  const[admin,setAdmin]=useState({});
useEffect(() => {
  fetch('https://aqueous-shelf-28126.herokuapp.com/admin?email='+userLogin.email)
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
     {
       admin===userLogin.email ? <Link to="/dashboard"><button className="btn">Admin</button></Link> :<Link to="/not"><button className="btn">Admin</button></Link>
     }
      <li class="nav-item">
        {
          userLogin?<Link className="nav-link d-flex"><Avatar/> {userLogin?.name}</Link>:<Link to="/login"><button className="btn">Login</button></Link>
        }
      </li>
    </ul>
    
  </div>
</nav>
       </div>
    )
}
