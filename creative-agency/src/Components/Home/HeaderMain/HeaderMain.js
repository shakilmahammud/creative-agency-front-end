import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import aribnb from '../../../images/logos/airbnb.png';


// header banner part Component
export const HeaderMain = () => {
    return (
        <main>
            <div className="container headermain-container">
                <div className="row">
                    <div className="col-md-6 text-dark header-text">
                        <h2>Let’s Grow Your <br/>
                        Brand To The  <br/>
                        Next Level</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                        <button className="btn">Hire us</button>
                    </div>
                    <div className="col-md-6">
                        <img src={frame} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </main>
    )
}
// company Picture Part Component
export const JoinCompany=()=>{
    return(
        <section>
            <div className="container">
                <div className="row joinCompany-container">
                    <div className="col-md-2 col-sm-4">
                        <img src={slack} alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <img src={google} alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <img src={uber} alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-4 ">
                        <img src={netflix} alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-4 ">
                        <img src={aribnb} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}