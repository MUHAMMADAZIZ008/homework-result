import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import HeroImg1 from "../../assets/hero-img1.png";
import HeroImg2 from "../../assets/hero-img2.png";

const Hero = () => {
  return (
    <section style={{ backgroundColor: "#618c78", padding: "98px 0" }}>
      <Container maxWidth="xl" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
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
        </div>
        <Box display={"flex"} alignItems={"center"}>
          <div>
            <img src={HeroImg1} alt="" />
          </div>

          <div>
            <img src={HeroImg2} alt="" />
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
