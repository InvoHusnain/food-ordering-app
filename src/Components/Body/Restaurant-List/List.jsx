import { Container, Box } from '@mui/material'
import React from 'react'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.scss'

const List = (props) => {
  const {dataFilter, searchInput} = props;
  console.log(dataFilter, "data")
  return (
    <Container>
        <Box className="listing-head">
            Top Selling
        </Box>
        <Box className="List-wrapper">
            {dataFilter.length > 0 ?
            dataFilter.map((content, id)=>{
            return (
            <Card
            key= {id}
            title={content.title}
            description={content.description}
            price={content.price}/>
            )
        }) : <h1 style={{ color: "white"}}>No such Data Found for "{searchInput}"</h1>
        }
        </Box>
    </Container>
  )
}

export default List