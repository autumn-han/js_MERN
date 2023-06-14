import React from 'react';

const DisplayBox = ({boxes}) => {
    return (
        <div>
            {boxes.map( (box, index) => {
                return (
                    <div style={{backgroundColor: box.color, height: box.height, width: box.width}} key={index}></div>
                )
            })}
        </div>
    )
}

export default DisplayBox;