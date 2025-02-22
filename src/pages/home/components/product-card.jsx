import styled from "@emotion/styled";
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import LikeIcon from "../../../assets/svg-components/like-icon";
import { Link } from "react-router-dom";

export const DiscountBox = styled.div`
  padding: 3px 20px;
  background-color: #618c78;
  color: #fff;
  position: absolute;
  top: 20px;
  left: 0;
`;

const ProductCard = ({ ...item }) => {
  return (
    <Stack
      position={"relative"}
      borderRadius={"10px"}
      boxShadow={"0 0 10px 0 rgba(0, 0, 0, 0.1)"}
      padding={"68px 20px 0 20px"}
    >
      <DiscountBox>{item.label}</DiscountBox>
      <IconButton style={{ position: "absolute", top: "20px", right: "24px" }}>
        <LikeIcon />
      </IconButton>
      <Link to={`product-details/${item.id}`} style={{textDecoration: 'none'}}>
        <CardMedia
          width={"236px"}
          component={"img"}
          alt="carpet"
          image={item.img}
          sx={{ margin: "0 auto 20px auto" }}
        />
        <CardContent sx={"padding: 0; margin: 0"}>
          <Typography
            variant="h3"
            color="#1d1d1d"
            component={"div"}
            fontWeight={"400"}
            fontSize={"20px"}
            marginBottom={"8px"}
          >
            {item.name}
          </Typography>
          <Typography
            color="#1d1d1d"
            fontSize={"16px"}
            marginBottom={"8px"}
            variant="body2"
          >
            Размер: {item.dimensions}
          </Typography>
          <Typography
            color="#1d1d1d"
            fontSize={"16px"}
            marginBottom={"8px"}
            variant="body2"
          >
            Производитель :{item.origin}
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
            marginBottom={"16px"}
          >
            <Rating readOnly name="half-rating" defaultValue={item.rating} />
            <Typography variant="body2">0 отзывов</Typography>
          </Box>
          {item.category === "Новинка" ? (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box flexDirection={"column"} gap={"8px"}>
                <Typography color="#1d1d1d8a" fontSize={"16px"} variant="body2">
                  Цена
                </Typography>
                <Typography color="#000000" fontSize={"20px"} variant="body1">
                  {item.current_price}
                </Typography>
              </Box>
              <Box flexDirection={"column"} gap={"8px"}>
                <Typography color="#1d1d1d8a" fontSize={"16px"} variant="body2">
                  В рассрочку
                </Typography>
                <Box display={"flex"}>
                  <Typography
                    bgcolor={"#618c78"}
                    padding={"2px 9px"}
                    color="#fff"
                    variant="body1"
                    marginRight={"4px"}
                  >
                    {item.installment_plan.split("x").shift()}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#1d1d1d8a"
                    fontSize={"16px"}
                  >
                    x {item.installment_plan.split("x").pop()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box flexDirection={"column"} gap={"8px"}>
                <Typography color="#1d1d1d73" fontSize={"16px"} variant="body2">
                  Старая цена
                </Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="#1d1d1d73"
                  fontSize={"20px"}
                  variant="body1"
                >
                  {item.old_price}
                </Typography>
              </Box>

              <Box flexDirection={"column"} gap={"8px"}>
                <Typography color="#1d1d1d73" fontSize={"16px"} variant="body2">
                  Новая цена
                </Typography>
                <Typography color="#1d1d1d73" fontSize={"20px"} variant="body1">
                  {item.discounted_price}
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Link>
    </Stack>
  );
};

export default ProductCard;
