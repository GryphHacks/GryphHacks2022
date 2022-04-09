import React from 'react'
import SponsorshipPdf from '../sponsors/GryphHacks_Sponsorship_Package.pdf'
import { Link, useHistory } from 'react-router-dom'
import './stylesheet/sponsor_landing.css'

const SponsorLanding = () => {
    const history = useHistory();
    return (
        <div>
            <div className='sponsor-landing-card'>
                <h1 className='section-title'>SPONSOR US</h1>
                <p> The support of our sponsors is what makes this hackathon possible.  
                    By sponsoring GryphHacks, you will be provided the opportunity to mentor, 
                    connect with, and recruit passionate and innovative minds.  Our hackers will 
                    use your products and technologies to bring their ideas to life, providing 
                    you valuable insight from 300+ emerging developers, entrepreneurs, and designers.  
                    <span className='sponsor-important'> 
                        &nbsp;If you’d like to support us in our mission to bring students together to challenge 
                        themselves and achieve their goals, check out our&nbsp; 
                        <Link id='sponsor-link' to = {SponsorshipPdf} target = "_blank">sponsorship packages.</Link>
                        {/* <Link to= "/sponsor" id='sponsor-link' >sponsorship packages.</Link> */}
                    </span>
                </p>
                <button className='red-button sponsor-button' onClick = {()=>history.push("/contact")}>Become a Sponsor</button>
            </div>
        </div>
    )
}

export default SponsorLanding
