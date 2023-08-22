import React, { useState } from "react";
import { usePokemonsStore } from "../../../store/usePokemonsStore";

import Navbar from "../../navbar/Navbar";
import PokemonsList from "../../pokemonsList/PokemonsList";

import "./mainPage.css";

const MainPage = () => {
  const { getPokemons } = usePokemonsStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const updateStatus = () => {
    for (let i = 1; i <= activeIndex; i++) {
      const currentGroup = document.getElementById(`${i}`);
      currentGroup.dataset.status = "unknown";
    }
    const nextGroup = document.getElementById(`${0}`);
    nextGroup.dataset.status = "active";
  };
  const onReturn = () => {
    getPokemons(0);
    updateStatus();
    setActiveIndex(0);
  };

  return (
    <div className="pokemon-list">
      <Navbar onReturn={onReturn}></Navbar>
      <PokemonsList
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></PokemonsList>
    </div>
  );
};

export default MainPage;
