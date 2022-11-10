import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./RestAPI.css";

const RestAPI = () => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        const res = await axios(
          `https://dummyjson.com/products?skip=0&limit=50`
        );

        console.log(res.data.products);
        setProducts(res.data.products);
      };
  
      getProducts();
    }, []);

  return (
    <>
      <Container className="my-5">
        <h1 className="mt-5">Store One</h1>
        <Row>
        {products.map((data) => (
            <Col md={4} className="mt-5">
                <Card key={data?.id} id={data?.id} className="w-100">
                    <Card.Img variant="top" src={data?.thumbnail} height={300}/>
                    <Card.Body>
                        <Card.Text>{data?.description}</Card.Text>
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