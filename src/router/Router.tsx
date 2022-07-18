import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import AdManagement from "../pages/AdManagement";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ad" element={<AdManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
