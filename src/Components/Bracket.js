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

    const generateMatches = () => {
        // [{
        //     "id": 1,
        //     "nextMatchId": 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        //     "participants": [
        //         {
        //         "name": "Nolan Comicossy"
        //         },
        //         {
        //         "name": "bye"
        //         }
        //     ]
        // }]


    };

    return (
        <div style={{display: 'flex', flexDirection: "row"}}>
            <SingleEliminationBracket
                matches={MatchData}
                matchComponent={Match}
                theme={BracketTheme}
            />
        </div>
    )
}
