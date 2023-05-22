import { Box,Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import cardsData from '../Data/CardsData'
import '../styles/pages/SingleProduct.scss'

const SingleProduct = () => {
  const {id}= useParams();
  const Item = cardsData.find(x=>x.id ===Number(id))
  return (
    <>
    <Box className="product-wrapper">
      <Box className="product-head">
        <Typography variant='h3'>{Item.title}</Typography>
        <Box className="product-content">
          <Typography variantMapping='p' className='description'>{Item.description}</Typography>
        </Box>
        <Box className="product-price">
          <Typography variantMapping='p' className='price'>{Item.price}</Typography>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default SingleProduct