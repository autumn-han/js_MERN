import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const createAuthor = (authorParam) => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/');
            })
            .catch(err => {
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
            <h1>Favorite Authors</h1>
            <h3>Add a New Author:</h3>
            <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors} />
        </div>
    )
};

export default NewAuthor;