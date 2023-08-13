import React from 'react';
import classes from '../App.module.css'
import{ListGroup,Image,Button,Container } from 'react-bootstrap'

const EachProduct = (props) => {
  return (
    <Container style={{marginTop:'30px'}}>
        <ListGroup>

      <ListGroup.Item>{props.id}    {props.title}</ListGroup.Item>

      <Image src={props.imageUrl}  />
      <ListGroup.Item >$ {props.price}  <Button variant="primary" className={classes.customename}>ADD TO CART</Button>{' '}

      </ListGroup.Item>

    </ListGroup>
    </Container>
  )
}

export default EachProduct
