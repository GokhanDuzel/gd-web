import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {/* Existing contact info */}
        <div className="contact-info-container">
          <FontAwesomeIcon className="icon contact-icon" icon={faLinkedin} />
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        </div>
        {/* New social media links */}
        <div className="contact-info-container">
          <FontAwesomeIcon className="icon contact-icon" icon={faTwitter} />
          <a href="https://twitter.com/yourprofile">Twitter</a>
        </div>
        <div className="contact-info-container">
          <FontAwesomeIcon className="icon contact-icon" icon={faGithub} />
          <a href="https://github.com/yourprofile">GitHub</a>
        </div>
      </div>
      <div className="contact-info-container">
        <FontAwesomeIcon className="icon contact-icon" icon={faEnvelope} />
        <p>email@example.com</p>
      </div>
      {/* New contact form */}
      <div className="contact-form-container">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
