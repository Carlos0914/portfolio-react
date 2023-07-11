import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children, reducePadding = false }) => {
  const Container = styled("div")({
    flexGrow: 1,
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    minHeight: 350,
    maxHeight: "calc(100vh - 4rem - 2px)",
    backgroundColor: "white",
    maxWidth: `calc(100vw - ${reducePadding ? "4.5rem" : "8rem"} - 10px)`,
    "@media (min-width: 600px)": {
      paddingRight: 0,
    },
    "@media (min-width: 760px)": {
      maxWidth: `calc(100vw - 8rem - 260px)`,
    },
    padding: reducePadding ? "0.5rem" : "2rem",
    border: "1px solid #969696",
    boxShadow: "8px 8px 8px #8a8686",
  });

  const Inner = styled("div")({
    overflow: "auto",
    "@media (min-width: 600px)": {
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
