import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

import PokemonList from './components/pokemonsList/PokemonsList';
import PokemonComponent from './components/pokemon/PokemonComponent';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <div className="App">
        <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Route exact path="/" element={<PokemonComponent />} />
      <Route exact path="/pokemons" element={ <PokemonList />} />
    </div>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
