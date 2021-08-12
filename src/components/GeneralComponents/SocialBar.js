import { 
  FaDiscord, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin} from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div>
      <a href="https://discord.gg/JkBSZWY3" style={linkStyle}><FaDiscord size = {28}/></a>
      <a href = "https://www.instagram.com/gryphhacks/" style={linkStyle}><FaInstagram size = {28} textDecoration={'none'}/></a>
      <a href = "https://twitter.com/GryphHacks" style={linkStyle}><FaTwitter size = {28} textDecoration={'none'}/></a>
      <a href = "https://www.linkedin.com/company/gryphhacks/mycompany/" style={linkStyle}><FaLinkedin size = {28} textDecoration={'none'}/></a>
    </div>
  )
}

const linkStyle = {
  margin: "10px",
  color: "inherit"
};

export default SocialBar;