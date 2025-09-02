import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterExample from './examples/FilterExample'
import ShopingFilter from './examples/ShopingFilter'
import MenuMap from './examples/MenuMap'
import CardProduct from './examples/CardProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FilterExample/>
      <ShopingFilter/>
      <MenuMap/>
      <CardProduct/>
    </div>
  )
}

export default App
