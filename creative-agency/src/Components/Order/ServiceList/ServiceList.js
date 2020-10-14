import React from 'react'
import { Orderheader } from '../Order/Order';
import { Sidebar } from '../Sidebar/Sidebar';
import service1 from '../../../images/icons/service1.png';
import './ServiceList.css'

export const ServiceList = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Orderheader name=" Your sevice list"/>
                       <div className="showOrder">
                           <div className="row">
                               <div className="col-md-5">
                                 <div className="course-item">
                                     <div className="d-flex">
                                         <img src={service1} alt=""/>
                                         <h5 className="ml-auto pd-btn">Pending</h5>
                                     </div>
                                     <div>
                                         <h3>Web & Mobile design</h3>
                                         <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                                     </div>
                                 </div>
                               </div>
                               <div className="col-md-5">
                               <div className="course-item">
                                     <div className="d-flex">
                                         <img src={service1} alt=""/>
                                         <h5 className="ml-auto pd-btn done">Done</h5>
                                     </div>
                                     <div>
                                         <h3>Web & Mobile design</h3>
                                         <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                                     </div>
                                 </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
