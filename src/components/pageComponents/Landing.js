import Judges from "../GeneralComponents/SpeakerAndJudgesComponents/Judges"
import Speakers from "../GeneralComponents/SpeakerAndJudgesComponents/Speakers"
import LogoShowcase from "../GeneralComponents/SponsorComponents/LogoShowcase"
const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h2>Landing</h2>
       <LogoShowcase/>
       <br/>  
       <Judges/>
       <br/>
       <Speakers/>
    </div>
  );
};

export default Landing;
