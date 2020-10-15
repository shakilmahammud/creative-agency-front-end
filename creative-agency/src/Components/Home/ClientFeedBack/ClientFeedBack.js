import React, { useEffect, useState } from 'react';
import './ClientFeedBack.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

// const feedBackData=[
//     {
//       img:customer1,
//       name:'Nash Patrik',
//       title:'CEO, Manpol',
//       description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
//     },
//     {
//         img:customer2,
//         name:'Miriam Barron ',
//         title:'CEO, Manpol',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
//       },
//       {
//         img:customer3,
//         name:'Bria Malone',
//         title:'CEO, Manpol',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
//       },
// ]
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
                {/* {
                    feedbacks.map(review=><FeedBackDetails/>)
                } */}
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
                <img src={customer1} alt=""/>
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