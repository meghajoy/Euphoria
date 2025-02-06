import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import New1 from '../../images/new-1.jpg'
import New2 from '../../images/new-2.jpg'
import New3 from '../../images/new-3.jpg'
import New4 from '../../images/new-4.jpg'
import SlidderArrow from '../../slidder arrows/SlidderArrow';
import ArrowRight from '../../images/arrow-right.png'
import ArrowLeft from '../../images/arrow-left.png'

const Wrapper = styled(Box)(()=>({
    paddingInline: '100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '70px'
}))

const NewTitle = [
    {
        img: New1,
        display: 'Knitted Joggers',
    },
    {
        img: New2,
        display: 'Full Sleeve',
    },
    {
        img: New3,
        display: 'Active T-Shirts',
    },
    {
        img: New4,
        display: 'Urban Shirts',
    },
]

const NewImg = styled("img")(()=>({
    width: "262.8",
    height: "262.8px",
    objectFit: 'cover',
    borderRadius: '12px'
}))

export default function Arrival() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        nextArrow : <SlidderArrow img={ArrowRight} direction="right" onClick={()=>{}}/>,
        prevArrow : <SlidderArrow img={ArrowLeft} direction="left" onClick={()=>{}}/>,
    };

  return (
    <Box
        sx={{
            paddingTop: '99.8px',
        }}
    >
        <Wrapper>
            <Box
                sx={{
                    gap:'20px',
                    alignItems: "center",
                    display: 'flex',
                }}
            >
                <Box sx={{
                    width: "6px",
                    height: "30px",
                    borderRadius: "10px",
                    backgroundColor: "#8A33FD", 
                }}/>
                <Typography
                    sx={{
                        color: "#3C4242",
                        fontSize: "34px",
                        fontFamily: "poppinssemibold",
                    }}
                >New Arrival</Typography>
            </Box>
            <Box 
                sx={{
                    paddingInline: "37px",
                    gap: "38.6px",  
                    width: "1167px",
                    height: "319.67px",
                }}
            >
                <Slider 
                    {...settings}
                >
                    {
                         NewTitle.map((item,index)=>(
                            <Box key={index}
                                 sx={{
                                    display: 'flex',
                                    outline: "none",
                                }}
                            >
                                <NewImg src={item.img} alt="Image" />
                                <Typography sx={{color:"#3C4242", fontFamily: 'poppinssemibold', fontSize: '20px', paddingTop:'32.85px'}}>{item.display}</Typography>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Wrapper>
    </Box>
  )
}
