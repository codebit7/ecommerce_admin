import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ViewProducts from "./Components/ViewProducts";
import CreateProduct from "./Components/CreateProduct";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLayout = () => {
  return (
    <div className="container-fluid admin-dashboard d-flex vh-100 p-0">
      <div className="sidebar d-flex flex-column">
        <Sidebar />
      </div>
      <div className="main-content d-flex flex-column flex-grow-1">
        <div className="navbar border-bottom w-100">
          <Navbar />
        </div>
        <div className="content flex-grow-1 overflow-y-auto p-2">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="view" element={<ViewProducts />} />
          <Route path="create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
