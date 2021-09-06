import Countdown from "../GeneralComponents/Countdown";
import NewsletterSignUp from "../GeneralComponents/NewsletterSignUp";
import Judges from "../GeneralComponents/SpeakerAndJudgesComponents/Judges"
import Speakers from "../GeneralComponents/SpeakerAndJudgesComponents/Speakers"
import LogoShowcase from "../GeneralComponents/SponsorComponents/LogoShowcase"
import SponsorCarousel from "../GeneralComponents/SponsorComponents/SponsorCarousel";
const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <br/>
      <Countdown/>
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
