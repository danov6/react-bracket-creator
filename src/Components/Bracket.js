import { useContext } from 'react';
import { Round } from './Round';
import BracketContext from '../context/BracketContext';

import { Match } from './Match';
import MatchData from '../data/MatchData';
import BracketTheme from '../themes/BracketTheme';

//3rd party lib
import { SingleEliminationBracket } from '@g-loot/react-tournament-brackets';

export function Bracket({ bracketSettings }) {
    const rounds = {2: 1, 4: 2, 8: 3, 16: 4, 32: 5, 64: 6};
    const bracketSize = bracketSettings[0][1];
    const numSeeds = bracketSettings[1][1];
    const numColumns = rounds[bracketSize] + 1;

    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            {/* {Array.from({length: numColumns}, (_, i) => 
                <Round 
                    key={i} 
                    bracketSize={bracketSize} 
                    round={1 + i} 
                    numColumns={numColumns}
                    numSeeds={numSeeds}
                />
            )} */}
            <SingleEliminationBracket
                matches={MatchData}
                matchComponent={Match}
                theme={BracketTheme}
            />
        </div>
    )
}
