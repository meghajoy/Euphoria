import React from 'react'
import { styled } from '@mui/material'

const CustomArrow = styled("button")(({theme,backgroundColor,direction})=>({
    backgroundColor: 'transparent',
    "&:hover": {
        backgroundColor: "transparent",
    },
    position: "absolute",
    top: "40%",
    border: "none",
    transform: "translateY(-50%)",
    zIndex: "2", 
    ...(direction === "left" ? {left:20}: {right:20}),
    cursor: "pointer",
    [theme.breakpoints.down("md")]:{
        display: "none",
    }
}))
export default function SlidderArrow({img, onClick, backgroundColor, direction}) {
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
