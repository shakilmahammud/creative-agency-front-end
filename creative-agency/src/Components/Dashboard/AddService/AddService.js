import React from 'react';
import {Sidebar} from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt}from '@fortawesome/free-solid-svg-icons';
import { Dashboardheader } from '../Dashboard/Dashboard';
import './AddService.css'

export const AddService = () => {
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
                         <label>Service Title <span>Icon</span></label> <br/>
                        <input type="text" name="servicename" ref={register({ required: true })} placeholder="Enter title"/> 
                        <label htmlFor="myFile" className="uploadFile" style={{}}><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                         <input type="file" id="myFile" style={{display:'none'}} name="filename" ref={register({ required: true })}/>
                         {errors.filename && <span className="text-danger">img required</span>}
                         <br/>
                        {errors.servicename && <span className="text-danger">This field is required</span>}
                        </div>
                        
                    <div> 
                        <label >Description</label> <br/>
                         <textarea  placeholder="Project Details" name="message" ref={register}></textarea>
                    {errors.message && <span className="text-danger">This field is required</span>}
                     </div>
                 </div>
                 <button className="btn add d-flex ml-auto">Submit</button>
                </form> 
                     </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
