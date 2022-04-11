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
                <h1 className='register-title'>Applications are now open!</h1>
                {/* <p>Apply to be a Hackie at Gryphhacks 2022!</p> */}
                <button id="typeform-signup" onClick={ (e) => {
                    e.preventDefault();
                    window.open("https://7zz0jrazbwj.typeform.com/to/v9Msd4Sj", "_blank");
                }}>
                    <span>Apply Now</span>
                </button>
            </div>
            <div className='sponsor-link-div'>
                <h6>Interested in becoming a Sponsor?&nbsp;
                    <Link to ='/sponsor' className="link">Learn more</Link> 
                </h6>
            </div>
        </>
    )
}

export default RegisterSection;
