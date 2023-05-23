import React, {useContext, useState} from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom";
import {AuthContext} from '../../index';

export const LoginPage = () => {
    const [userData,
        setUserData] = useState({email: "", password: ""})
    const {userLogged, userLogout, errorMessage} = useContext(AuthContext);

    const isToken = localStorage.getItem("token")
    const userDetails = localStorage.getItem("user")

    const handleLogin = () => {
        userLogged(userData)
    }


    return (
        <div className='container'>
            <div>
                <h1 className='login-h1'>Log In</h1>
                <p className='login-p'>Unlock the Gateway to Your Shopping Universe: Cart,
                    Wishlist, and Order Extravaganza!</p>
            </div>
            <div
                className='login-items'
                style={{
                display: (!isToken
                    ?.length)
                    ? "flex"
                    : "none"
            }}>
                <div className='flex-column'>

                    <label htmlFor="email" className='label'>Enter your Email*</label>

                    <input
                        type="text"
                        name="email"
                        id="login-input-email"
                        className='login-input'
                        placeholder='Email'
                        onChange={(e) => setUserData((prev) => ({
                        ...prev,
                        email: e.target.value
                    }))}  required/>

                </div>
                <div className='flex-column'>

                    <label htmlFor="email" className='label'>Enter your Password*</label>
                    <input
                        type="password"
                        name="password"
                        id="login-input-password"
                        className='login-input'
                        placeholder='Password'
                        onChange={(e) => setUserData((prev) => ({
                        ...prev,
                        password: e.target.value
                    }))} required/>
                </div>
                <Link>Forgot Password?</Link>
                <div>
                    <button
                        className='button'
                        onClick={handleLogin}
                        style={{
                        display: (!isToken
                            ?.length)
                            ? "block"
                            : "none"
                    }}>Login</button>
                </div>
                <button className='button' onClick={userLogout}>Test User</button>
                <p>Don't have an account?
                    <Link to="/signup">Create Account</Link>
                </p>
            </div>
            <div
                style={{
                display: (isToken
                    ?.length)
                    ? "flex"
                    : "none"
            }}>
                <button
                    className='button'
                    onClick={userLogout}
                    style={{
                    display: (isToken
                        ?.length)
                        ? "block"
                        : "none"
                }}>Logout</button>
            </div>
        </div>
    )
}
