import React from 'react';
import {useParams} from 'react-router-dom';

const String = (props) => {
    const {string} = useParams();
    return (
        <div>
            <h1>The word is: {string}</h1>
        </div>
    )
}

export default String;