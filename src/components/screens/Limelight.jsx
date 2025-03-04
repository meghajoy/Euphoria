import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Wrapper from "../customs/Wrapper";
import Heading from "../customs/Heading";
import products from "../helpers/Products.json";
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

export default function Limelight() {
  const menProducts = products.products?.Limelight;

  const [wishlist, setWishlist] = useState({});

  const handleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Wrapper>
      <Box
        sx={{
          paddingTop: "100.28px",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <Heading text="In The Limelight" />
        <GridBox
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "26px",
          }}
        >
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
                <Box
                  sx={{
                    width: "270.36px",
                    height: "393.26px",
                    position: "relative",
                  }}
                >
                  <img src={item.image} alt="Limelight image" />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      right: "5%",
                      backgroundColor: "#FFFFFF",
                      height: "32.36px",
                      width: "32.36px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleWishlist(item.id);
                    }}
                  >
                    <img
                      src="/assets/images/wishlist.svg"
                      alt="Wishlist image"
                      style={{
                        filter: wishlist[item.id]
                          ? "invert(16%) sepia(100%) saturate(7463%) hue-rotate(357deg) brightness(89%) contrast(112%)"
                          : "none",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </Box>
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
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#2A2F2F",
                        fontFamily: "poppinssemibold",
                        fontSize: "17.88p",
                        backgroundColor: "#F6F6F6",
                        height: "36.58px",
                        width: "82.31px",
                        borderRadius: "8px",
                      }}
                    >
                      {item.price}
                    </Typography>
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
