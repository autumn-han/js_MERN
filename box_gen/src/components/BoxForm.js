import React, { useState } from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    const formHandler = (e) => {
        e.preventDefault();
        const newBox = {color: color, height: "100px", width: "100px", display: "flex", margin: "10px"};
        setBoxes([...boxes, newBox]);
        setColor("");
    };
    return (
        <form onSubmit={ formHandler }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" value={ color } onChange={ (e) => setColor(e.target.value) } />
            <button>Add</button>
        </form>
    );
}

export default BoxForm;