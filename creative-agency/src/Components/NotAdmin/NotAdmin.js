import React from 'react'
import { Link } from 'react-router-dom';
import './NotAdmin.css'

export const NotAdmin = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                        <div className="not-admin">
                            <h2>This page only access  Admin</h2>
                        <Link to="/"><button className ="btn"> Go to home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
