import ContactForm from "./ContactForm";
import './contact.css'
import image from "../../assets/help-desk-temp.jpg"

const Contact = () => {

  return (
  <div>
    <div className="contact-page">
      <ContactForm />
      <div className="contact-text">
        <h1>Contact Us</h1>
        <hr/>
        <p>We would love to hear from you :)</p>
        <img src={image} alt=""/>
      </div>
    </div>
    <br />
  </div>
  );
}
export default Contact;
