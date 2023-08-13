import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {productsArr} from './store/data';
import EachProduct from "./EachProduct";


const Counter=()=>{


    return(

        <>
            <Container>
                            {productsArr.map((e)=><EachProduct key={Math.random()} {...e}></EachProduct>)}
            </Container>
        </>
    )
};


export default Counter;