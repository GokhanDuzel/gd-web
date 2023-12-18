import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="row">
            <img
              src="resources/css/img/logo.png"
              alt="Omnifood logo"
              class="logo"
            />
            <ul class="main-nav">
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
        <div class="hero-text-box">
          <h1>GÖKHAN DÜZEL</h1>
          <h3>Software Engineer</h3>

          <a class="btn btn-full" href="#">
            About Me
          </a>
          <a class="btn btn-ghost" href="#">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
