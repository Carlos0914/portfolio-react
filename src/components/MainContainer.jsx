import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children }) => {
  const Container = styled("div")({
    flexGrow: 1,
    borderRadius: 40,
    resize: "block",
    display: "flex",
    flexDirection: "column",
    minHeight: 350,
    maxHeight: "calc(100% - 2rem)",
    backgroundColor: "white",
    paddingTop: "2rem",
    position: "sticky",
    border: "1px solid #969696",
    boxShadow: "8px 8px 8px #8a8686",
  });

  return <Container>{children}</Container>;
};

export default MainContainer;
