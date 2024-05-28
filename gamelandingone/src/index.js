import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'jquery';
import './styles/reset.css';
import './fonts/fonts.css';
import App from './App.js';

// let $=require('jquery');
// window.$=window.jquery=$;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);