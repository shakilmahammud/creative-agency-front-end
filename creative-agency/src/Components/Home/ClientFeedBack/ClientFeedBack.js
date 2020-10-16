import React, { useContext, useEffect, useState } from 'react';
import './ClientFeedBack.css';
import { useScrollTrigger } from '@material-ui/core';
import { UserContext } from '../../../App';

export const ClientFeedBack = () => {
    const[feedbacks,setFeedbacks]=useState([])
    // console.log(feedbacks);
    useEffect(() => {
        fetch('http://localhost:50001/userReview')
            .then(res => res.json())
            .then(data =>{
                    setFeedbacks(data)
            }
                )
    },[])
    return (
       <section className="clientFeedBack">
        <div className="container">
            <h2>Clients <span>Feedback</span></h2>
            <div className="row">
                {
                    feedbacks.map(feedback=><FeedBackDetails
                    feedback={feedback}
                    />)
                }
            </div>
        </div>
       </section>
    )
}

// feedback Details

export const FeedBackDetails=({feedback})=>{
    return(
        <div className="col-md-4 feedback-details">
            <div className="feedback-txt">
            <div className=" d-flex">
                
                    <img src={feedback.img} alt=""/>
                
                <div>
                <h4>{feedback.name}</h4>
                <p>{feedback.copany}</p>
                </div>
            </div>
            <p>{feedback.message}</p>
            </div>
        </div>
    )
}