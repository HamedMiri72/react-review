import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterExample from './examples/FilterExample'
import ShopingFilter from './examples/ShopingFilter'
import MenuMap from './examples/MenuMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FilterExample/>
      <ShopingFilter/>
      <MenuMap/>
    </div>
  )
}

export default App
