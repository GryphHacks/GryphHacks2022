import { first, last } from "lodash";
import SocialBar from "../GeneralComponents/SocialBar"
import ContactForm from "../GeneralComponents/ContactForm";
import NewsletterSignUp from "../GeneralComponents/NewsletterSignUp";

const Contact = () => {

  return (
    <div>
      <h1>Contact Us!</h1>
      <br />
      <ContactForm />
      <SocialBar />
    </div>
  );
}
export default Contact;
