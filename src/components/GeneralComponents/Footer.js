import SocialBar from "./SocialBar"
import NewsletterSignUp from "./NewsletterSignUp";

const Footer = () => {
  return (
    <div id="footer">
      <div className="in-footer">
        <SocialBar />
      </div>
      <div className="in-footer">
        <NewsletterSignUp />
      </div>
    </div>
  );
}

export default Footer
