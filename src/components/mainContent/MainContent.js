import React, { useEffect, useState } from "react";
import { usePokemonsStore } from "../../store/usePokemonsStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./mainContent.css";

const MainContent = ({ activeIndex, setActiveIndex }) => {
  const { pokemons, getPokemons } = usePokemonsStore();
  const [offset, setOffset] = useState(0);
  const [pokeEnded, setPokeEnded] = useState(false);

  useEffect(() => {
    onRequest(offset);
  }, []);

  const uniquePokemons =
    pokemons.length === 1
      ? pokemons
      : pokemons.reduce((unique, pokemon) => {
          if (!unique.some((p) => p.id === pokemon.id)) {
            unique.push(pokemon);
          }
          return unique;
        }, []);

  const onRequest = (offset) => {
    getPokemons(offset).then(onPokemonsLoaded);
  };

  const onPokemonsLoaded = () => {
    let ended = false;
    if (uniquePokemons.length < 20) {
      ended = true;
    }
    setOffset(offset + 20);
    setActiveIndex(0);
    setPokeEnded(ended);
  };

  const handleRightButton = () => {
    if (uniquePokemons.length > 1) {
      if (activeIndex + 1 <= uniquePokemons.length - 1) {
        setActiveIndex(activeIndex + 1);
        setPokeEnded(false);
      } else {
        onRequest(offset);
      }
    } else {
      setPokeEnded(false);
    }
  };

  const handleLeftButton = () => {
    if (activeIndex - 1 >= 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setPokeEnded(true);
    }
  };

  if (uniquePokemons.length === 1) {
    setActiveIndex(0);
  }

  const items = uniquePokemons.map((poke, i) => {
    return (
      <div
        className="article"
        status={`${i === activeIndex ? "active" : "inactive"}`}
        key={poke.id}
      >
        <section className="img-section main-section">
          <div className="card-container">
            <img
              src={poke.sprites.other["official-artwork"].front_default}
              alt={poke.name}
            />
          </div>
        </section>

        <section className="description-section main-section">
          <div className="stats-container">
            <h1>Base stats</h1>
            <div className="card-container">
              <div className="stats-card">
                <p>HP: {poke.stats[0].base_stat}</p>
                <p>Attack: {poke.stats[1].base_stat}</p>
                <p>Speed: {poke.stats[5].base_stat}</p>
                <p>Defense: {poke.stats[2].base_stat}</p>
                <p>Special-attack: {poke.stats[3].base_stat}</p>
                <p>Special-defense: {poke.stats[4].base_stat}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="title-section main-section">
          <h1 className="poke-name">
            {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          </h1>
          <img src={poke.sprites.front_default} />
        </section>
        <section className="main-nav-section main-section">
          <div
            className={`arrow-container left-arrow ${
              activeIndex === 0 ? "inactive" : ""
            }`}
            onClick={handleLeftButton}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="4x" />
          </div>
          <div
            className={`arrow-container right-arrow ${
              pokemons.length === 1 ? "inactive" : ""
            } `}
            onClick={handleRightButton}
          >
            <FontAwesomeIcon icon={faArrowRight} size="4x" />
          </div>
        </section>
      </div>
    );
  });

  return <main className="main">{items}</main>;
};

export default MainContent;
