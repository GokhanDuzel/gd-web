import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import Experiences from "./Experiences";

const About = () => {
  return (
    <section className="" id="about">
      <p className="warmer">Get To Know More</p>
      <FontAwesomeIcon className="arrow" icon={faAngleDown} />
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <Education />
            <Experiences />
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
};

export default About;
