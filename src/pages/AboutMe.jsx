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
  TextSnippet,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const AboutMe = () => {
  const InfoRow = styled("span")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    "& p": {
      margin: 0,
    },
  });

  return (
    <MainContainer>
      <div style={{ lineHeight: 1.75 }}>
        <Image
          src={ProfilePicture}
          width={350}
          height={480}
          style={{ float: "left", margin: "0 3rem 0 0" }}
        />
        <h2>About me</h2>
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
              <h4 style={{ margin: 0, marginBottom: 8 }}>
                Bachelor of Sciences, Applied Mathematics
              </h4>
              <InfoRow>
                <LocationOn /> Autonomous University of Coahuila
                <p>|</p>
                <CalendarMonth /> 2017 - 2022
              </InfoRow>
              <InfoRow>
                <TextSnippet /> Graduated with honors <p> | </p> <Assessment />{" "}
                96.88 / 100
              </InfoRow>
            </li>
          </ul>
          <ul>
            <li>
              <h4 style={{ margin: 0, marginBottom: 8 }}>
                AWS Certified Cloud Practitioner
              </h4>
              <InfoRow>
                <LocationOn /> Amazon Web Services
                <p>|</p>
                <CalendarMonth /> 2022
              </InfoRow>
            </li>
          </ul>
          <ul>
            <li>
              <h4 style={{ margin: 0, marginBottom: 8 }}>
                AWS Certified Developer Associate
              </h4>
              <InfoRow>
                <LocationOn /> Amazon Web Services
                <p>|</p>
                <CalendarMonth /> 2023
              </InfoRow>
            </li>
          </ul>
        </div>
        <div style={{ display: "flow-root" }}>
          <h2>
            <Engineering /> My Tech Stack
          </h2>
          <h3>Backend</h3>
          <h3>Frontend</h3>
          <h3>Cloud</h3>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutMe;
