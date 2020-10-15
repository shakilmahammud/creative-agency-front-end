import React from 'react'
import { useForm } from 'react-hook-form'
import { Orderheader } from '../Order/Order'
import { Sidebar } from '../Sidebar/Sidebar'

export const ServiceReview = () => {
    const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:50001/addreview',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
    })
    
  }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Orderheader name="Review"/>
                        <div className="showOrder">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <input type="text" name="name" ref={register({ required: true })} placeholder="Your name"/> <br/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                     <div>
                     <input type="text" name="copany" ref={register({ required: true })} placeholder="Company’s name, Designation"/> <br/>
                     {errors.company && <span className="text-danger">This field is required</span>}
                     </div>
                    <div> 
                    <textarea  placeholder="Description" ref={register({ required: true })} name="message"></textarea>
                     </div>
                    <button className="btn">Submit</button>
                     </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
