import "./Header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container">
      <NavBar />
      <div class="hero">
        <h1>GÖKHAN DÜZEL</h1>
        <h3>SOFTWARE ENGINEER</h3>
        <div>
          <a class="btn btn-full" href="#">
            Download CV
          </a>
          <a class="btn btn-ghost" href="#">
            Contact Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
