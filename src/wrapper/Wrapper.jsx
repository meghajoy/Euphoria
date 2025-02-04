import React from 'react'
import {Box} from '@mui/material'

export default function Wrapper({children, disablePadding = false}) {
  return (
    <Box
        sx={{paddingInline : disablePadding ? 0:"102px",
            display:"flex",
            flexDirection: 'row',
            alignItems: 'center',       
        }}
    >
      {children}
    </Box>
  );
}
