import NewsletterSignUp from "../GeneralComponents/NewsletterSignUp";
import LogoShowcase from "../GeneralComponents/SponsorComponents/LogoShowcase"

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h2>Landing</h2>
      <br/>
      <br/>
      <NewsletterSignUp/>
      <br/>
      <br/>
      <LogoShowcase/>
    </div>
  );
};

export default Landing;
