import React from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom";
export const NotLoginPage = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='login-h1'>Log-In to Explore</h1>
                <p className='login-p'>Looks like you didn't login/signup. Please Login to explore the store completely</p>
                <Link to='/login' className='button'>
                    <button className='button'>LogIn</button>
                </Link>
            </div>

        </div>
    )
}
