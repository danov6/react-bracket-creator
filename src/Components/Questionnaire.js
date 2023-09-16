import React from 'react'

export function Questionnaire({ handleAnswers, handlePage, Question, page}) {
    return (
    <>
        {page != 0 && <button onClick={() => handlePage(page)} className="back">&larr; Prev</button>}
        <h3>{Question[page].question}</h3>
        {Question[page].answers.map((a, key) => {
            return <button key={key} onClick={() => handleAnswers([Question[page].question, a])} className="answers">{a}</button>
        })}
    </>
  )
}
