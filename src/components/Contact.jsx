import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import web from "../logo512.png"
import Common from './CommonHtml';


const Contact=()=>
{
    const [data,setData]=useState({
        firstname:"",
        mobile:'',
        email:'',
        subject:''

    });
    const InputEvent=(event)=>
    {
        const {name,value}=event.target
        setData((prevVal)=>
        {
             return {
             ...prevVal,
             [name]:value,
             }
        })
    }
    const formSubmit=()=>
    {

    }
 
        return (
            <>
            <h3 className="text-center">Contact Form</h3>

<div className="container">
  <form onSubmit={formSubmit}>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" value={data.firstname} onChange={InputEvent} placeholder="Your name.."></input>

    <label for="lname">Mobile no.</label>
    <input type="text" id="mobile" name="mobile"value={data.mobile} onChange={InputEvent} placeholder="Your mobile number.."></input>

    <label for="country">Email</label>
    <input type="text" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@gmail.com etc"></input>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" value={data.subject} onChange={InputEvent} placeholder="Write something.." height='200px' ></textarea>

    <input type="submit" value="Submit"></input>
  </form>
</div>
            </>
        )
    
}
 
export default Contact;