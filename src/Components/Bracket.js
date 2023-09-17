import React from 'react'
import { Round } from './Round';

export function Bracket({ setPlayers, bracketSize }) {
    const rounds = {2: 1, 4: 2, 8: 3, 16: 4, 32: 5, 64: 6};
    const numColumns = rounds[bracketSize] + 1;
    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            {Array.from({length: numColumns}, (_, i) => <Round key={i} bracketSize={bracketSize} round={1 + i} setPlayers={setPlayers} numColumns={numColumns}/>)}
        </div>
    )
}
