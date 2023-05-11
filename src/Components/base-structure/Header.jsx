import React from 'react'
import {Box, Container} from '@mui/material'
import Logo from '../../assets/base-structure/Logo.png'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/base-structure/Header.scss'

const Header = (props) => {
    const {searchInput, handleChange} = props;
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
        <Box>
            <PersonIcon/>
        </Box>
    </Box>
   </Container>
  )
}

export default Header