import React , {  } from "react";


import AdminHeader from "./components/Admin/AdminHeader";
import AdminMenu from "./components/Admin/AdminMenu";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminFooter from "./components/Admin/AdminFooter";

function App() {
  return (
    <div className="wrapper">
     <AdminHeader/>
     <AdminMenu/>
     <AdminDashboard/>
     <AdminFooter/>
   </div>
  );
}

export default App;
