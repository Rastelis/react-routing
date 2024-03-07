import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import HeaderMain from './components/header-main/HeaderMain'
import ProductList from './pages/ProductList'
import PswrdGenerator from './pages/PasswordGenerator'
import Calculator from './pages/Calculator'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderMain />
        <div>
          <Routes>
            <Route path='/blog' element={<Blog />} />
            <Route path='/product-list' element={<ProductList />} />
            <Route path='/password-generator' element={<PswrdGenerator />} />
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
