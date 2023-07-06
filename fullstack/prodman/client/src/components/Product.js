import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://localhost:8000/api', {
            title: title,
            price: price,
            desc: desc
        })
            .then(res => console.log(res.data))
            .catch(err => console.log("Something went wrong"))
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={(e) => setDesc(e.target.value)}/>
            </p>
        </form>
    )
};

export default ProductForm;