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
    height: '604px',
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
    backgroundImage: `url(${Img1})`,
  }))

  const Right = styled(Box)(({theme})=>({
  }))

  const TextContent = styled(Box)(({theme})=>({
    paddingLeft: '74px',
    paddingBlock: '183px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }))

  const TextTop = styled(Typography)(({theme})=>({
    fontFamily: "poppinsbold",
    fontSize: '26px',
    color: 'white',
  }))

  const TextPara = styled(Typography)(({theme})=>({
    fontFamily: "poppinslight",
    fontSize: '20px',
    color: 'white',
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
            <Left>
                <TextContent>
                    <TextTop variant='h3'>WE MADE YOUR EVERYDAY FASHION BETTER!</TextTop>
                    <TextPara variant='h2'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</TextPara>
                    <ShopNow />
                </TextContent>
            </Left>
            <Right>
                <RightImg src={Img2} alt="Image" />
            </Right>
        </MainBox>
    </Wrapper>
  )
}
