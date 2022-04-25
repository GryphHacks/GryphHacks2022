import SocialBar from "./SocialBar"
import NewsletterSignUp from "./NewsletterSignUp";
import './stylesheet/footer.css';
import { FaAngleRight } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-container flex-container ">
          {/* Newsletter Sign Up Column */}
          <div className="col newsletter newsletter-form">
            <h4>Join our Newsletter</h4>
            <button id="newsletter-signup" onClick={ (e) => {
              e.preventDefault();
              window.open("https://7zz0jrazbwj.typeform.com/to/OQAkDkoX", "_blank");
            }}>
              <span>Sign up now<FaAngleRight size={15}/></span>
            </button>
          </div>
          {/* Socials Column */}
          <div className="col social">
            <h4>Stay Connected</h4>
            <SocialBar/>
          </div>
          {/* Contact Us Column */}
          <div className="col questions">
            <h4>Questions?</h4>
            <Link  to="/contact">Contact us here &nbsp;<FiMail size={15}/></Link>
          </div>
        </div>
    </footer>
    {/* Planned to have an SVG overlay the footer, but i have no idea how to do that lol */}
    {/* <img className="overlay-svg" src={CircuitImage} height="100"/> */}
    <div className="footer-bottom">
            <a  className="mlhLink" target = "_blank" href="https://mlh.io/code-of-conduct">
            <h7 className="mlhLink">MLH Code of Conducts&nbsp; | &nbsp;</h7>
            </a>
            <a  className="mlhLink"target = "_blank" href="https://mlh.io/privacy"
            ><h7 className="mlhLink">MLH Privacy Policy &nbsp; | &nbsp;</h7>
            </a>
            <a  className="mlhLink"target = "_blank" href="https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md"><h7 className="mlhLink">MLH Terms of Service</h7></a>
    </div>
    </>
  );
}

export default Footer;
