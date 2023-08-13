import React from 'react';
import { cartElements } from './store/CartItems';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import classes from './Cart.module.css'

const Cart = (props) => {
  return (
    <div className={classes.modal}>
<div className={classes.table}>
<h2 style={{textAlign:'center'}}>CART</h2>

<div className={classes.cont}>


      <div className={classes.imgcont}>
      <h3>ITEM</h3>
      {cartElements.map((e,i)=><img src={e.imageUrl} key={i} className={classes.img}/>)}
      </div>

      <div className={classes.price}>
      <h3>PRICE</h3>
      {cartElements.map((e,i)=><p key={i} className={classes.price1}>{e.price}</p>)}
      </div>

      <div className={classes.quantity}>
      <h3>QUANTITY</h3>
      {cartElements.map((e,i)=><div key={i} className={classes.quantity1}>
      <p>{e.quantity}</p>
      <Button variant='danger' className={classes.btn}>REMOVE</Button>
      </div>)}

</div>

</div>
{/* 
<table >

                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                        </tr>
                        <tbody>
                        {cartElements.map((e)=>
                        <tr key={Math.random()}>
                        <td><Card.Img src={e.imageUrl}/></td>
                            <td><Card.Text>$ {e.price}</Card.Text></td>
                            <td> {e.quantity} <Button variant="danger">REMOVE</Button></td>

                        </tr>
                          )}
                        </tbody>
                    </thead>
                </table> */}
                <Button onClick={props.hideCartFn} >CLOSE</Button>
                <Button >PURCHASE</Button>


</div>

    </div>
        

  )
}

export default Cart
