import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const removeFromDom = (productID) => {
    setProducts(products.filter((product) => product._id != productID));
  };
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
