import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App';
import { AllServiceList } from '../AllServiceList/AllServiceList'
import { Sidebar } from '../Sidebar/Sidebar';
import Avatar from '@material-ui/core/Avatar';
import { Loaders } from '../../Loader/Loaders';


export const Dashboard = ({orderService}) => {
    const [loader,setloader]=useState(false)

    useEffect(()=>{
        setloader(!loader)
    },[])
    return (
        <section >
             {
            !loader? <Loaders/> :
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Dashboardheader name="Service list"/>
                    <AllServiceList orderService={orderService}/>
                </div>
            </div>
        </div>
}
    </section>
    )
}

export const Dashboardheader=(props)=>{
    const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
    return(
        <div className="order-header d-flex p-2 mt-3">
                        <h2>{props.name}</h2>
                        <h4 className="ml-auto">
                        {userLogin? <h2><Avatar/> Admin {userLogin?.name}</h2>:null}
                        </h4>
                        </div>
    )
}