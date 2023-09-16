import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Cell } from '../Components/Cell';

export function Bracket({ answers }) {
    const navigate = useNavigate();
    const [ bracketSize, setBracketSize ] = useState(0);
    const [ players, setPlayers ] = useState({});
    const [ editMode, setEditMode ] = useState(false);
    const [ title, setTitle ] = useState("Test Name");

    useEffect(() => {
        if(answers.length == 0){
            navigate("/");
        } else {
            console.log(answers[0][1]);
            setBracketSize(answers[0][1]);
        }
    }, []);
    return (
    <div id="bracket">
        <div class="bracket_header">{title}</div>
        <div class="bracket_container">
            <div style={{display: "grid", }}>
                {Array.from({length: bracketSize}, (_, i) => <Cell key={i} id={i} setPlayers={setPlayers}/>)}
            </div>
        </div>
    </div>
    )
}
