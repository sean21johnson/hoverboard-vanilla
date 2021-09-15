import React from "react";
import Tile from "./Tile";

function TileBoard({ squares }) {
	/*
        Need a function that will populate an array with the # of squares passed down
    */

    const buildSquares = () => {
        const squareArr = [];

        for (let i = 0; i < squares; i++) {
            squareArr.push('')
        }

        return squareArr;
    }

    const grid = buildSquares();

    
    
    return (
        <div className="container">
            {grid.map((tile, i) => {
                return <Tile key={i}/>
            })}

        </div>
    )
}

export default TileBoard;
