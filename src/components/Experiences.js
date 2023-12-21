import "./Experiences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckPickup,
  faBuildingColumns,
  faHospital
} from "@fortawesome/free-solid-svg-icons";

const Experiences = () => {
  return (
    <div>
      <h3 className="part-title">Experiences:</h3>
      <div className="experiences-container">
        <div className="experiences-details-container">
          <FontAwesomeIcon icon={faTruckPickup} />
          <h3>Ford Motor Company</h3>
          <p>
            Software Infrastructure Student<br />
            Test Automation
          </p>
        </div>
        <div className="experiences-details-container">
          <FontAwesomeIcon icon={faBuildingColumns} />
          <h3>University of Ottawa</h3>
          <p>
            Student Co-op Analyst <br />
            Frontend Development (React Native)
          </p>
        </div>
        <div className="experiences-details-container">
          <FontAwesomeIcon icon={faBuildingColumns} />
          <h3>University of Ottawa</h3>
          <p>
            Student Web Developer <br />
            Full-Stack Development
          </p>
        </div>
        <div className="experiences-details-container">
          <FontAwesomeIcon icon={faHospital} />
          <h3>Acibadem Healthcare Group</h3>
          <p>
            Junior Web Developer <br />
            Full-Stack Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
