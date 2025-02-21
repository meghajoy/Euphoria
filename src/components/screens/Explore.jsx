import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Img1 from '../../assets/images/bg-2.jpg'
import Img2 from '../../assets/images/bg-3.jpg'
import styled from 'styled-components'
import Wrapper from '../customs/Wrapper'

const images = [
    {
        display: Img1,
        up: "Low Price",
        mid: "High Coziness",
        mid2: "UPTO 50% OFF",
        btn: "Explore Item",
    },
    {
        display: Img2,
        up: "Beyoung Presents",
        mid: "Breezy Summer Style",
        mid2: "UPTO 50% OFF",
        btn: "Explore Item",
    },
]

const BoxImage = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: "356px",
    width: "604px",
    borderRadius: '8px',
    boxShadow: "10px",
    position: 'relative',
}))

const Overlay = styled(Box)(()=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "5%",
    gap: "20px",
    width: "50%",
    height: "100%",
}))

export default function Explore() {
  return (
    <Wrapper>
        <Box
            sx={{
                display: 'flex',
                width:"1250px",
                gap:'30px',
                justifyContent: 'space-between',
                alignItems: "center",
                paddingTop: '10%',
            }}
        >
            {images.map((item,index)=>(
                <BoxImage key={index}
                    sx={{
                        backgroundImage: `url(${item.display})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        height: "356px",
                        width: "604px",
                        borderRadius: '12px',
                        boxShadow: "2px 2px 10px 0px #00000066",

                    }}
                >
                    <Overlay
                    >
                        <Typography variant='h6' sx={{color: "white", fontFamily: "poppinssemibold", fontSize: "18px"}}>{item.up}</Typography>
                        <Typography variant='h4' sx={{color: "white", fontFamily: "poppinssemibold", fontSize: "34px"}}>{item.mid}</Typography>
                        <Typography variant='h6' sx={{color: "white", fontFamily: "poppinsregular", fontSize: "18px"}}>{item.mid2}</Typography>
                        <Button variant="text" sx={{
                            padding: '0px',
                            color: "white",
                            textDecoration: "underline",
                            textTransform: "none",
                            fontFamily: "poppinssemibold", 
                            fontSize: "20px",
                            lineHeight: '30px',
                            '&:hover':{
                                backgroundColor: 'transparent',
                            }
                        }}>{item.btn}</Button>
                    </Overlay>
                </BoxImage>
            ))}
        </Box>
    </Wrapper>
  )
}
