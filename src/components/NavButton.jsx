import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavButton = ({ text, path }) => {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => {
        navigate(path);
      }}
    >
      <span>
        <h4>{text}</h4>
      </span>
    </a>
  );
};

export default NavButton;
