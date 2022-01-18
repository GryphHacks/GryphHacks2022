import React from 'react'
import "./stylesheet/register_landing.css"
import { Link, useHistory } from "react-router-dom";

const RegisterSection = () => {

    const history = useHistory();

    return (
        <div>
            <h6 className = "title">Register</h6>
            <button id = "hackie" onClick = {()=>history.push("/register")}  >Hackie </button>
            <button id = "mentor" onClick = {()=>history.push("/register")}>Mentor</button>
            <br/>
            <br/>
            <Link to ='/sponsor' className="link">Become a Sponsor</Link> 
        </div>
    )
}

export default RegisterSection;
