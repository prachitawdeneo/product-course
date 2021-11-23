import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Button } from 'react-bootstrap'
import ProductNav from './ProductNav';

export default function ProductList() {
    const [state,setState]=useState({proData:[]})
    const URL="http://localhost:3001/products"
     useEffect(()=>{
        
        axios.get(URL)
        .then(res=>{
            setState({proData:res.data})
            // console.log(state.proData)
        })
     },[state.proData])

     const deletePro=(id)=>{
        axios.delete(`${URL}/${id}`)
        .then(res=>{
            alert("Product Data Deleted");
            axios.get()
            .then(res=>{
                setState({...state,proData:res.data})
            })
            .catch(err=>{
                console.log(err);
            })
        })
     }
    return (
        <>

        <ProductNav/>
        <div className="row m-3">
        {state.proData.map(pro=>
        <Card style={{ width: '18rem' }} className="col-4 m-3">
  <Card.Img variant="top" src={pro.images} height="200px" width="400px" />
  <Card.Body>
    <Card.Title>{pro.pname}</Card.Title>
    <Card.Text>
     <p>Price : {pro.price}</p>
     <p>Quantity : {pro.quantity}</p>
    </Card.Text>
    <Button variant="primary" onClick={()=>deletePro(pro.id)}>Delete</Button>
  </Card.Body>
</Card>)}
</div>
        
        </>
    )
}
