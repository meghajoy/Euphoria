import React from 'react'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import Redirect from './Redirect'
import ProductDescrip from './ProductDescrip'
import SimilarProduct from './SimilarProduct'

export default function Redirectpage() {
  return (
    <>
        <Header />
        <Redirect />
        <ProductDescrip />
        <SimilarProduct />
        <Footer />    
    </>
  )
}
