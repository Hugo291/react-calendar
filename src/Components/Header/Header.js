import React from "react";
import './Header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="month">
                <ul className="list-btn">
                    <li className="btn-p-n prev">❮</li>
                    <li className="btn-p-n next">❯</li>
                    <li>
                        <span className="monthText">Avril</span><br/>
                        <span className="yearText">2018</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;