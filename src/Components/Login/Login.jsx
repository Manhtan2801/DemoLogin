import React from "react";
import './Login.css'

import email_icon from '../Assets/Email.png'
import password_icon from '../Assets/password.png'

const Login = () => {
    return (
        <div className='container'>
            <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                     <img src={email_icon} alt="" /> 
                    <input type="text" name="username" placeholder="Email/Username"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                     <input type="password" name="password" placeholder="Password"/>
                </div> 
            </div>
            <div className="submit-container"> 
                <button className="submit">Login</button>              
            </div>
            <div className="Forgot-password">Lost Password?<span> Click here!</span></div>
            <div className="sign-up">Sign Up</div>    

        </div>
    )
}

export default Login