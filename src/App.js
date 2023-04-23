import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';

import PokemonList from './components/pokemonsList/PokemonsList';
import PreviewPage from './components/previewPage/PreviewPage';

import './App.css';

function App() {
  return (
<div className="app">
    <Routes>
      <Route exact path="/" element={<PreviewPage />} />
      <Route exact path="/pokemons" element={<PokemonList />} />
    </Routes>
    </div>
    
  );
}

export default App;
