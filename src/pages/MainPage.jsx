import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../Components/base-structure/Header'
import List from '../Components/Body/Restaurant-List/List'
import CardProvider from '../utils/CardProvider'


const MainPage = (props) => {
  const {handleLogout} = props;
  console.log(props)
  if(props.isLoggedIn === false){
   return <Navigate to='/login' replace />
  }
  return (
    <CardProvider>
      <Header handleLogout={handleLogout}/>
      <List />
    </CardProvider>
  )
}

export default MainPage