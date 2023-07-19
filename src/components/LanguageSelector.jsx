import { useContext } from "react";
import { LanguageContext } from "../context/Language";
import { FormControl, MenuItem, Select } from "@mui/material";
import Flag from "react-flagkit";
import { styled } from "@mui/system";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const CustomSelect = styled(Select)({
    display: "block !important",
    width: 85,
    margin: 0,
    marginLeft: "auto",
    "& div[id*='language-selector']": {
      display: "flex",
      gap: 16,
      alignItems: "center",
      paddingRight: "0 !important"
    },
    "&::after": {
        borderBottom: '0 !important'
    },
    "&::before": {
        borderBottom: '0 !important'
    }
  });

  const CustomItem = styled(MenuItem)({
    display: "flex",
    gap: 16,
    alignItems: "center",
  });

  return (
    <FormControl
      style={{ display: "block", position: "absolute", right: 32, bottom: 18 }}
    >
      <CustomSelect
        id="language-selector"
        variant="standard"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <CustomItem value="en">
          <Flag country="US" /> EN
        </CustomItem>
        <CustomItem value="es">
          <Flag country="MX" />
          ES
        </CustomItem>
      </CustomSelect>
    </FormControl>
  );
};

export default LanguageSelector;
