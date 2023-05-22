import React, {useState} from 'react'
import { Container, Box, Typography } from '@mui/material'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.scss'
import { useContext } from 'react'
import CardContext from '../../../utils/CardContext'

const List = () => {
  const {dataFilter, searchInput, addToCart,mergedProducts} = useContext(CardContext);
  console.log(mergedProducts, "Husnain")
  return (
    <Container>
        <Box>
            {mergedProducts.length > 0 ?
            (<Box className="List-wrapper">
            <Box className="listing-head">
            <Typography variant='h3'>Top Selling</Typography>
            </Box>
            <Box className="cards-div">
              {dataFilter.map((content, id)=>{
            return (
            <Card
            key= {id}
            id= {content.id}
            title={content.title}
            description={content.description}
            price={content.price}
            onClick={() => addToCart(content)}/>
            )
        })}
            </Box>  
        </Box>) : (<h1 style={{ color: "white"}}>No such Data Found for "{searchInput}"</h1>)
        }
        </Box>
    </Container>
  )
}

export default List