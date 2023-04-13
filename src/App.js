import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';

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
    <Routes>
      <Route exact path="/" element={<PokemonComponent />} />
      <Route exact path="/pokemons" element={ <PokemonList />} />
    </Routes>
    </div>
    
  );
}

export default App;
