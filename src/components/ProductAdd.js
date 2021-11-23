import React,{useState,useRef,useEffect} from 'react'
import ProductNav from './ProductNav';
import {Form,Button, Container} from 'react-bootstrap'
import axios from 'axios'

const regForName=RegExp(/^[A-Za-z]{2,50}$/);
const regForPrice =RegExp(/^[0-9]{3,50}$/);
const regForQty =RegExp(/^[1-9]{1,50}$/);


export default function ProductAdd() {
    const [state,setState]=useState({proData:[],pname:null,price:null,quantity:null,image:null,
        errors:{
            pname:'',price:'',quantity:'',image:''
        }})
    
    const pnameInp=useRef(null)
    const priceInp=useRef(null)
    const qtyInp=useRef(null)
    // const imgInp=useRef(null)

    useEffect(()=>{
        const URL="http://localhost:3001/products"
        axios.get(URL)
        .then(res=>{
            setState({...state,proData:res.data})
            // console.log(state.proData)
        })
     },[state.proData])

    const handler=(event)=>{
        const {name,value}=event.target;
        let errors=state.errors

        switch(name){
            case 'pname':
                errors.pname=regForName.test(value)? '':'Enter a valid Product Name!!';
                break;
            case 'price':
                errors.price = regForPrice.test(value) && value !=='' ?'':'Only numbers allowed!!Price should be atleast of 3 digits';
                break;
            case 'quantity':
                errors.quantity = regForQty.test(value) && value !=='' && value!== 0 ?'':'Only numbers allowed!!Quantity should be greater than 1';
                break;
            // case 'image':
            //     errors.image=value===''?'Choose an image':'';
            //     break;
            default:
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

    const addProduct=(event)=>{
        event.preventDefault()
        if(!validate(state.errors))
        {
            alert("Invalid Form");
           
        }
        else{
            const URL="http://localhost:3001/products"
            let details={pname:pnameInp.current.value,price:priceInp.current.value,quantity:qtyInp.current.value,images:"images/bann.jpg"}
            console.log(pnameInp.current.value)
            axios.post(URL,details)
            .then((res)=>{
                setState({...state,proData:res.data})
            })
            alert("Data Added")
            alert("Form Submitted SuccesFully");
            console.log(state.proData)
        }
    }
    return (
        <>
            <ProductNav/>
            <Container>
            <Form onSubmit={addProduct}>
  <Form.Group className="mb-3" controlId="pname">
    <Form.Label>Product name</Form.Label>
    <Form.Control type="text" name="pname" placeholder="pname" ref={pnameInp} onChange={handler}/>
    {<span style = {{color:'red'}}>{state.errors.pname}</span>}
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" name="price" placeholder="price" ref={priceInp} onChange={handler}/>
    {<span style = {{color:'red'}}>{state.errors.price}</span>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="quantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" name="qunatity" placeholder="quantity" ref={qtyInp} onChange={handler}/>
    {<span style = {{color:'red'}}>{state.errors.quantity}</span>}
  </Form.Group>
  
  {/* <Form.Group controlId="image" className="mb-3">
    <Form.Label>Image</Form.Label>
    <Form.Control type="file" name="image" ref={imgInp} onChange={handler}/>
    {<span style = {{color:'red'}}>{state.errors.image}</span>}
  </Form.Group> */}

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" onChange={handler}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
        </>
    )
}
