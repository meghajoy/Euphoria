import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Img1 from '../../assets/images/bg-4.jpg'
import Img2 from '../../assets/images/bg-5.jpg'
import Wrapper from '../customs/Wrapper'
import ShopNow from '../customs/ShopNow'
import { styled } from '@mui/material/styles';


  const MainBox = styled(Box)(({theme})=>({
    display: 'flex',
    paddingBlock: '10%',
    borderRadius: '12px',
    height: '640px',
    width: '1188px',
    [theme.breakpoints.down('lg')]: {
      height:" 600px",
      width: "1150px",
    },
    [theme.breakpoints.down('md')]: {
        width:'520px',
        height:" 530px",
    },
  }))

  const Left = styled(Box)(({theme})=>({
  }))

  const Right = styled(Box)(({theme})=>({
  }))

  const RightImg = styled("img")(({theme}) => ({
    width:'590px',
    [theme.breakpoints.down('lg')]: {
        width:'590px',
        height:" 600px",
    },
    [theme.breakpoints.down('md')]: {
        width:'520px',
        height:" 530px",
    },
  }))

export default function MiniSpotlight() {
  return (
    <Wrapper>
        <MainBox >
            <Left
                sx={{
                    backgroundImage: `url(${Img1})`,
                    width: '590px'
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
            </Left>
            <Right>
                <RightImg src={Img2} alt="Image" />
            </Right>
        </MainBox>
    </Wrapper>
  )
}
