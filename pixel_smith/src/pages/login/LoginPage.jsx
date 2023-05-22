import React, { useContext } from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom";
import { AuthContext } from '../../index';


export const LoginPage = () => {
    const {handleLogin } = useContext(AuthContext);

    return (
        <div className='container'>
            <div>
                <h1 className='login-h1'>Log In</h1>
                <p className='login-p'>Unlock the Gateway to Your Shopping Universe: Cart, Wishlist, and Order
                    Extravaganza!</p>
            </div>
            <div className='login-items'>
                <div className='flex-column'>

                        <label htmlFor="email" className='label'>Enter your Email*</label>

                        <input type="text" name="email" id="login-input-email" className='login-input' placeholder='Email' />

                </div>
                <div className='flex-column'>

                    <label htmlFor="email" className='label'>Enter your Password*</label>
                    <input
                        type="password"
                        name="password"
                        id="login-input-password"
                        className='login-input'
                        placeholder='Password'
                        />
                </div>
                <Link>Forgot Password?</Link>
                <button className='button' onClick={handleLogin}>Login</button>
                <button className='button'>Test User</button>
                <p>Don't have an account? <Link to="/signup">Create Account</Link>
                </p>
            </div>
        </div>
    )
}
