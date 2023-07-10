import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const Image = ({ src, width, height, ...props }) => {
  const CustomImage = styled("img")({
    width,
    height: height || "auto",
    borderRadius: '40px',
    maxWidth: '100%',
    objectFit: "scale-down",
  });

  return <CustomImage src={src} {...props} loading="lazy"/>;
};

export default Image;
