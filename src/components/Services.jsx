import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web1 from "../download.jfif"
import web2 from "../logo512.png"
import Cards from './Cards';
import Data from './CardsData';
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/js/bootstrap.bundle"
import './Styles.css'

 const  Service=(e)=> {


  
     
        return ( 
            <>
            <div>
            <div className="my-5 navbarcss center">
            <div  className="container-fluid nav_bg colorlib-bubbles">
            <div className ="row">
                <div className="col-10 mx-auto">
                <h1 >Entrepreneurs</h1>
                <p>The following is list of entrepreneurs who are striving to expand their business. 
                    This site will help them where people all around the country will get to know what kind of business they're involved in </p>
                <NavLink exact to="/register" className="btn btn-primary">Add Your Work</NavLink>
                
            </div>
            <div  className="container-fluid nav_bg">
            <div className ="row">
                <div className="col-10 mx-auto">
                <div className ="row gy-2">
                      
         {Data.map((val,index)=>
         {
             return <Cards key={index}
             imgsrc={val.imgsrc} title={val.title} details={val.details} btn={val.btn} mobile={val.mobile} address={val.address}
             />
         })}
                
                    </div>

                </div>
            </div>
        </div>
        </div>
                </div>
                </div>
                </div>
        </>
         );
    
}
 
export default Service;