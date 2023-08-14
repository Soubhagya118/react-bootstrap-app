import React, { Children, useState } from 'react';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Body from './components/Body/Body';
import classes from './App.module.css'
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/store/CartContextProvider';
import About from './components/About/About';
import Generic from './components/Generic/Generic';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

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
    {/* ========================================================Header================================== */}
    <Header className={classes.navbar} showCartFn={showCartFn}/>
  
     {/* <Generic className={classes.h1}/> */}
     <Outlet/>
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
        
},{
  path:'/home',
  element:<Home/>
  
}
]
}]
);

const AppLayout =()=>{
  return<RouterProvider router={router}>

  </RouterProvider>
}

export default AppLayout
