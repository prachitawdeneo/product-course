import React,{useState,useEffect,useRef} from 'react';
import {Container, Form,Button} from 'react-bootstrap';
import axios from 'axios'
import CourseNav from './CourseNav';

const regForName=RegExp(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export default function CourseEnq() {
    const nameInp=useRef(null)
    const emailInp=useRef(null)
    const mobInp=useRef(null)
    const enqInp=useRef(null)
    const [state,setState]=useState({courseData:[],enqData:[],name:null,email:null,mobile:null,enquiry:null,
    errors:{
        name:'',email:'',mobile:'',enquiry:''
    }})

    

    useEffect(()=>{
        const URL="http://localhost:3002/courses"
        axios.get(URL)
        .then(res=>{
            setState({...state,courseData:res.data})
        })
    },[state.courseData])

    const handler=(event)=>{
        const {name,value}=event.target;
        let errors=state.errors

        switch(name){
            case 'name':
                errors.name=regForName.test(value)? '':'Enter a valid Name!!';
                break;
            case 'email':
                errors.email=regForEmail.test(value)? '':'Enter a valid Email!!';
                break;
            case 'mobile':
                errors.mobile=value.length <=10 ? 'Enter Valid Mobile no' :
                ''
                break;
            case 'enquiry':
                errors.enquiry=regForName.test(value)? '':'Enter a valid Enquiry!!';
                break;
            default :
                break;
        }
        setState({errors,[name]:value})
    }

    const  validate=(errors)=>{
        let valid = false;
        Object.values(errors).forEach((val)=>
            val ==='' && (valid = true));
        console.log(valid)
        return valid;

    }

    const addEnq=(event)=>{
        event.preventDefault()
        if(!validate(state.errors))
        {
            alert("Invalid Form");
           
        }
        else{
            const URL1="http://localhost:3003/enquires"
            let details={name:nameInp.current.value,email:emailInp.current.value,mobile:mobInp.current.value,enquiry:enqInp.current.value}
            console.log(nameInp.current.value)
            axios.post(URL1,details)
            .then((res)=>{
                setState({...state,enqData:res.data})
                // console.log(state.enqData)  
            })
            alert("Data Added")
            alert("Form Submitted SuccesFully");
            
        }
    }
    return (
        <>
        <CourseNav/>
            <h1>Course Enquiry</h1>
            <Container>
            <Form onSubmit={addEnq} noValidate>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handler} ref={nameInp}/>
    {<span style = {{color:'red'}}>{state.errors.name}</span>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handler} ref={emailInp}/>
    {<span style = {{color:'red'}}>{state.errors.email}</span>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="mobile">
    <Form.Label>Mobile No</Form.Label>
    <Form.Control type="number" placeholder="Mobile no" name="mobile" onChange={handler} ref={mobInp}/>
    {<span style = {{color:'red'}}>{state.errors.mobile}</span>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="enquiry">
  <Form.Label>Enquiry Message</Form.Label>
    <Form.Control as="textarea" placeholder="Enquiry" name="enquiry" onChange={handler} ref={enqInp}/>
    {<span style = {{color:'red'}}>{state.errors.enquiry}</span>}
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
</Container>

        </>
    )
}
