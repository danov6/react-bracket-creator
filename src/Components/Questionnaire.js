import React from 'react'

export function Questionnaire({ handleConfigs, prevPage, Question, page}) {
    
    return (
    <>
        {page !== 0 && <button onClick={() => prevPage(page)} className="back">&larr; Prev</button>}
        <h3>{Question[page].question}</h3>
        {Question[page].answers.map((a, key) => {
            return <button key={key} onClick={() => handleConfigs([Question[page].question, a])} className="answers">{a}</button>
        })}
    </>
  )
}
