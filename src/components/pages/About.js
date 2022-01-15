import TeamMemberList from "../GeneralComponents/TeamMemberList";
import SocialBar from "../GeneralComponents/SocialBar"
import TeamInfo from "../GeneralComponents/TeamInfo";
import members from "../../data/team.json";

const About = () => {
    return (
        <div>
            <TeamInfo/>
            <br/>
            <TeamMemberList data = {members}/>
            <br/>
            <SocialBar/>
        </div>
    )
}

export default About;
