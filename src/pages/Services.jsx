import { Helmet } from "react-helmet";
import MainContainer from "../components/MainContainer";
import { strings } from "../locales/LocalizedStrings";
import images from "../assets/services";
import { styled } from "@mui/system";

const ImageLeft = styled("div")({
  height: "inherit",
  minHeight: 150,
  width: "33.33%",
  backgroundPosition: "center",
  backgroundBlendMode: "color",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "@media (max-width: 599px)": {
    width: "calc(100% - 2px)",
  },
});

const ContentRight = styled("div")({
  padding: 10,
  textAlign: "left",
  width: "66.66%",
  background: "#DDDDDD",
  "@media (max-width: 599px)": {
    width: "calc(100% - 22px)",
  },
});

const ImageRight = styled("div")({
  height: "inherit",
  minHeight: 150,
  width: "33.33%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "@media (max-width: 599px)": {
    width: "calc(100% - 2px)",
  },
});

const ContentLeft = styled("div")({
  background: "#EEEEEE",
  padding: 10,
  textAlign: "left",
  width: "66.66%",
  "@media (max-width: 599px)": {
    width: "calc(100% - 22px)",
  },
});

const Row = styled("div")({
  display: "flex",
  "@media (max-width: 599px)": {
    flexDirection: "column",
  },
});

const RowReverse = styled("div")({
  display: "flex",
  "@media (max-width: 599px)": {
    flexDirection: "column-reverse",
  },
});

const Services = () => {
  return (
    <MainContainer>
      <Helmet>
        <title>{strings.meta.services}</title>
      </Helmet>
      <h2>{strings.navbar.services}</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        {strings.services.headline}
      </p>
      {strings.services.titles.map((title, index) => {
        if (index % 2 === 0) {
          return (
            <Row key={index}>
              <ImageLeft style={{ backgroundImage: `url(${images[index]})` }} />
              <ContentRight>
                <h3>{title}</h3>
                <p style={{ textAlign: "justify" }}>
                  {strings.services.items[index]}
                </p>
              </ContentRight>
            </Row>
          );
        }
        return (
          <RowReverse key={index}>
            <ContentLeft>
              <h3>{title}</h3>
              <p style={{ textAlign: "justify" }}>
                {strings.services.items[index]}
              </p>
            </ContentLeft>
            <ImageRight style={{ backgroundImage: `url(${images[index]})` }} />
          </RowReverse>
        );
      })}
    </MainContainer>
  );
};

export default Services;
