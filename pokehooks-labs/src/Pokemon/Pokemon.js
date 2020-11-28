import React from "react";
import "../index.css"

export const Pokemon = ({ pokemon, onClick, buttonLabel }) => (
  pokemon &&<span key={pokemon.name}>
      <button className="list-num-right" onClick={onClick(pokemon)}>{pokemon.url.split("/")[6]} <span>{pokemon.name}</span></button>

  </span>
);

export default Pokemon;
