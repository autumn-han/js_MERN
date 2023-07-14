import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    const { errors, initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();
    const cancelOut = (e) => {
        navigate('/');
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button onClick={cancelOut}>Cancel</button>
                <button type="submit">Submit</button>
            </form>
            <Link to={'/'}>Home</Link>
        </div>
    )
};

export default AuthorForm;