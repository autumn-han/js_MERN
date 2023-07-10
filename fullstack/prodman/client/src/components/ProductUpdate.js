import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductUpdate = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDesc(res.data.desc);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/products/" + id, {
        title: title,
        price: price,
        desc: desc,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={updateHandler}>
        <p>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
