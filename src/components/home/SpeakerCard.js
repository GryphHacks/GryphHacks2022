import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import "./stylesheet/speakers.css"

const SpeakerCard = ({ member }) => {
  return (
    <div className="cardStyle">
      <img style={photoStyle} alt={member.name} src={member.image} />
      <div style={infoCardStyle}>
        <h4>{member.name}</h4>
        <h5 style={{fontSize: "15px"}}>{member.role}</h5>
        <br/>
        <p>{member.description}</p>
        <div className='speaker-socials'>
          {member.social.linkedin && <a href = {member.social.linkedin}  target='_blank' rel='noreferrer'><FaLinkedin size = {25} textDecoration={'none'}/></a>}
          {member.social.instagram && <a href = {member.social.instagram}  target='_blank' rel='noreferrer'><FaInstagram size = {25} textDecoration={'none'}/></a>}
          {member.social.github && <a href = {member.social.github}  target='_blank' rel='noreferrer'><FaGithub size = {25} textDecoration={'none'}/></a>}
          {member.social.twitter && <a href = {member.social.twitter}  target='_blank' rel='noreferrer'><FaTwitter size = {25} textDecoration={'none'}/></a>}
        </div>
      </div>
    </div>
  );
}

// main Speakers component content - Speaker Card (photo and info section)
// image in Speaker Card
const photoStyle = {
  borderRadius: "50%",
  border: "7px solid rgba(221,17,51,.73)",
  height: "225px",
  width: "225px",
  padding: "1px"
};

// info section in Speaker Card
const infoCardStyle = {
  textAlign: "left",
  position: "relative",
  backgroundColor: "#8A8A8A",
  color: "white",
  padding: "4%",
  width: "60%",
  borderRadius: "10px",
  boxShadow: "-3px 3px 3px rgb(122,122,122)",
};

// bottom layer of info section of Speaker Card
const layerStyle = {
  position: "absolute",
  zIndex: "-1", // z-index applies only to absolutely positioned elements
  height: "100%",
  width: "100%",
  top: "8px",
  right: "8px",
  backgroundColor: "rgba(221,17,51,.73)",
  borderRadius: "10px",
  boxShadow: "-5px 5px 10px rgb(180, 186, 194)",
};

export default SpeakerCard;
