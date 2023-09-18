import React from 'react'

export function Cell({ id, numColumns, round }) {
  return (
    <input 
    type="text" 
    className="cell" 
    style={
        {borderBottom: '1px solid #000', 
            borderLeft: "0px solid #000", 
            borderTop: '0px solid #000', 
            borderRight: (id % 2 !== 0) ? "1px solid #000" : "none",
            width: (80 / numColumns) + "vw",
            maxWidth: "20vw",
            paddingLeft: 5,
            flexGrow: 0
        }} 
    placeholder={(round === 1) ? "Player #" + (id + 1) : ""} 
    />
  )
}
