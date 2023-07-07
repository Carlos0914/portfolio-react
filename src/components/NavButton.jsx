import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavButton = ({ text, path, icon, active = false }) => {
  const navigate = useNavigate();

  const Button = styled("a")({
    textAlign: "left",
    color: "#777777",
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    "&:hover, &[aria-selected=true]": {
      fontSize: "1.2rem",
    },
  });

  return (
    <Button
      onClick={() => {
        navigate(path);
      }}
      aria-selected={active}
    >
      <span>
        {icon}
        <h4>{text}</h4>
      </span>
    </Button>
  );
};

export default NavButton;
