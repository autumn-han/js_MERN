import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log("Not able to process GET request"));
    }, []);
    const updateAuthor = (authorParam) => {
        axios.patch('http://localhost:8000/api/authors/' + id + '/edit', authorParam)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.log("Not able to process PATCH request"));
    };
    return (
        <div>
            <h1>Favorite Authors</h1>
            <h3>Edit Author:</h3>
            {loaded && (
                <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
            )}
        </div>
    )
};

export default UpdateAuthor;