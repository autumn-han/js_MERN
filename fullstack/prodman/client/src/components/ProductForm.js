import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const { products, setProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title: title,
        price: price,
        desc: desc,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h3>Product Manager</h3>
      <p>
        <label>Title</label>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label>Price</label>
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <p>
        <label>Description</label>
        <input
          value={desc}
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
      </p>
      <input type="submit" value="Create" />
    </form>
  );
};

export default ProductForm;
