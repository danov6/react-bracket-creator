import React from 'react'
import { Cell } from './Cell';

export function Round({ round, bracketSize, setPlayers, numColumns, numSeeds }) {
    const numPlayers = bracketSize / (Math.pow(2, (round - 1)));
    const getSeedNumber = pos => {
        //seed placement
        const list = [0, (bracketSize - 1), ((bracketSize / 2)), ((bracketSize / 2) - 2)];
        let seedNum = "";
        list.forEach((n, i) => {
            if(n == pos && (i+1) <= numSeeds){
                seedNum = (i+1);
            }
        }); 
        return seedNum;
    };
    return (
        <div className="round-wrapper" style={{ 
            justifyContent: (round === 2 && bracketSize == 32) ? "space-between": "space-around",
            }}>
            {Array.from({length: numPlayers}, (_, i) => 
            <Cell 
                key={i} 
                pos={i} 
                round={round} 
                setPlayers={setPlayers} 
                numColumns={numColumns}
                getSeedNumber={getSeedNumber}
                />
            )}
        </div>
    );
}
