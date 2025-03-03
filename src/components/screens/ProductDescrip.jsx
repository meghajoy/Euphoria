import React from 'react'
import Wrapper from '../customs/Wrapper'
import Heading from '../customs/Heading'
import { Box, Typography , styled} from '@mui/material'

const Left = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    gap: "30px",
}))

const Right = styled(Box)(()=>({
    display: 'flex',
}))

const TopTypo = styled(Typography)(()=>({
    fontSize: "16px",
    color: "#807D7E",
    fontFamily: "poppinslight"
}))

const DescSmall = styled(Box)(()=>({
    borderRadius: "4px", 
    width: "20px", 
    height: "20px",
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
}))

const DescSamllTypo = styled(Typography)(()=>({
    fontSize:"10px", 
    fontFamily: "poppinslight", 
    color: "#FFF", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
}))

const VertLine = styled(Box)(({theme})=>({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: "160px",
    border: "1px solid rgb(212, 212, 212)",
    [theme.breakpoints.down('md')]: {
        height: "140px",
    }
}))

const HoriLine = styled(Box)(({theme})=>({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "587px",
    border: "1px solid rgb(212, 212, 212)",
    [theme.breakpoints.down('md')]: {
        width: "539px",
    }
}))

const RightBoxType = styled(Typography)(({theme})=>({
    fontFamily: "poppinslight", 
    fontSize: "16px",
    [theme.breakpoints.down('md')]: {
        fontSize: "14px",
    }
}))

const RightBox = styled(Box)(({theme})=>({
    backgroundColor: "#F6F6F6", 
    width: "590px", 
    height: "175px", 
    borderRadius:"12px", 
    position: "relative",
    [theme.breakpoints.down('md')]: {
        width: "540px", 
        height: "145px",
    }
}))

const RightBoxContent = styled(Box)(({theme})=>({
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto",
    gap: "30px",
    alignItems: "center",
    padding: "20px",
    [theme.breakpoints.down('md')]: {
        width: "540px", 
        height: "145px",
        gap: "10px",
        padding: "5px",
    }
}))

const Container = styled(Box)(({theme})=>({
    paddingBlock: "70px", 
    display: "flex", 
    gap:"20px", 
    alignItems: "center",
    [theme.breakpoints.down('lg')]: {
        flexWrap: "wrap",
        gap: "30px",
        display: "flex",
        alignItems: "center",   

    }
}))

const BioWashed = styled(Box)(({theme})=>({
    width: "600px",
    [theme.breakpoints.down('lg')]: {
        width: "500px",
    }
}))

const details = [
    {
        detail: "Fabric",
        ans: "Bio-washed Cotton"
    },
    {
        detail: "Pattern",
        ans: "Printed"
    },
    {
        detail: "Fit",
        ans: "Regular-fit"
    },
    {
        detail: "Neck",
        ans: "Round Neck"
    },
    {
        detail: "Sleeve",
        ans: "Half-sleeves"
    },
    {
        detail: "Style",
        ans: "Casual Wear"
    },
]

export default function ProductDescrip() {
  return (
    <Wrapper>
        <Container>
            <Left>
                <Heading text="Product Description"/>
                <Box sx={{display: "flex", flexDirection: "column", gap: "30px", width: "600px"}}>
                    <Box sx={{display: "flex", gap: "40px", }}>
                        <TopTypo>Description</TopTypo>
                        <Box sx={{display: "flex", gap: "10px"}}>
                            <TopTypo>User comments</TopTypo>
                            <DescSmall sx={{backgroundColor: "#8A33FD"}}>
                                <DescSamllTypo> 21</DescSamllTypo>
                            </DescSmall>  
                        </Box>
                        <Box sx={{display: "flex", gap: "10px"}}>
                            <TopTypo>Question & Answer</TopTypo>    
                            <DescSmall sx={{backgroundColor: "#3C4242"}}>
                                <DescSamllTypo> 4</DescSamllTypo>
                            </DescSmall>
                        </Box>
                    </Box>
                    <BioWashed>
                        <Typography sx={{
                            fontSize:"14px", 
                            fontFamily: "poppinslight", 
                            color: "#807D7E", 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center"
                        }}
                        >100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</Typography>
                    </BioWashed>
                </Box>
            </Left>
            <Right>
                <RightBox>
                    <HoriLine ></HoriLine>
                    <VertLine sx={{
                        left: "35%"
                    }}></VertLine>
                    <VertLine sx={{
                        right: "35%"
                    }}></VertLine>
                    <RightBoxContent>
                        {
                            details.map((item,index)=>(
                                <Box key={index}
                                    sx={{display: "flex", flexDirection: "column", gap: "9px", justfifyContent: "center", alignItems: "flex-start"}}
                                >
                                    <RightBoxType sx={{ color: "#807D7E"}}>{item.detail}</RightBoxType>
                                    <RightBoxType sx={{ color: "#3C4242"}}>{item.ans}</RightBoxType>
                                </Box>
                            ))
                        }
                    </RightBoxContent>
                </RightBox>
            </Right>
        </Container>
    </Wrapper>
  )
}
