import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./RestAPI.css";


const RestAPI = () => {

    const [products, setProducts] = useState();
    const [formData, setFormData] = useState({
      title: "",
      thumbnail: ""
    });
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()

      const data = new FormData()
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key])
      })
      try {
        const res = await axios.post(`http://localhost:5000/api/products`, data);
        console.log(res)
        setSuccess(true)
        setError(false)

      } catch (error) {
        setSuccess(false)
        setError(true)
      }
     
    }

    const onChangeData = (name, value) => {
      setFormData({...formData, [name] : value})
    }

    // useEffect(() => {
    //   console.log(formData)
    // }, [formData])

  return (
    <>
      <Container className="my-5">
        <h1 className="my-5 text-center">Add New Products</h1>
        <Row className="justify-content-center">
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              {
                success &&
                <Alert variant='success'>Posted Successfully</Alert>
              }
              {
                error &&
                <Alert variant='danger'>Error</Alert>
              }
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Product Title</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Large text" name="title" value={formData.title} onChange={(e) => (onChangeData(e.target.name, e.target.value))} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" name="thumbnail" onChange={(e) => (onChangeData(e.target.name, e.target.files[0]))} />
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