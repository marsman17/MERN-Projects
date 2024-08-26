import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouters;
