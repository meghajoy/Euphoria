import React from "react";
import { Box, Typography } from "@mui/material";
import Wrapper from "../customs/Wrapper";
import Heading from "../customs/Heading";
import products from "../helpers/Products.json";
import Arrow from "../../assets/images/arrow-right.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  gap: "30px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto",
    margin: "0 auto",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto auto ",
    gridTemplateRows: "auto auto",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "auto  ",
    gridTemplateRows: "auto ",
  },
}));

export default function Men() {
  const menProducts = products.products?.Men;
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <Heading text="Categories For Men" />
        <GridBox>
          {menProducts.map((item) => (
            <Link
              key={item.id}
              to={`/Product/${item.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "13.41px",
                }}
              >
                <Box sx={{ width: "270.36px", height: "393.26px" }}>
                  <img src={item.image} alt="Mens Category" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3.91px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#2A2F2F",
                        fontFamily: "poppinssemibold",
                        fontSize: "17.88p",
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#7F7F7F",
                        bgcolor: "transparent",
                        fontFamily: "poppinslight",
                        fontSize: "13.41px",
                        textTransform: "none",
                      }}
                    >
                      Explore Now!
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src={Arrow}
                      alt="Arrow image"
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </GridBox>
      </Box>
    </Wrapper>
  );
}
