import React from "react";
import './Navbar.css'
import reactLogo from '../../images/logo.png'

function Navbar(){
    return(
        <nav className="navbar">
            <img className="nav--icon" src={reactLogo} alt="logo"></img>
            <h3 className="nav--title-left">React Facts</h3>
            
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;