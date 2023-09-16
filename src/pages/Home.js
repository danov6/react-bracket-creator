import React, { useState } from 'react';
import QuestionData from '../data/QuestionData';
import { Finished } from '../Components/Finished';
import { Questionnaire } from '../Components/Questionnaire';

export function Home({ answers, setAnswers }) {
  const [ page, setPage ] = useState(0);

  const handleAnswers = (ans) => {
    setAnswers([
        ...answers,
        ans
    ]);
    setPage(prev => prev + 1);
  };
  const handlePage = (p) => {
    setPage(prev => prev - 1);
    const index = p - 1; // undo previous answer
    setAnswers(prev => prev.filter((_,i) => {
        return i != index;
    }));
  };
  const startOver = () => {
      setPage(0);
      setAnswers([]);
  };
  return (
    <div id="home">
        <h1>Bracket Generator</h1>
        <div className="container">
            {QuestionData[page] ? 
                <Questionnaire 
                handleAnswers={handleAnswers}
                handlePage={handlePage}
                Question={QuestionData}
                page={page}
                /> : 
                <Finished 
                answers={answers}
                startOver={startOver}
                />
            }
        </div>
    </div>
  )
}
<Questionnaire />