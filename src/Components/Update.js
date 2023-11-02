import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate()
  const [id , setId]= useState();
  const [name , setName]= useState();
  const [email , setEmail]= useState();
  
  const handleUpdate =(e)=>{
    e.preventDefault()
   axios.put(`https://64e6f165b0fd9648b78f141d.mockapi.io/crud-operation/${id}` , {
    name:name,
    email:email
   }).then(()=>{
    navigate("/read")
   })
   
  }

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
  },[])

  return (
    <>
     <h2> Update</h2>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="name" className="form-control" value={name}
            onChange={(e)=>{setName(e.target.value)}}
             /> 
        </div>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control"  value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
        </div>
        <div className='d-flex '>
        <button type="submit" className="btn btn-primary m-2"  onClick={handleUpdate} > Update</button>
        <Link to="/read">
        <button className='btn btn-primary m-2'>Back</button>
        </Link>
        </div>
      
    </>
  )
}

export default Update
