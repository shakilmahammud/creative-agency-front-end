import React from 'react';
import './ClientFeedBack.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const feedBackData=[
    {
      img:customer1,
      name:'Nash Patrik',
      title:'CEO, Manpol',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    },
    {
        img:customer2,
        name:'Miriam Barron ',
        title:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      },
      {
        img:customer3,
        name:'Bria Malone',
        title:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      },
]
export const ClientFeedBack = () => {
    return (
       <section className="clientFeedBack">
        <div className="container">
            <h2>Clients <span>Feedback</span></h2>
            <div className="row">
                {
                    feedBackData.map(feedback=><FeedBackDetails
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
                <p>{feedback.title}</p>
                </div>
            </div>
            <p>{feedback.description}</p>
            </div>
        </div>
    )
}