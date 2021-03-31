import React, { Component } from 'react';
import "./profile.css"

const Profile=()=>
{
    return(
        <>

<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

<div  className="container-fluid nav_bg">
            <div className ="row">
                <div className="col-10 mx-auto">
                <div className ="row">
                <div className="col-lg-20 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column font-smaller">
                 
            <div className="col-lg-20">
                <div className="col-xs-12 col-sm-8">
                    <h1>Nicole Pearson</h1>
                    <hr></hr>
                    <p><strong>Mobile: </strong></p>
                    <p><strong>Email: </strong></p>
                    <p><strong>Your Work: </strong>
                        <span className="tags">html5</span> 
                        <span className="tags">css3</span>
                        <span className="tags">jquery</span>
                        <span className="tags">bootstrap3</span>
                    </p>
                </div>             
                <div className="col-xs-12 col-sm-4 text-center">
                    
                </div>
            </div>   
            </div></div></div></div></div>         
            
    	 
        </>
    )
}

export default Profile;