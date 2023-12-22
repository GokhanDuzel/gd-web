import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <FontAwesomeIcon
            className="icon contact-icon email-icon"
            icon={faEnvelope}
          />
          <p>
            <a href="mailto:examplemail@gmail.com">gduzel@icloud.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <FontAwesomeIcon className="icon contact-icon" icon={faLinkedin} />
          <p>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
