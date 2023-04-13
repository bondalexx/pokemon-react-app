import { create } from "zustand";

export const usePokemonsStore = create((set) => ({
  pokemons: [],
  loading: false,
  error: null,
  getPokemons: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      set({ pokemons: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));