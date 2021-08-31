import { first, has, last, startCase } from "lodash";
import { useState } from "react";
import { store } from "react-notifications-component";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e, firstName, lastName, email, message) => {
    e.preventDefault();
    try {
      await handleErrors(firstName, lastName, email, message);
      sendEmail(e);
      displayNotification("success");
      document.querySelector("form").reset();
    } catch(e) {
      displayNotification(e.message);
      console.log(e)
    }
  };

  //throw error and catch in parent (handleSubmit) function
  const handleErrors = async (firstName, lastName, email, message) => {
    if (firstName.length === 0) {
      throw new Error("Enter your first name.");
    } else if (lastName.length === 0) {
      throw new Error("Enter your last name.");
    } else if (email.length === 0) {
      throw new Error("Enter your email.");
    } else if (message.length === 0) {
      throw new Error("Enter a message.");
    }
  };

  const displayNotification = (errorMessage) => {
    if (errorMessage === "success") {
      store.addNotification({
        title: "SUCCESS",
        message: "Message successfully sent!",
        type: "success",
        container: "top-right", // notification placement
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          touch: true,
        },
      });
    } else {
      store.addNotification({
        title: "ERROR",
        message: "errorMessage",
        type: "danger",
        container: "top-right", // notification placement
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          touch: true,
        },
      });
    }
  };

  //integrating EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // parameters: "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID"
    // e.target is whatever the user is submitting through the form
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SID,
        process.env.REACT_APP_EMAILJS_TID,
        e.target,
        process.env.REACT_APP_EMAILJS_UID
      )
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
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
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div id="last-name-form">
            <label htmlFor="name">Last Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="lastName"
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
            name="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            required
            className="form-control"
            name="message"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
};

export default ContactForm;
