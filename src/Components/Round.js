import React from 'react'
import { Cell } from './Cell';

export function Round({ round, bracketSize, setPlayers, numColumns }) {
    const numPlayers = bracketSize / (Math.pow(2, (round - 1)));
    return (
        <div className="round-wrapper" style={{
            justifyContent: ((round === 2) ? "space-between": "space-around")
        }}>
            {Array.from({length: numPlayers}, (_, i) => <Cell key={i} id={i} round={round} setPlayers={setPlayers} numColumns={numColumns}/>)}
        </div>
    )
}
