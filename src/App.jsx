import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import SingleProduct from './Components/SingleProduct'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App