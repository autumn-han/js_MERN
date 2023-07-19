import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PizzaForm = (props) => {
    const { onSubmitProp, errors } = props;
    const [pizzaType, setPizzaType] = useState("");
    const [size, setSize] = useState("");
    const [status, setStatus] = useState(false);
    const [note, setNote] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ pizzaType, size, status, note });
    };
    return (
        <div className='container d-flex flex-column align-items-center border p-3 m-3 bg-secondary bg-gradient rounded-3 text-white'>
            <h1>{size} {pizzaType} Pizza</h1>
            <Link to={'/'}>Go Back Home</Link>
            <form className='form' onSubmit={onSubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <div>
                    <label className='form-label fw-bold' for="pizzaType">Choose Pizza</label>
                    <select className='form-control' name="pizzaType" onChange={(e) => setPizzaType(e.target.value)}>
                        <option value="Pepperoni">Pepperoni</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Sausage">Sausage</option>
                        <option value="Marherita">Margherita</option>
                        <option value="Hawaiian">Hawaiian</option>
                        <option value="Veggie">Veggie</option>
                    </select>
                </div>
                <div>
                    <label className='form-label fw-bold' for="size">Sizes</label>
                    <select className='form-control' name="size" onChange={(e) => setSize(e.target.value)}>
                        <option value="Single">Single</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div>
                    <label className='form-label fw-bold' for="note">Notes</label>
                    <textarea className='form-control' name="note" onChange={(e) => setNote(e.target.value)} />
                </div>
                <button className='btn btn-success mt-5'>Order Now</button>
            </form>
        </div>
    )
};

export default PizzaForm;