import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

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
