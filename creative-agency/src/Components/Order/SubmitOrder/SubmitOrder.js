import React from 'react';
import './SubmitOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt}from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";


export const SubmitOrder = () => {
    const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data)
    return (
        <section>
                    <div className="showOrder">
                 <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <input type="text" name="name" ref={register({ required: true })} placeholder="Your name / company’s name"/> <br/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                      <div>
                      <input type="email" placeholder="Your email address" name="Email" ref={register({ required: true })} /> <br/>
                      {errors.Email && <span className="text-danger">This field is required</span>}
                      </div>
                     <div>
                     <input type="text" name="course" ref={register({ required: true })} placeholder="Graphic Design"/> <br/>
                     {errors.course && <span className="text-danger">This field is required</span>}
                     </div>
                    <div>  <textarea  placeholder="Project Details" name="message" ref={register}></textarea>
                    {errors.message && <span className="text-danger">This field is required</span>}
                     </div>
              <input type="number" placeholder="Price" className="priceInput" name="price" ref={register}/>
                  <input type="file" id="myFile" style={{display:'none'}} name="filename" />
                  <label htmlFor="myFile" className="uploadFile" ><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                    <br/>
               <button className="btn">Send</button>
                </form>
                      
                     </div>
        </section>
    )
}
