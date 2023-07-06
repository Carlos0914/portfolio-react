import { styled } from "@mui/system";
import NavButton from "./NavButton";

const NavContainer = styled("div")({
  width: 320,
  borderRadius: 40,
  display: "flex",
  flexDirection: "column",
  minHeight: 350,
  maxHeight: "calc(100% - 2rem)",
  height: "fit-content",
  backgroundColor: "white",
  paddingTop: "2rem",
  position: "sticky",
  border: "1px solid #969696",
  boxShadow: "8px 8px 8px #8a8686",
});

const Navbar = () => {
  return (
    <NavContainer>
      <NavButton text="About me" path="" />
      <NavButton text="Work History" path="history" />
      <NavButton text="Proyects" path="projects" />
    </NavContainer>
  );
};

export default Navbar;
