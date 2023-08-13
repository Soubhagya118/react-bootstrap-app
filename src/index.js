import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
  React Bootsrap config
*/

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppLayout from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AppLayout />
);

