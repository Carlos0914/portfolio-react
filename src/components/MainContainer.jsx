import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children }) => {
  const Container = styled("div")({
    flexGrow: 1,
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    minHeight: 350,
    maxHeight: "calc(100vh - 8rem - 2px)",
    maxWidth: "calc(100vw - 6rem - 2px)",
    backgroundColor: "white",
    "@media (min-width: 600px)": {
      paddingRight: 0,
    },
    padding: "2rem",
    border: "1px solid #969696",
    boxShadow: "8px 8px 8px #8a8686",
  });

  const Inner = styled("div")({
    overflow: "auto",
    "@media (min-width: 600px)": {
      paddingRight: "2rem",
    },
  });

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default MainContainer;
