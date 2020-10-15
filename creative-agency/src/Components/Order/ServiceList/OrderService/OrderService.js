import React, { useEffect, useState } from 'react'
import { Orderheader } from '../../Order/Order';
import { ServiceList } from '../ServiceList';
import {Sidebar} from '../../../Order/Sidebar/Sidebar'

export const OrderService = ({orderService}) => { 
    return (
       <section>
           <div className="container">
               <div className="row">
                   <div className="col-md-2">
                       <Sidebar/>
                   </div>
                   <div className="col-md-10">
                       <Orderheader/>
                   <div className="showOrder">
                       <div className="row">
               {
                   orderService.map(userOrder=>
                   <ServiceList
                   userOrder={userOrder}
                   />
                   )
               }
               </div>
               </div>
               </div>
               </div>
           </div>
       </section>
    )
}
