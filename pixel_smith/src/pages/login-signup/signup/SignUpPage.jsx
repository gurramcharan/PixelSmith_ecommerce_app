import React, {useContext, useState} from 'react'
import "../LoginPage.css"
import {Link} from "react-router-dom";
import {AuthContext} from '../../../contexts/AuthContext';
import {MdVisibilityOff, MdVisibility} from "react-icons/md"

export const SignUpPage = () => {
    const {signUpUser} = useContext(AuthContext);

    const [signupData, setSignupData] = useState({email:"", password:"",firstname:"",lastname:""})

    const [passwordType,
        setPasswordType] = useState("password")

    const [rePasswordType,
        setRePasswordType] = useState("password")

    
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    const handleSignUp = () => {
        signUpUser(signupData)
    }

    const toggleRePassword = () => {
        if (rePasswordType === "password") {
            setRePasswordType("text")
        } else {
            setRePasswordType("password")
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
                    <div  className='login-inputs-password'>
                    <input
                        type={passwordType}
                        name="password"
                        value={signupData.password}
                        id="login-input-password"
                        className='password-inputs'
                        onChange={(e) => setSignupData(prev => ({...prev,password:e.target.value}))}
                        placeholder='password'/>
                    <button className='password-inputs password-visibility-btn' onClick={togglePassword}>{passwordType === "text" ? <MdVisibility /> : <MdVisibilityOff />}</button>
                    </div>
                </div>
                <div className='flex-column'>

                    <label htmlFor="Re-passoword" className='label'>Enter your password again*</label>
                    <div className='login-inputs-password'>
                        <input
                            type={rePasswordType}
                            name="Re-password"
                            id="login-input-repassword"
                            className='password-inputs'
                            placeholder='Re-enter Password'/>
                        <button className='password-inputs password-visibility-btn' onClick={toggleRePassword}>{rePasswordType === "text" ? <MdVisibility /> : <MdVisibilityOff />}</button>
                    </div>
                </div>
                <button className='button' onClick={handleSignUp}>Sign Up</button>
                <p className='login-Links'>Already have an account?
                    <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    )
}
