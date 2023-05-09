import React, { useEffect, useState, useRef } from "react";
import { usePokemonsStore } from "../../store/usePokemonsStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import pokeLogo from "../../img/pokeball.png";
import "./navbar.css";

const Navbar = ({ onReturn }) => {
  const { getSinglePokemon, error, getPokemons } = usePokemonsStore();
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleClick = () => {
    if (inputValue.length > 0) {
      getSinglePokemon(inputValue.toLocaleLowerCase());
    }
    if (error === "pokemon was not found") {
      setPlaceholder(error);
    } else {
      setPlaceholder("write a pokemon name");
    }
  };

  const onLogoClick = () => {
    onReturn();
  };

  return (
    <nav className="nav">
      <div className="logo-menu-section">
        <div className="logo-section">
          <img className="logo" onClick={onLogoClick} src={pokeLogo} />
          <div className="border"></div>
        </div>
        <div className="drop-down-menu-setion">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          <input
            className="search-input"
            onChange={onHandleChange}
            placeholder={placeholder}
          ></input>
          <button className="submit-button" onClick={onHandleClick}>
            Submit
          </button>
        </div>
      </div>
      <div className="random-poke-app-name-section">
        <div className="random-pokemon-section"></div>
        <div className="app-name-section">
          <p>PokeApp</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
