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
  <h1>Forms</h1>
  <div className="card-container">
    <div className="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
      <p>Bulbasaur</p>
    </div>
    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
    <div className="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="ivysaur" />
      <p>Ivysaur</p>
    </div>
    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
    <div className="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="venusaur" />
      <p>Venusaur</p>
    </div>
  </div>
</section>

            <section className="description-section main-section">
                <h1>Base stats</h1>
                <div className="card-container">
                    <div className="cards">
                        <p>HP: 45</p>
                        <p>Attack: 49</p>
                        <p>Defense: 49</p>
                        <p>Special-attack: 65</p>
                        <p>Special-defense: 65</p>
                        <p>Speed: 45</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                    <div className="cards">
                        <p>HP: 45</p>
                        <p>Attack: 49</p>
                        <p>Defense: 49</p>
                        <p>Special-attack: 65</p>
                        <p>Special-defense: 65</p>
                        <p>Speed: 45</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                    <div className="cards">
                        <p>HP: 45</p>
                        <p>Attack: 49</p>
                        <p>Defense: 49</p>
                        <p>Special-attack: 65</p>
                        <p>Special-defense: 65</p>
                        <p>Speed: 45</p>
                    </div>
                </div>
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
    </main>
)
}

export default MainContent;