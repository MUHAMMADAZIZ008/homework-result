import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import SectionCard from "../section-card/section-card";

const Section = ({ data, title, link }) => {
  return (
    <section style={{ padding: "100px 0" }}>
      <Container maxWidth={"xl"}>
        <Box
          display={"flex"}
          alignItems={"flex-end"}
          gap={"32px"}
          marginBottom={"30px"}
        >
          <Typography
            variant="h2"
            padding={"0"}
            margin={"0"}
            fontSize={"40px"}
            fontWeight={"700"}
          >
            {title}
          </Typography>
          <a href={link} style={{ textDecoration: "underline", color: '#648e7a', fontSize: '18px' }}>
            Все новинки
          </a>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
          {data.map((item) => (
            <SectionCard key={item.id} {...item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Section;
