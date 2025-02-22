import React from "react";
import FooterLinks, {
  FooterLink,
  FooterTypographyTitle,
} from "../components/footer-links";
import { Box, Container, IconButton, Stack } from "@mui/material";
import PhoneIcon from "../../assets/svg-components/phone-icon";
import { COLORS } from "../../config/colors";
import MailIcon from "../../assets/svg-components/mail-icon";
import WhatsAppIcon from "../../assets/svg-components/whats-app-icon";
import InstagramIcon from "../../assets/svg-components/instagram-icon";
import FacebookIcon from "../../assets/svg-components/facebook-icon";
import FooterSearch from "../components/footer-search";

const Footer = () => {
  return (
    <footer>
      <Box py={"40px"} bgcolor={'#f2f2f2'}>
        <Container maxWidth="xl">
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <FooterLinks
              title={"Каталог товаров"}
              links={[
                { title: "Ковры", path: "#" },
                { title: "Коврики", path: "#" },
                { title: "Дорожки", path: "#" },
                { title: "Для ванной", path: "#" },
                { title: "Особенные ковры", path: "#" },
              ]}
            />
            <FooterLinks
              title={"Личный кабинет"}
              links={[
                { title: "Личный кабинет", path: "#" },
                { title: "Мои заказы", path: "#" },
                { title: "Избранное", path: "#" },
              ]}
            />
            <FooterLinks
              title={"Центр поддержки"}
              links={[
                { title: "Контакты", path: "#" },
                { title: "Доставка", path: "#" },
                { title: "Возвраты", path: "#" },
              ]}
            />
            <Stack gap={"24px"}>
              <FooterTypographyTitle variant="h3">
                Помощь и контакты
              </FooterTypographyTitle>
              <Stack gap={"16px"}>
                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                  <IconButton sx={{ ":hover": { color: COLORS.primary } }}>
                    <PhoneIcon />
                  </IconButton>
                  <FooterLink to={"#"}>+7 775 657 66 76</FooterLink>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                  <IconButton sx={{ ":hover": { color: COLORS.primary } }}>
                    <MailIcon />
                  </IconButton>
                  <FooterLink to={"#"}>info@kilem.kz</FooterLink>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                  <IconButton sx={{ ":hover": { color: COLORS.primary } }}>
                    <WhatsAppIcon />
                  </IconButton>

                  <IconButton sx={{ ":hover": { color: COLORS.primary } }}>
                    <InstagramIcon />
                  </IconButton>

                  <IconButton sx={{ ":hover": { color: COLORS.primary } }}>
                    <FacebookIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap={"24px"}>
              <FooterTypographyTitle variant="h3">
                Рассылка
              </FooterTypographyTitle>
              <Stack gap={'16px'}>
                <FooterLink to={"#"} style={{ maxWidth: "220px" }}>
                  Подпишитесь, чтобы всегда быть в курсе наших новый акций
                </FooterLink>
                <FooterSearch />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
