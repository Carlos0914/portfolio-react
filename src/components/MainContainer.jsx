import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children, reducePadding = false }) => {
  const Container = styled("div")({
    flexGrow: 1,
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    minHeight: 350,
    maxHeight: "calc(100vh - 8rem - 2px)",
    backgroundColor: "white",
    maxWidth: `calc(100vw - ${reducePadding ? "5rem" : "8rem"} - 2px)`,
    "@media (min-width: 600px)": {
      paddingRight: 0,
    },
    "@media (min-width: 760px)": {
      maxWidth: `calc(100vw - 7rem - 252px)`,
    },
    padding: reducePadding ? "2rem 0.5rem" : "2rem",
    border: "1px solid #969696",
    boxShadow: "8px 8px 8px #8a8686",
  });

  const Inner = styled("div")({
    overflow: "auto",
    "@media (min-width: 760px)": {
      paddingRight: reducePadding ? "0.5rem" : "2rem",
    },
  });

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default MainContainer;
