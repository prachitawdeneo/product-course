import Button from '@restart/ui/esm/Button';
import axios from 'axios'
import React,{useEffect,useState} from 'react';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CourseEnq from './CourseEnq';
import CourseNav from './CourseNav';

export default function CourseApp() {
    const [state,setState]=useState({courseData:[]})
    const URL="http://localhost:3002/courses"

    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            setState({courseData:res.data})
        })
    },[state.courseData])
    return (
        <>
        <CourseNav/>
           <h1>Course App</h1> 
            <div className="row m-3">
                {state.courseData.map(course=>
                    <Card style={{ width: '18rem' }} className="col-4 m-3">
                    <Card.Body>
                      <Card.Title>{course.cname}</Card.Title>
                      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                      <Card.Text>
                       Course Fee : {course.cfees}
                      </Card.Text>
                      <Link to="/coursenq" className="btn btn-primary">Enquire</Link>
                    </Card.Body>
                  </Card>)}
                  <Link to="/enqdetails" className="btn btn-primary">Show Enquires</Link>

            </div>
        </>
    )
}
