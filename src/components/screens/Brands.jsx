import React from "react";
import Wrapper from "../customs/Wrapper";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const logos = [
  {
    image: `/assets/images/nike.jpg`,
    display: "Nike logo",
  },
  {
    image: `/assets/images/H&M.jpg`,
    display: "H&M logo",
  },
  {
    image: `/assets/images/levis.jpg`,
    display: "Levi's logo",
  },
  {
    image: `/assets/images/USPA.jpg`,
    display: "USPA logo",
  },
  {
    image: `/assets/images/puma.jpg`,
    display: "Puma logo",
  },
];

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    margin: "0 auto",
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5%",
  paddingBottom: "5%",
  [theme.breakpoints.down("lg")]: {
    flexWrap: "wrap",
    display: "flex",
    rowGap: "12px",
  },
}));

const TypeTop = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "50px",
  fontFamily: "poppinsbold",
  [theme.breakpoints.down("lg")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));

const TypePara = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "22px",
  fontFamily: "poppinslight",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export default function Brands() {
  return (
    <Box
      sx={{
        paddingTop: "100px",
      }}
    >
      <Wrapper>
        <Box
          sx={{
            backgroundColor: "#323232",
            paddingBlock: "2%",
            paddingInline: "12.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5%",
                alignItems: "center",
                paddingBottom: "10%",
              }}
            >
              <TypeTop>Top Brands Deal</TypeTop>
              <TypePara>
                Up To <span style={{ color: "#FBD103" }}>60%</span> off on
                brands
              </TypePara>
            </Box>
            <LogoBox>
              {logos.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    width: "177.52px",
                    height: "85.55px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img src={item.image} alt={item.display} width="100" />
                </Box>
              ))}
            </LogoBox>
          </Container>
        </Box>
      </Wrapper>
    </Box>
  );
}
