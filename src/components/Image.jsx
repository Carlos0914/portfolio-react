import { styled } from "@mui/system";

// eslint-disable-next-line react/prop-types
const Image = ({ src, width, height, ...props }) => {
  const CustomImage = styled("img")({
    width,
    height: height || width,
    borderRadius: '40px'
  });

  return <CustomImage src={src} {...props} />;
};

export default Image;
