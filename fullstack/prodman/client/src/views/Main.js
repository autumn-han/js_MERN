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
  const removeFromDom = (productID) => {
    axios
      .delete("http://localhost:8000/api/products/" + productID)
      .then((res) => {
        setProducts(products.filter((product) => product._id !== productID));
      })
      .catch((err) => console.log(err));
  };
  const createProduct = (productParam) => {
    axios
      .post("http://localhost:8000/api/products", productParam)
      .then((res) => {
        console.log(res.data);
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialDesc=""
      />
      <ProductList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
