import { useContext } from "react";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../utils/projectsInformation.json";
import "./Projects.css";

const Projects = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  return (
    <div className="projects-container">
      <Helmet>
        <title>{strings.meta.projects}</title>
      </Helmet>
      
      <h1>{strings.navbar.projects}</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
