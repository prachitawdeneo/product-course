import React,{useState,useEffect} from 'react';
import axios  from 'axios';
import { Container,Card } from 'react-bootstrap';
import CourseNav from './CourseNav';

export default function ShowEnq() {
    const [state,setState]=useState({enqData:[]})
    const URL="http://localhost:3003/enquires"

    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            setState({enqData:res.data})
        })
    },[state.enqData])
    return (
        <>
        <CourseNav/>
            <Container>
            <div className="row m-3">
                {state.enqData.map(enq=>
                    <Card
                    style={{ width: '18rem' }}
                    className="bg-info mb-2 col-4 m-3"
                  >
                    <Card.Header>{enq.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{enq.email}</Card.Title>
                      <Card.Text>
                        Mobile no : {enq.mobile}
                      </Card.Text>
                      <Card.Text>
                        Enquiry : {enq.enquiry}
                      </Card.Text>
                    </Card.Body>
                  </Card>)}
                  </div>
            </Container>
        </>
    )
}
