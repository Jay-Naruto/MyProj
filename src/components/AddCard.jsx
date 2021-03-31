import React, { Component } from 'react';
import Details from './Details';

const AddCard=(e)=>
{
    return ( 
        <>
        {e.preventDefault()}
           <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card">
                <img className="card-img-top" src={this.props.imgsrc} alt={this.props.imgsrc}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.work}</h5>
                    <p className="card-text">{this.props.about}</p>
                    <p className="card-text">{this.props.mobile}</p>
                    <a href="#" className="btn btn-primary">{this.props.btn}</a>
                </div>
                </div>
                </div>
        </>
     );

}
export default AddCard;