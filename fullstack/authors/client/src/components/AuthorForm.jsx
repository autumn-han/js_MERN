import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const cancelOut = (e) => {
        navigate('/');
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName(initialName);
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Name:</label>
                <input type="text" value={name} />
                <button onClick={cancelOut}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default AuthorForm;