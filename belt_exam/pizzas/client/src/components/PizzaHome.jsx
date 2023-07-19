import React from 'react';
import { Link } from 'react-router-dom';

const PizzaHome = (props) => {
    const { pizzas, deletePizza } = props;
    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className='container d-flex flex-column align-items-center w-50 p-3 m-3 bg-secondary bg-gradient rounded-3 text-white'>
                <h1 className='mb-3'>Pizza Orders</h1>
                <h3 className='mb-3'>Find stores in your area!</h3>
                <Link to={'/new'}><button className='btn btn-success'>Order A Pizza</button></Link>
            </div>
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Pizza Type</th>
                            <th>Size</th>
                            <th>Delivery Status</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzas.map((pizza, index) => {
                            return (
                                <tr key={index}>
                                    <td>{pizza.createdAt}</td>
                                    <td>{pizza.pizzaType}</td>
                                    <td>{pizza.size}</td>
                                    {pizza.status == false ? 
                                        <td>Not Delivered</td> : <td>Delivered</td>
                                    }
                                    <td>{pizza.note}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={(e) => deletePizza(pizza._id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default PizzaHome;