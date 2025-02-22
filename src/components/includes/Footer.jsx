import React from 'react'
import { Box, List, ListItem, Typography, styled } from '@mui/material'
import Wrapper from '../customs/Wrapper'
import { Link } from 'react-router-dom'

const Bigbox = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
}))

const Logobox = styled(Box)(()=>({
    display: 'flex',
    justifyContent: "space-between",
    paddingBottom:"50px",
    paddingLeft: "83px",
}))

const Section = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    gap: "40px"
}))

const ListSection = styled(List)(()=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    gap: "30px"
}))

const Headings = styled(Typography)(()=>({
    color: "#F6F6F6",
    fontFamily: "poppinsmedium",
    fontSize: "26px"
}))

const Contents = styled(ListItem)(()=>({
    color: "#F6F6F6",
    fontFamily: "poppinslight",
    fontSize: "16px",
    padding: "0", 
    listStyle: "none"
}))

const LogoContainer = styled(Box)(()=>({
    width: "37px",
    height: "37px",
    borderRadius: "10.68px",
    backgroundColor: "#F6F6F6",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

const Playstorebox = styled(Box)(()=>({
    backgroundColor: "#404040",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "153.7px",
    height: "51.2px",
    gap: "4px"
}))

export default function Footer() {
  return (
    <Box sx={{bgcolor: "#3C4242"}}>
        <Wrapper>
            <Bigbox>
                    <Box sx={{display: "flex", justifyContent: "space-around", paddingTop: "59px", gap:"100px", paddingLeft: "76px"}}>
                        <Section>
                            <Headings variant="h3">Need Help</Headings>
                            <Link to={`/needhelp`} style={{textDecoration: "none", cursor: "pointer"}}>
                                <ListSection>
                                    <Contents>Contact Us</Contents>
                                    <Contents>Track Order</Contents>
                                    <Contents>Returns & Refunds</Contents>
                                    <Contents>FAQ's</Contents>
                                    <Contents>Career</Contents>
                                </ListSection>
                            </Link>
                        </Section>
                        <Section>
                            <Headings variant="h3">Company</Headings>
                            <Link to={`/company`} style={{textDecoration: "none", cursor: "pointer"}}>
                                <ListSection>
                                    <Contents>About Us</Contents>
                                    <Contents>euphoria Blog</Contents>
                                    <Contents>euphoriastan</Contents>
                                    <Contents>Collaboration</Contents>
                                    <Contents>Media</Contents>
                                </ListSection>
                            </Link>
                        </Section>
                        <Section>
                            <Headings variant="h3">More Info</Headings>
                            <Link to={`/info/`} style={{textDecoration: "none" , cursor: "pointer"}}>
                                <ListSection>
                                    <Contents>Term and Conditions</Contents>
                                    <Contents>Privacy Policy</Contents>
                                    <Contents>Shipping Policy</Contents>
                                    <Contents>Sitemap</Contents>
                                </ListSection>
                            </Link>
                        </Section>
                        <Section>
                            <Headings variant="h3">Location</Headings>
                            <Link to={`/info/`} style={{textDecoration: "none" , cursor: "pointer"}}>
                                <ListSection>
                                    <Contents>support@euphoria.in</Contents>
                                    <Contents>Eklingpura Chouraha, Ahmedabad Main Road</Contents>
                                    <Contents>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Contents>
                                </ListSection>
                            </Link>
                        </Section>
                    </Box>
                <Logobox >
                    <Box sx={{display: "flex", alignItems:"flex-end", justifyContent: "center", gap:"10px"}}>
                        <LogoContainer><img src="/assets/images/facebook.svg" alt="Facebook logo" /></LogoContainer>
                        <LogoContainer><img src="/assets/images/instagram.svg" alt="Instagram logo" /></LogoContainer>
                        <LogoContainer><img src="/assets/images/twitter.svg" alt="Twitter logo" /></LogoContainer>
                        <LogoContainer><img src="/assets/images/linkedin.svg" alt="Linkedin logo" /></LogoContainer>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "19px",}}>
                        <Typography sx={{fontSize: "28.58px", fontFamily: "poppinssemibold", color:"#F6F6F6"}}>Download The App </Typography>
                        <Box sx={{display: "flex", gap:"22px",cursor: "pointer"}}>
                            <Playstorebox sx={{display: "flex"}}>
                                <Box><img src="/assets/images/playstore.svg" alt="Playstore logo" /></Box>
                                <Box>
                                    <Typography sx={{fontFamily: "poppinslight", color:"#FFF", fontSize:"10px"}}>android app on</Typography>
                                    <Typography sx={{fontFamily: "poppinsmedium", color:"#FFF", fontSize:"18px"}}>Google Play</Typography>
                                </Box>
                            </Playstorebox>
                            <Playstorebox>
                                <Box><img src="/assets/images/phone.svg" alt="Appstore logo" /></Box>
                                <Box>
                                    <Typography sx={{fontFamily: "poppinslight", color:"#FFF", fontSize:"10px"}}>Available on the</Typography>
                                    <Typography sx={{fontFamily: "poppinsmedium", color:"#FFF", fontSize:"18px"}}>App Store</Typography>
                                </Box>
                            </Playstorebox>
                        </Box> 
                    </Box>
                </Logobox>
                <Box sx={{borderBlock: "1px solid #BEBCBD"}}>
                    <Box sx={{paddingLeft: "76px",paddingBlock:"29px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography sx={{fontSize: "28.58px", color: "#F6F6F6", fontFamily: "poppinssemibold"}}>Popular Categories</Typography>
                        <img src="/assets/images/arrow-down.svg" alt="Arrow Down Image" />
                    </Box>
                </Box>
                <Box sx={{
                    fontSize: "18px", 
                    fontFamily: "poppinsmedium", 
                    color: "#fff", 
                    paddingTop:"37px", 
                    paddingBottom:"59px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Typography>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</Typography>
                </Box>
            </Bigbox>    
        </Wrapper>
    </Box>
  )
}
