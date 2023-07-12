import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
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
  const removeFromDom = (productID) => {
    setProducts(products.filter((product) => product._id !== productID));
  };
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <DeleteButton
              productID={product._id}
              successCallBack={() => removeFromDom(product._id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
