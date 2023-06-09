import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = (props) => {
    const [person, setPerson] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        }, []);
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    );
};

export default Detail;