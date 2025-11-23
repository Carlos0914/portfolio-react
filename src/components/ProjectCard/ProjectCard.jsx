/* eslint-disable react/prop-types */
import { strings } from "../../locales/LocalizedStrings";
import logos from "../../assets/logos";
import projectlogos from "../../assets/projectlogos";
import { Calendar, Globe, Globe2 } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  const project = strings.projects[data.key];

  return (
    <div className="project-card">
      <div className="card-header">
        <img 
          src={projectlogos[data.media]} 
          alt={data.title} 
          className="project-logo"
        />
      </div>
      
      <div className="card-content">
        <h3 className="project-title">{data.title}</h3>
        <p className="project-description">{project?.description}</p>
        
        <div className="project-meta">
          <div className="meta-row">
            <Calendar size={16} />
            <span>{project?.dates['0']} ({project?.dates[1]})</span>
          </div>
          
          {data.sites?.map((site, index) => (
            <div className="meta-row" key={index}>
              {site.active ? (
                <Globe size={16} color="var(--accent-primary)" />
              ) : (
                <Globe2 size={16} color="var(--text-secondary)" />
              )}
              <a 
                href={site.url} 
                target="_blank" 
                rel="noreferrer" 
                className="site-link"
              >
                {site.url}
              </a>
            </div>
          ))}
        </div>

        <div className="tasks-list">
          <h4>{strings.projects.labels.tasks}</h4>
          <ul>
            {project?.tasks?.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack-mini">
          <div className="tech-icons">
            {data.technologies?.map((x) => (
              <div key={x} className="tech-icon" title={x}>
                <img src={logos[x].logo} alt={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
