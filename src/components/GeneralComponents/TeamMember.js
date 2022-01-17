import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import '../GeneralComponents/stylesheet/TeamInfo.css'
const TeamMember = ({member}) => {
    return (
        <div>
            <img width="200" height="200" alt={member.name + "'s Profile image"} id= "img"src={member.image}/>
            <h4 id = "textDes">
                {member.name}    
            </h4>
            <p id = "textDes">
                {member.title}
            </p>
            <div id = "icon">
                {member.social.instagram && <a href = {member.social.instagram} style={linkStyle}><FaInstagram size = {28} textDecoration={'none'}/></a>}
                {member.social.twitter && <a href = {member.social.twitter} style={linkStyle}><FaTwitter size = {28} textDecoration={'none'}/></a>}
                {member.social.linkedin && <a href = {member.social.linkedin} style={linkStyle}><FaLinkedin size = {28} textDecoration={'none'}/></a>}
            </div>
            <br/>
        </div>
    )
};

const linkStyle = {
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    margin: "10px",
    color: "inherit"
    };

export default TeamMember;
