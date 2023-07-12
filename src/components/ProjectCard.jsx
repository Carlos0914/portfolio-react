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

const ProjectCard = ({ data }) => {
  const SiteLink = styled("a")({
    width: 250,
    textAlign: "left",
    "@media (max-width: 599px)": { textAlign: "center" },
  });

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: "500px",
        overflow: "auto",
        width: "calc(100% - 28px)",
        color: "black",
        margin: "0 auto",
        marginBottom: "2rem",
        border: "1px solid #DDDDDD",
        borderRadius: "20px",
        paddingBottom: "16px",
        boxShadow: "8px 8px 6px #8a8686",
      }}
    >
      <CardHeader title={data.title} />
      <CardMedia
        component="img"
        image={data.media}
        alt="logo"
        sx={{
          objectFit: "contain",
          padding: "0 20px",
          width: "calc(100% - 40px)",
        }}
        height="216"
      />
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
            src={`/src/assets/logos/${x}.svg`}
            width={64}
            style={{ borderRadius: 0 }}
          />
        ))}
      </span>
    </Card>
  );
};

export default ProjectCard;
