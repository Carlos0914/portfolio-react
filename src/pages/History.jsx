import MainContainer from "../components/MainContainer";
import BilboLogo from "../assets/Bilbo.webp";
import ClickITLogo from "../assets/ClickIT.png";
import Image from "../components/Image";
import { memo, useState } from "react";
import {
  CalendarMonth,
  Computer,
  Label,
  Person,
  Public,
} from "@mui/icons-material";
import InfoRow from "../components/InfoRow";
import { Collapse } from "@mui/material";

const History = () => {
  const [index, setIndex] = useState(0);

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
      <InfoRow>
        <p>
          <CalendarMonth /> 2020 - 2021
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Person /> Backend web developer
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Label /> Web application development
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Computer />
          Ruby, Rails, PostgreSQL, JQuery
        </p>
      </InfoRow>
      <InfoRow>
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
      <InfoRow>
        <p>
          <CalendarMonth /> 2021 - Present
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Person /> Full stack developer
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Label /> Web application development
        </p>
      </InfoRow>
      <InfoRow>
        <p>
          <Computer />
          SQL & NoSQL databases, NodeJS, React, Javascript, Typescript, Hello
        </p>
      </InfoRow>
      <InfoRow>
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

  const ddstyle = {
    maxWidth: "500px",
    color: "#333333",
    width: "auto",
    background: "#AAAAAA",
    margin: "0 auto",
    padding: "1rem 0",
    borderRadius: "0 0 10px 10px",
    position: "relative",
    top: -14,
    zIndex: 0,
  };

  return (
    <MainContainer>
      <h2>Work history</h2>
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
          onClick={() => setIndex(0)}
        >
          <Image
            src={ClickITLogo}
            width={"calc(100% - 20px)"}
            style={{
              position: "relative",
              padding: "10px",
              background: "#333333",
              borderRadius: 10,
              margin: "0 auto",
              zIndex: 2,
              maxWidth: 500,
            }}
          />
          <Collapse in={index === 0} appear={true} sx={ddstyle}>
            <ClickITInfo />
          </Collapse>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto",
          }}
          onClick={() => setIndex(1)}
        >
          <Image
            src={BilboLogo}
            width={"calc(100% - 20px)"}
            style={{
              position: "relative",
              padding: "10px",
              background: "#333333",
              borderRadius: 10,
              margin: "0 auto",
              zIndex: 2,
              maxWidth: 500,
            }}
          />
          <Collapse in={index === 1} appear={true} sx={ddstyle}>
            <BilboInfo />
          </Collapse>
        </div>
      </div>
    </MainContainer>
  );
};

export default History;
