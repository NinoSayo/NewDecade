import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AdminHeader from "./components/Admin/AdminHeader";
import AdminMenu from "./components/Admin/AdminMenu";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminFooter from "./components/Admin/AdminFooter";
import BlogList from "./components/Admin/BlogList";
import CreateBlog from "./components/Admin/CreateBlog";
import AdminContact from "./components/Admin/AdminContact";
import AdminCompose from "./components/Admin/AdminCompose";
import AdminReadMail from "./components/Admin/AdminReadMail";
import AdminCalendar from "./components/Admin/AdminCalendar";
import AdminTable from "./components/Admin/AdminTable";
import LockScreen from "./components/Admin/LockScreen";
import TodoList from "./components/Admin/Todolist";
import Widgets from "./components/Admin/Widgets";
import SignalRLogout from './components/SignalRLogout';
import ForgotPassword from './components/ForgotPassword';
import { AppProvider } from './components/AppContext';
import UserActivityTracker from './components/UserActivityTracker';


function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
      <AppProvider>
        <UserActivityTracker/>
        <Routes>
        <SignalRLogout/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/blogs" element={<BlogList blogs={blogs} />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/contacts" element={<AdminContact />} />
          <Route path="/compose" element={<AdminCompose />} />
          <Route path="/read-mail" element={<AdminReadMail />} />
          <Route path="/calendar" element={<AdminCalendar />} />
          <Route path="/table" element={<AdminTable />} />
          <Route path="/lock" element={<LockScreen />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/widget" element={<Widgets />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </AppProvider>
        
  );
}

export default App;
