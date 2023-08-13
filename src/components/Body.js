import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {productsArr} from './store/data';
import EachProduct from "./EachProduct";


const Counter=()=>{


    return(

        <>
            <Container style={{width:'90%', margin:'auto'}}>
            <ul style={{width:'800px',display:'flex',flexDirection:'row-reverse'
}}>
            {productsArr.map((e)=><EachProduct key={Math.random()} {...e}></EachProduct>)}


            </ul>
            </Container>
        </>
    )
};


export default Counter;