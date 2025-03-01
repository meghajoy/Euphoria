import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../helpers/Products.json'
import { Box, Typography,styled } from '@mui/material'
import Wrapper from '../customs/Wrapper'
import Heading from '../customs/Heading'



export default function SimilarProduct() {
    const similarpro = products.products?.Similar_products;

    const [wishlist, setWishlist] = useState({});
  
  const handleWishlist = (id)=>{
    setWishlist((prev) => ({
      ...prev,
      [id] : !prev[id],
    }))
  }

  const Container = styled(Box)(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "26px",
    [theme.breakpoints.down("lg")]:{
      gridTemplateColumns: "auto auto auto",
      gridtemplateRows: "auto",
      gap: "26px",
    },
    [theme.breakpoints.down("md")]:{
      gridTemplateColumns: "auto auto",
      gridtemplateRows: "auto auto",
      gap: "45px",
    },
    [theme.breakpoints.down("sm")]:{
      gridTemplateColumns: "auto",
      gridtemplateRows: "auto",
      gap: "45px",
    },
  }))

  return (
    <Wrapper>
        <Box sx={{paddingBottom: "70px", display: "flex", flexDirection: "column", gap: "40px"}}>
            <Heading text="Similar Products"/>
            <Container>
            {similarpro.map((item) =>(
                <Link key={item.id} to={`/singlepage/${item.id}`}
                  style={{
                    textDecoration: "none"
                  }}
                >
                <Box
                  sx={{display: "flex",
                    flexDirection: "column",
                    gap: "13.41px",
                  }}
                >
                    <Box sx={{ width: "270.36px", height: "393.26px", position: "relative"}}>
                        <img src={item.image} alt="Product image"/>
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
                      onClick={(e) =>{
                        e.preventDefault();
                        handleWishlist(item.id);
                      }}
                  >
                      <img src="/assets/images/wishlist.svg" alt="Wishlist image"
                        style={{
                          filter: wishlist[item.id] ? 'invert(16%) sepia(100%) saturate(7463%) hue-rotate(357deg) brightness(89%) contrast(112%)' : 'none',
                          width: '20px',
                          height: '20px',
                        }}
                      />
                  </Box>
                    </Box>
                    
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: '3.91px'
                      }}
                    >
                        <Typography
                          sx={{
                            color: "#2A2F2F",
                            fontFamily: "poppinssemibold",
                            fontSize: "17.88p",
                          }}
                        >{item.category}</Typography>
                        <Typography
                          sx={{
                            color:'#7F7F7F', 
                            bgcolor:'transparent', 
                            fontFamily: 'poppinslight', 
                            fontSize: '13.41px',
                            textTransform: "none",
                        }}
                        >Explore Now!</Typography>
                    </Box>
                    <Box>
                    <Typography
                          sx={{
                            display: 'flex',
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
                        >{item.price}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}            
        </Container> 
        </Box>
    </Wrapper>
  )
}
