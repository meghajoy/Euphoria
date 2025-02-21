import React from 'react'
import { Box, Typography , styled} from '@mui/material'
import products from '../helpers/Products.json'
import Wrapper from '../customs/Wrapper'
import Heading from '../customs/Heading'

const Fullbox = styled(Box)(()=>({
    borderTop: "1px solid #BEBCBD"
}))

const Display = styled(Box)(()=>({
    display: 'flex',
}))


export default function Redirect() {
    const product = products.products;   
  return (
    <Fullbox>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    </Fullbox>
  )
}
