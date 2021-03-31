import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MainComp from './components/mainComp';
import {BrowserRouter} from'react-router-dom'
import Start from './components/StartComp';
ReactDOM.render(
  <BrowserRouter>
    <MainComp />
    </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
