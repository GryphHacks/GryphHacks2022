import TeamMemberList from "../GeneralComponents/TeamMemberList";
import SocialBar from "../GeneralComponents/SocialBar"
import TeamInfo from "../GeneralComponents/TeamInfo";

const About = () => {
    const members = [
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
        {
            name:"Andrew Linington",
            title:"System Administrator",
            image:"images/sampleImage.jpeg",
            social: {
                linkedin:"https://daveceddia.com/react-image-tag/"
            }
        },
    ]

    return (
        <div>
            <TeamInfo/>
            <br/>
            <TeamMemberList data = {members}/>
            <br/>
            <SocialBar/>
        </div>
    )
};

export default About;
