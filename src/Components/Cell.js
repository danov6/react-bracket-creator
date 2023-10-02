import React from 'react'

export function Cell({ pos, round, numColumns, getSeedNumber }) {
  const fontColor = round == 1 && getSeedNumber(pos) != "" ? "#ff2525": "#000";
  let cellPlaceholder = (round === 1) ? "Player #" + (pos + 1) : "";
  if(cellPlaceholder != "" && getSeedNumber(pos) != "") cellPlaceholder = "Seed #" + getSeedNumber(pos);
  return (
    <div className="cell-container" style={{color: fontColor}}>
      <input 
        type="text" 
        className="cell" 
        style={
            { 
              color: fontColor,
              borderBottom: '1px solid #000', 
              borderLeft: "0px solid #000", 
              borderTop: '0px solid #000', 
              borderRight: (pos % 2 !== 0) ? "1px solid #000" : "none",
              width: (80 / numColumns) + "vw",
              maxWidth: "20vw",
              paddingLeft: 5,
              flexGrow: 0
            }} 
        placeholder={cellPlaceholder} 
      />
      {round == 1 && getSeedNumber(pos) != "" ? <div className="cell-seed">{"(" + getSeedNumber(pos) + ")"}</div> : ""}
    </div>
  )
}
