import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto text-center">
                    <div className="not-admin">
                        <h2>Page Not Found</h2>
                    <Link to="/"><button className ="btn"> Go to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
