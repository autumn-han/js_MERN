import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaHome from '../components/PizzaHome';

const Main = () => {
    const [pizzas, setPizzas] = useState([]);
    const removeFromDom = (pizzaID) => {
        setPizzas(pizzas.filter(pizza => pizza._id !== pizzaID));
    };
    const deletePizza = (pizzaID) => {
        axios.delete('http://localhost:8000/api/pizzas/' + pizzaID)
            .then((res) => {
                removeFromDom(pizzaID)
            })
            .catch((err) => console.log("Unable to process DELETE request"));
    };
    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas')
            .then((res) => {
                console.log(res.data);
                setPizzas(res.data);
            })
            .catch((err) => console.log("Unable to process GET request"));
    });
    return (
        <div>
            <PizzaHome pizzas={pizzas} deletePizza={deletePizza} />
        </div>
    )
};

export default Main;