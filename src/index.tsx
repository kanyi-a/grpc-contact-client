import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/login.css';
import Login from './components/Login'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>
)
  
;
