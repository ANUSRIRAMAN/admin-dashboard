import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}from "react-router-dom";
import Login from "./Components/Login";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Dashboard from './Components/Dashboard';
import Table from './Components/Table';
import Button from "./Components/Button"
import Cards from './Components/Cards';
import Color from './Components/Color';
import Border from './Components/Border';
import Animation from './Components/Animation';
import Other from './Components/Other';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ErrorPage from './Components/ErrorPage';
import BlankPage from './Components/BlankPage';
import Charts from './Components/Charts';
function App() {
  return( 
    <div>
 <BrowserRouter>
 <Routes>
<Route path='/' element={<Login />} />
<Route path='dashboard' element={<Dashboard/>} />
<Route path='button' element={<Button/>} />
<Route path='cards' element={<Cards/>} />
<Route path='table' element={<Table/>} />
<Route path='color' element={<Color/>} />
<Route path='border' element={<Border/>} />
<Route path='animation' element={<Animation/>} />
<Route path='other' element={<Other/>} />
<Route path='login' element={<Login/>} />
<Route path='register' element={<Register/>} />
<Route path='forgotpassword' element={<ForgotPassword/>} />
<Route path='errorpage' element={<ErrorPage/>} />
<Route path='blankpage' element={<BlankPage/>} />
<Route path='charts' element={<Charts/>} />
 </Routes>
 
 </BrowserRouter>
 
 </div>
);
}

export default App;


//q. login.js is created
//2.import browserrouter routes and route and write wrouth path for login
///3.link css files