import React from 'react'
import {Box} from '@mui/material'

export default function Wrapper({children, disablePadding = false}) {
  return (
    <Box
        sx={{
            display:"flex",
            justifyContent: 'center',
            maxWidth: '1440px',
            margin: '0 auto',
            width: '90%',      
        }}
    >
      {children}
    </Box>
  );
}
