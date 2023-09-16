import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Bracket } from './pages/Bracket';
import { Navbar } from './Components/Navbar';

function App() {
  const [ answers, setAnswers ] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home answers={answers} setAnswers={setAnswers} />} />
        <Route path="/bracket" element={<Bracket answers={answers} />} />
      </Routes>
    </>
  );
}

export default App;
