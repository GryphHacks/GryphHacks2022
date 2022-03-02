import TeamMemberList from "./TeamMemberList";
import members from "../../data/team.json";
import './stylesheet/about.css'

const About = () => {
    return (
        
        <div className="page-content">
            <h2 className="section-title">WHO WE ARE</h2>
            <div id= "about">
                <p>
                    Gryphhacks is the University of Guelph's first-ever, official hackathon! 
                    GryphHacks consists of a team full of diverse students who are passionate about innovation and technology. 
                    Our yearly goal is to organize a weekend full of collaboration, entrepreneurship and innovation at its finest, 
                    while generating potential high-value product concepts and prototypes over a 48-hour period.
                </p>
                <p>
                    Although we were super excited to welcome everyone to the University of Guelph to meet and collaborate with everyone in-person,
                    the health and safety of our hackies, mentors, and judges remain our top priority. As a result, 
                    we are hosting a fully virtual hackathon this year, open for everyone to join!
                </p>
            </div>
            <h2 className="section-title">MEET OUR TEAM</h2>
            <TeamMemberList data = {members}/>
        </div>
    )
}

export default About;
