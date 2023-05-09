import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./previewPage.css";
import img from "../../img/pokemon-sign.png";

const PreviewPage = () => {
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    const animatedImage = document.querySelector(".pokemon-sign");

    if (!animatedImage) {
      return;
    }

    let timeout1 = null;
    let timeout2 = null;

    const animateUp = () => {
      if (!mouseOver) {
        animatedImage.style.transform = "translateY(-10px)";
        timeout1 = setTimeout(() => {
          animatedImage.style.transform = "translateY(0)";
          timeout2 = setTimeout(() => {
            animatedImage.style.transform = "translateY(-10px)";
            timeout1 = setTimeout(() => {
              animatedImage.style.transform = "translateY(0)";
            }, 300);
          }, 300);
        }, 300);
      }
    };

    const intervalId = setInterval(animateUp, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [mouseOver]);

  const handleMouseOver = (event) => {
    const animatedImage = event.target;
    animatedImage.style.transform = "translateY(-10px)";
    setMouseOver(true);
  };

  const handleMouseOut = (event) => {
    const animatedImage = event.target;
    animatedImage.style.transform = "translateY(0)";
    setMouseOver(false);
  };

  return (
    <div className="pokemon-container">
      <div className="pokemon">
        <Link to="/pokemons">
          <img
            className="pokemon-sign"
            width="600px"
            alt="pokemon-sign"
            src={img}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Link>
      </div>
    </div>
  );
};

export default PreviewPage;
