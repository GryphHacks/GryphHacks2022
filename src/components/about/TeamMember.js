import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ReactImageAppear from 'react-image-appear';
import './stylesheet/team-members.css'

const TeamMember = ( {member} ) => {
    return (
        <div className='team-member-card'>
            <ReactImageAppear
            // TODO: this library can be used to easily add custom loading animations & placeholders for pictures
                src={member.image}
                className='member-picture'
                placeholderStyle={{ backgroundColor: 'var(--gryphyellow)', borderRadius: '50%' }}
                animation="fadeIn"
                easing="ease-in"
            />
            <h5> {member.name} </h5>
            <p> {member.title} </p>
            <div className='member-socials'>
                {member.social.linkedin && <a href = {member.social.linkedin}  target='_blank' rel='noreferrer'><FaLinkedin size = {28} textDecoration={'none'}/></a>}
                {member.social.instagram && <a href = {member.social.instagram}  target='_blank' rel='noreferrer'><FaInstagram size = {29} textDecoration={'none'}/></a>}
                {member.social.github && <a href = {member.social.github}  target='_blank' rel='noreferrer'><FaGithub size = {27} textDecoration={'none'}/></a>}
            </div>
        </div>
    )
};

export default TeamMember;
