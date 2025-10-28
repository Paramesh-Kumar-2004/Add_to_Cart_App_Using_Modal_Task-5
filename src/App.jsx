import { Products } from './Components/Products'
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify'

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
