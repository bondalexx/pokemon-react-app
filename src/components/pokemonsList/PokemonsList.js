import React, { useState, useEffect } from "react";
import { usePokemonsStore } from "../../store/usePokemonsStore";

import Navbar from "../navbar/Navbar";
import MainContent from "../mainContent/MainContent";

import "./pokemonList.css";

const PokemonList = () => {
  const { getPokemons } = usePokemonsStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const onReturn = () => {
    getPokemons(0);
    setActiveIndex(0);
  };
  return (
    <div className="pokemon-list">
      <Navbar onReturn={onReturn}></Navbar>
      <MainContent
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></MainContent>
    </div>
  );
};

export default PokemonList;
