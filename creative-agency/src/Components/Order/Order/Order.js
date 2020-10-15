import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App';
import { Sidebar } from '../Sidebar/Sidebar'
import { SubmitOrder } from '../SubmitOrder/SubmitOrder';
import Avatar from '@material-ui/core/Avatar';
import { OrderService } from '../ServiceList/OrderService/OrderService';

export const Order = () => {
    return (
        <section >
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Orderheader name="Order"/>
                        <SubmitOrder/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Orderheader=(props)=>{
    const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
    return(
        <div className="order-header d-flex p-2 mt-3">
                        <h2>{props.name}</h2>
    <h4 className="ml-auto">{userLogin? <h2><Avatar/> {userLogin.name}</h2>:null}</h4>
                        </div>
    )
}
