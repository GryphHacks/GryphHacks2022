import Countdown from "../GeneralComponents/Countdown";
import Judges from "../GeneralComponents/SpeakerAndJudgesComponents/Judges"
import Speakers from "../GeneralComponents/SpeakerAndJudgesComponents/Speakers"
import LogoShowcase from "../GeneralComponents/SponsorComponents/LogoShowcase"
import SponsorCarousel from "../GeneralComponents/SponsorComponents/SponsorCarousel";
import Register from "../GeneralComponents/Register";
import SponsorLanding from "../GeneralComponents/SponsorLanding";
import '../stylesheet/Landing.css'

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div id = "topLandingcontainer">
        <div className = "div">
          <div>
            <h1 className ="gryph">Gryph  </h1> 
            <h1 className = "hacks">Hacks</h1>
          </div>
          <div className = "divText">
            <h3 className = "date">March 11-12,2022</h3>
            <h3 className = "seperate">|</h3>
            <h3 className = "date">Virtual & in-person Hackathon</h3>
          </div>
        </div>
      </div>
      <br/><br/>
      <Countdown/>
      <br/><br/><br/>
      <SponsorCarousel/>
      <br/><br/><br/>
      <Register/>
      <SponsorLanding title = "Sponsor Us" info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <br/>
      <br/>
      <br/>
      <LogoShowcase/>
      <br/>  
      <Judges/>
      <br/>
      <Speakers/>
      <br/>
    </div>
  );
};

export default Landing;
