import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faSchool } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div className="education-wrapper">
      <h4 className="part-title">Education:</h4>
      <div className="education-container">
        <div className="education-details-container">
          
          <h3><FontAwesomeIcon icon={faBuildingColumns} /> University of Ottawa</h3>
          <p>B.Sc. in Software Engineering</p>
        </div>
        <div className="education-details-container">
          
          <h3><FontAwesomeIcon icon={faSchool} /> Istanbul Saint-Joseph French High school</h3>
          <p>High school Diplome</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
