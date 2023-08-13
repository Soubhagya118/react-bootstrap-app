import React,{useContext} from 'react';
import classes from '../App.module.css';
import CartContext from './store/CartContext';
import{ListGroup,Image,Button,Container } from 'react-bootstrap'

const EachProduct = (props) => {
  const cartContext = useContext(CartContext);
  const addToCart=()=>{

    
    cartContext.addItems({
      id:props.id,
      imageUrl:props.imageUrl,
      price:props.price,
      title:props.title,
      quantity:1
    })
  }
  return (
    <Container style={{marginTop:'30px'}}>
        <ListGroup>

      <ListGroup.Item>{props.id}    {props.title}</ListGroup.Item>

      <Image src={props.imageUrl}  />
      <ListGroup.Item >$ {props.price} 
       <Button variant="primary" className={classes.customename} onClick={addToCart}>ADD TO CART</Button>

      </ListGroup.Item>

    </ListGroup>
    </Container>
  )
}

export default EachProduct
