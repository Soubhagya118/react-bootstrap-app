import React from 'react';
import{ListGroup,Image,Button,Container } from 'react-bootstrap'

const EachProduct = (props) => {
  return (
    <Container>
        <ListGroup>

      <ListGroup.Item>{props.title}</ListGroup.Item>
      
      <Image src={props.imageUrl} rounded />
      <ListGroup.Item>{props.price}</ListGroup.Item>
      <Button variant="primary">ADD TO CART</Button>{' '}

    </ListGroup>
    </Container>
  )
}

export default EachProduct
