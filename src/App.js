import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BracketPage } from './pages/BracketPage';
import { Navbar } from './Components/Navbar';

function App() {
  //Bracket settings [Ex: Bracket Size, # Seeded players  etc.]
  const [ configs, setConfigs ] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage configs={configs} setConfigs={setConfigs} />} />
        <Route path="/bracket" element={<BracketPage configs={configs} />} />
      </Routes>
    </>
  );
}

export default App;
