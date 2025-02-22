import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../config/colors";
import { Link } from "react-router-dom";

export const FooterTypographyTitle = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${COLORS.titleColor};
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${COLORS.greyText};
`;

const LinkComponent = ({ link, path }) => {
  return <FooterLink to={path}>{link}</FooterLink>;
};
const FooterLinks = ({ title, links }) => {
  return (
    <Stack gap={"24px"}>
      <FooterTypographyTitle variant="h3">{title}</FooterTypographyTitle>
      <Stack gap={"16px"}>
        {links.map((link) => (
          <LinkComponent link={link.title} path={link.path} />
        ))}
      </Stack>
    </Stack>
  );
};

export default FooterLinks;
