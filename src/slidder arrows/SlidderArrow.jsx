import React from 'react'
import { styled } from '@mui/material'

const CustomArrow = styled("button")(({theme,backgroundColor,direction})=>({
    backgroundColor: backgroundColor,
    "&:hover": {
        backgroundColor: "transparent",
    },
    border: "none", 
    ...(direction === "left" ? "left": "right"),
    cursor: "pointer",
    [theme.breakpoints.down("md")]:{
        display: "none",
    }
}))
export default function SlidderArrow(img, onClick, backgroundColor, direction) {
  return (
    <CustomArrow
        onClick={onClick}
        backgroundColor={backgroundColor}
        direction={direction}
    >
        <img src={direction === "left" ? img : img} alt="Arrow" />
    </CustomArrow>
  )
}
