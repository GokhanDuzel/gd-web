import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const NavBar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <a href="#">GD</a>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a className="action-btn" href="#">
          Download CV
        </a>
        <div className="toggle-btn">
          {navExpanded ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setNavExpanded(!navExpanded);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setNavExpanded(!navExpanded);
              }}
            />
          )}
        </div>
      </nav>

      {navExpanded && (
        <nav className="nav-dropdown">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a className="action-btn" href="#">
              Download CV
            </a>
          </li>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
