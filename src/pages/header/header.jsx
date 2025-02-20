import React from "react";
import { Container, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";

import mainLogo from "../../assets/main-logo.svg";
import LocationIcon from "../../assets/svg-components/location-icon";
import SearchIcon from "../../assets/svg-components/search-icon";
import LoginIcon from "../../assets/svg-components/login-icon";
import LikeIcon from "../../assets/svg-components/like-icon";
import BasketIcon from "../../assets/svg-components/basket-icon";

const Header = () => {
  return (
    <header>
      <Container  maxWidth="xl" sx={{ padding: "31px 0", display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px'}}>
        <a href="#">
          <img src={mainLogo} alt="" />
        </a>
        <Box display="flex" alignItems={'center'} gap={"8px"}>
          <LocationIcon />
          <a style={{textDecoration: 'none', color: '#1d1d1d', fontSize: '18px'}} href="#">Алматы</a>
        </Box>
        <Box display={'flex'} alignItems={'flex-end'} flexGrow={'1'}>
            <TextField id="standard-basic" label="Поиск по товарам" fullWidth variant="standard" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Box>
        <Box display={'flex'} gap={'40px'} alignItems={'flex-end'}>
            <a href="#">
                <LoginIcon />
            </a>
            <a href="#">
                <LikeIcon />
            </a>
            <a href="#">
                <BasketIcon />
            </a>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
