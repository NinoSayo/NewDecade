import React , { useState, useEffect } from "react";
import { Link, Route , Routes} from 'react-router-dom';
import axios from 'axios';

import AdminHeader from "./components/Admin/AdminHeader";
import AdminMenu from "./components/Admin/AdminMenu";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminFooter from "./components/Admin/AdminFooter";
import BlogList from "./components/Admin/BlogList";
import CreateBlog from "./components/Admin/CreateBlog";


function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
      const response = await axios.get('https://localhost:7287/api/blog/');
      setBlogs(response.data)
    }catch(error){
      console.log('Error fethcing data', error);
    }finally{
      setLoading(false)
    }
  };
  fetchData();
  }, []);

  const handleCreate = async(newBlog)=>{
    try{
      const response = await axios.post('https://localhost:7287/api/blog/', newBlog);   
     }catch(error){
      console.error("error create student", error)
     }
  }

  const handleDelete = async(id)=>{
    try{
      const response = await axios.post(`https://localhost:7287/api/blog/${id}`);   
      setBlogs(blogs.filter(b => b.id != id));
     }catch(error){
      console.error("error create student", error)
     }
  }

  return (
    <div className="wrapper">
     <AdminHeader/>
     <AdminMenu/>
     <AdminDashboard/>
     <BlogList/>
     <AdminFooter/>
   </div>
  );
}

export default App;
