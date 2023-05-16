import React from 'react'
import { useState } from 'react';
import CardContext from './CardContext';
import cardsData from '../Data/CardsData';

const CardProvider = ({children}) => {
  // States
    const [searchInput, setSearchInput] = useState("")
    const [cartItems, setCartItems] = useState(0)
    const [open, setOpen] = useState(false);
    const [implementCart, setImplementCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    
    //Functions 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
    const handleChange = (event) => {
      setSearchInput(event.target.value);
    };
    const addToCart = (content) => {
      setImplementCart([...implementCart, content]);
      setCartItems(()=>cartItems + 1);
      setTotalPrice(()=>totalPrice + content.price);
    };
    
    // Method for filter out data
    const dataFilter = searchInput ? cardsData?.filter((item)=>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
    ) : cardsData;
    
    // Array
    const mergedProducts = [...dataFilter, ...implementCart];

    // Method to print my Cards in Add to Cart Modal
    // const components = Array.from({ length: cartItems }, (_, index) => <Card key={index} />);

    const contextValue = {
        searchInput,
        handleChange,
        dataFilter,
        totalPrice,
        cartItems, 
        open, 
        handleClose,
        handleOpen,
        cardsData,
        addToCart,
        implementCart,
        mergedProducts
    }
  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  )
}

export default CardProvider