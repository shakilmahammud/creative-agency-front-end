import React from 'react'
import './ServiceList.css'
import service from '../../../images/icons/service1.png'
export const ServiceList = ({userOrder}) => {
    return (
                       <div className="col-md-5">
                                 <div className="course-item">
                                     <div className="d-flex">
                                         <img src={service} alt=""/>
                                         <h5 className="ml-auto pd-btn">Pending</h5>
                                     </div>
                                     <div>
                                         <h3>{userOrder.course}</h3>
                                         <p>{userOrder.message}</p> 
                                     </div>
                                 </div>
                       </div>
    )
}
