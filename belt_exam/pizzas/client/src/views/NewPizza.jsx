import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PizzaForm from '../components/PizzaForm';

const NewPizza = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const createPizza = (pizzaParam) => {
        axios.post('http://localhost:8000/api/pizzas', pizzaParam)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    };
    return (
        <div>
            <PizzaForm onSubmitProp={createPizza} errors={errors} />
        </div>
    )
};

export default NewPizza;