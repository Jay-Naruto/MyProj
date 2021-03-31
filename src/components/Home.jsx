import React, { Component } from 'react';
import web from "../download.jfif"
import Common from './CommonHtml';
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/LENOVO/Desktop/JAY/JavaScript/React/my-project1/node_modules/bootstrap/dist/js/bootstrap.bundle"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Common name="Welcome to Home" visit="/" btname="Get Started"/>
            
            <div  className="container-fluid nav_bg">
            <div className ="row">
                <div className="col-10 mx-auto">
                <div className ="row gy-4">
                <p className="my-lg-5">I am happy to share that Women Entrepreneurs India is an internationally recognised organization which supports aspiring entrepreneurs to launch a new business and existing business owners to scale up their business.
Women Entrepreneurs are coming forward in India but they definitely need mentoring support to sustain the business. Here is where we come in and we have been handholding entrepreneurs in every stage of their business since 7 years.I would personally advise you to have clarity on why you would like to take up entrepreneurship and then take the first step and go ahead to accomplish your dream. Prepare yourself for the challenges ahead and don't stop yourself from becoming an empowered individual.
"Never give up on a dream even if the progress is slow" -Mahalakshmi Saravanan,Internationally recognised Social Entrepreneur & TEDx Speaker.</p>
             
       
                
                    </div>

                </div>
                
            </div>
            <div className="col-10 mx-auto">
            <img  src="https://womenentrepreneursindia.com/assets/images/Social-Entrepreneur-Mahalakshmi-Saravanan.jpg" width="500" height="600"></img> 
        </div>
        </div>
        </>

           
         );
    }
}
 
export default Home;