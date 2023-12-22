import React, { useState } from "react";

import "./Experience.css";

import ExperienceDate from "./ExperienceDate";
import Card from "../UI/Card";

const Experience = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Card className="experience">
      <div
        className="experience-inside-items"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="experience-header">
          <div className="experience-description">
            <p>{props.experience.position}</p>
            <p>{props.experience.company}</p>
            <p>{props.experience.location}</p>
          </div>
        </div>
        <h3 className="accordion-extender">{isActive ? "-" : "+"}</h3>
      </div>
      {isActive && (
        <div
          className="accordion-content"
          onClick={() => setIsActive(!isActive)}
        >
          <ul>
            {props.experience.description.map((item) => (
              <li>{item}</li>
            ))}
            ;
          </ul>
        </div>
      )}
    </Card>
  );
};

export default Experience;
