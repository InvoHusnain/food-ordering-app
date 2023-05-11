import { useState } from 'react'
import Header from './Components/base-structure/Header'
import List from './Components/Body/Restaurant-List/List'
import cardsData from './Data/CardsData'
import './App.css'


function App() {
  const [searchInput, setSearchInput] = useState("")
  
      const handleChange = (event) => {
      setSearchInput(event.target.value);
    };

    const dataFilter = searchInput ? cardsData?.filter((item)=>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    ) : cardsData;
  return (
    <>
      <Header searchInput={searchInput} handleChange={handleChange}/>
      <List searchInput={searchInput} dataFilter={dataFilter}/>
    </>
  )
}

export default App
