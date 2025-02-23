import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  IconButton,
  ListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { COLORS } from "../../config/colors";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import ProductImg2 from "../../assets/product-detail-img2.png";
import ProductImg3 from "../../assets/product-detail-img3.png";
import { DiscountBox } from "../home/components/product-card";
import ProductCounter from "./components/product-counter";
import PlusIcon from "../../assets/svg-components/plus-icon";
import MinusIcon from "../../assets/svg-components/minus-icon";
import LikeIcon from "../../assets/svg-components/like-icon";
import BackIcon from "../../assets/svg-components/back-icon";
import TruckIcon from "../../assets/svg-components/truck-icon";
import WhatsAppIcon from "../../assets/svg-components/whats-app-icon";

const ProductTitle = styled(Typography)`
  font-weight: 400;
  font-size: 40px;
  line-height: 145%;
  color: ${COLORS.titleColor};
  margin-bottom: 22px;
`;
const ProductText = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${COLORS.greyText};
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    const currentProduct = data.find((item) => item.id === +id);
    setProduct(currentProduct);
  }, []);

  const increment = useCallback(() => {
    setProductCount((prev) => prev + 1);
  }, []);
  const decrement = useCallback(() => {
    if (productCount >= 0) setProductCount((prev) => prev - 1);
    setProductCount(productCount);
  }, []);

  return (
    <section>
      <Box padding={"30px 0 64px"}>
        <Container maxWidth="xl">
          <ProductTitle variant="h2">{product.name}</ProductTitle>
          <Box
            sx={{
              paddingBottom: "16px",
              borderBottom: "2px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
                <Rating
                  readOnly
                  name="half-rating"
                  defaultValue={product.rating}
                />
                <ProductText>{product.reviews} отзывов</ProductText>
                <ProductText>В наличии: {product.quantity} штук</ProductText>
              </Stack>
              <ProductText>Код товара: {product.id}</ProductText>
            </Stack>
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingTop={"24px"}
          >
            <Stack justifyContent={"space-between"}>
              <Box margin={"0"} height={"180px"} width={"180px"}>
                <img height={"100%"} width={"100%"} src={ProductImg2} alt="" />
              </Box>
              <Box margin={"0"} height={"auto"} width={"180px"}>
                <img height={"100%"} width={"100%"} src={ProductImg2} alt="" />
              </Box>
              <Box margin={"0"} height={"auto"} width={"180px"}>
                <img height={"100%"} width={"100%"} src={ProductImg2} alt="" />
              </Box>
            </Stack>
            <Box maxWidth={"620px"} position={"relative"}>
              <DiscountBox>{product.label}</DiscountBox>
              <img width={"100%"} height={"100%"} src={ProductImg3} alt="" />
            </Box>
            <Stack>
              <Stack
                direction={"row"}
                gap={"48px"}
                justifyContent={"space-between"}
                mb={"24px"}
              >
                <Box>
                  <ProductText display={"block"}>Цена:</ProductText>
                  <ProductTitle>{product.current_price}</ProductTitle>
                </Box>
                <Box>
                  <ProductText display={"block"}>В рассрочку:</ProductText>
                  <ProductTitle sx={{ color: COLORS.primary }}>
                    13.333 ₸
                  </ProductTitle>
                </Box>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Box>
                  <ProductText
                    display={"flex"}
                    gap={"4px"}
                    alignItems={"center"}
                  >
                    Размер:{" "}
                    {
                      <Typography fontWeight={600} color={COLORS.titleColor}>
                        {product.installment_plan}
                      </Typography>
                    }
                  </ProductText>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  mb={"16px"}
                  gap={"14px"}
                >
                  <ProductText>Количество:</ProductText>
                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    <ProductCounter onClick={decrement} icon={<MinusIcon />} />
                    <Typography>{productCount}</Typography>
                    <ProductCounter onClick={increment} icon={<PlusIcon />} />
                  </Box>
                </Box>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={"32px"}
              >
                <ProductText color={COLORS.primary}>
                  Перейти к описанию
                </ProductText>
                <ProductText color={COLORS.primary}>
                  Подробнее о рассрочке
                </ProductText>
              </Stack>
              <Stack direction={"row"} gap={"40px"} mb={"32px"}>
                <Button
                  variant="contained"
                  sx={{
                    padding: "13px 100px",
                    fontSize: "18px",
                    backgroundColor: COLORS.danger,
                    fontWeight: 700,
                  }}
                >
                  В корзину
                </Button>
                <IconButton
                  sx={{
                    padding: "14px",
                    border: `1px solid ${COLORS.titleColor}`,
                    borderRadius: "10px",
                  }}
                >
                  <LikeIcon />
                </IconButton>
              </Stack>
              <Stack
                padding={"20px"}
                mb={"32px"}
                boxShadow={"0 0 7px 0 rgba(0, 0, 0, 0.1)"}
              >
                <Stack direction={"row"} gap={"8px"} mb={"16px"}>
                  <ProductText>Возврат в течение 14 дней</ProductText>
                </Stack>

                <Stack mb={"18px"} direction={"row"} gap={"8px"}>
                  <ProductText>Возврат в течение 14 дней</ProductText>
                </Stack>
                <ProductText>Подробнее</ProductText>
              </Stack>
              <Typography
                fontSize={"14px"}
                maxWidth={"334px"}
                color={COLORS.titleColor}
                mb={"16px"}
              >
                Нужна помощь с выбором? Просто напишите нам в WhatsApp и мы
                обязательно вам поможем!
              </Typography>
              <Button sx={{padding: '14px 87px'}} variant="contained" startIcon={<WhatsAppIcon />}>Написать</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </section>
  );
};

export default ProductDetails;
