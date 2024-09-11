import React, { Children, createContext, useContext, useReducer } from 'react'
import { toast } from 'sonner';

export const CartContext=createContext();
const initialState={cartItems:[],totalAmount:0}

const reducer = (state,{type,payload}) =>{
  switch(type){
    case "ADD_ITEM":
      let alReadyAddedToCart=state.cartItems.find((item)=>{
        return item.id===payload.id
      })
      if(alReadyAddedToCart){
        toast.warning("Item already added to cart")
        return state
      }else{
        return {...state,cartItems:[...state.cartItems,payload],}
      }
  }
}

export default function CartContextProvider({children}) {
  const [state,dispatch]=useReducer(reducer,initialState)
  // console.log(state)

  return (
    <CartContext.Provider value={{...state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}
 export const useCartContext = () => useContext(CartContext)

