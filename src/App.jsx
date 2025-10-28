import { useState } from 'react'
import { Products } from './Components/Products'


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='bg-sky-100'>
      <div className='flex p-3 gap-3 justify-around'>
        <h1 className='font-bold'>VP</h1>
        <h1 className='font-bold'>Cart : {count}</h1>
      </div>
      <Products count={count} setCount={setCount} />
    </div>
  )
}

export default App
