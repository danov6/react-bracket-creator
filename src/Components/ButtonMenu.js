import React from 'react'
import { useNavigate } from "react-router-dom";

export function ButtonMenu() {
    const navigate = useNavigate();
    const handlePrint = () => {
        var css = '@page { size: landscape; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'print';

        if (style.styleSheet){
        style.styleSheet.cssText = css;
        } else {
        style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);

        window.print();
    };
    const toHomePage = () => {
        //Back to home page
        navigate('/');
    };
    return (
        <div className="button_menu">
            <button className="print_button" onClick={handlePrint} >Print Bracket</button>
            <button className="startover_button" onClick={toHomePage} >Start Over</button>
        </div>
    )
}
