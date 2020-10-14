import React from 'react';
import './AllServiceList.css'

export const AllServiceList = () => {
    return (
        <section>
        <div className="showOrder">
        <div className="bg-color">
         <table className="table table-borderless">
            {/* <div className="th-bg"> */}
            <thead >
                <tr >
                <th className="text-secondary text-left" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            {/* </div> */}
            <tbody>
                {/* {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.weight}KG</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                } */}
                 <tr>
                        <td>Sufi Ahmed Hamim</td>
                        <td>sufi@gmail.com</td>
                        <td>Graphic Design</td>
                        <td>Lorem ipsum dolor <br/> sit amet, consectetur <br/> adipiscing elit. </td>
                        <td>
                            <select className="form-control select" name="order"  >
                                <option  value="Pending">Pending</option>
                                <option value="Done" >done</option>
                            </select>
                            </td>
                    </tr>
            </tbody>
        </table>
                        </div>
                        </div>
        </section>
    )
}
