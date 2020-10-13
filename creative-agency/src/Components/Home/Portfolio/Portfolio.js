import React from 'react';
import carsole1 from '../../../images/carousel-1.png';
import carsole2 from '../../../images/carousel-2.png';
import carsole3 from '../../../images/carousel-3.png';
import './Portfolio.css';
import Carousel from 'react-bootstrap/Carousel'


export const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2>Here are some of <span>our works</span></h2>              
        <Carousel>
                <Carousel.Item>
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <img
                  className="d-block w-100"
             src={carsole1}
             alt="First slide"
                    />
                    </div>
                </div>
            </Carousel.Item>
         <Carousel.Item>
              <div className="row">
                  <div className="col-md-8 m-auto">
                  <img
               className="d-block w-100"
                src={carsole2}
                alt="Third slide"
                 />
                  </div>
              </div>
                 </Carousel.Item>
                <Carousel.Item>
                   <div className="row">
                       <div className="col-md-8 m-auto">
                       <img
                 className="d-block w-100"
             src={carsole3}
             alt="Third slide"
                />
                       </div>
                   </div>
        </Carousel.Item>
        </Carousel>
            </div>
        </section>
    )
}
