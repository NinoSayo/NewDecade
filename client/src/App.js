import React , {  } from "react";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserIndex from './components/User/UserIndex'; // Thay thế bằng đường dẫn thật sự của Index
import UserBlog from './components/User/UserBlog'; // Thay thế bằng đường dẫn thật sự của UserBlog


import Header from "./components/User/Header";
import Navbar from "./components/User/Navbar";
import Footer from "./components/User/Footer";


function App() {
  return (
    <div className="wrapper">
     <Header/>
     <Navbar/>
     <UserIndex/>
     <Footer/>
   </div>
  );
}

export default App;
