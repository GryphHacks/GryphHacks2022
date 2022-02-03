import Countdown from "./Countdown";
import Judges from "./Judges"
import Speakers from "./Speakers"
import LogoShowcase from "./LogoShowcase"
import SponsorCarousel from "./SponsorCarousel";
import RegisterSection from "./RegisterSection";
import SponsorLanding from "./SponsorLanding";
import Mission from "./Mission";
import './stylesheet/landing.css'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div id = "topLandingcontainer">
        <div className = "div">
          <div>
            <h1 className="gryph">Gryph</h1> 
            <h1 className="hacks">Hacks</h1>
          </div>
          <div className = "info-section">
            <h3 className = "date">March 11-12,2022</h3>
            <h3 className = "separator">&nbsp;|&nbsp;</h3>
            <h3 className = "date">Virtual Hackathon</h3>
          </div>
          <Countdown/>
          <RegisterSection/>
        </div>
      </div>
      {/* Insert Mission component*/}
      <Mission/>
      <br/><br/><br/>
      <SponsorLanding title = "Sponsor Us" info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <br/><br/><br/>
      <SponsorCarousel/>
      <br/><br/><br/>
      <LogoShowcase/>
      <br/>  
      <Judges/>
      <br/>
      {/* <Speakers/> */}
      <br/>
    </div>
  );
};

export default Landing;
