import React from 'react'
import Pdf from '../test.pdf'
import { Link,useHistory } from 'react-router-dom'
import '../GeneralComponents/stylesheet/SponsorLanding.css'
const SponsorLanding = ({title,info}) => {
    const history = useHistory();
    return (
        <div>
            <h1 id = "title">{title}</h1>

            <div id = "container1">
            <div id = "textContainer">
            <p id = "p1">{info}</p>
            </div>

            <button id= "button"onClick = {()=>history.push("/sponsor")}  >Become a Sponsor </button>
 
            <Link id = "link"to = {Pdf} target = "_blank">Sponsor's PDF</Link>
            </div>
           
            
        </div>
    )
}

export default SponsorLanding
