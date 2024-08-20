import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllProducts from './AllProducts'
import ProductDetail from './ProductDetail'

export default function Shop() {
  return (
    <Routes>

      <Route path='all-products' element={<AllProducts />} />
      <Route path='product-detail' element={<ProductDetail />} />
    </Routes>
  )
}
