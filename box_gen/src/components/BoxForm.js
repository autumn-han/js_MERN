import React, { useState } from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    const {color, setColor} = useState("");
    const formHandler = (e) => {
        e.preventDefault();
        const newBox = {color: color, height: "40px", width: "40px", display: "inline-block"};
        setBoxes([...boxes, newBox]);
    };
    return (
        <form onSubmit={ formHandler }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" value={ color } onChange={ setColor(e.target.value) } />
            <button>Add</button>
        </form>
    );
}

export default BoxForm;