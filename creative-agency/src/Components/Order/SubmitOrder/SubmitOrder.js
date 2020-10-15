import React, { useContext } from 'react';
import './SubmitOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt}from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';


export const SubmitOrder = ()=> {
  const history=useHistory()
  const [userService,setUserService,userLogin,setUserLogin] = useContext(UserContext);
    const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => {
    data.img=userService.img;
    fetch('http://localhost:50001/orderService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
          if(result){
            history.push("/servicelist")
            setUserService('')
          }
        })
  }
    return (
        <section>
                    <div className="showOrder">
                 <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <input type="text" name="name" ref={register({ required: true })} placeholder="Your name / company’s name" value={userLogin?.name}/> <br/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                      <div>
                      <input type="email" placeholder="Your email address" name="Email" ref={register({ required: true })} value={userLogin?.email}/> <br/>
                      {errors.Email && <span className="text-danger">This field is required</span>}
                      </div>
                     <div>
                     <input type="text" name="course" ref={register({ required: true })} placeholder="Graphic Design" value={userService?.title}/> <br/>
                     {errors.course && <span className="text-danger">This field is required</span>}
                     </div>
                    <div>  <textarea  placeholder="Project Details" name="message" ref={register} value={userService?.description}></textarea>
                    {errors.message && <span className="text-danger">This field is required</span>}
                     </div>
              <input type="number" placeholder="Price" className="priceInput" name="price" ref={register}/>
                  <input type="file" id="myFile" style={{display:'none'}} name="filename" ref={register} />
                  <label htmlFor="myFile" className="uploadFile" ><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload project file</label>
                    <br/>
               <button className="btn">Send</button>
                </form>
                      
                     </div>
        </section>
    )
}
