import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

function Switch() {
  return (
    <div>
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog/>} />
        <Route path="/:category/:id" element={<Detail/>} />
        <Route path="/:category" element={<Catalog/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default Switch;
