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
    backgroundColor: "white",
    padding: "2rem",
    paddingRight: 0,
    border: "1px solid #969696",
    boxShadow: "8px 8px 8px #8a8686",
  });

  return (
    <Container>
      <div style={{overflow: 'auto', paddingRight: "2rem"}}>{children}</div>
    </Container>
  );
};

export default MainContainer;
