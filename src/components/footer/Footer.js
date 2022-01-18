import SocialBar from "./SocialBar"
import NewsletterSignUp from "./NewsletterSignUp";
import './stylesheet/footer.css';
import CircuitImage from '../../assets/FooterCircuit.svg';
import { FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="wrapper">
          {/* Newsletter Sign Up Column */}
          <div className="col newsletter">
            <h4>Join our Newsletter</h4>
            <NewsletterSignUp/>
          </div>
          {/* Socials Column */}
          <div className="col social">
            <h4>Stay Connected</h4>
            <SocialBar/>
          </div>
          {/* Contact Us Column */}
          <div className="col questions">
            <h4>Questions?</h4>
              <Link to="/contact">Contact us <FiMail/></Link>
          </div>
        </div>
    </footer>
    {/* Planned to have an SVG overlay the footer, but i have no idea how to do that lol */}
    {/* <img className="overlay-svg" src={CircuitImage} height="100"/> */}
    <div className="footer-bottom">
      <p>Made with&nbsp; ♡ &nbsp;by the GryphHacks team.</p>
    </div>
    </>
  );
}

export default Footer;
