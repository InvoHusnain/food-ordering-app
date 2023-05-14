import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.scss'
import { useContext } from 'react'
import CardContext from '../../../utils/CardContext'

const List = () => {
  const {dataFilter, searchInput, onClick} = useContext(CardContext);
  return (
    <Container>
        <Box>
            {dataFilter.length > 0 ?
            (<Box className="List-wrapper">
            <Box className="listing-head">
            <Typography variant='h3'>Top Selling</Typography>
            </Box>
            <Box className="cards-div">
              {dataFilter.map((content, id)=>{
            return (
            <Card
            key= {id}
            title={content.title}
            description={content.description}
            price={content.price}
            onClick={onClick}/>
            )
        })}
            </Box>  
        </Box>) : <h1 style={{ color: "white"}}>No such Data Found for "{searchInput}"</h1>
        }
        </Box>
    </Container>
  )
}

export default List