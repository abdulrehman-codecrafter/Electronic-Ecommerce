import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../../contexts/CartContext'

export default function Cart() {
  const {cartItems}=useCartContext()
  const [state,setState]=useState([])

  useEffect(()=>{
    setState(cartItems)
  },[])
  return (
    <h1>
      {cartItems?.map((item)=>{
        return item.title
      })}
    </h1>
  )
}
