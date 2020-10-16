import React, { useContext, useEffect, useState } from 'react';
import './Services.css';
import {UserContext} from '../../../App'
import { useHistory } from 'react-router-dom';

// services part 
export const Services = () => {
    const [services,setServices]=useState([])
    useEffect(() => {
        fetch('http://localhost:50001/services')
            .then(res => res.json())
            .then(data =>setServices(data))
    },[])
    return (
        <section className="service">
            <div className="container">
                <h2>Provide awesome <span>services</span></h2>
                <div className="row">
                    {
                        services.map(service=><ServiceDetails 
                        service={service} key={service.id}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

// services Details  part 
export const ServiceDetails=({service})=>{
    const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
    const history=useHistory()
    const handleService=()=>{
        setUserService(service)
        history.push('/order')
    }
    return(
            <div className="col-md-4" onClick={handleService}>
             <div className="serviceDetails" >
             <div className="service-details-txt">
             {
                    service.image.img
                    ?<img src={`data:image/png;base64,${service.image.img}`}  alt="" />
                    :<img src={service.image}  alt="" />
                }
             <h4>{service.title}</h4>
              <p>{service.description}</p>
             </div>
             </div>
            </div>
    )
}