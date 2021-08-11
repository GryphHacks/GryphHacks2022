import { first, last } from "lodash";
import { useState } from "react";
import SocialBar from "../GeneralComponents/SocialBar";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e, firstName, lastName, email, message) => {
    e.preventDefault();
    handleErrors(firstName, lastName, email, message);
    if (hasError) return;
    console.log("Message sent successfully!");
  };

  const handleErrors = (firstName, lastName, email, message) => {
    if (firstName.length === 0) {
      setHasError(true);
      setError("Error: Enter your first name.");
    } else if (lastName.length === 0) {
      setHasError(true);
      setError("Error: Enter your last name.");
    } else if (email.length === 0) {
      setHasError(true);
      setError("Error: Enter your email.");
    } else if (message.length === 0) {
      setHasError(true);
      setError("Error: Enter a message.");
    } else {
      setHasError(false);
    }
  };

  return (
    <div>
      <h1>Get in touch!</h1>
      <br />
      <form
        id="contact-form"
        onSubmit={(e) => handleSubmit(e, firstName, lastName, email, message)}
      >
        <div className="form-group" id="name-form">
          <div id="first-name-form">
            <label htmlFor="name">First Name</label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div id="last-name-form">
            <label htmlFor="name">Last Name</label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            required
            className="form-control"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        {hasError && (
          <div>
            <br />
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
      </form>
      <br />
      <br />
      <br />
      <SocialBar />
    </div>
  );
};

export default ContactForm;
