import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import MainPage from './pages/MainPage'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'


function App() {
 const [isLoggedIn, setIsLoggedIn] = useState (JSON.parse(localStorage.getItem('isLoggedIn')) || false );
   const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true) 
  };

  const handleLogout = () =>{
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage handleLogin={handleLogin}/>} />
        <Route path="/" element={<MainPage handleLogout={handleLogout}  isLoggedIn={isLoggedIn}/>  }/>
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
