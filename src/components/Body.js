import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {productsArr} from './store/data';
import EachProduct from "./EachProduct";


const Counter=()=>{


    return(

        <>
            <Container style={{width:'60%',border:'2px solid red', marginLeft:'auto'}}>
            <Row>
            {productsArr.map((e,i)=><Col key={i+1} md={6} >
            <EachProduct
            id={i} 
            imageUrl={e.imageUrl} 
            title={e.title}
            price={e.price}/>
             </Col>)}


            </Row>
            </Container>
        </>
    )
};


export default Counter;