import React from 'react'
import "./stylesheet/register_landing.css"
import { Link, useHistory } from "react-router-dom";
import NewsletterSignUp from '../footer/NewsletterSignUp';

const RegisterSection = () => {

    const history = useHistory();

    return (
        <>
            <div className="register">
                {/* <h6 className = "register-title">Register</h6>
                <button id = "hackie" onClick = {()=>history.push("/register")}  >Hackie </button>
                <button id = "mentor" onClick = {()=>history.push("/register")}>Mentor</button>
                */}
                <h1 className='register-title'>Registration Coming Soon!</h1>
                <p>Sign up for our newsletter to be the first to know when applications open!</p>
                <NewsletterSignUp/>
            </div>
            <div className='sponsor-link-div'>
                <span>Interested in becoming a Sponsor?&nbsp;</span>
                <Link to ='/sponsor' className="link">Learn more</Link> 
            </div>
        </>
    )
}

export default RegisterSection;
