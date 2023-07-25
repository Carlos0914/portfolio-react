import { styled } from "@mui/system";
import NavButton from "./NavButton";
import {
  Computer,
  Mail,
  Person,
  SupportAgent,
  Work,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import LanguageSelector from "./LanguageSelector";
import { strings } from "../locales/LocalizedStrings";
import Image from "./Image";

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
    borderRadius: "40px 40px 0 0",
    boxShadow: "none",
    paddingTop: "1rem",
  },
  "& a:last-of-type > span": {
    marginBottom: 32,
  },
});

const DragUpIcon = styled("p")({
  position: "absolute",
  top: 0,
  margin: "2px 0",
  textAlign: "center",
  width: "calc(100% - 4rem)",
  "&::before": {
    content: '"»"',
    display: "inline-block",
    transform: "rotate(90deg)",
  },
});

const ImageContainer = styled("span")({
  ...(isMobile && { marginTop: 12 }),
  display: "flex",
  justifyContent: "center",
});

const Navbar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      {isMobile && <DragUpIcon />}
      <ImageContainer>
        <Image src="/logo.jpeg" style={{ borderRadius: 0, maxHeight: 128, filter: 'invert(1)' }} />
      </ImageContainer>
      <NavButton
        text={strings?.navbar?.about}
        path=""
        icon={<Person />}
        active={location.pathname === "/"}
      />
      <NavButton
        text={strings?.navbar?.services}
        path="services"
        icon={<SupportAgent />}
        active={location.pathname === "/services"}
      />
      <NavButton
        text={strings?.navbar?.history}
        path="history"
        icon={<Work />}
        active={location.pathname === "/history"}
      />
      <NavButton
        text={strings?.navbar?.projects}
        path="projects"
        icon={<Computer />}
        active={location.pathname === "/projects"}
      />
      {/* <NavButton
        text="Random"
        path="random"
        icon={<Dashboard />}
        active={location.pathname === "/random"}
      /> */}
      <NavButton
        text={strings?.navbar?.contact}
        path="contact"
        icon={<Mail />}
        active={location.pathname === "/contact"}
      />
      <LanguageSelector />
    </NavContainer>
  );
};

export default Navbar;
