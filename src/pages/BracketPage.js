import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Bracket } from '../Components/Bracket';

export function BracketPage({ configs }) {
    const navigate = useNavigate();
    const [ bracketSize, setBracketSize ] = useState(0);
    const [ players, setPlayers ] = useState({});
    const [ editMode, setEditMode ] = useState(false);
    const [ title, setTitle ] = useState("Test Name");

    useEffect(() => {
        if(configs.length == 0){
            navigate("/");
        } else {
            setBracketSize(configs[0][1]);
        }
    }, []);
    return (
    <div id="bracket">
        <div class="bracket_header">{title}</div>
        <div class="bracket_container">
            <Bracket setPlayers={setPlayers} bracketSize={bracketSize}/>
        </div>
    </div>
    )
}
