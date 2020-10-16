import React, { useContext, useState } from 'react';
import {Sidebar} from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt}from '@fortawesome/free-solid-svg-icons';
import { Dashboardheader } from '../Dashboard/Dashboard';
import './AddService.css'
import { UserContext } from '../../../App';

export const AddService = () => {
    const { register, handleSubmit,errors } = useForm();
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
  const onSubmit = data => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('description', data.description);

    fetch('https://aqueous-shelf-28126.herokuapp.com/addService',{
        method:'POST',
        body:formData
    })
    .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
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
                        <Dashboardheader name="Add Service"/>
                    <div className="showOrder ">
                       
                 <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="addService">
                        <div>
                         <label>Service Title <span>Icon</span></label> <br/>
                        <input type="text" name="title" ref={register({ required: true })} placeholder="Enter title"/> 
                        <label htmlFor="myFile" className="uploadFile" style={{}}><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                         <input type="file" onChange={handleFileChange} id="myFile" style={{display:'none'}} name="file" ref={register({ required: true })}/>
                         {errors.file && <span className="text-danger">img required</span>}
                         <br/>
                        {errors.servicename && <span className="text-danger">This field is required</span>}
                        </div>
                        
                    <div> 
                        <label >Description</label> <br/>
                         <textarea  placeholder="Project Details" name="description" ref={register}></textarea>
                    {errors.description && <span className="text-danger">This field is required</span>}
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
// const [info, setInfo] = useState({});
//     const [file, setFile] = useState(null);
//     const handleBlur = e => {
//         const newInfo = { ...info };
//         newInfo[e.target.name] = e.target.value;
//         setInfo(newInfo);
//     }

//     const handleFileChange = (e) => {
//         const newFile = e.target.files[0];
//         setFile(newFile);
//     }

//     const handleSubmit = () => {
//         const formData = new FormData()
//         console.log(info);
//         formData.append('file', file);
//         formData.append('name', info.name);
//         formData.append('email', info.email);

//         fetch('https://aqueous-shelf-28126.herokuapp.com/addService', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }

//     return (
//         <section className="container-fluid row">
//             <Sidebar></Sidebar>
//             <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
//                 <h5 className="text-brand">Add a Doctor</h5>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Name</label>
//                         <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Upload a image</label>
//                         <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </section>
//     );
}
