import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import FooterMailIcon from "../../assets/svg-components/footer-mail-icon";
import { COLORS } from "../../config/colors";

const FooterSearch = () => {
  return (
    <Stack direction={"row"}>
      <TextField
        variant="outlined"
        placeholder="Ваш email"
        sx={{"& .MuiOutlinedInput-root": {borderRadius: "10px 0 0 10px", backgroundColor: "#fff"} }}
      />
      <Button sx={{ backgroundColor: COLORS.primary, borderRadius: "0 10px 10px 0" }}>
        <FooterMailIcon />
      </Button>
    </Stack>
  );
};

export default FooterSearch;
