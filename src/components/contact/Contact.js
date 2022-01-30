import ContactForm from "./ContactForm";
import './contact.css'

const Contact = () => {

  return (
  <div>
    <div className="contact-page">
      <ContactForm />
      <div className="contact-text">
        <h1>Contact Us</h1>
        <hr></hr>
        <p>We would love to hear from you :)</p>
      </div>
    </div>
    <br />
  </div>
  );
}
export default Contact;
