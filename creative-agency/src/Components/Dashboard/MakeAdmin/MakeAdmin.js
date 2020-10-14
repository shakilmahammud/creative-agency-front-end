import React from 'react'
import { Dashboardheader } from '../Dashboard/Dashboard';
import { Sidebar } from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

export const MakeAdmin = () => {
    const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data)
    return (
        <section>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Dashboardheader name="Add Service"/>
                    <div className="showOrder ">
                       
                 <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="addService">
                        <div>
                         <label>Email</label> <br/>
                        <input type="text" name="email" ref={register({ required: true })} placeholder="jon@gamil.com" className="mr-2"/> 
                        <button className="btn add ">Submit</button>
                         <br/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>   
                 </div>
                </form> 
                     </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
