import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './Pokemon.Component.css'
import img from '../../img/pokemon-sign.png'

const PokemonComponent = () => {
  return (
    <div className='pokemon-container'>

  <div className='pokemon'>
    <Link to="/pokemons">
     <img className='pokemon-sign' width="600px" alt='pokemon-sign' src={img}/>
    </Link>
  </div>
    </div>
  );
};
export default PokemonComponent;