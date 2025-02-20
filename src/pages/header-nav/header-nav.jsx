import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const HeaderNav = () => {
  return (
    <>
      <div style={{backgroundColor: '#f9f9f9'}}> 
        <Container
          maxWidth="xl"
          sx={{
            padding: "31px 0",
          }}
        >
          <Box width={'100%'}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"space-between"}
            gap={"96px"}
          >
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Ковры</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Коврики</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Для ванной</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Дорожки</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Особенные ковры</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Центр поддержки</a>
            <a style={{textDecoration: 'none', fontSize: '18px', color: '#1d1d1d'}} href="#">Контакты</a>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default HeaderNav;
