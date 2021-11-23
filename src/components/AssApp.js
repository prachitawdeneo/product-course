import React from 'react'
import NavApp from './NavApp'
import {Container} from 'react-bootstrap'

export default function AssApp() {
    return (
        <>
    
            <Container style={{backgroundImage:'url('+ 'images/navbg.jpg' +')',backgroundRepeat:'no-repeat',backgroundSize:"100% 100%",height:"500px",marginTop:"20px"}}>
    <h1 className="text-white" style={{paddingTop:"200px"}}>Welcome to the Portal</h1>
      </Container>  
        </>
    )
}
