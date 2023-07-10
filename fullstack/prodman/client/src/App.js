import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/ProductDetail";
import ProductUpdate from "./components/ProductUpdate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/products" />} path="/" />
          <Route element={<Main />} path="/products" />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<ProductUpdate />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
