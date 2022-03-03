import React from 'react'
import SponsorPamphlet from '../test.pdf'
import { Link, useHistory } from 'react-router-dom'
import './stylesheet/sponsor_landing.css'

const SponsorLanding = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className='section-title'>SPONSOR US</h1>
            <div className='sponsor-landing-wrapper'>
                <h5>The key to any successful hackathon are sponsors. From providing mentorship, to opening gateways
                     to exciting opportunities, YOU are the reason our hackers can aim for the stars!
                </h5>
                <div className='sponsor-landing-card'>
                    <p> We provide companies the opportunity to gain valuable insight and feedback from 300+
                        emerging developers, entrepreneurs and designers. Our hackers will innovate potentially 
                        using your products & technologies to bring their ideas to life. By sponsoring GryphHacks, 
                        you will also be able to interact and build relations with potential future employees in a 
                        new setting unlike a traditional interview!
                    </p>
                    <div className='become-sponsor'>
                        <button className='red-button sponsor-button' onClick = {()=>history.push("/sponsor")}>Become a Sponsor </button>
                        <Link id = "link"to = {SponsorPamphlet} target = "_blank">Sponsor's PDF</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorLanding
