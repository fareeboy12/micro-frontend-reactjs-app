import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./RestAPI.css";


const RestAPI = () => {

    const [products, setProducts] = useState();
    const [formData, setFormData] = useState({
      title: "",
      files: ""
    });


    // const getProducts = async () => {
    //   const res = await axios.post(
    //     `http://localhost:5000/api/products`, products
    //   );

    //   console.log(res.data);
    // };
  
      

    

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(formData)
      // setProducts(formData);
      // getProducts();

      const res = await axios.post(
        `http://localhost:5000/api/products`, formData, {headers:{
          'Content-Type' : 'application/json'
        }}
      );
    }

    const onChangeData = (name, value) => {
      setFormData({...formData, [name] : value})
    }

  return (
    <>
      <Container className="my-5">
        <h1 className="my-5 text-center">Add New Products</h1>
        <Row className="justify-content-center">
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Product Title</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Large text" name="title" value={formData.title} onChange={(e) => (onChangeData(e.target.name, e.target.value))} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" name="files" onChange={(e) => (onChangeData(e.target.name, e.target.files[0]))} />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RestAPI