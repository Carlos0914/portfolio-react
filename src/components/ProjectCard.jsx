/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import InfoRow from "./InfoRow";
import { CalendarMonth, Public, PublicOff } from "@mui/icons-material";
import { styled } from "@mui/system";
import Image from "./Image";
import logos from "../assets/logos";
import projectlogos from "../assets/projectlogos";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ data }) => {
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  const SiteLink = styled("a")({
    width: 250,
    textAlign: "left",
    "@media (max-width: 599px)": { textAlign: "center" },
  });

  useEffect(() => {
    setCardHeight(cardRef.current?.clientHeight || 0);
  }, [cardRef]);

  return (
    <Card
      ref={cardRef}
      sx={{
        position: "relative",
        maxWidth: "500px",
        overflow: "auto",
        width: "calc(100% - 28px)",
        color: "black",
        margin: "0 auto",
        maxHeight: "calc(100% - 2rem)",
        overflowY: "auto",
        border: "1px solid #DDDDDD",
        borderRadius: "20px",
        paddingBottom: "16px",
        boxShadow: "8px 8px 6px #8a8686",
      }}
    >
      <CardHeader title={data.title} style={{ fontStyle: "italic" }} />
      <CardMedia
        component="img"
        image={projectlogos[data.media]}
        alt="logo"
        sx={{
          objectFit: "contain",
          padding: "0 20px",
          width: "calc(100% - 40px)",
        }}
        height="216"
      />
      <div
        style={{
          maxHeight: `calc(${
            cardHeight ? `${cardHeight}px` : "100%"
          } - 64px - 248px)`,
          overflow: "auto",
          marginBottom: 16
        }}
      >
        <CardContent>
          <Typography align="center" fontStyle="italic">
            {data.description}
          </Typography>
        </CardContent>
        <InfoRow>
          <CalendarMonth /> {data.start} {data.end && "-"} {data.end}{" "}
          <span style={{ color: "#777777" }}>({data.duration})</span>
        </InfoRow>

        {data.sites?.map((site, index) => (
          <InfoRow key={index}>
            {site.active ? (
              <Public sx={{ color: "green" }} />
            ) : (
              <PublicOff sx={{ color: "red" }} />
            )}{" "}
            <SiteLink href={site.url} target="_blank" rel="noreferrer">
              {site.url}
            </SiteLink>
          </InfoRow>
        ))}
        <h4>Key tasks performed</h4>
        <ul
          style={{
            textAlign: "left",
            margin: "0 16px",
            listStyle: "inside",
            fontSize: "0.875rem",
          }}
        >
          {data.tasks?.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <h4>Technologies</h4>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {data.technologies?.map((x) => (
            <Image
              key={x}
              src={logos[x].logo}
              width={64}
              style={{ borderRadius: 0 }}
            />
          ))}
        </span>
      </div>
    </Card>
  );
};

export default ProjectCard;
