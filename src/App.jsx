import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import HeaderMain from './components/header-main/HeaderMain'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderMain />
        <div className="">
          <Routes>
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App