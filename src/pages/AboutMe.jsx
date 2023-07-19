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
import InfoRow from "../components/InfoRow";
import { Helmet } from "react-helmet";
import { strings } from "../locales/LocalizedStrings";

const AboutMe = () => {
  const IconsContainer = styled("span")({
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  });

  const Separator = styled("p")({
    display: "none !important",
    margin: "0 10px !important",
    "&::before": {
      content: '"|"',
    },
    "@media (min-width: 600px)": {
      display: "block !important",
    },
  });

  return (
    <MainContainer>
      <Helmet>
        <title>{strings.meta.home}</title>
      </Helmet>
      <div style={{ lineHeight: 1.75 }}>
        <h2>{strings.navbar.about}</h2>
        <Image
          src={ProfilePicture}
          width={350}
          style={{ float: "left", margin: "0 3rem 1rem 0" }}
        />
        <p style={{ textAlign: "justify" }}>
          {strings.home.line1}
          <br />
          {strings.home.line2}
          <br />
          {strings.home.line3}
          {/* <br />
          Feel free to explore the <Link to="/random">random</Link> tab to learn
          more about my interests and hobbies. */}
        </p>
        <p style={{ textAlign: "justify" }}>
          {strings.formatString(
            strings.home.line4,
            <Link to="/projects">{strings.navbar.projects}</Link>,
            <Link to="/history">{strings.navbar.history}</Link>
          )}
        </p>
        <div style={{ display: "flow-root" }}>
          <h2>
            <School /> {strings.home.education}
          </h2>
          <ul>
            <li>
              <h4 style={{ margin: "8px 0" }}>
                {strings.home.degree}
              </h4>
              <InfoRow>
                <span>
                  <LocationOn /> {strings.home.university}
                </span>
                <Separator />
                <span>
                  <CalendarMonth /> 2017 - 2022
                </span>
              </InfoRow>
              <InfoRow>
                <span>
                  <School /> {strings.home.note}
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
            <Engineering /> {strings.home.techStack}
          </h2>
          <h3>{strings.home.main}</h3>
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
          <h3>{strings.home.programming_languages}</h3>
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
          <h3>{strings.home.databases}</h3>
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
