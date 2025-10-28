import { useState } from 'react'
import { Products } from './Components/Products'
import CartPng from "./assets/Cart.png"
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer />
      <Header />
      <Products />
    </div>
  )
}

export default App
