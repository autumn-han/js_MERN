import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const ProductUpdate = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateProduct = (productParam) => {
    axios
      .patch("http://localhost:8000/api/products/" + id, productParam)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update Product</h1>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDesc={product.desc}
          />
          <DeleteButton
            productID={product._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  );
};

export default ProductUpdate;
