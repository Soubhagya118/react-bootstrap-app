import { createContext } from "react";

const CartContext = createContext({
    items:[],
    totalAmount:0,
    addItems:()=>{}
})

export default CartContext;