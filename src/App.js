import React from 'react';

import PokemonList from './components/pokemonsList/PokemonsList';
import PokemonComponent from './components/pokemon/PokemonComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <PokemonList></PokemonList>
      <PokemonComponent />
    </div>
  );
}

export default App;
