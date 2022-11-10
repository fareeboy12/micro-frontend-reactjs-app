import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Welcome = () => {
  return (
    <>
        <Container className="mt-5">
            <Row className="align-items-center" style={{"height": "85vh"}}>
                <Col>
                    <h1 className="text-center my-auto">Welcome to the Micro FrontEnd services.</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Welcome