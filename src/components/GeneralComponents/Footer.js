import SocialBar from "./SocialBar"
import NewsletterSignUp from "./NewsletterSignUp";
import '../stylesheet/footer.css';
import CircuitImage from '../../assets/FooterCircuit.svg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="wrapper">
          {/* Newsletter Sign Up Column */}
          <div className="col">
            <h4>Join our Newsletter</h4>
            <NewsletterSignUp/>
          </div>
          {/* Socials Column */}
          <div className="col">
            <h4>Stay Connected</h4>
            <SocialBar/>
          </div>
          {/* Contact Us Column */}
          <div className="col">
            <h4>Questions?</h4>
              <Link to="/contact">Contact us</Link>
          </div>
        </div>
    </footer>
    <img className="overlay-svg" src={CircuitImage} height="100"/>
    <div className="footer-bottom">
      <p>Made with&nbsp; ♥ &nbsp;by the GryphHacks team.</p>
    </div>
    </>
  );
}

export default Footer;
