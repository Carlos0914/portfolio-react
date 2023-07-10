import styled from "@emotion/styled";

const InfoRow = styled("span")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  "& span": {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  gap: 10,
  rowGap: 0,
  "& p": {
    margin: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    gap: 10,
  },
});

export default InfoRow;
