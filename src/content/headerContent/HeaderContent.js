import React from "react";
import './HeaderContent.css'

class HeaderContent extends React.Component{
    render(){
        return(
            <ul className="weekdays">
                <li>Lundi</li>
                <li>Mardi</li>
                <li>Mercredi</li>
                <li>Jeudi</li>
                <li>Vendredi</li>
                <li>Samedi</li>
                <li>Dimanche</li>
            </ul>
        )
    }
}

export default HeaderContent;