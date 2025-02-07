import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Img1 from '../../images/mini-1.jpg'
import Img2 from '../../images/mini-2.jpg'
import Wrapper from '../../wrapper/Wrapper'
import ShopNow from '../../shop now button/ShopNow'

export default function MiniSpotlight() {
  return (
    <Wrapper>
        <Box
            sx={{
                display: 'flex',
                paddingTop: '5%',
                borderRadius: '12px',
                height: '640px',
                width: '1240px'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${Img1})`,
                    width: '614px'
                }}
            >
                <Box
                sx={{
                    paddingLeft: '74px',
                    paddingBlock: '183px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: "466px",
                    height: "282px",

                }}>
                    <Typography variant='h3'
                        sx={{
                            fontFamily: "poppinsbold",
                            fontSize: '34px',
                            color: 'white',
                        }}
                    >WE MADE YOUR EVERYDAY FASHION BETTER!</Typography>
                    <Typography variant='h2'
                        sx={{
                            fontFamily: "poppinslight",
                            fontSize: '20px',
                            color: 'white',
                        }}
                    >In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</Typography>
                    <ShopNow />
                </Box>
            </Box>
            <Box>
                <img src={Img2} alt="Image" sx={{width:'626px'}}/>
            </Box>
        </Box>
    </Wrapper>
  )
}
