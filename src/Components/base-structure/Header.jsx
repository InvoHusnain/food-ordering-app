import React, {useState} from 'react'
import {Box, Container} from '@mui/material'
import Logo from '../../assets/base-structure/Logo.png'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../../styles/base-structure/Header.scss'
import { useContext } from 'react';
import CardContext from '../../utils/CardContext';
// import BasicModal from './BasicModal';
import Modal from '@mui/material/Modal';
import Card from '../Body/Restaurant-Card/Card';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = () => {
    const {searchInput, handleChange, cartItems} = useContext(CardContext);  
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
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
            <PersonIcon/>
            <Box className="cart-wrapper">
                <ShoppingBagIcon onClick={handleOpen}/>
                <span className='product-number'>{cartItems}</span>
            </Box>
            <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card/>
        </Box>
      </Modal>
    </div>
        </Box>
    </Box>
   </Container>
  )
}

export default Header