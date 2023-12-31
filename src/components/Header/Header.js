import "./Header.css";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <NavBar />
      <div className="hero">
        <h1>GÖKHAN DÜZEL</h1>
        <h3>SOFTWARE ENGINEER</h3>
        <div className="btn-grp">
          <a className="btn btn-full" href="#">
            Download CV
          </a>
          <a className="btn btn-ghost" href="#">
            Contact Info
          </a>
        </div>
        <p className="warmer">Get To Know More</p>
        <FontAwesomeIcon className="arrow" icon={faAngleDown} />
      </div>
    </>
  );
};

export default Header;
