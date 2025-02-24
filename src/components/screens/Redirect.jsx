import React from 'react'
import { Box, Typography , styled} from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../helpers/Products.json';
import Wrapper from '../customs/Wrapper'
import Heading from '../customs/Heading'
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

const Right = styled(Box)(()=>({
    width: "50%",
    display: "flex", 
    flexDirection: "column",   
}))

const Circle = styled(Box)(() => ({
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    margin: '5px',
    cursor: 'pointer',
}))

const imgCircle = styled(Box)(()=>({
    borderRadius: "50%", 
    backgroundColor: "#F6F6F6", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10px",
    height: "10px",
}))

const DetailsBox = styled(Box)(()=>({
    display: "flex", 
    gap: "10px", 
    justifyContent: "center", 
    alignItems: "center"
}))
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
                <Left>
                    <img src={productImg} alt={product.name} />
                </Left>
                <Right>
                    <Box>
                        <Typography>Shop</Typography>
                        <img src="/assets/images/right-arrow-light.svg" alt="Arrow icon" />
                        <Typography>{product.section}</Typography>
                        <img src="/assets/images/right-arrow-light.svg" alt="Arrow icon" />
                        <Typography>Top</Typography>
                    </Box>
                        <Typography>{product.category}</Typography>
                    <Box>
                        <img src="/assets/images/star1.png" alt="Star Rating" />
                        <Typography>3.5</Typography>
                        <img src="/assets/images/message.svg" alt="Comments icon" />
                        <Typography>120 comments</Typography>
                    </Box>
                    <Box>
                        <Typography>Select Size</Typography>
                        <Typography>Size Guide</Typography>
                        <img src="/assets/images/right-arrow-light.svg" alt="Arrow icon" />
                        <Box>
                            <Box><Typography>XS</Typography></Box>
                            <Box><Typography>S</Typography></Box>
                            <Box><Typography>M</Typography></Box>
                            <Box><Typography>L</Typography></Box>
                            <Box><Typography>XL</Typography></Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Colours Available </Typography>

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
                    <Box sx={{display: "flex", gap: "10px", paddingBottom:"40px", borderBottom: "1px solid #BEBCBD"}}>
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
                        <Box sx={{display: "flex", flexDirection: "column", gap:"10px"}}>
                            <DetailsBox>
                                <imgCircle><img src="/assets/images/credit card.svg" alt="Credit Card" /></imgCircle>
                                <Typography>Secure payment</Typography>
                            </DetailsBox>
                            <DetailsBox>
                                <imgCircle><img src="/assets/images/Size&Fit.svg" alt="Size and Fit" /></imgCircle>
                                <Typography>Size & Fit</Typography>
                            </DetailsBox>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", gap:"10px"}}>
                            <DetailsBox>
                                <imgCircle><img src="/assets/images/truck.svg" alt="Free shipping" /></imgCircle>
                                <Typography>Free shipping</Typography>
                            </DetailsBox>
                            <DetailsBox>
                                <imgCircle><img src="/assets/images/Free-Shipping&Returns.svg" alt="Returns" /></imgCircle>
                                <Typography>Free Shipping & Returns </Typography>
                            </DetailsBox>
                        </Box>
                    </Box>
                </Right>
            </Display>       
            <Box></Box>
            <Box></Box>
        </Fullbox>
    </Box>
  )
}
