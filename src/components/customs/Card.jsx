import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import Arrow from '../images/Arrow 1.png'
import Men from '../images/men-1.jpg'

const TextContent = styled(Box)(()=>({

}))
export default function Card() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <Box>
            <img src={Men} alt="Image" />
        </Box>
        <Box>
            <TextContent>
                <Typography>Shirts</Typography>
                <Button variant='text' 
                    sx={{
                        color:'#7F7F7F', 
                        bgcolor:'transparent', 
                        fontFamily: 'poppinslight', 
                        fontSize: '13.41px',
                        textTransform: "none"
                    }}
                >Explore Now!</Button>
            </TextContent>
            <Box>
                <Button>
                    <img src={Arrow} alt="Arrow" />
                </Button>
            </Box>
        </Box>
    </Box>
  )
}
