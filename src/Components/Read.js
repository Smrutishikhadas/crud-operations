import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {
  const [data , setData] = useState([]);


  const getData = ()=>{
    axios.get("https://64e6f165b0fd9648b78f141d.mockapi.io/crud-operation")
    .then((response)=>{
    console.log(response)
    setData(response.data)
    })
  }
  const handleDelete = (id)=>{
    axios.delete(`https://64e6f165b0fd9648b78f141d.mockapi.io/crud-operation/${id}`)
    .then(()=>{
      getData()
    })

  } 
  const setToLocalStorage = (id , name , email)=>{
    localStorage.setItem( "id" , id);
    localStorage.setItem( "name" , name);
    localStorage.setItem( "email" , email);
  }

  useEffect(()=>{
    getData()
  } , [])
  return (
    <>
    <div className='d-flex justify-content-between'>
    <h2> Read </h2>
    <Link to ="/">
    <button className='btn btn-primary'>Create Data</button>
    </Link>
    </div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
     
    </tr>
  </thead>
  { data.map((eachData)=>{

      return(
      <>
      
        <tbody>
        <tr>
          <th scope="row">{eachData.id}</th>
          <td>{eachData.name}</td>
          <td>{eachData.email}</td>
          <td>
          <Link to="/update" >
           <button button  className="btn btn-success" onClick={()=>{
            setToLocalStorage(eachData.id , eachData.name , eachData.email)
           }}>Edit</button> 
          </Link> 
          </td>
          <td><button type="button" className="btn btn-danger" onClick={()=>{handleDelete(eachData.id)}}>Delete</button></td>
          
        </tr>
      </tbody>
      </>)
    })
    }
</table>
    </>
  )
}

export default Read
