import React from 'react';
import './Services.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';



const serviceData=[
    {
    img:service1,
    name:'Web & Mobile design',
    description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
  },
  {
    img:service2,
    name:'Graphic design',
    description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
  },
  {
    img:service3,
    name:'Web development',
    description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
  }

]
// services part 
export const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <h2>Provide awesome <span>services</span></h2>
                <div className="row">
                    {
                        serviceData.map(service=><ServiceDetails 
                        service={service}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

// services Details  part 
export const ServiceDetails=({service})=>{
    return(
            <div className="col-md-4">
             <div className="serviceDetails">
             <div className="service-details-txt">
             <img src={service.img} alt=""/>
             <h4>{service.name}</h4>
              <p>{service.description}</p>
             </div>
             </div>
            </div>
    )
}