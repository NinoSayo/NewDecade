import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();

    const Logout = () =>{
        navigate('/logout');
    }
    return(
        <div>
        <h1> This is home page</h1>
        <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Home;