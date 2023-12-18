import "./Header.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navigation">
          <img src={logo} alt="Omnifood logo" className="logo" />
          <div className="navigation-menu">
            <ul className="main-nav">
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Certificates</a>
              </li>
              <li>
                <a href="#">Skills & Hobbies</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>GÖKHAN DÜZEL</h1>
          <h3>Software Engineer</h3>

          <a className="btn btn-full" href="#">
            About Me
          </a>
          <a className="btn btn-ghost" href="#">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
