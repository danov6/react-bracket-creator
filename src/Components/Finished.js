import React from 'react';
import { Link } from 'react-router-dom'

export function Finished({ configs, startOver }) {
    return (
        <>
            <h3 className="confirmtitle">Here were your selections. Please confirm before submitting:</h3>
            <table>
                <tbody>
                    {configs.map((a, key) => {
                        return (<tr key={key}><td className="que">{a[0]}</td><td className="ans">{a[1]}</td></tr>);
                    })}
                </tbody>
            </table>
            <Link to="/bracket" className="generate">Generate Bracket</Link>
            <button onClick={startOver} className="startover">Start Over</button>
        </>
    )
}
