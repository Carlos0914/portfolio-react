import MainContainer from "../components/MainContainer";
import BilboLogo from "../assets/Bilbo.webp";
import ClickITLogo from "../assets/ClickIT.png";
import Image from "../components/Image";
import { memo, useEffect, useState } from "react";
import {
  CalendarMonth,
  Computer,
  Label,
  Person,
  Public,
} from "@mui/icons-material";
import InfoRow from "../components/InfoRow";
import { Collapse } from "@mui/material";
import { Helmet } from "react-helmet";
import { strings } from "../locales/LocalizedStrings";

const History = () => {
  const [index, setIndex] = useState(null);
  const {
    history: { clickit, bilbo },
  } = strings;

  useEffect(() => {
    setTimeout(() => setIndex(0), 400);
  }, []);

  // eslint-disable-next-line react/display-name
  const BilboInfo = memo(() => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0 20px",
      }}
    >
      <InfoRow style={{marginTop: 10}}>
        <p>
          <CalendarMonth /> 2020 - 2021
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Person /> {bilbo.role}
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Label /> {bilbo.line}
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Computer />
          {bilbo.tech}
        </p>
      </InfoRow>
      <InfoRow style={{marginBottom: 10}}>
        <p>
          <Public />{" "}
          <a
            style={{ color: "#333333" }}
            href="https://www.bilbo.mx"
            target="_blank"
            rel="noreferrer"
          >
            https://www.bilbo.mx
          </a>
        </p>
      </InfoRow>
    </div>
  ));

  // eslint-disable-next-line react/display-name
  const ClickITInfo = memo(() => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0 20px",
      }}
    >
      <InfoRow style={{marginTop: 10}}>
        <p>
          <CalendarMonth /> {clickit.date}
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Person /> {clickit.role}
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Label /> {clickit.line}
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Computer />
          {clickit.tech}
        </p>
      </InfoRow>
      <InfoRow style={{marginBottom: 10}}>
        <p>
          <Public />{" "}
          <a
            style={{ color: "#333333" }}
            href="https://www.clickittech.com"
            target="_blank"
            rel="noreferrer"
          >
            https://www.clickittech.com
          </a>
        </p>
      </InfoRow>
    </div>
  ));

  const imageStyle = {
    position: "relative",
    padding: "10px",
    background: "#333333",
    borderRadius: "10px 10px 0 0",
    margin: "0 auto",
    zIndex: 2,
    maxWidth: 500,
    cursor: "pointer",
  };

  const ddstyle = {
    maxWidth: "500px",
    color: "#333333",
    width: "auto",
    top: -6,
    background: "#AAAAAA",
    margin: "0 auto",
    borderRadius: "0 0 10px 10px",
    position: "relative",
    zIndex: 0,
  };

  return (
    <MainContainer>
      <Helmet>
        <title>{strings.meta.history}</title>
      </Helmet>
      <h2>{strings.navbar.history}</h2>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          gap: 16,
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Image
            onClick={() => setIndex(0)}
            src={ClickITLogo}
            width={"calc(100% - 20px)"}
            style={imageStyle}
          />
          <Collapse in={index === 0} appear={index === 0} sx={ddstyle}>
            <ClickITInfo style={index !== 0 ? {padding: 0} : {}}/>
          </Collapse>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Image
            onClick={() => setIndex(1)}
            src={BilboLogo}
            width={"calc(100% - 20px)"}
            style={imageStyle}
          />
          <Collapse in={index === 1} appear={index === 1} sx={ddstyle}>
            <BilboInfo />
          </Collapse>
        </div>
      </div>
    </MainContainer>
  );
};

export default History;
