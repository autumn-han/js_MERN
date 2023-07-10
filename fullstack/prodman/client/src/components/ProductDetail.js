import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteHandler = () => {
    axios.delete("http://localhost:8000/api/products/" + id).then((res) => {
      console.log(res);
      console.log(res.data);
      navigate("/");
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.desc}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Detail;
