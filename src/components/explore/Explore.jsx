import React from 'react'
import { Box, Typography } from '@mui/material'
import Img1 from '../../images/explore1.jpg'
import Img2 from '../../images/explore2.jpg'
import styled from 'styled-components'
import Wrapper from '../../wrapper/Wrapper'

const images = [
    {
        display: Img1
    },
    {
        display: Img2
    },
]

const BoxImage = styled("img")(({theme})=>({
    display: 'flex',
    width: "604.93px",
    height: "356.2px",
    borderRadius: '8px',
    objectFit: 'cover',
}))

export default function Explore() {
  return (
    <Wrapper>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                paddingTop: '10%',
            }}
        >
            {images.map((item,index)=>(
                <BoxImage key={index} src={item.display} alt="Image"/>
            ))}
        </Box>
    </Wrapper>
  )
}
