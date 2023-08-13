import React, { Children, useState } from 'react';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import { Navbar,Container, Button } from 'react-bootstrap';
import Body from './components/Body';
import classes from './App.module.css'
import Cart from './components/Cart';
import CartContextProvider from './components/store/CartContextProvider';
import HeaderCart from './components/Header/HeaderCart';
import About from './components/About/About';
import Generic from './components/Generic/Generic';
import Header from './components/Header/Header';

const App = () => {


  const [showCart,setShowcart] = useState(false);
  const hideCartFn=()=>{
    setShowcart(false);
  }
  const showCartFn=()=>{
    setShowcart(true);
  }
  
  return (
    <CartContextProvider>

   
    <div className={classes.container}>
    {showCart&&<Cart hideCartFn={hideCartFn}/>}
    <Header className={classes.navbar} showCartFn={showCartFn}/>
  
     <Generic className={classes.h1}/>
     <Container>
     <h2 className={classes.h2}>MUSIC</h2>
     <Outlet/>
     </Container>
    
    </div>
  
    </CartContextProvider>
  )
};



const router=createBrowserRouter(
  [{
  path:'/',
  element:<App/>,
  children:[
    {
        path: "/store",
        element: <Body/>,
        
     },
    {
        path: "/about",
        element: <About/>,
        
}
]
}]
);

const AppLayout =()=>{
  return<RouterProvider router={router}>

  </RouterProvider>
}

export default AppLayout
