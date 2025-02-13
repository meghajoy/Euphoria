import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Heading({text}) {
  return (
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
                >{text}</Typography>
            </Box>
  )
}
