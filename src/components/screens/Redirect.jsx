import React from 'react'
import { Box, Typography , styled} from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../helpers/Products.json';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fullbox = styled(Box)(()=>({
    borderTop: "1px solid #BEBCBD"
}))

const Display = styled(Box)(()=>({
    display: 'flex',
}))

const Left = styled(Box)(()=>({
    width: "50%",
    display: "flex",    
}))

const Right = styled(Box)(() => ({
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: "30px 0 0 50px",
    gap: "25px"
  }));
  

const Circle = styled(Box)(() => ({
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    margin: '5px',
    cursor: 'pointer',
}))

const SizeBox = styled(Box)(()=>({
   border: "1px solid #BEBCBD", 
   width: "38px",
   height: "38px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   borderRadius: "12px"
}))

const ImgCircle = styled(Box)(()=>({
    borderRadius: "50%", 
    backgroundColor: "#F6F6F6", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
}))

const HeadingText = styled(Typography)(()=>({
    fontFamily: "poppinsregular", 
    fontSize:"18px", 
    color: "#807D7E"
}))

const sizechart = ["XS","S","M","L","XL"];

const detailsbox =[
    {
        image: "/assets/images/credit card.svg",
        alt: "Credit Card",
        type: "Secure payment",
    },
    {
        image: "/assets/images/Size&Fit.svg",
        alt: "Size and Fit",
        type: "Size and Fit",
    },
    {
        image: "/assets/images/truck.svg",
        alt: "Free shipping",
        type: "Free shipping",
    },
    {
        image: "/assets/images/Free-Shipping&Returns.svg",
        alt: "Returns",
        type: "Free Shipping & Returns",
    },
]

const Details = styled(Box)(()=>({
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    columnGap: "135px",
    rowGap: "35px",
    justifyContent: "flex-start",
    alignItems: "center",
}))

const DetailsBox = styled(Box)(()=>({
    display: "flex", 
    gap: "10px", 
    justifyContent: "flex-start", 
    alignItems: "center"
}))

const header = [
    {
        image: "/assets/images/right-arrow-light.svg",
        category: "Shop",
        section: "Top",
        alt: "Arrow image"
    }
]
export default function Redirect() {

    const {id} = useParams();

    const product = Object.values(Products.products)
    .flat()
    .find((item)=>item.id.toString() === id)

    const [productImg, setProductImg] = useState([]);
    const [circColor, setCircColor]= useState({});

  useEffect(() => {
    if (product) {
        setProductImg(product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <p>Product not found</p>;
  }

    const handleClick = (item)=>{
        setProductImg(item)
    };

    const colorClick = (color)=>{
        setCircColor((prev)=> ({
            ...prev,
            [color] : !prev[color]  
        }))
    }



  return (
    <Box>
        <Fullbox>
            <Display>
                <Left sx={{backgroundColor:"#F6F6F6"}}>
                    <Box>{product.detail_images}</Box>
                    <img src={productImg} alt={product.name} sx={{
                        height:"785", width:"520px", borderRadius: "0"}}/>
                </Left>
                <Right>
                    {
                        header.map((item, index)=>(
                            <Box sx={{display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center"}}>
                                <HeadingText>{item.category}</HeadingText>
                                <img src={item.image} alt={item.alt} />
                                <HeadingText>{product.section}</HeadingText>
                                <img src={item.image} alt={item.alt} />
                                <HeadingText>{item.section}</HeadingText>
                            </Box>
                        ))
                    }
                    <Typography sx={{fontFamily: "poppinssemibold", fontSize: "34px", color: "#3C4242"}}>{product.category}</Typography>
                    <Box sx={{display: "flex", gap: "20px", justifyContent: "flex-start", alignItems: "center"}}>
                        <img src="/assets/images/star1.png" alt="Star Rating" />
                        <Typography>3.5</Typography>
                        <Box sx={{display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center"}}>
                            <img src="/assets/images/message.svg" alt="Comments icon" />
                            <Typography>120 comments</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Box sx={{display: "flex", gap:"20px", justifyContent: "flex-start", alignItems: "center"}}>
                            <Typography sx={{
                                fontFamily: "poppinsmedium",
                                fontSize: "18px", 
                                color: "#3F4646", 
                            }}>Select Size</Typography>
                            <Typography sx={{
                                fontFamily: "poppinsregular",
                                fontSize: "18px", 
                                color: "#807D7E", 
                            }}>Size Guide</Typography>
                            <img src="/assets/images/arrow-right.svg" alt="Arrow icon" />
                        </Box>
                        <Box sx={{display: "flex", gap: "20px"}}>
                            {
                                sizechart.map((item,index)=>(
                                    <SizeBox key={index}><Typography
                                        sx={{
                                            fontFamily: "poppinsregular",
                                            fontSize: "14px",
                                            color: "#3C4242",
                                        }}
                                    >{item}</Typography></SizeBox>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Typography sx={{
                            fontFamily: "poppinsmedium",
                            fontSize: "18px", 
                            color: "#3F4646",
                        }}>Colours Available </Typography>
                        <Box display="flex">
                            {["#3C4242", "#EDD146", "#EB84B0", "#9C1F35"].map((color, index) => (
                                <Circle
                                    key={index}
                                    sx={{
                                        backgroundColor: color,
                                        border : circColor[color] ? "1px solid #3F4646" : "none",
                                        display: "flex",
                                        gap: "2px"
                                    }}
                                    onClick={() => colorClick(color)} 
                                />
                            ))
                        }
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", gap: "30px", paddingBottom:"40px", borderBottom: "1px solid #BEBCBD"}}>
                        <Box sx ={{
                            display: "flex",
                            gap:"20px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#8A33FD",
                            padding: "10px",
                            width: "159px",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}>
                            <img src="/assets/images/cart-1.svg" alt="Cart" />
                            <Typography sx={{fontSize: "16px", fontFamily: "poppinsregular", color: "#FFFFFF"}}>Add to cart</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{
                                display: "flex",
                                gap:"20px",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid #3C4242",
                                padding: "10px",
                                width: "80px",
                                borderRadius: "8px",
                            }}>{product.price}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", gap: "10px"}}>
                        <Details>
                            {
                                detailsbox.map((item, index) => (
                                    <DetailsBox key={index}>
                                    <ImgCircle>
                                        <img src={item.image} alt={item.alt} />
                                    </ImgCircle>
                                    <Typography>{item.type}</Typography>
                                    </DetailsBox>
                                ))
                            }
                        </Details>
                    </Box>
                </Right>
            </Display>  
        </Fullbox>
    </Box>
  )
}
