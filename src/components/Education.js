import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faSchool } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div>
      <h3 className="part-title">Education</h3>
      <div className="education-container">
        <h1></h1>
        <div className="education-details-container">
          <FontAwesomeIcon icon={faBuildingColumns} />
          <h3>University of Ottawa</h3>
          <p>B.Sc. in Software Engineering</p>
        </div>
        <div className="education-details-container">
          <FontAwesomeIcon icon={faSchool} />
          <h3>Istanbul Saint-Joseph French High school</h3>
          <p>High school Diplome</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
