import React, { useState } from 'react';

function Tile() {

    const [color, setColor] = useState("grey");

    const chooseRandomColor = () => {
        const colors = ['red', 'purple', 'blue', 'orange', 'green']
        const randomIndex = Math.round((colors.length - 1) * Math.random());
        const randomColor = colors[randomIndex];

        setColor(randomColor)
    }

    const removeRandomColor = () => {
        setColor("grey");
    }

    return (
        <div className={`square ${color}`} onMouseEnter={chooseRandomColor} onMouseLeave={removeRandomColor}>

        </div>
    )
}

export default Tile;