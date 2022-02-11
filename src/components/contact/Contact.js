import ContactForm from "./ContactForm";
import './contact.css'
import image from "../../assets/ContactDesk.svg"

const Contact = () => {

  return (
  <div>
    <div className="contact-page">
      <ContactForm />
      <div className="contact-text">
        <h1>Contact Us</h1>
        <hr/>
        <p>We would love to hear from you :)</p>
        <img className='contact-img' src={image} alt="person working at desk"/>
      </div>
    </div>
    <br />
  </div>
  );
}
export default Contact;
