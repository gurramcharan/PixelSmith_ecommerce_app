import React from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom";
export const SignUpPage = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='login-h1'>Sign Up</h1>
                <p className='login-p'>Hello New User! Sign Up using your email to explore the Store</p>
            </div>
            <div className='login-items'>
                <div className='flex-column'>

                    <label htmlFor="email" className='label'>Enter your Email*</label>
                    <input type="email" name="email" id="login-input-email" className='login-input' placeholder='Email' />
                </div>
                <div className='flex-column'>

                    <label htmlFor="first-name" className='label'>Enter your first-name*</label>
                    <input type="text" name="first-name" id="login-input-first-name" className='login-input' placeholder='First Name' />
                </div>
                <div className='flex-column'>

                    <label htmlFor="last-name" className='label'>Enter your last-name*</label>
                    <input type="text" name="last-name" id="login-input-last-name" className='login-input' placeholder='Last Name' />
                </div>
                <div className='flex-column'>

                    <label htmlFor="passoword" className='label'>Re-Enter your Password*</label>
                    <input
                        type="password"
                        name="password"
                        id="login-input-password"
                        className='login-input'
                        placeholder='password' 
                        />
                </div>
                <div className='flex-column'>

                    <label htmlFor="Re-passoword" className='label'>Re-Enter your Password*</label>
                    <input
                        type="password"
                        name="Re-password"
                        id="login-input-password"
                        className='login-input'
                        placeholder='Re-enter Password' 
                        />
                </div>
                <button className='button'>Sign Up</button>
                <p>Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    )
}
