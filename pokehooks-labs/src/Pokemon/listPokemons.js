import React from 'react';
import Pokemon from './Pokemon';

export const listPokemons = ({ pokemons, onClick, buttonLabel ,idx}) =>
  pokemons.map((pokemon) => (
    <>
    <span>{idx}</span>
    <Pokemon
      pokemon={pokemon}
      onClick={onClick}
      buttonLabel={buttonLabel}
    />
    </>
  ));
