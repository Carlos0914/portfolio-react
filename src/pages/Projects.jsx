import { Carousel } from "@trendyol-js/react-carousel";
import MainContainer from "../components/MainContainer";
import ProjectCard from "../components/ProjectCard";
import CarouselStyles from "../assets/styles/Carousel.module.css";
console.log(CarouselStyles);

const Projects = () => {
  return (
    <MainContainer reducePadding={true}>
      <h2>Projects</h2>
      <Carousel
        className={CarouselStyles.carousel}
        responsive={true}
        show={1}
        infinite
        swiping={true}
        swipeOn={0.25}
      >
        <ProjectCard
          data={{
            title: "Stellar menus",
            media: "/src/assets/logos/REACT.svg",
            description:
              "Restaurant management tool to create, edit and manage both digital and printed menus",
            start: 2022,
            end: 2023,
            duration: "1 Year",
            tasks: [
              "Created a React frontend with hooks for state management.",
              "Implemented multiple backend APIs (microservices architecture) in Nodejs using Express and Serverless frameworks.",
              "Developed RESTful endpoints that interacts with database tables through MongoDB queries.",
              "Designed user-friendly UI components such as modals, forms etc.",
            ],
            sites: [
              { url: "https://app.stellarmenus.com", active: true },
              { url: "https://menu.stellarmenus.com", active: true },
              { url: "https://print.stellarmenus.com", active: true },
            ],
            technologies: ["NODE", "REACT", "CSS", "MONGODB"],
          }}
        />
        <ProjectCard
          data={{
            title: "Stellar menus",
            media: "/src/assets/logos/REACT.svg",
            description:
              "2. Restaurant management tool to create, edit and manage both digital and printed menus",
          }}
        />
        <ProjectCard
          data={{
            title: "Stellar menus",
            media: "/src/assets/logos/REACT.svg",
            description:
              "3. Restaurant management tool to create, edit and manage both digital and printed menus",
          }}
        />
        <ProjectCard
          data={{
            title: "Stellar menus",
            media: "/src/assets/logos/REACT.svg",
            description:
              "4. Restaurant management tool to create, edit and manage both digital and printed menus",
          }}
        />
      </Carousel>
    </MainContainer>
  );
};

export default Projects;
