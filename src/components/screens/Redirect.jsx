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

const Circle = styled(Box)(() => ({
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    margin: '5px',
    cursor: 'pointer',
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


//     const handleWishlist = (id)=>{
//         setWishlist((prev) => ({
//           ...prev,
//           [id] : !prev[id],
//         }))
//       }
//       onClick={(e) =>{
//         e.preventDefault();
//         handleWishlist(item.id);
//       }}
//   >
//       <img src="/assets/images/wishlist.svg" alt="Wishlist image"
//         style={{
//           filter: wishlist[item.id] ? 'invert(16%) sepia(100%) saturate(7463%) hue-rotate(357deg) brightness(89%) contrast(112%)' : 'none',
//           width: '20px',
//           height: '20px',
//         }}
//       />

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
                <Box>
                    <img src={productImg} alt={product.name} />
                </Box>
                <Box>
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
                                    }}
                                    onClick={() => colorClick(color)} 
                                />
                            ))
                        }
                        </Box>

                        {/* <Box onClick={(e) =>{
                            e.preventDefault();
                            colorClick(Circle);
                        }}>
                            <Circle sx={{backgroundColor: "#3C4242"}}></Circle>
                            <Circle sx={{backgroundColor: "#EDD146"}}></Circle>
                            <Circle sx={{backgroundColor: "#EB84B0"}}></Circle>
                            <Circle sx={{backgroundColor: "#9C1F35"}}></Circle>
                        </Box> */}
                    </Box>
                </Box>
            </Display>       
            <Box></Box>
            <Box></Box>
        </Fullbox>
    </Box>
    
  )
}
