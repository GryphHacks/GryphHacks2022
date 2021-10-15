import Countdown from "../GeneralComponents/Countdown";
import NewsletterSignUp from "../GeneralComponents/NewsletterSignUp";
import Judges from "../GeneralComponents/SpeakerAndJudgesComponents/Judges"
import Speakers from "../GeneralComponents/SpeakerAndJudgesComponents/Speakers"
import LogoShowcase from "../GeneralComponents/SponsorComponents/LogoShowcase"
import SponsorCarousel from "../GeneralComponents/SponsorComponents/SponsorCarousel";
import Register from "../GeneralComponents/Register";
import SponsorLanding from "../GeneralComponents/SponsorLanding";
import "./Landing.css"
const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      
      <Countdown/>
      <Register/>

    

  
      
        <SponsorLanding title = "Sponsor Us" info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

      
      <br/>


      <br/><br/>
      <NewsletterSignUp/>
      <br/>
      <br/>
      <LogoShowcase/>
      <br/>  
      <Judges/>
      <br/>
      <Speakers/>
      <br/>
      <SponsorCarousel/>
    </div>
  );
};

export default Landing;
