import React,{useReducer} from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
  return (
    <CartContext.Provider value={10}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
