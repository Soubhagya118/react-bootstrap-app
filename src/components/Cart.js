import React from 'react';
import { cartElements } from './store/CartItems';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import classes from './Cart.module.css'

const Cart = () => {
  return (
    <div className={classes.modal}>
<h2>CART</h2>
<table className={classes.table}>
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
                </table>
    </div>
        

  )
}

export default Cart
