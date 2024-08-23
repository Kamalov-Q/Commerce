import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Product/>
      </div>
    </div>
  )
}

export default App
