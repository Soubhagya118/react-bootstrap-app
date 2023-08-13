import React, { useState } from 'react';
import { Navbar,Container, Button } from 'react-bootstrap';
import Body from './components/Body';
import classes from './App.module.css'
import Cart from './components/Cart';

const App = () => {
  const [showCart,setShowcart] = useState(false);
  const hideCartFn=()=>{
    setShowcart(false);
  }
  const showCartFn=()=>{
    setShowcart(true);
  }
  
  return (
    <div className={classes.container}>
    {showCart&&<Cart hideCartFn={hideCartFn}/>}
     <Navbar bg='dark'  variant='dark' expand='lg' className={classes.navbar}>
     <Container style={{rowGap:'0'}}>
     <Navbar.Brand href='/' >Home</Navbar.Brand>
     <Navbar.Brand href='/' >STORE</Navbar.Brand>
     <Navbar.Brand href='/' >ABOUT</Navbar.Brand>
     <Button variant="outline-light" onClick={showCartFn}>CART</Button>


    </Container>

    
    
     </Navbar>
     <h1 className={classes.h1}>The Generic</h1>
     <Container>
     <h2 className={classes.h2}>MUSIC</h2>
     <Body/>
     </Container>
    
    </div>
  )
}

export default App
