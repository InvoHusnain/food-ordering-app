import React from 'react'
import { Button, Box } from '@mui/material'
import Food from '../../../assets/Body/Restaurant-Card/food-one.jpg'
import '../../../styles/Body/Restaurant-Card/Card.css'

const Card = () => {
  return (
    <><Box className="card-wrapper">
        <Box className="card-image">
            <img src={Food}/>
        </Box>
        <Box className="card-content">
            <h2>Krunch Burger</h2>
            <p>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</p>
        </Box>
        <Box className="card-price">
            <h3>RS 250</h3>
            <Button>Add to Bucket</Button>
        </Box>
    </Box></>
  )
}

export default Card