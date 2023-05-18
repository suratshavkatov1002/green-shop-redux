import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SelectedProducts from '../pages/selectedProducts/SelectedProducts'

const Routers = () => {
  return (
    <Routes>
      <Route path="/"  element = {<Home/>} />
      <Route path="/selectproducts"  element = {<SelectedProducts/>} />
    </Routes>
  )
}

export default Routers