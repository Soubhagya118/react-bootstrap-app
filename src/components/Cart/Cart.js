import React, {useContext} from 'react';
import CartContext from '../store/CartContext';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <div className={classes.modal}>
<div className={classes.table}>
<h2 style={{textAlign:'center',fontSize:'30px',fontFamily: "Metal Mania"}}>CART</h2>

<div className={classes.cont}>


      <div className={classes.imgcont}>
      <h4>ITEM</h4><div style={{borderBottom:'1px solid black'}}></div>
      {cartContext.items.map((e,i)=><img src={e.imageUrl} key={i} className={classes.img}/>)}
      </div>

      <div className={classes.price}>
      <h4>PRICE</h4><div style={{borderBottom:'1px solid black'}}></div>
      {cartContext.items.map((e,i)=><div key={i} className={classes.price1}>$ {e.price}</div>)}
      </div>

      <div className={classes.quantity}>
      <h4>QUANTITY</h4><div style={{borderBottom:'1px solid black'}}></div>
      {cartContext.items.map((e,i)=>
      <div key={i} className={classes.quantity1}>
      <form>
      <input defaultValue={e.quantity} style={{width:'30px',textAlign:'center',marginTop:'3px'}}/>
      
      </form>
      <Button variant='danger' className={classes.btn}>REMOVE</Button>
      </div>)}
  </div>

</div>

<h4>TOTAL AMOUNT:-  ${cartContext.totalAmount}</h4>
                <Button onClick={props.hideCartFn} style={{marginRight:'69.7%'}} >CLOSE</Button>
                <Button >PURCHASE</Button>


</div>

    </div>
        

  )
}

export default Cart
