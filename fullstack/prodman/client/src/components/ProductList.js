import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const { removeFromDom, products, setProducts } = props;
  const deleteProduct = (productID) => {
    axios
      .delete("http://localhost:8000/api/products/" + productID)
      .then((res) => {
        removeFromDom(productID);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
