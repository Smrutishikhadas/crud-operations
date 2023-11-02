import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {

 
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const history = useNavigate();

  const handleSubmit = (e) => 
  {
    e.preventDefault()
    console.log("clicked")
    axios.post(" https://64e6f165b0fd9648b78f141d.mockapi.io/crud-operation " ,
    { name: name , email: email})
    .then(()=>{
      history("/read")
    });
   
  }

  return (
    <>
    <form>
        <div className='d-flex justify-content-between'>
        <h2> Create</h2>
        <Link to="/read">
        <button className='btn btn-primary'> Show Data</button>
        </Link>
        </div>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form> 
    </>
  )
}

export default Create
