import React, { useState, useEffect, useContext } from 'react';
import QuestionData from '../data/QuestionData';
import { Finished } from '../Components/Finished';
import { Questionnaire } from '../Components/Questionnaire';
import BracketContext from '../context/BracketContext';

export function HomePage({ configs, setConfigs }) {
  const [ page, setPage ] = useState(0);
  const [ state, dispatch ] = useContext(BracketContext);

  //Handle configs
  const handleConfigs = (config) => {
    setConfigs([ ...configs, config]);
    setPage(prev => prev + 1);

    //Migrating to useReducer in v2
    if(config[0].indexOf('size of the draw') != -1){
      const action1 = { type: 'SET_BRACKET_SIZE', value: config[1] };
      dispatch(action1);
    }
    if(config[0].indexOf('seeded') != -1){
      const action2 = { type: 'SET_NUM_SEEDS', value: config[1] };
      dispatch(action2);
    }
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
    localStorage.removeItem('bracket_title');
    setConfigs([]);
  }, [])
  return (
    <div id="home">
        <h1>Bracket Maker v1.0</h1>
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
