import React from 'react';
import {useParams} from 'react-router-dom';

const NumOrString = (props) => {
    const {thing, color, backColor} = useParams();
    if(isNaN(thing)) {
        console.log(color)
        return (
            <div style={{color: color, backgroundColor: backColor}}>
                <h1>The word is: {thing}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>The number is: {thing}</h1>
        </div>
    )
}


export default NumOrString;