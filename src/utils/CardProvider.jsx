import React from 'react'
import { useState } from 'react';
import CardContext from './CardContext';
import cardsData from '../Data/CardsData';

const CardProvider = ({children}) => {
    const [searchInput, setSearchInput] = useState("")
    const [cartItems, setCartItems] = useState(0)
  
    const handleChange = (event) => {
      setSearchInput(event.target.value);
    };

    const dataFilter = searchInput ? cardsData?.filter((item)=>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    ) : cardsData;

    const onClick = () =>{
        setCartItems(()=>cartItems + 1);
    }

    const contextValue = {
        searchInput,
        handleChange,
        dataFilter,
        onClick,
        cartItems
    }
  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  )
}

export default CardProvider