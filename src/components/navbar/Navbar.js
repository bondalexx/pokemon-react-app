import React from "react";

import pokeLogo from '../../img/pokeball.png'
import './navbar.css';

const Navbar = () => {

    return(
        <nav className="nav">
            <div className="logo-menu-section">
                <div className="logo-section">
                    <img className="logo" src={pokeLogo} />
                    <div className="border"></div>
                </div>
                <div className="drop-down-menu-setion">
                </div>
            </div>
           <div className="random-poke-app-name-section">
                <div className="random-pokemon-section">
                  <img className="random-poke-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />  
                </div>
                <div className="app-name-section">
                    <p>PokeApp</p>
                </div>
           </div>
        </nav>
    )
}

export default Navbar;