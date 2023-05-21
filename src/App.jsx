import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'


function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
   const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true') 
  };

  useEffect(()=>{
    const loggedState = localStorage.getItem('isLoggedIn');

    if(loggedState === 'true'){
      setIsLoggedIn(true);
    }
  }, [])

  const handleLogout = () =>{
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainPage handleLogout={handleLogout}/> : <LoginPage onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
