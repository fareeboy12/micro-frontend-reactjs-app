import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Offline = ({name}) => {
  return (
    <>
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 className="text-center my-auto">Sorry, {name} is currently unavailable. Please check after some time.</h2>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Offline