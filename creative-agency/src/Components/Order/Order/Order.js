import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { SubmitOrder } from '../SubmitOrder/SubmitOrder'

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
    return(
        <div className="order-header d-flex p-2 mt-3">
                        <h2>{props.name}</h2>
                        <h4 className="ml-auto">pro</h4>
                        </div>
    )
}
