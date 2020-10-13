import React from 'react';
import './Contact.css'

export const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-txt">
                        <h3>Let us handle your <br/> project, professionally.</h3>
                        <p>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your email address"/> <br/>
                      <input type="text" placeholder="Your name / company’s name"/>
                      <textarea  placeholder="Your message"></textarea>
                      <button className="btn">Send</button>
                    </div>
                </div>
            </div>
            <footer className="text-center">copyright Orange labs {(new Date()).getFullYear()}</footer>
        </section>
    )
}
