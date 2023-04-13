import React from 'react';

import './Pokemon.Component.css'
import img from '../../img/output-onlinepngtools.png'
import click from '../../img/click.png';
import chevronDown from '../../img/chevron-down.png'

const PokemonComponent = () => {
  return (
    <div className='pokemon'>
      <div className='cont'>
        <img src={click} />
        <img className='chevron-down' src={chevronDown} />
      </div>
      <div>
        <img className='pokemon-sign' width="600px" alt='pokemon-sign' src={img}/>
      </div>
    </div>
  );
};
export default PokemonComponent;