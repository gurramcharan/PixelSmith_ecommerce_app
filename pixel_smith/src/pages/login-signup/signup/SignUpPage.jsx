import React, {useContext, useState} from 'react'
import "../LoginPage.css"
import {Link} from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';

export const SignUpPage = () => {
    const {signUpUser} = useContext(AuthContext);

    const [signupData, setSignupData] = useState({email:"", password:"",firstname:"",lastname:""})

    const [passwordType,
        setPasswordType] = useState("password")

    const [rePasswordType,
        setRePasswordType] = useState("password")

    // const [toggleIcon,
    //     setToggleIcon] = useState("visibility_off");

    // const [toggleReIcon,
    //     setToggleReIcon] = useState("visibility_off");

    
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            // setToggleIcon("visibility")
        } else {
            setPasswordType("password")
            // setToggleIcon("visibility_off")
        }
    }

    const handleSignUp = () => {
        signUpUser(signupData)
    }

    const toggleRePassword = () => {
        if (rePasswordType === "password") {
            setRePasswordType("text")
            // setToggleReIcon("visibility")
        } else {
            setRePasswordType("password")
            // setToggleReIcon("visibility_off")
        }
    }
    return (
        <div className='container'>
            <div>
                <h1 className='login-h1'>Sign Up</h1>
                <p className='login-p'>Hello New User! Sign Up using your email to explore the Store</p>
            </div>
            <div className='login-items'>
                <div className='flex-column'>

                    <label htmlFor="email" className='label'>Enter your Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={signupData.email}
                        id="login-input-email"
                        className='login-input'
                        onChange={(e) => setSignupData(prev => ({...prev,email:e.target.value}))}
                        placeholder='Email'/>
                </div>
                <div className='flex-column'>

                    <label htmlFor="first-name" className='label'>Enter your first-name*</label>
                    <input
                        type="text"
                        name="first-name"
                        id="login-input-first-name"
                        className='login-input'
                        onChange={(e) => setSignupData(prev => ({...prev,firstname:e.target.value}))}
                        placeholder='First Name'/>
                </div>
                <div className='flex-column'>

                    <label htmlFor="last-name" className='label'>Enter your last-name*</label>
                    <input
                        type="text"
                        name="last-name"
                        id="login-input-last-name"
                        className='login-input'
                        onChange={(e) => setSignupData(prev => ({...prev,lastname:e.target.value}))}
                        placeholder='Last Name'/>
                </div>
                <div className='flex-column'>

                    <label htmlFor="passoword" className='label'>Enter your Password*</label>
                    <input
                        type={passwordType}
                        name="password"
                        value={signupData.password}
                        id="login-input-password"
                        className='login-input'
                        onChange={(e) => setSignupData(prev => ({...prev,password:e.target.value}))}
                        placeholder='password'/>
                    <button onClick={togglePassword}>visible</button>
                </div>
                <div className='flex-column'>

                    <label htmlFor="Re-passoword" className='label'>Enter your password again*</label>
                    <input
                        type={rePasswordType}
                        name="Re-password"
                        id="login-input-repassword"
                        className='login-input'
                        placeholder='Re-enter Password'/>
                    <button onClick={toggleRePassword}>visible</button>
                </div>
                <button className='button' onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account?
                    <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    )
}
