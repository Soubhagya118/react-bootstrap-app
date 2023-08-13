import React,{useReducer} from 'react'
import CartContext from './CartContext';


const defaultValue={
  items:[],
  totalAmount:0
}

const reducerFn=(state,action)=>{
  if( action.type=='add'){
    const updatedTotalAmount = state.totalAmount+(+action.item.price);
    const currentIndex = state.items.findIndex((e)=> e.id==action.item.id);
    // console.log("providerindex",currentIndex,"total",updatedTotalAmount);
    let currentItem = state.items[currentIndex];
       //console.log("provideritem",currentItem,"total",updatedTotalAmount);

    let updatedItems;
    if(currentItem){
      
    const updateQuant ={...currentItem,quantity:currentItem.quantity+action.item.quantity};
     updatedItems=[...state.items];
      updatedItems[currentIndex]= updateQuant;

    }else{
    updatedItems= state.items.concat(action.item)
    }

    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultValue;
}


const CartContextProvider = ({children}) => {
  const [cartState, dispatcherFn]=useReducer( reducerFn,defaultValue);

  const addItemsFn=(item)=>{
    dispatcherFn({type:'add',item:item})
  }
  const cartItems={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItems:addItemsFn
  }
  return (
    <CartContext.Provider value={cartItems}>
      {children} {console.log(cartState.items,cartState.totalAmount)}
    </CartContext.Provider>
  )
}

export default CartContextProvider
