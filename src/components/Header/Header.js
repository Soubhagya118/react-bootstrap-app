import React from 'react';
import HeaderCart from './HeaderCart';
import { Navbar ,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (<>
     <Navbar bg='dark'  variant='dark' expand='lg' className={props.className}>
    <Container>
    <Navbar.Brand ><Link to='/home' style={{textDecoration:'none',color:'white',    textAlign: '-webkit-match-parent'}} >HOME</Link></Navbar.Brand>
    <Navbar.Brand ><Link to='/store' style={{textDecoration:'none',color:'white',textAlign: '-webkit-match-parent'}} >STORE</Link></Navbar.Brand>
    <Navbar.Brand ><Link to='/about' style={{textDecoration:'none',color:'white',textAlign: '-webkit-match-parent'}} >ABOUT</Link></Navbar.Brand>
    
   <HeaderCart showCartFn={props.showCartFn}/>

   </Container>

   
   
    </Navbar>
  </>
   
  )
}

export default Header
