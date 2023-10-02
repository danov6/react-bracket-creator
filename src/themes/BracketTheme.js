import { createTheme } from '@g-loot/react-tournament-brackets';

const BracketTheme = createTheme({
    textColor: { main: '#000000', highlighted: '#000', dark: '#000' },
    matchBackground: { wonColor: '#daebf9', lostColor: '#fff' },
    score: {
      background: { wonColor: '#87b2c4', lostColor: '#87b2c4' },
      text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
    },
    border: {
      color: '#000',
      highlightedColor: '#000',
    },
    roundHeader: { backgroundColor: '#fff', fontColor: '#fff' },
    connectorColor: '#000',
    connectorColorHighlight: '#000'
  });

export default BracketTheme;
