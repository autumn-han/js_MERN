import React from 'react';
import {useParams} from 'react-router-dom';

const Integer = (props) => {
    const {num} = useParams();
    return (
        <div>
            <h1>The number is: {num}</h1>
        </div>
    )
}

export default Integer;