import React, {useState} from 'react'
import { Container, Box, Typography } from '@mui/material'
import Card from '../Restaurant-Card/Card'
import '../../../styles/Body/Restaurant-List/List.scss'
import { useContext } from 'react'
import CardContext from '../../../utils/CardContext'

const List = () => {
  const {dataFilter, cardsData} = useContext(CardContext);

  const [implementCart, setImplementCart] = useState([]);

    const addToCart = (content) => {
    setImplementCart([...implementCart, content]);
  };

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
            onClick={() => addToCart(content)}/>
            )
        })}
            </Box>  
        </Box>) : (<Box className="List-wrapper">
            <Box className="listing-head">
            <Typography variant='h3'>Top Selling</Typography>
            </Box>
            <Box className="cards-div">
              {cardsData.map((content, id)=>{
            return (
            <Card
            key= {id}
            title={content.title}
            description={content.description}
            price={content.price}
            onClick={() => addToCart(content)}/>
            )
        })}
            </Box>  
        </Box>)
        }
        </Box>
        <h2>Cart</h2>
      {implementCart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          
        </div>
      ))}

    </Container>
  )
}

export default List