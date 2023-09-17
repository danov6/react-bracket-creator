import React from 'react'

export function Cell({ id, numColumns }) {
  return (
    <div>
      <input 
      type="text" 
      className="cell" 
      style={
          {borderBottom: '1px solid #000', 
              borderLeft: '0px solid #000', 
              borderTop: '0px solid #000', 
              borderRight: (id % 2 !== 0) ? "1px solid #000" : "none",
              width: (80 / numColumns) + "vw",
              maxWidth: "20vw",
              paddingLeft: 5
          }} 
      placeholder={"Player #" + (id + 1)} 
      />
    </div>
  )
}
