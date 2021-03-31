import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';
import AddCard from './AddCard';
import Cards from './Cards';
import Service from './Services';
import Data from './CardsData';
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Details=()=>
{
  
  
    const [data,setData]=useState({
        Work:"",
        AboutWork:'',
        Mobile:"",
        Address:'',
        file:''
      
        

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

const renderCards=(e)=>
{
 
  
  return(
    <>
    { e.preventDefault()}
   {
    Data.push({imgsrc:data.file,
      title:data.Work,
      details:data.AboutWork ,
      btn:"Contact",
      mobile:data.Mobile,
      address:data.Address,

    })
    }
      {alert('Your data has been added successfully! Please check the records to confirm')}
      </>
    
  )
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
        <input type='text' name="Work" onChange={InputEvent} value={data.Work} placeholder='Work' className='input-line full-width'></input>
        <input type='text' name="Mobile" onChange={InputEvent} value={data.Mobile} placeholder='Mobile' className='input-line full-width'></input>
        <input type='text' name="Address" onChange={InputEvent} value={data.Address} placeholder='Address' className='input-line full-width'></input>
        <input type='text'  name="AboutWork" onChange={InputEvent} value={data.AboutWork} placeholder='AboutWork' className='input-line full-width'></input>
        <input type="file" id="myFile" name="file" value={data.file} onChange={InputEvent}></input>

      </div>
     
      <div className="ml-5">
      
      <NavLink exact to="/services" onClick={renderCards}  className='ghost-round full-width'>Add</NavLink>
      
      </div>
    </div>
  </div>
</div>

        </>

    )
    
    }

export default Details;