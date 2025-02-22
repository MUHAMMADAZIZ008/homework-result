import { Container, Stack } from "@mui/material";
import React from "react";
import HeaderSearch from "../components/header-search";
import HeaderButtons from "../components/header-buttons";
import HeaderNav from "../components/header-nav";


const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <Stack py={'31px'} direction={'row'} gap={'60px'}>
          <HeaderSearch />
          <HeaderButtons />
        </Stack>
      </Container>
      <HeaderNav />
    </header>
  );
};

export default Header;
