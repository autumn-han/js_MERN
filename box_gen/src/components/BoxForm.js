import React, { useState } from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    const [int, setInt] = useState(0);
    const formHandler = (e) => {
        e.preventDefault();
        const newBox = {color: color, height: int + "px", width: int + "px"};
        setBoxes([...boxes, newBox]);
        setColor("");
    };
    return (
        <form onSubmit={ formHandler }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" value={ color } onChange={ (e) => setColor(e.target.value) } />
            <label htmlFor="dimension">Dimension: </label>
            <input type="number" name="dimension" value={ int } onChange={ (e) => setInt(e.target.value) } />
            <button>Add</button>
        </form>
    );
}

export default BoxForm;