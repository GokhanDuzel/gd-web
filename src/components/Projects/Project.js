import ImageSlider from "./ImageSlider";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({title, description, images, githubLink}) => {
  return (
    <div className="project-container">
      <ImageSlider images={images}/>
      <h3 className="project-title">{title}</h3>
      <p>{description}</p>
      <a href={githubLink}><FontAwesomeIcon className="github-button" icon={faGithub} /></a>
    </div>
  );
};

export default Project;
