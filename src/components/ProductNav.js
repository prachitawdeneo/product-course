import React from 'react';
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function ProductNav() {
    return (
        <>
                <h1>Product App</h1>
            <Nav as="ul" className="justify-content-center">
  <Nav.Item as="li">
    <Nav.Link ><Link to="/productlist">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link ><Link to="/addproduct">Add</Link></Nav.Link>
  </Nav.Item>
  {/* <Nav.Item as="li">
    <Nav.Link >Link</Nav.Link>
  </Nav.Item> */}
</Nav>
        </>
    )
}
