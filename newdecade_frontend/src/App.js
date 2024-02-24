import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Home from "./Components/Users/Home";
import Logout from "./Components/Authentication/Logout";
import Verification from "./Components/Authentication/Verification";

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/verify" element={<Verification/>}/>
      </Routes>
    </Router>
  )
}

export default App;