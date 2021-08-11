import TeamMember from "../GeneralComponents/TeamMember";

const About = () => {
    const member = {
        name:"Andrew Linington",
        title:"System Administrator",
        image:"images/sampleImage.jpeg",
        social: {
            linkedin:"https://daveceddia.com/react-image-tag/"
        }
    }




    return (
        <div>
            <h2>About Us</h2>
            <br/>
            <TeamMember member = {member}/>
        </div>
    )
};

export default About;
