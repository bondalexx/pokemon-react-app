import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './previewPage.css'
import img from '../../img/pokemon-sign.png'

const PreviewPage = () => {
  
  function moveUp() {
    const animatedImage = document.getElementsByClassName('pokemon-sign')[0];
  if (animatedImage) {
    animatedImage.style.transform = 'translateY(-10px)';
    setTimeout(function() {
      animatedImage.style.transform = 'translateY(0)';
      setTimeout(function() {
        animatedImage.style.transform = 'translateY(-10px)';
        setTimeout(function() {
          animatedImage.style.transform = 'translateY(0)';
        }, 300)
      }, 300);
    }, 300);
  }
  }
  
  setInterval(moveUp, 5000);

  return (
    <div className='pokemon-container'>

  <div className='pokemon'>
    <Link to="/pokemons">
     <img className='pokemon-sign' width="600px" alt='pokemon-sign' src={img} />
    </Link>
  </div>
    </div>
  );
};

export default PreviewPage;