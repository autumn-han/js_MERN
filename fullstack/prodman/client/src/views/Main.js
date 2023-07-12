import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <ProductList
        products={products}
        setProducts={setProducts}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};

export default Main;
