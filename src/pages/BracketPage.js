import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Bracket } from '../Components/Bracket';
import { ButtonMenu } from '../Components/ButtonMenu';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function BracketPage({ configs }) {
    const navigate = useNavigate();
    const [ bracketSize, setBracketSize ] = useState(0);
    const [ players, setPlayers ] = useState({});
    const [ title, setTitle ] = useState("");
    const [ bracketSettings, setBracketSettings ] = useLocalStorage('bracket_settings', configs);
    
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    };
    useEffect(() => {
        //save configs in localstorage
        if(configs.length != 0){
            setBracketSettings(configs);
        }
        //if nothing in localstorage go home
        if(bracketSettings.length == 0){
            navigate("/");
        }
    }, []);
    return (
    <div id="bracket">
        <input type="text" className="bracket_header" placeholder="Tournament Title" onChange={handleTitleChange} value={title} />
        <div className="bracket_container">
            <Bracket setPlayers={setPlayers} bracketSettings={bracketSettings}/>
        </div>
        <ButtonMenu settings={bracketSettings} />
    </div>
    )
}
