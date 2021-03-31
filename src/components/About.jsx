import React, { Component } from 'react';
import Home from './Home';
import web from "../logo.svg"
import Common from './CommonHtml';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <Common name="Welcome to About" imgsrc={web} visit="/about" btname="About"/>
         );
    }
}
 
export default About;