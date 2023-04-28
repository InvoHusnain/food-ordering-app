import { Container, Box } from '@mui/material'
import React from 'react'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.css'

const array = ['1','2','3','4'];
const List = () => {
  return (
    <Container>
        <Box className="listing-head">
            Top Selling
        </Box>
        <Box className="List-wrapper">
            {array.map(()=>{
            return <Card/>
        })}
        </Box>
    </Container>
  )
}

export default List