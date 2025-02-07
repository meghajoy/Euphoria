import React from 'react'
import { Button } from '@mui/material'

export default function ShopNow() {
  return (
    <Button
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
    >Shop Now</Button>
  )
}
