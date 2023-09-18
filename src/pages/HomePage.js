import React, { useState, useEffect } from 'react';
import QuestionData from '../data/QuestionData';
import { Finished } from '../Components/Finished';
import { Questionnaire } from '../Components/Questionnaire';

export function HomePage({ configs, setConfigs }) {
  const [ page, setPage ] = useState(0);
  //Handle configs
  const handleConfigs = (config) => {
    setConfigs([ ...configs, config]);
    setPage(prev => prev + 1);
  };
  //Handle page
  const prevPage = (p) => {
    setPage(prev => prev - 1);
    const index = p - 1; // undo previous answer
    setConfigs(prev => prev.filter((_,i) => { return i !== index; }));
  };
  //Start over
  const startOver = () => {
      setPage(0);
      setConfigs([]);
  };
  //Reset all previous settings
  useEffect(() => {
    localStorage.removeItem('bracket_settings');
    setConfigs([]);
  }, [])
  return (
    <div id="home">
        <h1>Bracket Maker</h1>
        <div className="container">
            {QuestionData[page] ? 
                <Questionnaire 
                configs={configs}
                handleConfigs={handleConfigs}
                prevPage={prevPage}
                Question={QuestionData}
                page={page}
                /> : 
                <Finished 
                configs={configs}
                startOver={startOver}
                />
            }
        </div>
    </div>
  )
}
