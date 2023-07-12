import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const { onSubmitProp, initialTitle, initialPrice, initialDesc } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [desc, setDesc] = useState(initialDesc);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, desc });
    setTitle("");
    setPrice("");
    setDesc("");
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
