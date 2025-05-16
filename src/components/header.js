import React from "react";
import '../index.css';

function Header(){
    return (
        <header>
            <div className="headercomponents">
                <div className="headertitle">SehrGut</div>
                <nav className="headeroptions">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#articles">Articles</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </div>
        </header> 
    )
}

export default Header;