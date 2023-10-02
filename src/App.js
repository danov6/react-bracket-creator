import './App.css';
import { useState, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BracketPage } from './pages/BracketPage';
import { AboutPage } from './pages/AboutPage';
import { Navbar } from './Components/Navbar';
import BracketContext from './context/BracketContext';

const initalState = {
  bracketSize: 0,
  numSeeds: 0,
  numByes: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_BRACKET_SIZE':
      const newSize = action.value;
      return {...state, bracketSize: newSize}
    case 'SET_NUM_SEEDS':
      const newNumSeeds = action.value;
      return {...state, numSeeds: newNumSeeds}
    case 'SET_NUM_BYES':
      const newNumByes = action.value;
      return {...state, numByes: newNumByes}
    default:
      return state
  }
}

function App() {
  //Bracket settings [Ex: Bracket Size, # Seeded players  etc.]
  const [ configs, setConfigs ] = useState([]);
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <BracketContext.Provider value={[state, dispatch]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage configs={configs} setConfigs={setConfigs} />} />
        <Route path="/bracket" element={<BracketPage configs={configs} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BracketContext.Provider>
  );
}

export default App;
