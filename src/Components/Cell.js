import React from 'react'

export function Cell({ id }) {
    console.log(id)
  return (
    <div className="cell" style={
        {width: '18vw', 
            borderBottom: '1px solid #000', 
            borderRight: (id % 2 != 0) ? "1px solid #000" : "none"
        }}>
      Test
    </div>
  )
}
