import MainContainer from "../components/MainContainer";
import ProfilePicture from "../assets/pp.png";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import {
  Assessment,
  CalendarMonth,
  Engineering,
  LocationOn,
  School,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import logos from "../assets/logos";

const AboutMe = () => {
  const InfoRow = styled("span")({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    gap: 10,
    rowGap: 0,
    "& p": {
      margin: 0,
    },
  });

  const IconsContainer = styled("span")({
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  });

  const Separator = styled("p")({
    display: "none",
    margin: "0 10px !important",
    "&::before": {
      content: '"|"',
    },
    "@media (min-width: 760px)": {
      display: "block",
    },
  });

  return (
    <MainContainer>
      <div style={{ lineHeight: 1.75 }}>
        <h2>About me</h2>
        <Image src={ProfilePicture} width={350} style={{float: 'left', margin: "0 3rem 1rem 0"}}/>
        <p style={{ textAlign: "justify" }}>
          Hello! My name is Carlos López, I&apos;m an applied mathematics
          graduate who made his way in the software development market, I&apos;m
          a backend biased fullstack web developer and I always love to learn
          about the trending tech topics. In this page, you can find information
          about me, such as my education, my tech stack, interests and hobbies.{" "}
          <br />
        </p>
        <p style={{ textAlign: "justify" }}>
          If you want to, you can also learn about my{" "}
          <Link to="/history">work history</Link>, my{" "}
          <Link to="/projects">projects</Link> and{" "}
          <Link to="/random">random stuff</Link> about me.
        </p>
        <div style={{ display: "flow-root" }}>
          <h2>
            <School /> Education
          </h2>
          <ul>
            <li>
              <h4 style={{ margin: "8px 0" }}>
                Bachelor of Sciences, Applied Mathematics
              </h4>
              <InfoRow>
                <span>
                  <LocationOn /> Autonomous University of Coahuila
                </span>
                <Separator />
                <span>
                  <CalendarMonth /> 2017 - 2022
                </span>
              </InfoRow>
              <InfoRow>
                <span>
                  <School /> Graduated with honors
                </span>
                <Separator />
                <span>
                  <Assessment /> 96.88 / 100
                </span>
              </InfoRow>
            </li>
            <li>
              <h4 style={{ margin: "8px 0" }}>
                AWS Certified Cloud Practitioner
              </h4>
              <InfoRow>
                <span>
                  <LocationOn /> Amazon Web Services
                </span>
                <Separator />
                <span>
                  <CalendarMonth /> 2022
                </span>
              </InfoRow>
            </li>
            <li>
              <h4 style={{ margin: "8px 0" }}>
                AWS Certified Developer Associate
              </h4>
              <InfoRow>
                <span>
                  <LocationOn /> Amazon Web Services
                </span>
                <Separator />
                <span>
                  <CalendarMonth /> 2023
                </span>
              </InfoRow>
            </li>
          </ul>
        </div>
        <div style={{ display: "flow-root" }}>
          <h2>
            <Engineering /> My Tech Stack
          </h2>
          <h3>Main Stack</h3>
          <IconsContainer>
            {["MONGODB", "EXPRESS", "REACT", "NODE"]
              .map((x) => logos[x])
              .map((x) => (
                <Image
                  key={x.name}
                  src={x.logo}
                  width={64}
                  style={{ borderRadius: 0 }}
                />
              ))}
          </IconsContainer>
          <h3>Programming Languages</h3>
          <IconsContainer>
            {Object.values(logos)
              .filter((x) => x.tags.includes("language"))
              .map((x) => (
                <Image
                  key={x.name}
                  src={x.logo}
                  width={64}
                  style={{ borderRadius: 0 }}
                />
              ))}
          </IconsContainer>
          <h3>Backend</h3>
          <IconsContainer>
            {Object.values(logos)
              .filter((x) => x.tags.includes("backend"))
              .map((x) => (
                <Image
                  key={x.name}
                  src={x.logo}
                  width={64}
                  style={{ borderRadius: 0 }}
                />
              ))}
          </IconsContainer>
          <h3>Frontend</h3>
          <IconsContainer>
            {Object.values(logos)
              .filter((x) => x.tags.includes("frontend"))
              .map((x) => (
                <Image
                  key={x.name}
                  src={x.logo}
                  width={64}
                  style={{ borderRadius: 0 }}
                />
              ))}
          </IconsContainer>
          <h3>Databases</h3>
          <IconsContainer>
            {Object.values(logos)
              .filter((x) => x.tags.includes("database"))
              .map((x) => (
                <Image
                  key={x.name}
                  src={x.logo}
                  width={64}
                  style={{ borderRadius: 0 }}
                />
              ))}
          </IconsContainer>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutMe;
