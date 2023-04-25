import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {

let history = useNavigate()

  //Defining State
const [id,setId] = useState('')
const [empname,setEmpname] = useState('')
const [age,setAge] = useState('')
const [designation,setDesignation] = useState('')
const [salary,setSalary] = useState(0)

  const handleData=(e)=>{
    e.preventDefault();
    let ids = uuid()
    // console.log(ids);
    let uniqueId = ids.slice(0,8);
    // console.log(uniqueId);

    //Add data to the employee array
    Employee.push({
      id : uniqueId,
      empname : empname,
      age : age,
      designation : designation,
      salary : salary
    })

  history('/')
    alert('Employee Added')
  }

  return (
    <div>
        <> 
    <h1 className='container text-center'>Add Employee Details</h1>
    <p className='container'> management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. 
    Human resources (HR) professionals often use an employee management system (EMS), 
    including recruitment, offboarding and performance management. 
    Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.
   </p>

<Row>
  <Col md={5}>
  <img style={{marginLeft:'100px',marginTop:'50px',width:'400px'}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc6b7c24-7748-4c6c-9171-107578bb927d/d4wep0s-654e7dd1-e18b-4435-b1d3-1b0d164802ad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNmI3YzI0LTc3NDgtNGM2Yy05MTcxLTEwNzU3OGJiOTI3ZFwvZDR3ZXAwcy02NTRlN2RkMS1lMThiLTQ0MzUtYjFkMy0xYjBkMTY0ODAyYWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7a-zFMeVkBDb5kLknD1ROJRBm2RbFn13NGEI1H_PF8c'/>
  </Col>
  <Col md={5}>
    <Form className=" border border-3 p-3"  style={{marginRight:'200px'}} md={4}>
      <Form.Group className="mb-3">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter your Name"
        //  value={empname}
         onChange={(e)=>setEmpname(e.target.value)} required
         />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="Number" placeholder="Enter your Age" 
        // value={age} 
        onChange={(e)=>setAge(e.target.value)}  required
        />
     </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation"
        //  value={designation} 
        onChange={(e)=>setDesignation(e.target.value)}  required
         />
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary"
        //  value={salary} 
        onChange={(e)=>setSalary(e.target.value)}  required
         />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree Terms and Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleData(e)}>
        Add
      </Button>
    </Form>
  </Col>
</Row>

    </>
    </div>
  )
}

export default Add
