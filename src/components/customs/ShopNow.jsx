import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const Btn = styled(Button)(({theme})=>({
  [theme.breakpoints.down("lg")]:{
    height: "55px",
    width: "240px",
  },
  [theme.breakpoints.down("md")]:{
    height: "51px",
    width: "230px",
  }
}))
export default function ShopNow() {
  return (
    <Btn
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#3C4242",
          height: "61px",
          width: "250px",
          borderRadius: "8px", 
          textTransform: "none",  //Fixes capitalization issue
          boxShadow: "none",      //Removes shadow
          fontFamily: "poppinssemibold",
          fontSize: "20px",
          "&:hover": {
            boxShadow: "none",
          }
        }}
    >Shop Now</Btn>
  )
}
