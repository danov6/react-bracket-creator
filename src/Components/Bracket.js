import React from 'react'
import { Round } from './Round';

export function Bracket({ setPlayers, bracketSettings }) {
    const rounds = {2: 1, 4: 2, 8: 3, 16: 4, 32: 5, 64: 6};
    const bracketSize = bracketSettings[0][1];
    const numSeeds = bracketSettings[1][1];
    const numColumns = rounds[bracketSize] + 1;
    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            {Array.from({length: numColumns}, (_, i) => 
                <Round 
                    key={i} 
                    bracketSize={bracketSize} 
                    round={1 + i} 
                    setPlayers={setPlayers} 
                    numColumns={numColumns}
                    numSeeds={numSeeds}
                />
            )}
        </div>
    )
}
