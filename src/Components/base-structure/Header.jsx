import React from 'react'
import {Box, Container, Typography} from '@mui/material'
import Logo from '../../assets/base-structure/Logo.png'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../../styles/base-structure/Header.scss'
import { useContext } from 'react';
import CardContext from '../../utils/CardContext';
import Modal from '@mui/material/Modal';
import Food from '../../assets/Body/Restaurant-Card/food-one.jpg'
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000000',
  border: '2px solid #000',
  borderRadius: "10px",
  boxShadow: "0px 0px 5px 0px rgba(255,255,255,0.75)",
  p: 4,
  height: '504px',
  overflow: 'scroll'
};

const productWrapper = {
  display: "flex",
  columnGap: "20px",
  bgcolor: '#251718',
  border: '2px solid #000',
};

const productImage = {
  width: "100px"
};

const cartHead = {
  color: "#ffffff",
  fontSize: "25px"
};

const cartContent = {
  color: "white",
  fontSize: "20px"
}

const Header = (props) => {
    const {searchInput, handleChange, cartItems, open, handleOpen, handleClose, implementCart, totalPrice} = useContext(CardContext);
    const {handleLogout} = props;
    const [pop, setPop] = useState(false);
    const handlePop = () =>{
      setPop(!pop);
    }
  return (
   <Container>
     <Box className="nav-wrapper">
        <Box className="nav-logo">
            <img src={Logo}/>
        </Box>
        <Box className="nav-search">
            <SearchIcon/>
            <input 
            type="text" 
            placeholder='Search Here ...' 
            value={searchInput} 
            onChange={handleChange}/>
        </Box>
        <Box className="profile-cart">
            <PersonIcon onMouseEnter={handlePop}/>
            {pop ?
              <Box className="logout-wrapper">
                <p onClick={handleLogout}>Log Out</p>
              </Box> : ""
            }
            <Box className="cart-wrapper">
                <ShoppingBagIcon onClick={handleOpen}/>
                <span className='product-number'>{cartItems}</span>
            </Box>
            <div>
              {implementCart.length > 0 ? (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <Typography sx={cartHead}>Cart</Typography>
                  {implementCart.map((item) => (
                  
                    <Box key={item.id} sx={productWrapper}>
                      <img style={productImage} src={Food} alt="product-image"/>
                      <Box>
                        <Typography sx={cartContent}>{item.title}</Typography>
                      <Typography sx={cartContent}>{item.price}</Typography>
                      </Box>
                    </Box>
                  
                  ))}
                  <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center',}}>
                    <Typography sx={{background: "orange",color: "black",padding: "5px",marginTop: "10px",borderRadius: "5px"}}>Total Items = {cartItems}</Typography>
                  <Typography sx={{background: "orange",color: "black",padding: "5px",marginTop: "10px",borderRadius: "5px"}}>Total Price = {totalPrice}</Typography>
                  </Box>
                  </Box>
              </Modal> ) : 
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} >
                  <Typography sx={{color: "white"}}>No products Selected</Typography>
                </Box>
              </Modal>}
            </div>
          </Box>
      </Box>
   </Container>
  )
}

export default Header