import { useState } from 'react'
import { Products } from './Components/Products'
import CartPng from "./assets/Cart.png"

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='bg-sky-100'>
      <div className='flex p-3 gap-3 justify-around'>
        <h1 className='font-bold'>VP</h1>
        <div>
          <img src={CartPng} alt="cart" width={52} />
          <p>{count}</p>
        </div>
      </div>
      <Products count={count} setCount={setCount} />
    </div>
  )
}

export default App
