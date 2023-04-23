import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faRotate} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import './mainContent.css';

const MainContent = () => {
return(
    <main className="main">
        <div className="article">
            <section className="img-section main-section">
                <img className="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
                <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                <img className="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"/>
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
                <img className="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"/>
            </section>
            <section className="description-section main-section">
              
            </section>
            <section className="title-section main-section">
                <h1 className="poke-name">
                    Bulbasaur
                </h1>
                <FontAwesomeIcon icon={faRotate} size="4x" />
            </section>
            <section className="main-nav-section main-section">
            <div className="arrow-container left-arrow">
                <FontAwesomeIcon icon={faArrowLeft} size="4x" />
            </div>
            <div className="arrow-container right-arrow">
                <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </div>
                
            </section>
        </div>
        <div className="article">

        </div>
        <div className="article">

        </div>
        <div className="article">

        </div>
    </main>
)
}

export default MainContent;