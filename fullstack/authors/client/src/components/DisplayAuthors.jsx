import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err));
    })
    return (
        <div>
            <h1>Favorite Authors</h1>
            {/* Remember to add Link component here */}
            <h3>We have quotes by:</h3>
            <table className="table">
                <tbody>
                <tr>
                    <td>Author</td>
                    <td>Actions Available</td>
                </tr>
                {authors.map((author, index) => {
                    return (
                        // setting table row to have a key property, check this for troubleshooting
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                {/* put in onclick functions here */}
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default DisplayAuthors;
