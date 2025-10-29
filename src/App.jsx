import { ToastContainer } from 'react-toastify'

import Header from './Components/Header'
import { Products } from './Pages/Products'

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Products />
    </div>
  )
}

export default App
