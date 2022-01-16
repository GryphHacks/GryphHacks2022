import { 
  FaDiscord, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
} from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div>
      <a href="https://discord.gg/JkBSZWY3"><FaDiscord style={iconStyle} size = {28}/></a>
      <a href = "https://www.instagram.com/gryphhacks/"><FaInstagram style={iconStyle} size = {28} textDecoration={'none'}/></a>
      <a href = "https://twitter.com/GryphHacks"><FaTwitter style={iconStyle} size = {28} textDecoration={'none'}/></a>
      <a href = "https://www.linkedin.com/company/gryphhacks/mycompany/"><FaLinkedin style={iconStyle} size = {28} textDecoration={'none'}/></a>
    </div>
  )
}

const iconStyle = {
  margin: '10px',
  color: '#FFC14A',
}

export default SocialBar;