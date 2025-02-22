import { Box, Button, Container } from "@mui/material";
import React from "react";
import HeroImg1 from "../../assets/hero-img1.png";
import HeroImg2 from "../../assets/hero-img2.png";
import { COLORS } from "../../config/colors";
import Sections from "./components/products-sections";

const Home = () => {
  return (
    <>
      <section>
        <Box bgcolor={COLORS.primary} py={'98px'}>
          <Container
            maxWidth="xl"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <h1
                style={{
                  color: "#f9f9f9",
                  lineHeight: "130%",
                  fontSize: "60px",
                  marginBottom: "32px",
                  maxWidth: "524px",
                }}
              >
                Новая коллекция ковров Venetta
              </h1>
              <Button
                sx={{
                  padding: "13px 38px",
                  backgroundColor: "#cb4a4a",
                  color: "#fff",
                }}
                variant="contained"
              >
                Смотреть все
              </Button>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <div>
                <img src={HeroImg1} alt="" />
              </div>

              <div>
                <img src={HeroImg2} alt="" />
              </div>
            </Box>
          </Container>
        </Box>
      </section>
      <Sections />
    </>
  );
};

export default Home;
