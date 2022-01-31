import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import './stylesheet/team-members.css'

const TeamMember = ( {member} ) => {
    return (
        <div className='team-member-card'>
            <img width="175" height="175" alt={member.name} className='member-picture' src={member.image}/>
            <h5> {member.name} </h5>
            <p> {member.title} </p>
            <div className='member-socials'>
            {member.social.linkedin && <a href = {member.social.linkedin}  target='_blank'><FaLinkedin size = {28} textDecoration={'none'}/></a>}
                {member.social.instagram && <a href = {member.social.instagram}  target='_blank'><FaInstagram size = {29} textDecoration={'none'}/></a>}
                {member.social.github && <a href = {member.social.github}  target='_blank'><FaGithub size = {27} textDecoration={'none'}/></a>}
            </div>
        </div>
    )
};

export default TeamMember;
