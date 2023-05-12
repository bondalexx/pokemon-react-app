import { create } from "zustand";

export const usePokemonsStore = create((set, getState) => ({
  pokemons: [],
  loading: false,
  error: null,
  getPokemons: async (offset) => {
    set({ loading: true });

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
      );
      const data = await response.json();
      const pokemonPromises = data.results.map(async (item) => {
        const res = await fetch(item.url);
        return res.json();
      });

      const resolvedPokemons = await Promise.all(pokemonPromises);
      const currentState = getState();
      const { pokemons } = currentState;

      const uniquePokemons = resolvedPokemons.filter(
        (pokemon) => !pokemons.some((p) => p.id === pokemon.id)
      );
      if (pokemons.length === 1) {
        pokemons.shift();
      }
      set((state) => ({ pokemons: [...state.pokemons, ...uniquePokemons] }));
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  getSinglePokemon: async (name) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      set({ pokemons: [data] });
    } catch (error) {
      set({ error: "pokemon was not found" });
    } finally {
      set({ loading: false });
    }
  },
}));
