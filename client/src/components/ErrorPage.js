import React from 'react'
import {NavLink} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>we are sorry this page does not exist!</h2>
                    <p className="mb-5">
                        the page you are lookin for might have been removed or it is temporarily unavailable
                    </p>
                    <NavLink to="/">Back to Home page</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
