import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from '../helpers/Products.json'
import {Link} from 'react-router-dom';
import SlidderArrow from '../customs/SlidderArrow'
import ArrowRight from '../../assets/images/arrow-right.svg'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import Heading from '../customs/Heading';

const Wrapper = styled(Box)(()=>({
    paddingInline: '100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '70px'
}))
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

    const newarrival = products.products?.Newarrival;

  return (
    <Box
        sx={{
            paddingTop: '99.8px',
        }}
    >
        <Wrapper>
            <Heading text="New Arrival"/>
            <Box 
                sx={{
                    padding: "40px",
                }}
            >
                <Slider 
                    {...settings}
                >
                    {
                         newarrival.map((item,index)=>(
                            <Link key={item.id} to={`/singlepage/${item.id}`}
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                            <Box key={index}
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    outline: "none",
                                }}
                            >
                                <NewImg src={item.image} alt="Image" />
                                <Typography sx={{color:"#3C4242", textDecoration: "none", fontFamily: 'poppinssemibold', fontSize: '20px', paddingTop:'32.85px'}}>{item.category}</Typography>
                            </Box>
                            </Link>
                        ))
                    }
                </Slider>
            </Box>
        </Wrapper>
    </Box>
  )
}
