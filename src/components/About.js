import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import Experiences from "./Experiences";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="text-ed-container">
            <div className="text-container">
              <h4>
                Hi! <FontAwesomeIcon icon={faHandPeace} />
              </h4>
              <p>
              My name is Gökhan. I am a passionate Software Engineer
              From Ottawa. I graduated from The University of Ottawa Software 
              Engineering Program. I am currently improving my skills on 
              Full-Stack Development, Cloud Technologies and Blockchain Technologies.
              You can learn more about my projects below.
              </p>
            </div>
            <Education />
          </div>
          <Experiences />
        </div>
      </div>
    </section>
  );
};

export default About;
