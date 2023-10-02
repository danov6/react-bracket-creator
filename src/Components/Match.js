import React from 'react'

export function Match({
    match,
    onMatchClick,
    onPartyClick,
    onMouseEnter,
    onMouseLeave,
    topParty,
    bottomParty,
    topWon,
    bottomWon,
    topHovered,
    bottomHovered,
    topText,
    bottomText,
    connectorColor,
    computedStyles,
    teamNameFallback,
    resultFallback,
  }) {
  return (
    <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#000',
        width: '100%',
        height: '100%',
        }}
    >
        <div onMouseEnter={() => onMouseEnter(topParty.id)} style={{ display: 'flex'}}>
            <div>{topParty.name}</div>
            <div></div>
        </div>
        <div style={{ height: '1px', width: '100%', background: '#000' }} />
        <div onMouseEnter={() => onMouseEnter(bottomParty.id)} style={{ display: 'flex' }} >
            <div>{bottomParty.name}</div>
            <div></div>
        </div>
    </div>
  )
}
