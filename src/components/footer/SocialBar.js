import { 
  FaDiscord, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
} from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div>
      <a href="https://discord.gg/MRvDuxCjWY" target="_blank"><FaDiscord style={iconStyle} size = {28}/></a>
      <a href="https://www.instagram.com/gryphhacks/" target="_blank"><FaInstagram style={iconStyle} size = {28} textDecoration={'none'}/></a>
      <a href="https://twitter.com/GryphHacks" target="_blank"><FaTwitter style={iconStyle} size = {28} textDecoration={'none'}/></a>
      <a href="https://www.linkedin.com/company/gryphhacks/mycompany/" target="_blank"><FaLinkedin style={iconStyle} size = {28} textDecoration={'none'}/></a>
    </div>
  )
}

const iconStyle = {
  margin: '10px',
  color: '#FFC14A',
}

export default SocialBar;