import { FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const TeamMember = (props) => {
    const member = props.member;
    return (
        <div>
            <img width="200" height="200" alt={member.name + "'s Profile image"} src={member.image}/>
            <h4>
                {member.name}    
            </h4>
            <p>
                {member.title}
            </p>
            <div>
                {member.social.instagram && <a href = {member.social.instagram} style={linkStyle}><FaInstagram size = {28} textDecoration={'none'}/></a>}
                {member.social.twitter && <a href = {member.social.twitter} style={linkStyle}><FaTwitter size = {28} textDecoration={'none'}/></a>}
                {member.social.linkedin && <a href = {member.social.linkedin} style={linkStyle}><FaLinkedin size = {28} textDecoration={'none'}/></a>}
            </div>
        </div>
    )
};

const linkStyle = {
    margin: "10px",
    color: "inherit"
    };

export default TeamMember;
