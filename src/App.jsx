import Header from './Components/base-structure/Header'
import List from './Components/Body/Restaurant-List/List'
import './App.css'
import CardProvider from './utils/CardProvider'


function App() {
  return (
    <>
    <CardProvider>
      <Header />
      <List />
    </CardProvider>
    </>
  )
}

export default App
