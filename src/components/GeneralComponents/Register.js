import React from 'react'
import "../GeneralComponents/GeneralComponentsCSS/Register.css"
import { Link, useHistory } from "react-router-dom";
const Register = () => {
    const history = useHistory();
    return (
        <div>
            <h6 class = "title">Register</h6>
            <button id = "hackie" onClick = {()=>history.push("/register")}  >Hackie </button>
            <button id = "mentor" onClick = {()=>history.push("/register")}>Mentor</button>
           <br/>
           <br/>
  
            <Link to ='/sponsor' className="link">Become a Sponsor </Link> 

        </div>
    )
}

export default Register
