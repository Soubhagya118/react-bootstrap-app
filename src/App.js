import React from 'react';
import { Navbar,Container, Button } from 'react-bootstrap';
import Body from './components/Body';

const App = () => {
  
  return (
    <>
     <Navbar bg='dark'  variant='dark'>
     <Container style={{rowGap:'0'}}>
     <Navbar.Brand href='/' >Home</Navbar.Brand>
     <Navbar.Brand href='/' >STORE</Navbar.Brand>
     <Navbar.Brand href='/' >ABOUT</Navbar.Brand>
     

    </Container>
    <Button variant="outline-light">CART</Button>

    
    
     </Navbar>
     <Body/>
    </>
  )
}

export default App
