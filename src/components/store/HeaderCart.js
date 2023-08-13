import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../store/CartContext';


const HeaderCart = (props) => {
    const cartNum = useContext(CartContext);
    const cartNumber = cartNum.items.reduce((a,c)=>{ return a+c.quantity},0);
    console.log(cartNumber);
  return (
    <Button variant="outline-light" onClick={props.showCartFn}>CART {cartNumber}</Button>

  )
}

export default HeaderCart
