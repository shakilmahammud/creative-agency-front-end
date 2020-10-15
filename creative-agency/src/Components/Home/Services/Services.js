import React, { useContext, useEffect, useState } from 'react';
import './Services.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import {UserContext} from '../../../App'
import { useHistory } from 'react-router-dom';



const serviceData=[
    {
    id:1,
    img:service1,
    name:'Web & Mobile design',
    description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
  },
  {
    id:2,
    img:service2,
    name:'Graphic design',
    description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
  },
  {
    id:3,
    img:service3,
    name:'Web development',
    description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
  }

]
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