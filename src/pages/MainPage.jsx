import React from 'react'
import Header from '../Components/base-structure/Header'
import List from '../Components/Body/Restaurant-List/List'
import CardProvider from '../utils/CardProvider'


const MainPage = (props) => {
  const {handleLogout} = props;
  return (
    <CardProvider>
      <Header handleLogout={handleLogout}/>
      <List />
    </CardProvider>
  )
}

export default MainPage