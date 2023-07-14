import { Carousel } from "@trendyol-js/react-carousel";
import MainContainer from "../components/MainContainer";
import ProjectCard from "../components/ProjectCard";
import CarouselStyles from "../assets/styles/Carousel.module.css";
import projects from "../utils/projectsInformation.json";
import { isMobile } from "react-device-detect";

const Projects = () => {
  return (
    <MainContainer reducePadding={true}>
      <h2>Projects</h2>
      <Carousel
        className={CarouselStyles.carousel}
        responsive={true}
        infinite
        swiping={isMobile}
        swipeOn={0.15}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </Carousel>
    </MainContainer>
  );
};

export default Projects;
