import { styled } from "@mui/system";
import NavButton from "./NavButton";
import { Computer, Dashboard, Mail, Person, Work } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

const NavContainer = styled("div")({
  minWidth: "calc(320px - 8rem)",
  borderRadius: 40,
  display: "block",
  flexDirection: "column",
  minHeight: 350,
  maxHeight: "calc(100% - 2rem)",
  height: "fit-content",
  backgroundColor: "white",
  padding: "2rem",
  position: "sticky",
  top: "2rem",
  border: "1px solid #969696",
  boxShadow: "8px 8px 8px #868686",
  "@media (max-width: 759px)": {
    borderRadius: "0 0 40px 40px",
    boxShadow: "none",
    paddingTop: "1rem",
  },
});

const DragUpIcon = styled("p")({
  position: "absolute",
  bottom: 0,
  margin: "2px 0",
  textAlign: "center",
  width: "calc(100% - 4rem)",
  "&::before": {
    content: '"»"',
    display: "inline-block",
    transform: "rotate(-90deg)",
  },
});

const Navbar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavButton
        text="About me"
        path=""
        icon={<Person />}
        active={location.pathname === "/"}
      />
      <NavButton
        text="Work History"
        path="history"
        icon={<Work />}
        active={location.pathname === "/history"}
      />
      <NavButton
        text="Proyects"
        path="projects"
        icon={<Computer />}
        active={location.pathname === "/projects"}
      />
      <NavButton
        text="Random"
        path="random"
        icon={<Dashboard />}
        active={location.pathname === "/random"}
      />
      <NavButton
        text="Contact me"
        path="contact"
        icon={<Mail />}
        active={location.pathname === "/contact"}
      />
      {isMobile && <DragUpIcon />}
    </NavContainer>
  );
};

export default Navbar;
