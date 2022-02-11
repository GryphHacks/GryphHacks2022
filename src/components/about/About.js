import TeamMemberList from "./TeamMemberList";
import AboutInfo from "./AboutInfo";
import members from "../../data/team.json";
import './stylesheet/about.css'

const About = () => {
    return (
        
        <div>
            <div id= "mainContainer">
                <div id = "container">
                    <AboutInfo/>
                    <br/>
                    <h1 id = "title">MEET OUR TEAM</h1>
                    <br/>
                    <TeamMemberList data = {members}/>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default About;
