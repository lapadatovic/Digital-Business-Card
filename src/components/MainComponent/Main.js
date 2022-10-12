import React from "react";
import bgLogo from "../../images/react-icon.svg.png"
import './Main.css';

function Main() {
    return(
        <div className="container">
            <h1>
                Fun facts about React
            </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main; 