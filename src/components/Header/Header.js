import React from 'react';
import HeaderCart from './HeaderCart';
import { Navbar ,Container } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';

const Header = (props) => {
  return (<>
     <Navbar bg='dark'  variant='dark' expand='lg' className={props.className}>
    <Container style={{rowGap:'0'}}>
    <Navbar.Brand ><Link to='/' style={{textDecoration:'none',color:'white'}} >HOME</Link></Navbar.Brand>
    <Navbar.Brand ><Link to='/store' style={{textDecoration:'none',color:'white'}} >STORE</Link></Navbar.Brand>
    <Navbar.Brand ><Link to='/about' style={{textDecoration:'none',color:'white'}} >ABOUT</Link>
    </Navbar.Brand>
    
   <HeaderCart showCartFn={props.showCartFn}/>

   </Container>

   
   
    </Navbar>
  </>
   
  )
}

export default Header
