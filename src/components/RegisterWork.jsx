import React, { Component,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'
import Service from './Services';
const Register=()=>{

    const [data,setData]=useState({
        firstname:"",
        mobile:'',
        password:'',
        

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
      <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
      <div className='input-fields'>
        <input type='text' name="firstname" onChange={InputEvent} value={data.firstname} placeholder='Firstname' class='input-line full-width'></input>
        <input type='email'  name="mobile" onChange={InputEvent} value={data.mobile} placeholder='Mobile' class='input-line full-width'></input>
        <input type='password'  name="password" onChange={InputEvent} value={data.password} placeholder='Password' class='input-line full-width'></input>

      </div>
      <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
      <div className="ml-5"><NavLink className='ghost-round full-width'  to="/details">Create Account</NavLink>
      <NavLink className='ghost-round full-width'  to="/users">Already Registered?</NavLink></div>
    </div>
  </div>
</div>
        </>

    )
}
export default Register;