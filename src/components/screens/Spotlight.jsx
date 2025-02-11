import React from 'react'
import {Box, IconButton, Typography} from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpotlightImg1 from '../../assets/images/bg-1.jpg'
import SpotlightImg2 from '../../assets/images/bg-2.jpg'
import FrontArrow from '../../assets/images/right-arrow-bold.svg'
import BackArrow from '../../assets/images/left-arrow-bold.svg'
import ShopNow from '../customs/ShopNow';

const images = [SpotlightImg1, SpotlightImg2];

const CustomArrow = ({ onClick, direction}) =>(
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: "translateY(-50%)",
      zIndex: 2,
      color: 'white',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      ...(direction === 'left' ? { left: 20 } : { right: 20 })
    }}
  >
    <img src={direction==='left' ? BackArrow : FrontArrow} 
    alt={direction === 'left' ? BackArrow : FrontArrow} />
  </IconButton>
);

export default function Spotlight() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <CustomArrow direction="right"/>,
        prevArrow: <CustomArrow direction="left"/>,
        appendDots: dots =>(
            <div style={{
                position:"absolute",
                bottom:'10px',
                display: "flex",
                width:'100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
              <ul style={{ margin: 0, padding: 0, display: 'flex' }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
          <Box
          sx={{
            width: '129px',
            height: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
            <Box
              sx={{
                width: '60px',
                height: '10px',
                backgroundColor: i === 0 ? 'white' : '#ccc',
                borderRadius: '12px 0px 0px 12px',
                opacity: i === 0 ? 1 : 0.5,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
            <Box
              sx={{
                width: '60px',
                height: '10px',
                backgroundColor: i === 1 ? 'white' : '#ccc',
                borderRadius: '0px 12px 12px 0px',
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </Box>
        ),
      };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", overflow: "hidden", height: "716px" }}>
      <Slider {...settings}>
        {images.map((image,index) =>(
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",    //Cropping image from top
              height: "716px",
              display: "flex",
              paddingLeft:"10%",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "50%",
                paddingTop: "129px",
                paddingLeft: "5%"
              }}
            >
              <Typography variant='h4'
                sx={{
                  fontSize: "32px",
                  fontFamily: "poppinsmedium"
                }}
              >T-shirt / Tops</Typography>
              <Typography variant='h2'
                sx={{
                  fontSize: "78px",
                  fontFamily: "poppinsbold"
                }}
              >Summer <br/> Value Pack</Typography>
              <Typography variant='h4'
                sx={{
                  fontSize: "32px",
                  fontFamily: "poppinsmedium"
                }}
              >cool / colorful / comfy</Typography>
              <ShopNow />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
