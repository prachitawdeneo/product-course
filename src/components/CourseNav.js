import React from 'react';
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function CourseNav() {
    return (
        <>
            <Nav as="ul" className="justify-content-center">
  <Nav.Item as="li">
    <Nav.Link ><Link to="/courseapp">Home</Link></Nav.Link>
  </Nav.Item>
  {/* <Nav.Item as="li">
    <Nav.Link ><Link to="/coursenq">Enquiry</Link></Nav.Link>
  </Nav.Item> */}
  <Nav.Item as="li">
  <Nav.Link ><Link to="/enqdetails">Show Enquiries</Link></Nav.Link>
  </Nav.Item>
</Nav>
        </>
    )
}
