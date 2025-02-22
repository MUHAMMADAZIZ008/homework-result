import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/colors";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.titleColor};
  font-size: 18px;
`

const HeaderNav = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <Container
          maxWidth="xl"
          sx={{
            padding: "31px 0",
          }}
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"space-between"}
            gap={"90px"}
          >
            <CustomLink>Ковры</CustomLink>
            <CustomLink>Коврики</CustomLink>
            <CustomLink>Для ванной</CustomLink>
            <CustomLink>Дорожки</CustomLink>
            <CustomLink>Особенные ковры</CustomLink>
            <CustomLink>Центр поддержки</CustomLink>
            <CustomLink>Контакты</CustomLink>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default HeaderNav;
