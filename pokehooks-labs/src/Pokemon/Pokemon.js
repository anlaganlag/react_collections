import React from "react";

export const Pokemon = ({ pokemon, onClick, buttonLabel }) => (
  pokemon &&<span key={pokemon.name}>
    <td>
     {pokemon.url&& <span>{buttonLabel+pokemon.name}</span>}
    </td>
    <td>
      <button onClick={onClick(pokemon)}>{pokemon.url.split("/")[6]}</button>
    </td>

  </span>
);

export default Pokemon;
