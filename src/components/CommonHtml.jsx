import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../download.jfif"
class Common extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section id="header" className="d-flex align-items-center">
            <div  className="container-fluid nav_bg">
            <div className ="row">
                <div className="col-10 mx-auto">
                <div className ="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column font-smaller">
                    
                    <h2 className="my-3">We are a team to help you expand your business</h2>
                    <div className="mt-3">
                        <NavLink exact to="/services" className="button">{this.props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    
                </div>
                </div>
            </div>
        </div>
        </div>
            </section>
            </>

         );
    }
}
 
export default Common;