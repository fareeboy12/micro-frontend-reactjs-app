import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/storeOne" className="text-white btn btn-primary ms-3 my-2">Store One</Link>
                    <Link to="/storeTwo" className="text-white btn btn-primary ms-3 my-2">Store Two</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header