import { styled } from "@mui/system";

//TODO: Refactor this component to avoid duplicated code

// eslint-disable-next-line react/prop-types
const Container1 = styled("div")({
  flexGrow: 1,
  borderRadius: 40,
  display: "flex",
  flexDirection: "column",
  minHeight: 350,
  maxHeight: "calc(100vh - 8rem - 2px)",
  backgroundColor: "white",
  maxWidth: `calc(100vw - 5rem - 2px)`,
  "@media (min-width: 600px)": {
    paddingRight: 0,
  },
  "@media (min-width: 760px)": {
    maxWidth: `calc(100vw - 7rem - 252px)`,
  },
  padding: "2rem 0.5rem",
  border: "1px solid #969696",
  boxShadow: "8px 8px 8px #8a8686",
});

const Inner1 = styled("div")({
  overflow: "auto",
  "@media (min-width: 760px)": {
    paddingRight: "0.5rem",
  },
});

const Container2 = styled("div")({
  flexGrow: 1,
  borderRadius: 40,
  display: "flex",
  flexDirection: "column",
  minHeight: 350,
  maxHeight: "calc(100vh - 8rem - 2px)",
  backgroundColor: "white",
  maxWidth: `calc(100vw - 6rem - 2px)`,
  "@media (min-width: 600px)": {
    paddingRight: 0,
  },
  "@media (min-width: 760px)": {
    maxWidth: `calc(100vw - 7rem - 252px)`,
  },
  padding: "2rem",
  border: "1px solid #969696",
  boxShadow: "8px 8px 8px #8a8686",
});

const Inner2 = styled("div")({
  overflow: "auto",
  "@media (min-width: 600px)": {
    paddingRight: "2rem",
  },
});

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children, reducePadding = false }) => {
  return reducePadding ? (
    <Container1>
      <Inner1>{children}</Inner1>
    </Container1>
  ) : (
    <Container2>
      <Inner2>{children}</Inner2>
    </Container2>
  );
};

export default MainContainer;
