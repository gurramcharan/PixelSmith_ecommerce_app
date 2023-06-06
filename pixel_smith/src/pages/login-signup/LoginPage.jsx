import React, {useContext, useState} from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom";
import {AuthContext} from '../../index';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaUserAlt} from "react-icons/fa"

export const LoginPage = () => {
    const [userData,
        setUserData] = useState({email: "", password: ""})
    const testCreds = {
        email: "charan@gmail.com",
        password: "12345"
    }
    const {userLogged, userLogout} = useContext(AuthContext);

    const isToken = localStorage.getItem("token")
    const userDetails = localStorage.getItem("user")
    const user = JSON.parse(userDetails)

    const handleLogin = () => {
        userLogged(userData)
    }

    return (
        <div className='container'>

            {!isToken ? (
                <div className='login-container'>
                    <div>
                        <h1 className='login-h1'>Log In</h1>
                        <p className='login-p'>Unlock the Gateway to Your Shopping Universe: Cart,
                    Wishlist, and Order Extravaganza!</p>
                     </div>
            
                    <div
                        className='login-items'>
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
                        }))}
                            required/>

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
                        }))}
                            required/>
                    </div>
                    <p className='login-Links'><Link>Forgot Password?</Link></p>
                    <div>
                        <button
                            className='button'
                            onClick={handleLogin}>Login</button>
                    </div>
                        <button className='button' onClick={() => userLogged(testCreds)}>Test User</button>
                        <p className='login-Links'>Don't have an account?
                            <Link to="/signup">Create Account</Link>
                        </p>
                    </div>
                </div> 
            ):(
                <>
                    <div>
                        <h1 className='login-h1'><FaUserAlt /> User Details</h1>
                        <p className='login-p'><span className='user-details-span'>Name:</span> {user.firstName} {user.lastName}</p>
                        <p className='login-p'><span className='user-details-span'>Email-id:</span> {user.email}</p>
                        
                    </div>
                    <div>
                     <button
                        className='button'
                        onClick={userLogout}>Logout</button>
                    </div>
                </>
            )}
            
            <ToastContainer limit={4}/>
        </div>
    )
}

