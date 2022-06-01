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
    <div>
      <div className="landing-background">
        <div className="landing-wrapper">
          <div className="splash-title">
            <h1 style={{color : 'var(--gryphyellow)'}}>&lt;Gryph</h1> 
            <h1 style={{color : 'var(--rubyred)'}}>Hacks/&gt;</h1>
          </div>
          <div className = "info-div">
            <h3 className = "info-text">May 20-22, 2022</h3>
            <h3 className = "separator">&nbsp;|&nbsp;</h3>
            <h3 className = "info-text">Virtual Hackathon</h3>
          </div>
          <Countdown/>
          <RegisterSection/>
        </div>
      </div>
      <Mission/>
      <SponsorLanding/>
      {/* <SponsorCarousel/> */}
      <LogoShowcase/>
      <Speakers/>
      <Judges/>
    </div>
  );
};

export default Landing;
