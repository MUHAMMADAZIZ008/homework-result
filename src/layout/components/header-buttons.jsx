import { IconButton, Stack } from "@mui/material";
import React from "react";
import LoginIcon from "../../assets/svg-components/login-icon";

const HeaderButtons = () => {
  return (
    <Stack direction={"row"} gap={"25px"} alignItems={'center'}>
      <IconButton>
        <LoginIcon />
      </IconButton>
      <IconButton>
        <LoginIcon />
      </IconButton>
      <IconButton>
        <LoginIcon />
      </IconButton>
    </Stack>
  );
};

export default HeaderButtons;
