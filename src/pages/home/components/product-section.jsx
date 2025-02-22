import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./product-card";

const ProductSection = ({ data, title, link }) => {
  return (
    <section style={{ padding: "100px 0" }}>
      <Container maxWidth={"xl"}>
        <Box
          display={"flex"}
          alignItems={"flex-end"}
          gap={"32px"}
          marginBottom={"30px"}
        >
          <Typography variant="h2">{title}</Typography>
          <Link
            to={link}
            style={{
              textDecoration: "underline",
              color: "#648e7a",
              fontSize: "18px",
            }}
          >
            Все новинки
          </Link>
        </Box>
        <Box>
          <Grid2 container spacing={"40px"}>
            {data.map((item) => (
              <Grid2 size={3} key={item.id}>
                <ProductCard {...item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </section>
  );
};

export default ProductSection;
