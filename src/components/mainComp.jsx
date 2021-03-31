import React, { Component } from 'react';
import Home from './Home';
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'; 
import Service from './Services';
import Register from './RegisterWork';
import Details from './Details';
import Profile from './Profile';
import Users from './Already';
class MainComp extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/services" component={Service}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/users" component={Users}/>
                
                <Redirect to="/" />
            </Switch>
            </>

         );
    }
}
 
export default MainComp;