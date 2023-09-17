import React, { useState, useEffect } from 'react';
import QuestionData from '../data/QuestionData';
import { Finished } from '../Components/Finished';
import { Questionnaire } from '../Components/Questionnaire';

export function HomePage({ configs, setConfigs }) {
  const [ page, setPage ] = useState(0);
  const handleConfigs = (ans) => {
    setConfigs([
        ...configs,
        ans
    ]);
    setPage(prev => prev + 1);
  };
  const handlePage = (p) => {
    setPage(prev => prev - 1);
    const index = p - 1; // undo previous answer
    setConfigs(prev => prev.filter((_,i) => {
        return i !== index;
    }));
  };
  const startOver = () => {
      setPage(0);
      setConfigs([]);
  };
  return (
    <div id="home">
        <h1>Bracket Generator</h1>
        <div className="container">
            {QuestionData[page] ? 
                <Questionnaire 
                handleConfigs={handleConfigs}
                handlePage={handlePage}
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
<Questionnaire />