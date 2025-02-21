import React from 'react'
import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../customs/Heading'
import Wrapper from '../customs/Wrapper'

const feeds =[
    {
        id : 1,
        prf : `/assets/images/span-1.svg`,
        star : `/assets/images/star1.png`,
        name: "Floyd Miles",
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id : 2,
        prf : `/assets/images/span-2.svg`,
        star : `/assets/images/star2.png`,
        name: "Ronald Richards",
        review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id : 3,
        prf : `/assets/images/span-3.svg`,
        star : `/assets/images/star1.png`,
        name: "Savannah Nguyen",
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
]
export default function Feedback() {

    const settings ={
        dots : true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

  return (
   <Wrapper>
        <Box sx={{paddingBlock: "100px", maxWidth: "1174px"}}>
            <Heading text="Feedback"/>
            <Box sx ={{
                paddingTop: "70px", 
                width: "95%",
                "& .slick-list": { padding: "0 !important", margin: "0 -11.6px !important" }, // Fix spacing issue
                "& .slick-track": { display: "flex", gap: "23.19px" },
                "& .slick-slide": { display: "block" }, // Prevent centering issues
            }}>
                <Slider {...settings} key={feeds.length} >
                    {
                        feeds.map((item,index) =>(
                            <Box  key={item.id}   
                                sx={{
                                    width: "396.8px",
                                    height: "292px",
                                    borderRadius: "10px",
                                    border: "1.8px solid #ccc",
                                    padding: "23px",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            > 
                                <Box>
                                    <Box sx={{display: "flex", justifyContent: "space-between", }}>
                                    <Box sx={{display: "flex", flexDirection: 'column', gap: "10px"}}>
                                        <Box>
                                            <img src={item.prf} alt="User Image" />
                                        </Box> 
                                        <Typography sx={{fontFamily: "poppinssemibold", fontSize: "22px", color: "#3C4242"}}>{item.name}</Typography>   
                                    </Box>    
                                    <Box>
                                        <img src={item.star} alt="Star Review" />    
                                    </Box>    
                                </Box>         
                                <Typography 
                                    sx={{
                                        fontFamily: "poppinslight", 
                                        fontSize: "14px", 
                                        color: "#807D7E",
                                        overflow: "hidden",
                                        width:"350px", 
                                        height: "125px",
                                        paddingTop: "10px"
                                    }}
                                >{item.review}</Typography>
                                </Box>           
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
   </Wrapper>
  )
}
