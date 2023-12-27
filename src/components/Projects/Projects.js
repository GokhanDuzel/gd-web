import { Card } from "react-bootstrap";
import "./Projects.css";
import Project from "./Project";
import { PROJECT_DATA } from "./DUMMY_DATA";
import { useState } from "react";
import TabButton from "./TabButton";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECT_DATA[0])

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    <section>
      <div id="projects">
        <h1 className="title">Project</h1>
        <menu>
          {PROJECT_DATA.map((project) => (
            <TabButton 
              key={project.id}
              isSelected={selectedProject === project}
              onSelect={() => handleSelectProject(project)}
            >
              {project.title}
            </TabButton>
          ))}
        </menu>
        {selectedProject && <Project {...selectedProject} />}
      </div>
    </section>
  );
};

export default Projects;
