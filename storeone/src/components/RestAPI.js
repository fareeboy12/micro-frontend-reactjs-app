import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./RestAPI.css";

const RestAPI = () => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        const res = await axios.get(`http://localhost:5000/api/products/`);
        console.log(res)
        setProducts(res.data);
      };
    
      getProducts();
    }, []);


  return (
    <>
      <Container className="my-5">
        <h1 className="mt-5">Products</h1>
        <Row>
        {products.map((data) => (
            <Col md={4} className="mt-5" key={data?._id}>
                <Card className="w-100">
                    <Card.Img variant="top" src={data?.thumbnail} height={300}/>
                    <Card.Body>
                        <Card.Text>{data?.title}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
      </Container>
    </>
  )
}

export default RestAPI