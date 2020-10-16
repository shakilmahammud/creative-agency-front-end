import React, { useContext, useEffect, useState } from 'react'
import { Orderheader } from '../../Order/Order';
import { ServiceList } from '../ServiceList';
import {Sidebar} from '../../../Order/Sidebar/Sidebar'
import { UserContext } from '../../../../App';
import { Loaders } from '../../../Loader/Loaders';

export const OrderService = () => { 
    const [userService,setUserService,userLogin,setUserLogin]=useContext(UserContext)
    const [singleService,setSingleService]=useState([])
    useEffect(() => {
        fetch('https://aqueous-shelf-28126.herokuapp.com/singleService?email='+userLogin.email)
            .then(res => res.json())
            .then(data =>setSingleService(data));
      },[])
      const [loader,setloader]=useState(false)

    useEffect(()=>{
        setloader(!loader)
    },[])
   
    return (
       
       <section>
            {
            !loader? <Loaders/> :
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
                   singleService.map(userOrder=>
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
}
       </section>
    )
}
