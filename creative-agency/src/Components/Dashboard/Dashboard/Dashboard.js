import React, { useState } from 'react'
import { AllServiceList } from '../AllServiceList/AllServiceList'
import { Sidebar } from '../Sidebar/Sidebar'


export const Dashboard = () => {
    return (
        <section >
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Dashboardheader name="Service list"/>
                    <AllServiceList/>
                </div>
            </div>
        </div>
    </section>
    )
}

export const Dashboardheader=(props)=>{
    return(
        <div className="order-header d-flex p-2 mt-3">
                        <h2>{props.name}</h2>
                        <h4 className="ml-auto">pro</h4>
                        </div>
    )
}