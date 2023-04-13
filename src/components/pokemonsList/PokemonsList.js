import React, {useEffect} from "react";
import { usePokemonsStore } from "../../store/usePokemonsStore";

const PokemonList = () => {
    const {pokemons , getPokemons} = usePokemonsStore()
    useEffect(() => {
        getPokemons();
    }, []);

    console.log(pokemons);

    return(
        <></>
    )
}

export default PokemonList;