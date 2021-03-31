import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles.css'
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
        <div style={{ backgroundColor:"#AAAAAA",justifyContent:'flex-end'}} className="container-fluid nav_bg colorlib-bubbles">
            <div className ="row">
    
            <nav  style={{height:350,backgroundImage:`url("https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")` }}>
  <button exact style={{justifyContent:'flex-start'}} className=" font-weight-bolder btn-danger" to="/">JAY-<img rel="icon" style={{width:30,height:30}} src="https://picsum.photos/200/300"></img></button>

  <div className="navbar-nav" style={{justifyContent:"flex-end"}}>
    <ul className="navbar-nav ml-auto navbar-expand-xxl" style={{alignItems:'flex-end'}}>
      <li  className="nav-item active">
        <NavLink style={{color:'black',font:'message-box'}} exact activeClassName="menu_active" className="nav-link" to="/home"><strong>Home</strong> <span class="sr-only"></span></NavLink>
      </li>
      <li className="nav-item"><strong></strong>
        <NavLink style={{color:'black',font:'message-box'}} exact activeClassName="menu_active" className="nav-link" to="/about"><strong>About</strong></NavLink>
      </li>
      <li className="nav-item">
        <NavLink style={{color:'black',font:'message-box'}} exact activeClassName="menu_active" className="nav-link" to="/profile"><strong>Your Profile</strong></NavLink>
      </li>
      
    </ul>
    
  </div>
  <div></div>
</nav>
</div>
            </div>
       
            </>
         );
    }
}
 
export default Navbar;