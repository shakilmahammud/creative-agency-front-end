import React, { useEffect, useState } from 'react';
import './AllServiceList.css';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AllServiceList = () => {
    const [orderService,setOrderService]=useState([])
    // console.log(orderService);
    useEffect(() => {
        fetch('http://localhost:50001/userService')
            .then(res => res.json())
            .then(data =>setOrderService(data))
    },[])
    return (
        <div style={{ borderRadius: '20'}} className="p-5 bg-white">
        <Table responsive size="sm">
            <thead style={{ backgroundColor: "#F4F7FC" }}>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderService.map(service =>
                        <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.Email}</td>
                            <td>{service.course}</td>
                            <td>{service.message}</td>
                            <td>
                                <Dropdown as={ButtonGroup}>
                                    {/* <Button variant="" className={service.status==="Pending"? "text-danger": service.status==="On going"? "text-warning":"text-success"}>{service.status}</Button> */}
                                    <Dropdown.Toggle scaret />
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link  className="text-danger">Pending</Link></Dropdown.Item>
                                        <Dropdown.Item  ><Link  className="text-warning">On going</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link  className="text-success">Done</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </div>
    )
}
