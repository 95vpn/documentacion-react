import { useState } from 'react'


import './App.css'
import { MyButton } from './components/MyButton'
import { AboutPage } from './pages/AboutPage'
import { Profile } from './components/Profile'
import { ShoppingList } from './components/ShoppingList'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
}

  return (
    <>
      
      
      <h1>WELCOME TO MY APP</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <AboutPage/>
      <Profile/>
      <ShoppingList/>
    </>
  )
}

export default App
