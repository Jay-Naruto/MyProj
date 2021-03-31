import React, { Component,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'
import Service from './Services';
const Users=()=>
{
    const [data,setData]=useState({
        firstname:"",
        mobile:'',
       
        

    });
    const InputEvent=(event)=>
    {
      event.preventDefault()
        const {name,value}=event.target
        setData((prevVal)=>
        {
             return {
             ...prevVal,
             [name]:value,
             }
        })
    }
    return(
        <>
        <div className='bold-line'></div>
<div className='container'>
  <div className='window'>
    <div className='overlay'></div>
    <div className='content'>
      <div className='welcome'>Hello There!</div>
      <div className='subtitle'>Please enter following details to continue!</div>
      <div className='input-fields'>
        <input type='text' name="firstname" onChange={InputEvent} value={data.firstname} placeholder='Firstname' class='input-line full-width'></input>
        <input type='email'  name="mobile" onChange={InputEvent} value={data.mobile} placeholder='Mobile' class='input-line full-width'></input>


      </div>  
      <NavLink className='ghost-round full-width'  to="/details">Next</NavLink>
    </div>
  </div>
</div>
        </>

    )
}
export default Users;