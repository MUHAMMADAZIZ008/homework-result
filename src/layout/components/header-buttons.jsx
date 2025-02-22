import { IconButton, Stack } from "@mui/material";
import React from "react";
import LoginIcon from "../../assets/svg-components/login-icon";
import LikeIcon from "../../assets/svg-components/like-icon";
import BasketIcon from "../../assets/svg-components/basket-icon";
import { COLORS } from "../../config/colors";
import styled from "@emotion/styled";

const IconButtonHeader = styled(IconButton)`
  color: ${COLORS.titleColor};
  &:hover {
    color: ${COLORS.primary};
  }
`;

const HeaderButtons = () => {
  return (
    <Stack direction={"row"} gap={"25px"} alignItems={"center"}>
      <IconButtonHeader>
        <LoginIcon />
      </IconButtonHeader>
      <IconButtonHeader>
        <LikeIcon />
      </IconButtonHeader>
      <IconButtonHeader>
        <BasketIcon />
      </IconButtonHeader>
    </Stack>
  );
};

export default HeaderButtons;
