import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

export function Finished({ configs, startOver }) {
    const navigate = useNavigate();
    const goToBracketPage = () => {
        navigate('/bracket');
    };
    return (
        <>
            <h3 className="confirmtitle">Here were your selections. Please confirm before submitting:</h3>
            <table style={{width: '70%'}}>
                <tbody>
                    {configs.map((a, key) => {
                        return (<tr key={key}><td className="que">{a[0]}</td><td className="ans">{a[1]}</td></tr>);
                    })}
                </tbody>
            </table>
            <button onClick={goToBracketPage} className="generate">Generate Bracket</button>
            <button onClick={startOver} className="startover">Start Over</button>
        </>
    )
}
