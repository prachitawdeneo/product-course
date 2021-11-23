import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavApp() {
    return (
        <>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to="/" style={{textDecoration:"none"}}>ASSIGNMENT</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/productlist" style={{textDecoration:"none"}}>Product App</Link></Nav.Link>
      <Nav.Link><Link to="/courseapp" style={{textDecoration:"none"}}>Course App</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      
    
        </>
    )
}
