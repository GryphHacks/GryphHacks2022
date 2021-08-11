import SocialBar from "../GeneralComponents.js/SocialBar"

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <div>
      <h1>Contact Us!</h1>
      <br />
      <form id="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group" id="name-form">
          <div id="first-name-form">
            <label htmlFor="name">First Name</label>
            <input required type="text" className="form-control" />
          </div>
          <div id="last-name-form">
            <label htmlFor="name">Last Name</label>
            <input required type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea required className="form-control" rows="5"></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <br />
      <SocialBar />
    </div>
  );
}
export default Contact;
