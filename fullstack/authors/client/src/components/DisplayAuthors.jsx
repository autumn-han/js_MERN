import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5173/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => console.log(err));
    })
    return (
        <div>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {authors.map((author, index) => {
                    return (
                        // setting table row to have a key property, check this for troubleshooting
                        <tr key={index}>
                            <td>{author.name}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
};

export default DisplayAuthors;
