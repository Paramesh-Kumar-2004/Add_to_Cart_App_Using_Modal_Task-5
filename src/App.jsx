import { ToastContainer } from 'react-toastify'

import Header from './Components/Header'
import { Products } from './Pages/Products'

function App() {
  return (
    <div className='bg-sky-300'>
      <ToastContainer />
      <Header />
      <Products />
    </div>
  )
}

export default App
