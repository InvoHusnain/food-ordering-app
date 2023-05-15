import React from 'react'
import { useState } from 'react';
import CardContext from './CardContext';
import cardsData from '../Data/CardsData';
import Card from '../Components/Body/Restaurant-Card/Card'

const CardProvider = ({children}) => {
  // States
    const [searchInput, setSearchInput] = useState("")
    const [cartItems, setCartItems] = useState(0)
    const [open, setOpen] = useState(false);
    
    //Functions 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
    const handleChange = (event) => {
      setSearchInput(event.target.value);
    };
    const onClick = () =>{
        setCartItems(()=>cartItems + 1);
    }

    // Method for filter out data
    const dataFilter = searchInput ? cardsData?.filter((item)=>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    ) : cardsData;

    // Method to print my Cards in Add to Cart Modal
    const components = Array.from({ length: cartItems }, (_, index) => <Card key={index} />);

    const contextValue = {
        searchInput,
        handleChange,
        dataFilter,
        onClick,
        cartItems, 
        components, 
        open, 
        handleClose,
        handleOpen,
        cardsData
    }
  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  )
}

export default CardProvider