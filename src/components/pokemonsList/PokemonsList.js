import React, {useEffect} from "react";
import { usePokemonsStore } from "../../store/usePokemonsStore";

import Navbar from "../navbar/Navbar";
import MainContent from "../mainContent/MainContent";

import './pokemonList.css'

const PokemonList = () => {
    const {pokemons , getPokemons} = usePokemonsStore()
    useEffect(() => {
        getPokemons();
    }, []);

    console.log(pokemons);

    return(
        <div className="pokemon-list">
        <Navbar></Navbar>
        <MainContent></MainContent>
        </div>
    )
}

export default PokemonList;